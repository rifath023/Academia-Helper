const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const { pageSize, siteUrl } = require('../lib/blog-config.json');
const posts = require('../blog-posts/index.json');

const root = path.resolve(__dirname, '..');
const exportMode = process.argv.includes('--export');
const failures = [];
const pageCount = Math.ceil(posts.length / pageSize);
const routes = new Set(['/', '/blog/', ...posts.map(post => `/blog/${post.slug}/`)]);
for (let page = 2; page <= pageCount; page++) routes.add(`/blog/page/${page}/`);
const articleRoutes = new Set(posts.map(post => `/blog/${post.slug}/`));
const edges = new Map();

function checkLinks($, route, label) {
  const destinations = new Set();
  $('a[href]').each((_, element) => {
    const href = $(element).attr('href');
    if (!href || href.startsWith('#') || /^(mailto|tel|javascript):/i.test(href)) return;
    if (/\[[A-Z_]+\]/.test(href)) failures.push(`${label}: placeholder link ${href}`);
    let url;
    try { url = new URL(href, `${siteUrl}${route}`); } catch {
      failures.push(`${label}: invalid link ${href}`);
      return;
    }
    if (!['www.academiahelper.com', 'academiahelper.com'].includes(url.hostname)) return;
    if (url.pathname.startsWith('/blog')) {
      if (!routes.has(url.pathname)) failures.push(`${label}: unknown or noncanonical blog link ${href}`);
    }
    if (routes.has(url.pathname)) destinations.add(url.pathname);
  });
  edges.set(route, destinations);
}

function checkHtml(content, route, label) {
  const $ = cheerio.load(content);
  if ($('h1').length !== 1) failures.push(`${label}: expected one H1`);
  if (!$('title').text().trim()) failures.push(`${label}: missing title`);
  if (!$('meta[name="description"]').attr('content')) failures.push(`${label}: missing description`);
  const canonical = $('link[rel="canonical"]');
  if (canonical.length !== 1 || canonical.attr('href') !== `${siteUrl}${route}`) {
    failures.push(`${label}: canonical must be ${siteUrl}${route}`);
  }
  $('meta[name="robots"], meta[name="googlebot"]').each((_, element) => {
    if (/\b(noindex|none)\b/i.test($(element).attr('content') || '')) failures.push(`${label}: indexing is blocked`);
  });
  $('script[type="application/ld+json"]').each((_, element) => {
    try { JSON.parse($(element).text()); } catch { failures.push(`${label}: invalid JSON-LD`); }
  });
  checkLinks($, route, label);
  if (exportMode && (route === '/blog/' || /^\/blog\/page\/\d+\/$/.test(route))) {
    const cards = $('article');
    const number = route === '/blog/' ? 1 : Number(route.split('/')[3]);
    const expected = Math.min(pageSize, posts.length - (number - 1) * pageSize);
    if (cards.length !== expected) failures.push(`${label}: wrong article count`);
    cards.each((_, element) => {
      if (!$(element).find('a[href]').length) failures.push(`${label}: article card has no link`);
    });
    if ($('article img:not([loading="lazy"])').length > 3) failures.push(`${label}: too many eager images`);
  }
}

const base = exportMode ? path.join(root, 'out') : path.join(root, 'public');
const $sitemap = cheerio.load(fs.readFileSync(path.join(base, 'sitemap.xml'), 'utf8'), { xmlMode: true });
const urls = $sitemap('url > loc').map((_, element) => $sitemap(element).text().trim()).get();
if (new Set(urls).size !== urls.length) failures.push('Sitemap has duplicate URLs');
const expectedUrls = new Set([...routes].map(route => `${siteUrl}${route}`));
for (const url of expectedUrls) if (!urls.includes(url)) failures.push(`Sitemap is missing ${url}`);
for (const url of urls) if (!expectedUrls.has(url)) failures.push(`Sitemap contains an unexpected URL: ${url}`);
const robots = fs.readFileSync(path.join(base, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) failures.push('robots.txt has the wrong sitemap address');
if (/^Disallow:\s*\/\s*$/im.test(robots)) failures.push('robots.txt blocks the site');

const sourceFiles = fs.readdirSync(path.join(root, 'blog-posts')).filter(file => file.endsWith('.html'));
if (sourceFiles.length !== posts.length || new Set(posts.map(post => post.slug)).size !== posts.length) failures.push('Article index does not match source files');
if (exportMode) {
  for (const route of routes) {
    const file = path.join(base, route, 'index.html');
    if (!fs.existsSync(file)) { failures.push(`Missing exported page: ${route}`); continue; }
    checkHtml(fs.readFileSync(file, 'utf8'), route, route);
  }
  const seen = new Set(['/']);
  const queue = ['/'];
  while (queue.length) {
    for (const destination of edges.get(queue.shift()) || []) {
      if (!seen.has(destination)) { seen.add(destination); queue.push(destination); }
    }
  }
  for (const route of articleRoutes) if (!seen.has(route)) failures.push(`Article has no crawlable path from the homepage: ${route}`);
} else {
  for (const post of posts) {
    const file = path.join(root, 'blog-posts', `${post.slug}.html`);
    if (!fs.existsSync(file)) { failures.push(`Missing article: ${post.slug}`); continue; }
    checkHtml(fs.readFileSync(file, 'utf8'), `/blog/${post.slug}/`, post.slug);
    if (post.date && !Number.isFinite(Date.parse(post.date))) failures.push(`${post.slug}: invalid publication date`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`SEO checks passed (${exportMode ? 'export' : 'source'}): ${posts.length} articles, ${pageCount} index pages, ${urls.length} sitemap URLs.`);
}
