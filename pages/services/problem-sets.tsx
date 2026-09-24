import { ServiceLanding } from '../../components/ServiceLanding';

export default function ProblemSetsPage() {
  return (
    <ServiceLanding
      slug="services/problem-sets"
      title="Problem Sets Help UK 2026: Maths, Economics & Statistics | Academia Helper"
      description="Accurate solutions for quantitative subjects including maths, economics, statistics, finance and physics with clear workings."
      h1="Problem Sets Help UK"
      intro="Accurate step-by-step solutions for maths, economics, statistics, finance and physics problem sets."
      bullets={[
        'Maths, economics, statistics, finance and physics',
        'Step-by-step workings and explanations',
        'SPSS, Excel and quantitative analysis where needed',
        'Accurate, original, unlimited revisions',
      ]}
      related={[
        { name: 'Statistics Homework Help', href: '/blog/statistics-homework-help/' },
        { name: 'Accounting Homework Help', href: '/blog/accounting-homework-help/' },
        { name: 'P-Value Explained for Students', href: '/blog/p-value-explained-students/' },
      ]}
      faqs={[
        { q: 'Do you show workings?', a: 'Yes. Solutions include clear steps so you can follow and learn the method.' },
        { q: 'What do you need?', a: 'Question sheet, deadline, level, required methods and any data files.' },
        { q: 'Can you meet tight deadlines?', a: 'Yes for most problem sets. We confirm feasibility before quoting.' },
      ]}
    />
  );
}
