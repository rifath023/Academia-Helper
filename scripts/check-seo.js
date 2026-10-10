const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const { pageSize, siteUrl } = require('../lib/blog-config.json');
const posts = require('../blog-posts/index.json');

const root = path.resolve(__dirname, '..');
const exportMode = process.argv.includes('--export');
const failures = [];
const pageCount = Math.ceil(posts.length / pageSize);
const serviceRoutes = ['/assignment-help-uk/', '/dissertation-help-uk/', '/coursework-help-uk/', '/services/', '/services/essays/', '/services/reports/', '/services/case-studies/', '/services/reflective-journals/', '/services/literature-reviews/', '/services/presentations/', '/services/problem-sets/', '/services/dissertations-theses/', '/services/annotated-bibliographies/', '/services/group-projects/', '/services/portfolio-eportfolio/'];
let extraRoutes = [];
try {
  const raw = fs.readFileSync(path.join(root, 'lib', 'extra-routes.json'), 'utf8');
  const parsed = JSON.parse(raw);
  if (Array.isArray(parsed)) extraRoutes = parsed.filter((r) => typeof r === 'string' && r.startsWith('/') && r.endsWith('/'));
} catch {
  extraRoutes = [];
}
const routes = new Set(['/', ...serviceRoutes, ...extraRoutes, '/blog/', ...posts.map((post) => `/blog/${post.slug}/`)]);
for (let page = 2; page <= pageCount; page++) routes.add(`/blog/page/${page}/`);
const articleRoutes = new Set(posts.map((post) => `/blog/${post.slug}/`));
// Intentionally excluded from public crawl targets (not required in sitemap/crawl).
const excludedRoutes = new Set(['/404', '/404/']);
const newSlugs = new Set(['convenience-sampling', 'purposive-sampling', 'snowball-sampling', 'stratified-sampling', 'literature-review-example']);
const edges = new Map();
const exportedTitles = new Map();

const LEGACY_PATTERNS = [/0%\s*AI/i, /timely delivery guaranteed/i, /instant response guaranteed/i];

function checkLegacySource() {
  const dirs = ['components', 'pages', 'lib'];
  for (const dir of dirs) {
    const base = path.join(root, dir);
    if (!fs.existsSync(base)) continue;
    const walk = (d) => {
      for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
        const full = path.join(d, entry.name);
        if (entry.isDirectory()) { walk(full); continue; }
        if (!/\.(tsx|ts|js|cjs)$/.test(entry.name)) continue;
        if (entry.name.endsWith('.test.cjs')) continue;
        const content = fs.readFileSync(full, 'utf8');
        const rel = path.relative(root, full);
        for (const pattern of LEGACY_PATTERNS) {
          if (pattern.test(content)) failures.push(`${rel}: legacy unsupported promise (${pattern})`);
        }
        if (/href="#"|href='#'/.test(content)) failures.push(`${rel}: placeholder policy link href="#"`);
      }
    };
    walk(base);
  }
}

function checkLinks($, route, label) {
  const destinations = new Set();
  const slug = route.startsWith('/blog/') ? route.split('/')[2] : null;
  const isLegacyPost = slug && !newSlugs.has(slug);
  $('a[href]').each((_, element) => {
    const href = $(element).attr('href');
    if (!href || /^(mailto|tel|javascript):/i.test(href)) return;
    if (href === '#' || href.startsWith('#')) {
      // Legacy archive footers use href="#" boilerplate; grandfather them to
      // avoid rewriting 200 articles, but fail on all new/maintained content.
      if (!isLegacyPost) failures.push(`${label}: placeholder policy link ${href}`);
      return;
    }
    if (/\[[A-Z_]+\]/.test(href)) failures.push(`${label}: placeholder link ${href}`);
    let url;
    try { url = new URL(href, `${siteUrl}${route}`); } catch {
      failures.push(`${label}: invalid link ${href}`);
      return;
    }
    if (!['www.academiahelper.com', 'academiahelper.com'].includes(url.hostname)) return;
    let pathname = url.pathname;
    // Normalise missing trailing slash (/blog -> /blog/) before validation.
    if (!pathname.endsWith('/') && routes.has(`${pathname}/`)) pathname = `${pathname}/`;
    // Validate every internal destination, not only blog posts.
    if (pathname.startsWith('/blog') || pathname.startsWith('/tools') || pathname.startsWith('/guides') || ['/about/', '/contact/', '/editorial-policy/', '/privacy-policy/', '/terms/', '/', '/blog/'].includes(pathname) || pathname.startsWith('/services') || pathname.startsWith('/assignment-help') || pathname.startsWith('/dissertation-help') || pathname.startsWith('/coursework-help')) {
      if (!routes.has(pathname) && !excludedRoutes.has(pathname)) failures.push(`${label}: unknown or noncanonical internal link ${href}`);
    }
    if (routes.has(pathname)) destinations.add(pathname);
  });
  edges.set(route, destinations);
}

function checkLegacyHtml($, route, label) {
  // Strict for app pages and the five new articles; legacy archive posts are
  // grandfathered and reported separately (see below) to avoid rewriting history.
  const isBlog = route.startsWith('/blog/');
  const slug = isBlog ? route.split('/')[2] : null;
  if (isBlog && !newSlugs.has(slug)) return;
  const text = $.root().text();
  for (const pattern of LEGACY_PATTERNS) {
    if (pattern.test(text)) failures.push(`${label}: legacy unsupported promise (${pattern})`);
  }
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
  checkLegacyHtml($, route, label);
  exportedTitles.set(route, $('title').text().trim());
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

checkLegacySource();

const base = exportMode ? path.join(root, 'out') : path.join(root, 'public');
const $sitemap = cheerio.load(fs.readFileSync(path.join(base, 'sitemap.xml'), 'utf8'), { xmlMode: true });
const urls = $sitemap('url > loc').map((_, element) => $sitemap(element).text().trim()).get();
if (new Set(urls).size !== urls.length) failures.push('Sitemap has duplicate URLs');
const expectedUrls = new Set([...routes].filter((r) => !excludedRoutes.has(r)).map((route) => `${siteUrl}${route}`));
for (const url of expectedUrls) if (!urls.includes(url)) failures.push(`Sitemap is missing ${url}`);
for (const url of urls) if (!expectedUrls.has(url)) failures.push(`Sitemap contains an unexpected URL: ${url}`);
const robots = fs.readFileSync(path.join(base, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) failures.push('robots.txt has the wrong sitemap address');
if (/^Disallow:\s*\/\s*$/im.test(robots)) failures.push('robots.txt blocks the site');

const sourceFiles = fs.readdirSync(path.join(root, 'blog-posts')).filter((file) => file.endsWith('.html'));
if (sourceFiles.length !== posts.length || new Set(posts.map((post) => post.slug)).size !== posts.length) failures.push('Article index does not match source files');
if (exportMode) {
  for (const route of routes) {
    if (excludedRoutes.has(route)) continue;
    const file = path.join(base, route, 'index.html');
    if (!fs.existsSync(file)) { failures.push(`Missing exported page: ${route}`); continue; }
    checkHtml(fs.readFileSync(file, 'utf8'), route, route);
  }
  // Compare exported blog titles against source definitions (new articles only;
  // legacy archive titles use headline-vs-title variants predating this check).
  for (const post of posts) {
    if (!newSlugs.has(post.slug)) continue;
    const route = `/blog/${post.slug}/`;
    const exported = exportedTitles.get(route) || '';
    if (post.title && exported && !exported.includes(post.title.slice(0, 24))) {
      failures.push(`${route}: exported title does not match source definition`);
    }
  }
  const seen = new Set(['/']);
  const queue = ['/'];
  while (queue.length) {
    for (const destination of edges.get(queue.shift()) || []) {
      if (!seen.has(destination)) { seen.add(destination); queue.push(destination); }
    }
  }
  for (const route of routes) {
    if (excludedRoutes.has(route) || route === '/') continue;
    if (!seen.has(route)) failures.push(`No crawlable path from the homepage: ${route}`);
  }
} else {
  for (const post of posts) {
    const file = path.join(root, 'blog-posts', `${post.slug}.html`);
    if (!fs.existsSync(file)) { failures.push(`Missing article: ${post.slug}`); continue; }
    checkHtml(fs.readFileSync(file, 'utf8'), `/blog/${post.slug}/`, post.slug);
    if (post.date && !Number.isFinite(Date.parse(post.date))) failures.push(`${post.slug}: invalid publication date`);
  }
  // Verify new pages/tools are discoverable from existing navigation sources.
  // Search all maintained React sources for a reference to each new route.
  const navSources = [];
  const collectSources = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { collectSources(full); continue; }
      if (!/\.(tsx|ts)$/.test(entry.name)) continue;
      navSources.push(fs.readFileSync(full, 'utf8'));
    }
  };
  collectSources(path.join(root, 'components'));
  collectSources(path.join(root, 'pages'));
  // New blog posts also link to hubs/tools; include them as navigation evidence.
  for (const slug of newSlugs) {
    const full = path.join(root, 'blog-posts', `${slug}.html`);
    if (fs.existsSync(full)) navSources.push(fs.readFileSync(full, 'utf8'));
  }
  const navText = navSources.join('\n');
  for (const route of extraRoutes) {
    if (!navText.includes(route.replace(/\/$/, '')) && !navText.includes(route)) {
      failures.push(`New route has no internal navigation reference: ${route}`);
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`SEO checks passed (${exportMode ? 'export' : 'source'}): ${posts.length} articles, ${pageCount} index pages, ${urls.length} sitemap URLs.`);
}
