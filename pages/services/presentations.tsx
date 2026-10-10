import { ServiceLanding } from '../../components/ServiceLanding';

export default function PresentationsPage() {
  return (
    <ServiceLanding
      slug="services/presentations"
      title="Presentation Help UK 2026: PowerPoint Slides & Speaker Notes | Academia Helper"
      description="Professional PowerPoint presentations with clear slides, speaker notes and academic structure for UK university assessments."
      h1="Academic Presentation Help UK"
      intro="Professional PowerPoint content, slide structure and speaker notes designed for academic marking criteria."
      bullets={[
        'PowerPoint slides with clear academic structure',
        'Speaker notes and Q&A preparation',
        'Charts, visuals and concise bullet points',
        'Original, 0% AI, unlimited revisions',
      ]}
      related={[
        { name: 'University Presentation Structure', href: '/blog/university-presentation-structure/' },
        { name: 'Speaker Notes Guide', href: '/blog/academic-presentation-speaker-notes/' },
        { name: 'How Many Slides for a Presentation?', href: '/blog/how-many-slides-presentation/' },
      ]}
      faqs={[
        { q: 'Do you make the slides?', a: 'We provide slide content, structure and speaker notes. Send your topic, slide count, deadline and rubric.' },
        { q: 'Can you help with Q&A?', a: 'Yes. We prepare likely questions and concise answers linked to your slides.' },
        { q: 'How fast?', a: 'Urgent turnarounds available. We confirm feasibility in writing before payment.' },
      ]}
    />
  );
}
