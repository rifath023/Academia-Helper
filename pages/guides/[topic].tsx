import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { InfoPage } from '../../components/InfoPage';

const topics = {
  'research-methods': {
    title: 'Research Methods Guides: Sampling, Analysis & Proposals',
    intro: 'Start with the question you want to answer, then choose evidence, recruitment and analysis that fit it. These guides help you explain the decisions and their limits.',
    sections: [
      { title: 'Plan the project', note: 'Define the question, scope and feasible evidence before collecting data.', links: [['how-to-write-a-research-proposal', 'Research proposal planning'], ['qualitative-vs-quantitative-research', 'Qualitative and quantitative evidence']] },
      { title: 'Choose a sampling approach', note: 'Compare selection decisions, recruitment routes and the conclusions each design can support.', links: [['sampling-methods-student-research', 'Sampling methods overview'], ['convenience-sampling', 'Convenience sampling example'], ['purposive-sampling', 'Purposive selection criteria'], ['snowball-sampling', 'Snowball referral recruitment'], ['stratified-sampling', 'Stratified random sampling']] },
      { title: 'Analyse and explain', note: 'State your methodological approach and distinguish the data from your interpretation.', links: [['thematic-analysis-dissertation', 'Thematic analysis with a worked example'], ['content-analysis-vs-thematic-analysis', 'Compare content and thematic analysis'], ['turn-codes-into-themes', 'Developing themes from codes']] },
    ],
  },
  'academic-writing': {
    title: 'Academic Writing Guides: Briefs, Arguments & Literature Reviews',
    intro: 'Build your own answer from the assessment question, verified sources and clear reasoning. Follow the sequence below or start with the task currently blocking your draft.',
    sections: [
      { title: 'Understand and plan', note: 'Identify the task, audience, required evidence and marking criteria.', links: [['understand-assignment-brief', 'Decode your assignment brief'], ['university-essay-structure', 'Plan an essay structure'], ['critically-discuss-meaning', 'Understand critical discussion']] },
      { title: 'Work with evidence', note: 'Use sources accurately and explain how they support or qualify your position.', links: [['integrate-evidence-academic-writing', 'Integrate evidence into paragraphs'], ['synthesis-vs-summary', 'Synthesis versus summary'], ['literature-review-example', 'Annotated synthesis example']] },
      { title: 'Develop a literature review', note: 'Connect studies by the issue they address rather than producing a list of summaries.', links: [['how-to-write-a-literature-review', 'Write a literature review'], ['systematic-review-vs-literature-review', 'Distinguish review types'], ['how-to-critically-evaluate-an-academic-article', 'Evaluate an academic article']] },
    ],
  },
  'university-assessment': {
    title: 'University Assessment Guides: Grades, Deadlines & Resits',
    intro: 'Use these explainers to identify the questions to ask, then check your institution’s current rules. Grade scales, late penalties and appeal procedures differ by university, programme and year.',
    sections: [
      { title: 'Interpret marks', note: 'Keep grade labels, percentage marks and weighted averages distinct.', links: [['australian-university-grades', 'Australian grade scales and university comparison'], ['uk-degree-classifications', 'UK degree classifications']] },
      { title: 'Manage deadlines', note: 'Confirm the official deadline, applicable penalty and approved changes before relying on a calculation.', links: [['late-submission-penalty-uk', 'Late penalties with verified university examples'], ['extenuating-circumstances-uk-university', 'Extenuating circumstances'], ['12-week-dissertation-timeline', 'Dissertation milestone planning']] },
      { title: 'Understand the next step', note: 'Check eligibility, deadlines and evidence requirements with your university or student advice service.', links: [['resit-vs-resubmission-uk', 'Resit versus resubmission'], ['capped-resit-marks-uk', 'Capped resit marks'], ['academic-appeal-uk-university', 'Academic appeals']] },
    ],
  },
};
type Topic = keyof typeof topics;

export default function GuideHub({ topic }: { topic: Topic }) {
  const hub = topics[topic];
  const url = `https://www.academiahelper.com/guides/${topic}/`;
  const links = hub.sections.flatMap(section => section.links);
  return <InfoPage path={`/guides/${topic}/`} title={`${hub.title} | Academia Helper`} description={hub.intro} h1={hub.title} intro={hub.intro} jsonLd={[{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: hub.title, url, mainEntity: { '@type': 'ItemList', itemListElement: links.map(([slug, name], index) => ({ '@type': 'ListItem', position: index + 1, name, url: `https://www.academiahelper.com/blog/${slug}/` })) } }]}>
    {hub.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.note}</p><ul>{section.links.map(([slug, name]) => <li key={slug}><Link href={`/blog/${slug}/`}>{name}</Link></li>)}</ul></section>)}
    <h2>Tools and next steps</h2><p>Use <Link href="/tools/">free calculators and planners</Link> to check arithmetic and organise your workload. Their estimates do not replace programme rules, supervisor guidance or assessment instructions.</p>
    <p>Browse the <Link href="/blog/">complete article archive</Link> or explore {Object.entries(topics).filter(([key]) => key !== topic).map(([key, value], index) => <span key={key}>{index > 0 ? ' and ' : ''}<Link href={`/guides/${key}/`}>{value.title.split(':')[0].toLowerCase()}</Link></span>)}.</p>
  </InfoPage>;
}
export const getStaticPaths: GetStaticPaths = async () => ({ paths: Object.keys(topics).map(topic => ({ params: { topic } })), fallback: false });
export const getStaticProps: GetStaticProps = async ({ params }) => ({ props: { topic: params?.topic } });
