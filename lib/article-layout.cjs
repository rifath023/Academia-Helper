const { load } = require('cheerio');

function prepareArticleLayout(html) {
  const q = load(html, {}, false);
  q('.prose table').each((index, table) => {
    const node = q(table);
    let wrapper = node.parent();
    if (!wrapper.is('.table-wrap, .table-wrapper, .article-table-scroll')) {
      node.wrap('<div class="article-table-scroll"></div>');
      wrapper = node.parent();
    }
    const label = node.find('caption').first().text().trim() || wrapper.prevAll('h2,h3').first().text().trim() || node.closest('section').find('h2,h3').first().text().trim() || `Table ${index + 1}`;
    wrapper.addClass('article-table-scroll').attr({ role: 'region', tabindex: '0', 'aria-label': `${label} — scroll horizontally if needed` });
  });
  return q.html();
}

module.exports = { prepareArticleLayout };
