import { ServiceLanding } from '../../components/ServiceLanding';

export default function EssaysPage() {
  return (
    <ServiceLanding
      slug="services/essays"
      title="Essay Writing Service UK 2026: Argumentative & Analytical Essays | Academia Helper"
      description="Professional essay writing help for UK students: argumentative, analytical and descriptive essays. Discuss permitted support, requirements and deadlines before starting."
      h1="Essay Writing Service UK"
      intro="High-quality argumentative, analytical and descriptive essays crafted with academic rigor, matched to your brief, rubric and referencing style."
      bullets={[
        'Argumentative, analytical, descriptive and critical essays',
        'Clear thesis, academic argument and evidence integration',
        'Harvard, APA, MLA and other referencing styles',
        'Check attribution, assessment rules and agreed support terms',
      ]}
      related={[
        { name: 'University Essay Structure Guide', href: '/blog/university-essay-structure/' },
        { name: 'Argumentative Essay Structure', href: '/blog/argumentative-essay-structure/' },
        { name: 'Assignment Help UK: 12 Things to Check', href: '/blog/assignment-help-uk/' },
      ]}
      faqs={[
        { q: 'How fast can you write my essay?', a: 'Share your word count, deadline and timezone. Ask for written confirmation of availability and timing; an enquiry does not guarantee delivery.' },
        { q: 'Will it match my rubric?', a: 'Yes. Send the question, rubric, word count and referencing style. Experts structure the essay to your learning outcomes.' },
        { q: 'Is it original?', a: 'You are responsible for your own submission, citations and compliance with assessment rules. A similarity or AI score cannot guarantee acceptability.' },
      ]}
    />
  );
}
