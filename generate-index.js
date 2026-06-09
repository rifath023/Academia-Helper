// this is for auto entry posts into the blog-posts/index.json file, which is used to generate the blog index page. It should be run whenever a new post is added or an existing post is edited.
const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'blog-posts');
const outputFile = path.join(postsDir, 'index.json');

function extractMeta(html, slug) {
  const get = (tag) => {
    const match = html.match(new RegExp(`<meta[^>]+name="${tag}"[^>]+content="([^"]+)"`));
    return match ? match[1] : '';
  };
  const getOg = (prop) => {
    const match = html.match(new RegExp(`<meta[^>]+property="og:${prop}"[^>]+content="([^"]+)"`));
    return match ? match[1] : '';
  };
  const getTag = (tag) => {
    const match = html.match(new RegExp(`<${tag}[^>]*>([^<]+)</${tag}>`));
    return match ? match[1].trim() : '';
  };

  // Extract from JSON-LD schema
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  let schema = {};
  if (jsonLdMatch) {
    try { schema = JSON.parse(jsonLdMatch[1]); } catch {}
  }

  // Extract category from hero badge
  const badgeMatch = html.match(/class="hero-badge">([^<]+)</);
  const category = badgeMatch ? badgeMatch[1].trim() : 'General';

  // Extract type from badge class or product card presence
  const type = html.includes('class="product-card"') ? 'transactional' : 'informational';

  // Extract read time from post-meta
  const readTimeMatch = html.match(/(\d+\s*min\s*read)/i);
  const readTime = readTimeMatch ? readTimeMatch[1] : '5 min read';

  // Extract date
  const dateMatch = html.match(/datePublished["']?\s*:\s*["']([^"']+)["']/);
  const date = dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0];

  return {
    slug,
    title: schema.headline || getTag('title').replace(' | Academia Helper', '').trim(),
    excerpt: get('description') || schema.description || '',
    date,
    readTime,
    category,
    type,
    image: getOg('image') || schema.image || '',
    author: schema.author?.name || 'Academia Helper',
  };
}

function generate() {
  if (!fs.existsSync(postsDir)) {
    console.log('❌ blog-posts/ folder not found');
    return;
  }

  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.html'));

  if (files.length === 0) {
    console.log('⚠️  No HTML files found in blog-posts/');
    fs.writeFileSync(outputFile, '[]', 'utf8');
    return;
  }

  const posts = files.map(file => {
    const slug = file.replace('.html', '');
    const html = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const meta = extractMeta(html, slug);
    console.log(`✅ ${slug}`);
    return meta;
  });

  // Sort newest first
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2), 'utf8');
  console.log(`\n📄 index.json updated — ${posts.length} post(s)`);
}

generate();