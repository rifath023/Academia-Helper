const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readingMinutes, wordBudget, timeline } = require('../lib/planners.cjs');
test('reading time validates speed and preserves zero words', () => {
  assert.equal(readingMinutes('1000','200'), 5);
  assert.equal(readingMinutes('0','200'), 0);
  for (const speed of ['0','-1','','Infinity']) assert.equal(readingMinutes('100',speed), null);
});
test('word allocations add to the exact integer total', () => {
  for (const total of [0,1,999,2000]) assert.equal(wordBudget(String(total)).reduce((s,r)=>s+r.words,0), total);
  assert.equal(wordBudget(''), null);
  assert.equal(wordBudget('-1'), null);
  assert.equal(wordBudget('1.5'), null);
});
test('timeline is stable across date and timezone boundaries', () => {
  assert.equal(timeline('2027-01-01', '12').at(-1).date, '2027-01-01');
  assert.equal(timeline('2027-01-01', '12')[0].date, '2026-10-09');
  assert.equal(timeline('2026-02-30', '12'), null);
  assert.equal(timeline('', '12'), null);
  assert.equal(timeline('2027-01-01', '0'), null);
});
