const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'blog-posts');
const targets = [
  'how-to-write-a-critical-analysis',
  'how-to-write-a-dissertation-methodology',
  'how-to-use-ai-for-homework-without-losing-your-own-thinking',
  'apa-7th-edition-citation-guide',
  'best-eye-care-desk-lamps-for-students',
  'best-flexible-neck-desk-lamps-for-studying',
  'best-desk-lamps-with-timer-for-studying',
  'best-ai-research-assistants-2026',
];
const partners = [
  'how-to-critically-evaluate-an-academic-article',
  'how-to-write-a-dissertation-methodology',
  'how-students-can-use-ai-homework-tools-without-academic-misconduct',
  'mla-citation-guide-2026',
  'harvard-referencing-guide',
  'best-usb-desk-lamps-for-students',
  'best-study-lamps-students-usa-2026',
  'best-ai-homework-helpers',
  'how-to-write-a-critical-analysis',
];

function bodyText(slug) {
  const html = fs.readFileSync(path.join(dir, slug + '.html'), 'utf8');
  const m = html.match(/id="article-prose"[^>]*>([\s\S]*?)<\/div>\s*<div class="cta-box">/);
  const raw = m ? m[1] : html;
  return raw.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
}

function titleOf(slug) {
  const html = fs.readFileSync(path.join(dir, slug + '.html'), 'utf8');
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  return m ? m[1].replace(/<[^>]+>/g, '').trim() : '(none)';
}

function shingles(text, n = 5) {
  const words = text.split(' ');
  const set = new Set();
  for (let i = 0; i <= words.length - n; i++) set.add(words.slice(i, i + n).join(' '));
  return set;
}

function jaccard(a, b) {
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  return inter / (a.size + b.size - inter);
}

const texts = {};
for (const s of new Set([...targets, ...partners])) {
  try {
    texts[s] = bodyText(s);
    console.log(s + ' | words: ' + texts[s].split(' ').length + ' | H1: ' + titleOf(s).slice(0, 80));
  } catch (e) { console.log(s + ' MISSING'); }
}

console.log('\n--- pairwise similarity (Jaccard 5-gram) ---');
const pairs = [
  ['how-to-write-a-critical-analysis', 'how-to-critically-evaluate-an-academic-article'],
  ['how-to-use-ai-for-homework-without-losing-your-own-thinking', 'how-students-can-use-ai-homework-tools-without-academic-misconduct'],
  ['apa-7th-edition-citation-guide', 'mla-citation-guide-2026'],
  ['apa-7th-edition-citation-guide', 'harvard-referencing-guide'],
  ['best-eye-care-desk-lamps-for-students', 'best-flexible-neck-desk-lamps-for-studying'],
  ['best-eye-care-desk-lamps-for-students', 'best-desk-lamps-with-timer-for-studying'],
  ['best-eye-care-desk-lamps-for-students', 'best-usb-desk-lamps-for-students'],
  ['best-flexible-neck-desk-lamps-for-studying', 'best-desk-lamps-with-timer-for-studying'],
  ['best-ai-research-assistants-2026', 'best-ai-homework-helpers'],
];
for (const [a, b] of pairs) {
  if (!texts[a] || !texts[b]) { console.log(a + ' vs ' + b + ': missing'); continue; }
  console.log(jaccard(shingles(texts[a]), shingles(texts[b])).toFixed(3) + '  ' + a + '  VS  ' + b);
}
