import { ServiceLanding } from '../../components/ServiceLanding';

export default function DissertationsThesesPage() {
  return (
    <ServiceLanding
      slug="services/dissertations-theses"
      title="Dissertation & Thesis Help UK 2026: UG, Masters & Doctoral | Academia Helper"
      description="Comprehensive dissertation and thesis support: proposals, chapters, data analysis and editing for undergraduate, Masters and doctoral levels."
      h1="Dissertations & Theses Help UK"
      intro="Comprehensive research projects at undergraduate, Masters and doctoral levels — from proposal to final submission."
      bullets={[
        'Proposals, literature reviews, methodology and chapters',
        'Qualitative and quantitative guidance, SPSS and Excel',
        'Editing, proofreading and supervisor-feedback response',
        'Original, 0% AI, unlimited revisions',
      ]}
      related={[
        { name: 'Dissertation Help UK (Full Service)', href: '/dissertation-help-uk/' },
        { name: 'Dissertation Stages Explained', href: '/blog/dissertation-help-uk-stages/' },
        { name: '12-Week Dissertation Timeline', href: '/blog/12-week-dissertation-timeline/' },
      ]}
      faqs={[
        { q: 'What levels do you cover?', a: 'Undergraduate, Masters, MBA and doctoral-stage work. Send your level, topic and rubric.' },
        { q: 'Do you help with data?', a: 'Yes. Survey design, interviews, SPSS/Excel analysis and results write-up.' },
        { q: 'How do we start?', a: 'Send topic, level, word count, deadline and supervisor notes for a written quote.' },
      ]}
    />
  );
}
