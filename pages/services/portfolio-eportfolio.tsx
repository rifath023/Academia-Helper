import { ServiceLanding } from '../../components/ServiceLanding';

export default function PortfolioPage() {
  return (
    <ServiceLanding
      slug="services/portfolio-eportfolio"
      title="Portfolio & ePortfolio Help UK 2026: Reflections & Artefacts | Academia Helper"
      description="Curated portfolios and ePortfolios showcasing learning artefacts, reflections and professional development for UK assessments."
      h1="Portfolio & ePortfolio Help UK"
      intro="Curated collections showcasing learning artefacts, reflections and professional development for university assessment."
      bullets={[
        'Learning artefacts, reflections and evidence mapping',
        'Professional development and placement portfolios',
        'Clear structure matched to learning outcomes',
        'Original, 0% AI, unlimited revisions',
      ]}
      related={[
        { name: 'University Internship Report', href: '/blog/university-internship-report/' },
        { name: 'Reflective Essay Guide', href: '/blog/reflective-essay-university/' },
        { name: 'Understand Your Assignment Brief', href: '/blog/understand-assignment-brief/' },
      ]}
      faqs={[
        { q: 'What goes in my portfolio?', a: 'We map artefacts to learning outcomes and add concise reflective commentaries.' },
        { q: 'Do you help with ePortfolios?', a: 'Yes. Structure, reflections and evidence organisation for digital submissions.' },
        { q: 'What do you need?', a: 'Brief, rubric, artefacts list, word count and deadline.' },
      ]}
    />
  );
}
