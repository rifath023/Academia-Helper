import { InfoPage } from '../../components/InfoPage';
export default function Tools() {
  const tools = [
    ['weighted-grade-calculator', 'Weighted grade calculator', 'See your grade so far and the mark needed on remaining assessments.'],
    ['gpa-calculator', 'GPA calculator', 'Average course grade points using credits on a 4.0 scale.'],
    ['australian-wam-gpa-calculator', 'Australian WAM calculator', 'Calculate a credit-weighted percentage and understand GPA differences.'],
    ['uk-degree-classification-calculator', 'UK degree classification', 'Estimate a weighted result while checking your programme’s rules.'],
    ['uk-to-us-gpa-converter', 'UK-to-US GPA guidance', 'Understand why conversion requires the receiving institution’s policy.'],
    ['dissertation-timeline-planner', 'Dissertation timeline', 'Work backwards from your deadline to plan research and writing milestones.'],
    ['assignment-word-count-planner', 'Word-count planner', 'Allocate a word budget across the main parts of an assignment.'],
    ['reading-time-calculator', 'Reading-time calculator', 'Estimate reading time using your word count and reading speed.'],
  ];
  return <InfoPage path="/tools/" title="Free Study Tools & Grade Calculators | Academia Helper" description="Calculate weighted grades, GPA and WAM, estimate a UK degree classification, and plan reading time and dissertation work." h1="Free study tools" intro="Plan your study time and check your grade calculations. Each tool explains its assumptions; your institution’s rules take precedence."><div className="tool-cards">{tools.map(([slug, name, description]) => <a className="tool-card" key={slug} href={`/tools/${slug}/`}><strong>{name}</strong><span>{description}</span></a>)}</div><p>Calculator inputs stay in this browser and are not saved when you reload the page.</p></InfoPage>;
}
