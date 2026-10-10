import { useState } from 'react';
import { ToolPage } from '../../components/ToolPage';
import { weightedGrade } from '../../lib/calculators.cjs';

interface Row { name: string; grade: string; weight: string }

export default function WeightedGradeCalculator() {
  const [rows, setRows] = useState<Row[]>([
    { name: 'Coursework 1', grade: '', weight: '20' },
    { name: 'Coursework 2', grade: '', weight: '30' },
    { name: 'Final exam', grade: '', weight: '50' },
  ]);
  const [target, setTarget] = useState('70');

  const set = (i: number, k: keyof Row, v: string) => setRows(rows.map((r, j) => (j === i ? { ...r, [k]: v } : r)));
  const { current, needed, points: pts, remaining: wLeft, total: totalW, error } = weightedGrade(rows, target);

  return (
    <ToolPage
      path="/tools/weighted-grade-calculator/"
      title="Weighted Grade Calculator: Current Grade & Score Needed on the Final"
      description="Free weighted grade calculator. Enter your marks and weights to see your current course grade and the score you need on the remaining work to hit your target."
      h1="Weighted Grade Calculator"
      intro="Enter each assessment's mark and its weight. Leave the mark empty for work you haven't done yet and we'll tell you what you need to reach your target."
      faqs={[
        { q: 'How do I calculate a weighted grade?', a: 'Multiply each mark by its weight (as a fraction of 100), then add the results. If your weights add to 100, that sum is your final grade. For example, 80% on work worth 40% and 60% on work worth 60% gives 0.4 × 80 + 0.6 × 60 = 68%.' },
        { q: 'What if my weights do not add up to 100?', a: 'The calculator shows your grade so far as a percentage of the weight completed, so the answer is still meaningful. Check your course handbook if the totals look wrong.' },
        { q: 'How do I find the score I need on my final exam?', a: 'Subtract the points you have already earned from your target, then divide by the final exam weight divided by 100. For example, (70 − 32) ÷ (60 ÷ 100) = 63.33%. Weights must total 100%. Leave the exam mark blank above.' },
        { q: 'Is it the same as a GPA?', a: 'No. A weighted grade is a percentage within one course. A GPA averages letter grades across courses, weighted by credits. Use the GPA calculator for that.' },
      ]}
      related={[
        { href: '/tools/gpa-calculator/', label: 'GPA calculator (4.0 scale)' },
        { href: '/tools/uk-degree-classification-calculator/', label: 'UK degree classification calculator' },
        { href: '/tools/', label: 'All free study tools' },
      ]}
      explainer={
        <>
          <h2>How the calculation works</h2>
          <p>Each mark contributes <strong>mark × weight ÷ 100</strong> points to your grade. With weights totalling 100%, the required remaining mark is <strong>(target − points banked) ÷ (remaining weight ÷ 100)</strong>. For a target of 70, 32 points banked and 60% remaining, you need 63.33% on that remaining work.</p>
          <p>If the number needed is above 100%, the target is out of reach with the remaining work and you should aim lower or check whether your course allows extra credit.</p>
        </>
      }
    >
      <div className="overflow-x-auto"><table>
        <thead><tr><th>Assessment</th><th>Mark (%)</th><th>Weight (%)</th><th></th></tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td><input aria-label={`Assessment ${i + 1} name`} value={r.name} onChange={(e) => set(i, 'name', e.target.value)} className="w-36" /></td>
              <td><input aria-label={`Mark ${i + 1}`} type="number" min="0" max="100" step="any" placeholder="to do" value={r.grade} onChange={(e) => set(i, 'grade', e.target.value)} className="w-24" /></td>
              <td><input aria-label={`Weight ${i + 1}`} type="number" min="0" max="100" step="any" value={r.weight} onChange={(e) => set(i, 'weight', e.target.value)} className="w-24" /></td>
              <td><button type="button" aria-label={`Remove assessment ${i + 1}`} onClick={() => setRows(rows.filter((_, j) => j !== i))}>×</button></td>
            </tr>
          ))}
        </tbody>
      </table></div>
      <p>
        <button type="button" onClick={() => setRows([...rows, { name: `Assessment ${rows.length + 1}`, grade: '', weight: '0' }])}>Add assessment</button>
      </p>
      <p>Target grade (%): <input aria-label="Target grade" type="number" min="0" max="100" step="any" value={target} onChange={(e) => setTarget(e.target.value)} className="w-24" /></p>
      {error ? <p role="alert">{error}</p> : <div aria-live="polite" className="bg-stone-100 rounded-xl p-4 space-y-1">
        <p>Weights entered: <strong>{totalW}%</strong>{totalW !== 100 && ' (should total 100)'}</p>
        <p>Grade so far (on completed work): <strong>{current === null ? '—' : current.toFixed(1) + '%'}</strong></p>
        <p>Points banked: <strong>{pts.toFixed(1)}</strong> of {totalW}</p>
        {needed !== null && (
          <p>Average needed on the remaining {wLeft}% to reach {target}%: <strong>{needed.toFixed(1)}%</strong>{needed > 100 && ' (not reachable)'}{needed < 0 && ' (already secured)'}</p>
        )}
        {Math.abs(totalW - 100) >= 1e-8 && <p>Enter all assessments so weights total 100% before estimating your target score.</p>}
      </div>}
    </ToolPage>
  );
}
