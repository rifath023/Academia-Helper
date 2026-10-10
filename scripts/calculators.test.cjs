const { test } = require('node:test');
const assert = require('node:assert/strict');
const { weightedGrade, weightedMean, classifyUK } = require('../lib/calculators.cjs');
test('weighted course grade and remaining target', () => {
  const r = weightedGrade([{grade:'80',weight:'40'},{grade:'',weight:'60'}], '70');
  assert.equal(r.current, 80);
  assert.ok(Math.abs(r.needed - 63.3333333333) < 1e-8);
});
test('zero is a mark; empty is ungraded', () => {
  assert.equal(weightedGrade([{grade:'0',weight:'50'},{grade:'',weight:'50'}], '70').needed, 140);
  assert.equal(weightedGrade([{grade:'',weight:'100'}], '').needed, null);
});
test('incomplete weights cannot produce final target estimate', () => {
  assert.equal(weightedGrade([{grade:'80',weight:'20'},{grade:'',weight:'30'}], '70').needed, null);
});
test('invalid marks, weights and targets reject results', () => {
  for (const grade of ['-1','101','Infinity','abc']) assert.ok(weightedGrade([{grade,weight:'100'}], '70').error);
  for (const weight of ['-1','101','Infinity','']) assert.ok(weightedGrade([{grade:'70',weight}], '70').error);
  assert.ok(weightedGrade([{grade:'70',weight:'100'}], '101').error);
});
test('decimal weights, zero weights, empty list and completed course', () => {
  assert.equal(weightedGrade([{grade:'80',weight:'33.3'},{grade:'60',weight:'66.7'}], '70').needed, null);
  assert.equal(weightedGrade([], '70').current, null);
  assert.equal(weightedGrade([{grade:'100',weight:'0'}], '70').current, null);
});
test('weighted mean uses credits and never treats missing mark as zero', () => {
  assert.equal(weightedMean([{value:'80',weight:'10'},{value:'60',weight:'20'}],100).value, 2000/30);
  assert.equal(weightedMean([{value:'',weight:'20'}],100).value, null);
  assert.equal(weightedMean([{value:'0',weight:'20'}],100).value, 0);
  assert.ok(weightedMean([{value:'4.1',weight:'3'}],4).error);
  assert.ok(weightedMean([{value:'70',weight:'0'}],100).error);
});
test('UK classification does not round borderline marks up', () => {
  assert.equal(classifyUK(69.99), 'Upper second (2:1)');
  assert.equal(classifyUK(70), 'First');
  assert.equal(classifyUK(60), 'Upper second (2:1)');
  assert.equal(classifyUK(50), 'Lower second (2:2)');
  assert.equal(classifyUK(40), 'Third');
  assert.equal(classifyUK(39.99), 'Below typical honours threshold');
});
