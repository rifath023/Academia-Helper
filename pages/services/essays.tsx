import { ServiceLanding } from '../../components/ServiceLanding';

export default function EssaysPage() {
  return (
    <ServiceLanding
      slug="services/essays"
      title="Essay Writing Service UK 2026: Argumentative & Analytical Essays | Academia Helper"
      description="Professional essay writing help for UK students: argumentative, analytical and descriptive essays. Human-written, plagiarism-free, 0% AI, on-time with unlimited revisions."
      h1="Essay Writing Service UK"
      intro="High-quality argumentative, analytical and descriptive essays crafted with academic rigor, matched to your brief, rubric and referencing style."
      bullets={[
        'Argumentative, analytical, descriptive and critical essays',
        'Clear thesis, academic argument and evidence integration',
        'Harvard, APA, MLA and other referencing styles',
        'Plagiarism under 10%, 0% AI content, unlimited revisions',
      ]}
      related={[
        { name: 'University Essay Structure Guide', href: '/blog/university-essay-structure/' },
        { name: 'Argumentative Essay Structure', href: '/blog/argumentative-essay-structure/' },
        { name: 'Assignment Help UK: 12 Things to Check', href: '/blog/assignment-help-uk/' },
      ]}
      faqs={[
        { q: 'How fast can you write my essay?', a: 'Share your word count and deadline. We confirm in writing whether the deadline is feasible and guarantee on-time delivery.' },
        { q: 'Will it match my rubric?', a: 'Yes. Send the question, rubric, word count and referencing style. Experts structure the essay to your learning outcomes.' },
        { q: 'Is it original?', a: 'Yes. Human-written, plagiarism-checked under 10%, 0% AI, with unlimited revisions.' },
      ]}
    />
  );
}
