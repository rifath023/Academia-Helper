// Generate the article index and canonical sitemap from the same source files.
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const { pageSize, siteUrl } = require('./lib/blog-config.json');

const postsDir = path.join(__dirname, 'blog-posts');
const outputFile = path.join(postsDir, 'index.json');
const sitemapFile = path.join(__dirname, 'public', 'sitemap.xml');

function validDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}(?:T.*)?$/.test(value)) return '';
  const parsed = new Date(value);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value.slice(0, 10) ? value : '';
}

function extractMeta(html, slug) {
  const $ = cheerio.load(html);

  const getMeta = (attr, value) => $(`meta[${attr}="${value}"]`).attr('content') || '';

  // Extract from JSON-LD schema
  let schema = {};
  $('script[type="application/ld+json"]').each((_, element) => {
    try {
      const parsed = JSON.parse($(element).html());
      const nodes = Array.isArray(parsed) ? parsed : parsed['@graph'] || [parsed];
      const article = nodes.find(item => ['Article', 'BlogPosting'].includes(item['@type']));
      if (article) schema = article;
    } catch (e) {
      throw new Error(`Invalid JSON-LD in ${slug}: ${e.message}`);
    }
  });

  // Category from hero badge
  const category = $('.hero-badge').first().text().trim() || 'General';

  // Type from product-card presence
  const type = $('.product-card').length > 0 ? 'transactional' : 'informational';

  // Read time from post-meta
  const postMetaText = $('.post-meta').first().text();
  const readTimeMatch = postMetaText.match(/(\d+\s*min\s*read)/i);
  const readTime = readTimeMatch ? readTimeMatch[1] : '5 min read';

  // An unknown publication date stays unknown; rebuilding is not publishing.
  const date = validDate(schema.datePublished || getMeta('property', 'article:published_time'));

  const title =
    schema.headline ||
    getMeta('property', 'og:title') ||
    $('title').text().replace(' | Academia Helper', '').trim();

  const excerpt =
    getMeta('name', 'description') ||
    schema.description ||
    getMeta('property', 'og:description') ||
    '';

  const image =
    getMeta('property', 'og:image') ||
    (schema.image && (schema.image.url || schema.image)) ||
    getMeta('name', 'twitter:image') ||
    '';

  const author =
    (schema.author && schema.author.name) ||
    'Academia Helper';

  const modified = validDate(schema.dateModified);
  return { slug, title, excerpt, date, readTime, category, type, image, author, modified };
}

function writeSitemap(posts) {
  const previousDates = new Map();
  if (fs.existsSync(sitemapFile)) {
    const $ = cheerio.load(fs.readFileSync(sitemapFile, 'utf8'), { xmlMode: true });
    $('url').each((_, element) => {
      const loc = $(element).find('loc').text().trim();
      const date = validDate($(element).find('lastmod').text().trim());
      previousDates.set(`${loc.replace(/\/+$/, '')}/`, date);
    });
  }
  const entries = [
    { loc: `${siteUrl}/`, lastmod: previousDates.get(`${siteUrl}/`) || '' },
    { loc: `${siteUrl}/assignment-help-uk/`, lastmod: previousDates.get(`${siteUrl}/assignment-help-uk/`) || '' },
    { loc: `${siteUrl}/dissertation-help-uk/`, lastmod: previousDates.get(`${siteUrl}/dissertation-help-uk/`) || '' },
    { loc: `${siteUrl}/coursework-help-uk/`, lastmod: previousDates.get(`${siteUrl}/coursework-help-uk/`) || '' },
    { loc: `${siteUrl}/services/`, lastmod: previousDates.get(`${siteUrl}/services/`) || '' },
    { loc: `${siteUrl}/services/essays/`, lastmod: previousDates.get(`${siteUrl}/services/essays/`) || '' },
    { loc: `${siteUrl}/services/reports/`, lastmod: previousDates.get(`${siteUrl}/services/reports/`) || '' },
    { loc: `${siteUrl}/services/case-studies/`, lastmod: previousDates.get(`${siteUrl}/services/case-studies/`) || '' },
    { loc: `${siteUrl}/services/reflective-journals/`, lastmod: previousDates.get(`${siteUrl}/services/reflective-journals/`) || '' },
    { loc: `${siteUrl}/services/literature-reviews/`, lastmod: previousDates.get(`${siteUrl}/services/literature-reviews/`) || '' },
    { loc: `${siteUrl}/services/presentations/`, lastmod: previousDates.get(`${siteUrl}/services/presentations/`) || '' },
    { loc: `${siteUrl}/services/problem-sets/`, lastmod: previousDates.get(`${siteUrl}/services/problem-sets/`) || '' },
    { loc: `${siteUrl}/services/dissertations-theses/`, lastmod: previousDates.get(`${siteUrl}/services/dissertations-theses/`) || '' },
    { loc: `${siteUrl}/services/annotated-bibliographies/`, lastmod: previousDates.get(`${siteUrl}/services/annotated-bibliographies/`) || '' },
    { loc: `${siteUrl}/services/group-projects/`, lastmod: previousDates.get(`${siteUrl}/services/group-projects/`) || '' },
    { loc: `${siteUrl}/services/portfolio-eportfolio/`, lastmod: previousDates.get(`${siteUrl}/services/portfolio-eportfolio/`) || '' },
    { loc: `${siteUrl}/blog/`, lastmod: previousDates.get(`${siteUrl}/blog/`) || '' },
  ];
  for (let page = 2; page <= Math.ceil(posts.length / pageSize); page++) {
    entries.push({ loc: `${siteUrl}/blog/page/${page}/`, lastmod: '' });
  }
  posts.forEach(post => {
    const loc = `${siteUrl}/blog/${post.slug}/`;
    const dates = [previousDates.get(loc), post.modified, post.date].filter(Boolean);
    dates.sort((a, b) => Date.parse(b) - Date.parse(a));
    entries.push({ loc, lastmod: dates[0] || '' });
  });
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries.map(({ loc, lastmod }) => `  <url>\n    <loc>${loc}</loc>\n${lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ''}  </url>`).join('\n') +
    '\n</urlset>\n';
  fs.writeFileSync(sitemapFile, xml, 'utf8');
  console.log(`Sitemap updated: ${entries.length} canonical URLs`);
}

function generate() {
  if (!fs.existsSync(postsDir)) {
    throw new Error('No blog-posts/ directory found.');
  }

  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.html')).sort();

  const posts = files.map(file => {
    const slug = file.replace('.html', '');
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`Invalid article slug: ${slug}`);
    const html = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const meta = extractMeta(html, slug);

    if (!meta.image) console.warn(`  ⚠ ${slug}: no image found`);
    if (!meta.excerpt) console.warn(`  ⚠ ${slug}: no excerpt found`);

    console.log(`✅ ${slug}`);
    return meta;
  });

  // Sort newest first
  posts.sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0) || a.slug.localeCompare(b.slug));

  fs.writeFileSync(outputFile, JSON.stringify(posts.map(({ modified, ...post }) => post), null, 2) + '\n', 'utf8');
  writeSitemap(posts);
  console.log(`\n📄 index.json updated — ${posts.length} post(s)`);
}

generate();
