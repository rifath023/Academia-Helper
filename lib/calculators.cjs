const blank = value => String(value ?? '').trim() === '';
const valid = (value, max) => !blank(value) && Number.isFinite(Number(value)) && Number(value) >= 0 && Number(value) <= max;

function weightedGrade(rows, target) {
  const empty = { current: null, needed: null, points: 0, total: 0, remaining: 0 };
  if (rows.some(r => !valid(r.weight, 100) || (!blank(r.grade) && !valid(r.grade, 100))))
    return { ...empty, error: 'Enter marks and weights between 0 and 100. Leave only unfinished marks blank.' };
  if (!blank(target) && !valid(target, 100)) return { ...empty, error: 'Enter a target between 0 and 100, or leave it blank.' };
  let points = 0, completed = 0, remaining = 0;
  for (const row of rows) {
    if (blank(row.grade)) remaining += Number(row.weight);
    else { completed += Number(row.weight); points += Number(row.grade) * Number(row.weight) / 100; }
  }
  const total = completed + remaining;
  return { error: null, points, total, remaining, current: completed ? points * 100 / completed : null,
    needed: Math.abs(total - 100) < 1e-8 && remaining > 0 && !blank(target) ? (Number(target) - points) * 100 / remaining : null };
}

function weightedMean(rows, max) {
  let total = 0, sum = 0;
  for (const row of rows) {
    if (blank(row.value)) continue;
    if (!valid(row.value, max) || !valid(row.weight, Number.MAX_SAFE_INTEGER) || Number(row.weight) <= 0)
      return { value: null, error: `Enter values from 0 to ${max} and positive credits or weights.` };
    total += Number(row.weight);
    sum += Number(row.value) * Number(row.weight);
  }
  return { error: null, value: total ? sum / total : null };
}
function classifyUK(mark) {
  return mark >= 70 ? 'First' : mark >= 60 ? 'Upper second (2:1)' : mark >= 50 ? 'Lower second (2:2)' : mark >= 40 ? 'Third' : 'Below typical honours threshold';
}
module.exports = { weightedGrade, weightedMean, classifyUK };
