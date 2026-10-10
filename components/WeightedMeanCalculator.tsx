import { useState } from 'react';
import { weightedMean, classifyUK } from '../lib/calculators.cjs';

export function WeightedMeanCalculator({ mode }: { mode: 'gpa' | 'wam' | 'uk' }) {
  const [rows, setRows] = useState([{ value: '', weight: mode === 'uk' ? '1' : '3' }, { value: '', weight: mode === 'uk' ? '2' : '3' }]);
  const max = mode === 'gpa' ? 4 : 100;
  const result = weightedMean(rows, max);
  const set = (index: number, key: string, value: string) => setRows(rows.map((r, i) => i === index ? { ...r, [key]: value } : r));
  return <>
    <p>{mode === 'gpa' ? 'Enter grade points using your institution’s 4.0 scale. Include failed courses if your rules count them; exclude pass/fail courses that carry no grade points.' : 'Enter percentage marks and the credits or relative weights specified by your course. Blank marks are excluded, not counted as zero.'}</p>
    <div className="overflow-x-auto"><table><thead><tr><th>{mode === 'gpa' ? 'Grade points (0–4)' : 'Mark (%)'}</th><th>{mode === 'uk' ? 'Relative weight' : 'Credits'}</th><th>Remove</th></tr></thead><tbody>
      {rows.map((r, i) => <tr key={i}><td><input aria-label={`Value ${i + 1}`} className="w-24" type="number" min="0" max={max} step="any" value={r.value} onChange={e => set(i, 'value', e.target.value)} /></td><td><input aria-label={`Credits or weight ${i + 1}`} className="w-24" type="number" min="0" step="any" value={r.weight} onChange={e => set(i, 'weight', e.target.value)} /></td><td><button type="button" aria-label={`Remove row ${i + 1}`} onClick={() => setRows(rows.filter((_, j) => j !== i))}>×</button></td></tr>)}
    </tbody></table></div>
    <button type="button" onClick={() => setRows([...rows, { value: '', weight: '1' }])}>Add row</button>
    <div aria-live="polite" className="mt-4 rounded-xl bg-stone-100 p-4">{result.error ? <p role="alert">{result.error}</p> : <p>Weighted average: <strong>{result.value === null ? 'Enter a mark to begin' : result.value.toFixed(mode === 'gpa' ? 3 : 2) + (mode === 'gpa' ? ' / 4.0' : '%')}</strong>{mode === 'uk' && result.value !== null && <> — {classifyUK(result.value)} (indicative)</>}</p>}</div>
    {mode === 'uk' && <p>Classification uses the unrounded average. This does not implement credit profiles, borderline promotion, resit caps, excluded modules or institution-specific award rules. Enter completed year averages with their year weights, or modules with their effective weights; do not mix both.</p>}
  </>;
}
