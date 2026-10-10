import { ServiceLanding } from '../../components/ServiceLanding';

export default function ReportsPage() {
  return (
    <ServiceLanding
      slug="services/reports"
      title="Report Writing Service UK 2026: Business, Lab & Technical Reports | Academia Helper"
      description="Professional report writing for UK students: business, lab and technical reports with executive summaries, data and recommendations. Original, on-time."
      h1="Report Writing Service UK"
      intro="Structured business, lab and technical reports with executive summaries, methodology, findings and actionable recommendations."
      bullets={[
        'Business, lab, technical and internship reports',
        'Executive summary, findings, analysis and recommendations',
        'Tables, charts and correct academic formatting',
        'Plagiarism under 10%, 0% AI, unlimited revisions',
      ]}
      related={[
        { name: 'Business Report Assignment Guide', href: '/blog/business-report-assignment/' },
        { name: 'University Report Structure', href: '/blog/university-report-structure/' },
        { name: 'How to Write Report Recommendations', href: '/blog/write-report-recommendations/' },
      ]}
      faqs={[
        { q: 'What do you need to start my report?', a: 'Brief, rubric, word count, deadline, referencing style and any data or lecturer notes.' },
        { q: 'Do you include executive summaries?', a: 'Yes. Reports include executive summary, structure, analysis and recommendations matched to your rubric.' },
        { q: 'Is it original?', a: 'Yes. Human-written, plagiarism-checked, 0% AI, with unlimited revisions.' },
      ]}
    />
  );
}
