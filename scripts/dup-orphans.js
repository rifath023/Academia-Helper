const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'blog-posts');
const orphans = [
  'how-to-write-a-critical-analysis',
  'how-to-write-a-dissertation-methodology',
  'how-to-use-ai-for-homework-without-losing-your-own-thinking',
  'apa-7th-edition-citation-guide',
];

function bodyText(slug) {
  const html = fs.readFileSync(path.join(dir, slug + '.html'), 'utf8');
  const m = html.match(/id="article-prose"[^>]*>([\s\S]*?)<\/div>\s*<div class="cta-box">/);
  const raw = m ? m[1] : '';
  return raw.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
}
function shingles(text, n = 5) {
  const w = text.split(' ');
  const s = new Set();
  for (let i = 0; i <= w.length - n; i++) s.add(w.slice(i, i + n).join(' '));
  return s;
}
function jaccard(a, b) {
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  return inter / (a.size + b.size - inter);
}

const files = fs.readdirSync(dir).filter((f) => f.endsWith('.html')).map((f) => f.replace('.html', ''));
const cache = {};
const get = (s) => (cache[s] = cache[s] || shingles(bodyText(s)));

for (const o of orphans) {
  const scores = [];
  for (const c of files) {
    if (c === o) continue;
    scores.push([jaccard(get(o), get(c)), c]);
  }
  scores.sort((a, b) => b[0] - a[0]);
  console.log('\n' + o + ' top matches:');
  scores.slice(0, 5).forEach(([s, c]) => console.log('  ' + s.toFixed(3) + '  ' + c));
}
