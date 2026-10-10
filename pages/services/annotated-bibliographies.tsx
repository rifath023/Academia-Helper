import { ServiceLanding } from '../../components/ServiceLanding';

export default function AnnotatedBibliographiesPage() {
  return (
    <ServiceLanding
      slug="services/annotated-bibliographies"
      title="Annotated Bibliography Help UK 2026: Summaries & Evaluations | Academia Helper"
      description="Annotated bibliographies with concise summaries and evaluations for research preparation. Peer-reviewed sources, correct referencing."
      h1="Annotated Bibliography Help UK"
      intro="Annotated source lists with concise summaries and critical evaluations to prepare your research and literature review."
      bullets={[
        'Peer-reviewed source selection',
        'Concise summaries plus critical evaluation',
        'Correct Harvard, APA or MLA formatting',
        'Original, 0% AI, unlimited revisions',
      ]}
      related={[
        { name: 'How to Find Peer-Reviewed Articles', href: '/blog/how-to-find-peer-reviewed-articles/' },
        { name: 'How to Evaluate Academic Sources', href: '/blog/how-to-evaluate-the-credibility-of-academic-sources/' },
        { name: 'Harvard Referencing Guide', href: '/blog/harvard-referencing-guide/' },
      ]}
      faqs={[
        { q: 'How many sources?', a: 'We agree the count, level and style before quoting.' },
        { q: 'Do you evaluate, not just summarise?', a: 'Yes. Each entry includes summary plus relevance, credibility and limitation notes.' },
        { q: 'What style?', a: 'Harvard, APA 7th, MLA or your required style.' },
      ]}
    />
  );
}
