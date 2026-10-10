import Head from 'next/head';
import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CTASection } from '../components/CTASection';
import { ScrollProgress, FloatingActionButton } from '../components/ScrollComponents';

const faqs = [
  {
    q: 'What coursework do you cover?',
    a: 'Essays, reports, portfolios, presentations, problem sets, lab reports and group projects across business, finance, marketing, HRM, computer science, psychology, healthcare and more.',
  },
  {
    q: 'Can you help with urgent or overdue coursework?',
    a: 'Yes. Share your deadline and timezone. We confirm in writing whether the deadline is feasible and guarantee on-time delivery.',
  },
  {
    q: 'Will my work match the marking rubric?',
    a: 'Yes. Send the full brief and rubric. Experts structure the work to the learning outcomes, word count allocation and referencing style required.',
  },
  {
    q: 'How do I get a price?',
    a: 'Send word count, level, subject, deadline and rubric via the order form or WhatsApp. You get a written quote with revisions included before payment.',
  },
];

export default function CourseworkHelpUk() {
  const canonical = 'https://www.academiahelper.com/coursework-help-uk/';
  const title = 'Coursework Help UK 2026: Reports, Essays & Presentations | Academia Helper';
  const description =
    'Coursework help for UK students: essays, reports, portfolios, presentations and problem sets. Rubric-matched, plagiarism-free, 0% AI, on-time. Get a written quote.';
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
    name: 'Coursework Help UK',
    provider: { '@type': 'Organization', name: 'Academia Helper', url: 'https://www.academiahelper.com/' },
    areaServed: 'United Kingdom',
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
              <Link href="/" className="hover:underline">Home</Link> / Coursework Help UK
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Coursework Help UK: Matched to Your Rubric
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              Get coursework written to your brief, word count and referencing style —
              with human-written, original work and unlimited revisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="/#contact" className="px-8 py-4 bg-stone-900 text-white rounded-2xl font-semibold text-center">
                Get Coursework Quote
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

            <h2 className="text-2xl font-bold text-stone-900 mb-4">How we match your rubric</h2>
            <ul className="list-disc pl-6 mb-10 text-stone-700 space-y-2">
              <li>We read your brief, learning outcomes and marking criteria before quoting</li>
              <li>Word count allocated by section, correct structure for essays vs reports</li>
              <li>Evidence, citations and referencing checked against your required style</li>
              <li>Unlimited revisions until it meets the brief</li>
            </ul>

            <h2 className="text-2xl font-bold text-stone-900 mb-4">Related guides</h2>
            <ul className="mb-10 space-y-3">
              <li><Link href="/blog/coursework-help-uk/" className="text-amber-800 underline">Coursework Help UK Guide</Link></li>
              <li><Link href="/blog/turn-rubric-into-assignment-plan/" className="text-amber-800 underline">Turn Your Rubric Into an Assignment Plan</Link></li>
              <li><Link href="/blog/assignment-word-count-allocation/" className="text-amber-800 underline">Assignment Word Count Allocation</Link></li>
              <li><Link href="/blog/understand-assignment-brief/" className="text-amber-800 underline">How to Understand Your Assignment Brief</Link></li>
            </ul>

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
}
