import { ServiceLanding } from '../../components/ServiceLanding';

export default function CaseStudiesPage() {
  return (
    <ServiceLanding
      slug="services/case-studies"
      title="Case Study Help UK 2026: Business, Law & Healthcare Analysis | Academia Helper"
      description="In-depth case study analysis for UK students across business, law and healthcare. Real-world scenarios, theory application and recommendations."
      h1="Case Study Writing Help UK"
      intro="In-depth real-world scenario analysis linking theory to practice, with clear structure, evidence and practical recommendations."
      bullets={[
        'Business, law, healthcare and MBA case studies',
        'Theory application, SWOT and critical analysis',
        'Evidence-based recommendations',
        'Original, 0% AI, unlimited revisions',
      ]}
      related={[
        { name: 'Case Study Assignment Help UK', href: '/blog/case-study-assignment-help-uk/' },
        { name: 'How to Write a Case Study Assignment', href: '/blog/case-study-assignment/' },
        { name: 'How to Apply Theory to a Case Study', href: '/blog/apply-theory-case-study/' },
      ]}
      faqs={[
        { q: 'Can you apply my module theory?', a: 'Yes. Send your brief and required frameworks. Experts apply them to the case with citations.' },
        { q: 'Do you cover MBA cases?', a: 'Yes. MBA, business, law and healthcare scenarios with professional structure.' },
        { q: 'How do I order?', a: 'Send the case, questions, rubric, word count and deadline for a written quote.' },
      ]}
    />
  );
}
