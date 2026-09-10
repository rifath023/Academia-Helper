// this is for auto entry posts into the blog-posts/index.json file, which is used to generate the blog index page. It should be run whenever a new post is added or an existing post is edited.
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const postsDir = path.join(__dirname, 'blog-posts');
const outputFile = path.join(postsDir, 'index.json');

function extractMeta(html, slug) {
  const $ = cheerio.load(html);

  const getMeta = (attr, value) => $(`meta[${attr}="${value}"]`).attr('content') || '';

  // Extract from JSON-LD schema
  let schema = {};
  const jsonLdRaw = $('script[type="application/ld+json"]').first().html();
  if (jsonLdRaw) {
    try {
      const parsed = JSON.parse(jsonLdRaw);
      // Handle @graph-wrapped schemas (like your Article + BreadcrumbList + FAQPage graph)
      if (Array.isArray(parsed['@graph'])) {
        schema = parsed['@graph'].find(item => item['@type'] === 'Article') || {};
      } else {
        schema = parsed;
      }
    } catch (e) {
      console.warn(`  ⚠ Could not parse JSON-LD for ${slug}: ${e.message}`);
    }
  }

  // Category from hero badge
  const category = $('.hero-badge').first().text().trim() || 'General';

  // Type from product-card presence
  const type = $('.product-card').length > 0 ? 'transactional' : 'informational';

  // Read time from post-meta
  const postMetaText = $('.post-meta').first().text();
  const readTimeMatch = postMetaText.match(/(\d+\s*min\s*read)/i);
  const readTime = readTimeMatch ? readTimeMatch[1] : '5 min read';

  // Date from schema, falling back to today
  const date = schema.datePublished || new Date().toISOString().split('T')[0];

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

  return { slug, title, excerpt, date, readTime, category, type, image, author };
}

function generate() {
  if (!fs.existsSync(postsDir)) {
    console.log('⚠ No blog-posts/ directory found.');
    fs.writeFileSync(outputFile, '[]', 'utf8');
    return;
  }

  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.html'));

  const posts = files.map(file => {
    const slug = file.replace('.html', '');
    const html = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const meta = extractMeta(html, slug);

    if (!meta.image) console.warn(`  ⚠ ${slug}: no image found`);
    if (!meta.excerpt) console.warn(`  ⚠ ${slug}: no excerpt found`);

    console.log(`✅ ${slug}`);
    return meta;
  });

  // Sort newest first
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2), 'utf8');
  console.log(`\n📄 index.json updated — ${posts.length} post(s)`);
}

generate();