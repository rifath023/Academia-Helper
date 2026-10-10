import { ServiceLanding } from '../../components/ServiceLanding';

export default function LiteratureReviewsPage() {
  return (
    <ServiceLanding
      slug="services/literature-reviews"
      title="Literature Review Help UK 2026: Critical Analysis & Gaps | Academia Helper"
      description="Critical literature reviews highlighting debates, themes and research gaps. Systematic searches, synthesis and correct referencing."
      h1="Literature Review Help UK"
      intro="Critical analysis of academic sources, synthesising debates, themes and research gaps for essays, dissertations and proposals."
      bullets={[
        'Thematic, critical and systematic-style reviews',
        'Peer-reviewed sources, synthesis not summary',
        'Research gaps and conceptual frameworks',
        'Original, 0% AI, unlimited revisions',
      ]}
      related={[
        { name: 'How to Write a Literature Review', href: '/blog/how-to-write-a-literature-review/' },
        { name: 'Systematic vs Literature Review', href: '/blog/systematic-review-vs-literature-review/' },
        { name: 'Synthesis vs Summary', href: '/blog/synthesis-vs-summary/' },
      ]}
      faqs={[
        { q: 'How many sources do you use?', a: 'Depends on word count and level. We agree scope before quoting and use peer-reviewed sources.' },
        { q: 'Do you find the papers?', a: 'Yes. We search academic sources, synthesise themes and highlight gaps with correct citations.' },
        { q: 'What referencing do you use?', a: 'Harvard, APA 7th, MLA or your required style.' },
      ]}
    />
  );
}
