const { test } = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('cheerio');
const { prepareArticleLayout } = require('../lib/article-layout.cjs');

test('wide article tables gain a labelled keyboard-accessible scroll region without losing content', () => {
  const result = load(prepareArticleLayout('<div class="prose"><h2>Grade comparison</h2><table><tr><th>Grade</th><td>80–100</td></tr></table></div>'));
  const region = result('table').parent();
  assert.equal(region.attr('role'), 'region');
  assert.equal(region.attr('tabindex'), '0');
  assert.match(region.attr('aria-label'), /Grade comparison/);
  assert.equal(result('th').text(), 'Grade');
  assert.equal(result('td').text(), '80–100');
});

test('existing table wrappers are enhanced without nesting and transformation is idempotent', () => {
  const source = '<div class="prose"><div class="table-wrap"><table><caption>Marks</caption><tr><td>65</td></tr></table></div></div>';
  const first = prepareArticleLayout(source);
  const result = load(first);
  assert.equal(result('.article-table-scroll').length, 1);
  assert.equal(result('.table-wrap').length, 1);
  assert.equal(result('table').parent().attr('aria-label'), 'Marks — scroll horizontally if needed');
  assert.equal(prepareArticleLayout(first), first);
});
