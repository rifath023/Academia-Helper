import { useState } from 'react';
import { readingMinutes, wordBudget, timeline } from '../lib/planners.cjs';
export function StudyPlanner({ mode }: { mode: 'reading' | 'words' | 'timeline' }) {
  const [amount, setAmount] = useState(mode === 'timeline' ? '' : '2000');
  const [rate, setRate] = useState(mode === 'timeline' ? '12' : '200');
  const minutes = mode === 'reading' ? readingMinutes(amount, rate) : null;
  const rows = mode === 'words' ? wordBudget(amount) : mode === 'timeline' ? timeline(amount, rate) : null;
  return <>
    <label className="block mb-4">{mode === 'timeline' ? 'Submission date' : 'Word count'} <input className="max-w-full" type={mode === 'timeline' ? 'date' : 'number'} min={mode === 'timeline' ? undefined : '0'} step="1" value={amount} onChange={e => setAmount(e.target.value)} /></label>
    {mode !== 'words' && <label className="block mb-4">{mode === 'timeline' ? 'Weeks available (1–104)' : 'Reading speed (words per minute)'} <input className="w-24" type="number" min="1" max={mode === 'timeline' ? '104' : undefined} value={rate} onChange={e => setRate(e.target.value)} /></label>}
    <div aria-live="polite">{mode === 'reading' ? <p>{minutes === null ? 'Enter a whole word count and a positive reading speed.' : `Estimated reading time: ${minutes.toFixed(1)} minutes.`}</p> : rows ? <ul>{rows.map(r => <li key={r.name}><strong>{r.name}:</strong> {mode === 'words' ? `${r.words} words` : r.date}</li>)}</ul> : <p>Enter {mode === 'timeline' ? 'a valid submission date and 1–104 whole weeks' : 'a non-negative whole word count'} to see your plan.</p>}</div>
  </>;
}
