import Head from 'next/head';
import Link from 'next/link';
import { Header } from './Header';
import { Footer } from './Footer';
import { CTASection } from './CTASection';
import { ScrollProgress, FloatingActionButton } from './ScrollComponents';

export interface ServiceLandingProps {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  bullets: string[];
  related: { name: string; href: string }[];
  faqs: { q: string; a: string }[];
}

export const ServiceLanding: React.FC<ServiceLandingProps> = ({
  slug,
  title,
  description,
  h1,
  intro,
  bullets,
  related,
  faqs,
}) => {
  const canonical = `https://www.academiahelper.com/${slug}/`;
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: h1,
    provider: { '@type': 'Organization', name: 'Academia Helper', url: 'https://www.academiahelper.com/' },
    areaServed: ['United Kingdom', 'United States', 'Australia'],
    url: canonical,
    description,
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      </Head>
      <div className="min-h-screen bg-white text-black overflow-x-hidden">
        <ScrollProgress />
        <Header />
        <main className="pt-28 pb-16 px-6 bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100">
          <div className="container mx-auto max-w-4xl">
            <p className="text-sm font-semibold text-stone-500 mb-4">
              <Link href="/" className="hover:underline">Home</Link> / {h1}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">{h1}</h1>
            <p className="text-xl text-stone-600 mb-8">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="/#contact" className="px-8 py-4 bg-stone-900 text-white rounded-2xl font-semibold text-center">
                Get a Written Quote
              </a>
              <a
                href="https://wa.me/8801577128417"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 text-white rounded-2xl font-semibold text-center"
              >
                WhatsApp Us Now
              </a>
            </div>

            <h2 className="text-2xl font-bold text-stone-900 mb-4">What you get</h2>
            <ul className="list-disc pl-6 mb-10 text-stone-700 space-y-2">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-stone-900 mb-4">How it works</h2>
            <ol className="list-decimal pl-6 mb-10 text-stone-700 space-y-2">
              <li>Send your brief, rubric, word count, deadline and referencing style.</li>
              <li>We confirm scope, price and delivery time in writing before payment.</li>
              <li>A qualified subject expert completes your work.</li>
              <li>You review and request unlimited revisions until it matches your brief.</li>
            </ol>

            {related.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Related guides</h2>
                <ul className="mb-10 space-y-3">
                  {related.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="text-amber-800 underline">{r.name}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="text-2xl font-bold text-stone-900 mb-4">FAQs</h2>
            <div className="space-y-4 mb-4">
              {faqs.map((f) => (
                <div key={f.q} className="border border-stone-200 rounded-2xl p-5 bg-white">
                  <h3 className="font-semibold text-stone-900 mb-2">{f.q}</h3>
                  <p className="text-stone-700">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
        <CTASection />
        <Footer />
        <FloatingActionButton />
      </div>
    </>
  );
};
