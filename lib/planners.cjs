function number(value) { return String(value).trim() === '' ? NaN : Number(value); }
function readingMinutes(words, speed) {
  words = number(words); speed = number(speed);
  return Number.isSafeInteger(words) && words >= 0 && Number.isFinite(speed) && speed > 0 ? words / speed : null;
}
function wordBudget(total) {
  total = number(total);
  if (!Number.isSafeInteger(total) || total < 0) return null;
  const intro = Math.floor(total * 0.1), conclusion = Math.floor(total * 0.1);
  return [{ name: 'Introduction', words: intro }, { name: 'Main discussion', words: total - intro - conclusion }, { name: 'Conclusion', words: conclusion }];
}
function timeline(deadline, weeks) {
  weeks = number(weeks);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(deadline) || !Number.isInteger(weeks) || weeks < 1 || weeks > 104) return null;
  const end = new Date(deadline + 'T12:00:00Z');
  if (!Number.isFinite(end.getTime()) || end.toISOString().slice(0,10) !== deadline) return null;
  return [['Scope, supervisor and ethics requirements', 1], ['Reading and method agreed', 0.75], ['Approved data collection / source analysis', 0.5], ['Full draft ready for revision', 0.2], ['Final checks and submission', 0]].map(([name, fraction]) => ({ name, date: new Date(end.getTime() - Math.round(weeks * 7 * fraction) * 86400000).toISOString().slice(0,10) }));
}
module.exports = { readingMinutes, wordBudget, timeline };
