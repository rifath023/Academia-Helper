import React from 'react';
import { InfoPage, orgJsonLd } from './InfoPage';

export interface Faq { q: string; a: string }

interface Props {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  faqs: Faq[];
  related?: { href: string; label: string }[];
  children: React.ReactNode; // calculator
  explainer: React.ReactNode;
}

export function ToolPage({ path, title, description, h1, intro, faqs, related = [], children, explainer }: Props) {
  const jsonLd = [
    orgJsonLd,
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: h1,
      url: `https://www.academiahelper.com${path}`,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
  return (
    <InfoPage path={path} title={title} description={description} h1={h1} intro={intro} jsonLd={jsonLd}>
      <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">{children}</div>
      {explainer}
      <h2>Frequently asked questions</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3 className="font-semibold text-stone-900">{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
      {related.length > 0 && (
        <>
          <h2>Related</h2>
          <ul>
            {related.map((r) => (
              <li key={r.href}><a href={r.href}>{r.label}</a></li>
            ))}
          </ul>
        </>
      )}
      <p className="text-sm text-stone-500">Results are estimates. Always confirm against your institution&apos;s official regulations. Calculations run in your browser; nothing is sent to us.</p>
    </InfoPage>
  );
}
