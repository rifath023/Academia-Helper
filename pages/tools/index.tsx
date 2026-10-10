import { InfoPage } from '../../components/InfoPage';
export default function Tools() {
  const tools = [
    ['weighted-grade-calculator', 'Weighted grade and final-exam target'],
    ['gpa-calculator', 'Credit-weighted GPA on a 4.0 scale'],
    ['australian-wam-gpa-calculator', 'Australian WAM and GPA guidance'],
    ['uk-degree-classification-calculator', 'UK degree classification estimate'],
    ['uk-to-us-gpa-converter', 'UK-to-US GPA conversion guidance'],
    ['dissertation-timeline-planner', 'Dissertation timeline planner'],
    ['assignment-word-count-planner', 'Assignment word-count planner'],
    ['reading-time-calculator', 'Reading-time calculator'],
  ];
  return <InfoPage path="/tools/" title="Free Study Tools & Grade Calculators | Academia Helper" description="Calculate weighted grades, GPA and WAM, estimate a UK degree classification, and plan reading time and dissertation work." h1="Free study tools" intro="Plan your study time and check your grade calculations. Each tool explains its assumptions; your institution’s rules take precedence."><ul>{tools.map(([slug, name]) => <li key={slug}><a href={`/tools/${slug}/`}>{name}</a></li>)}</ul><p>Calculator inputs stay in this browser and are not saved when you reload the page.</p></InfoPage>;
}
