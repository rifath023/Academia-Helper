import Head from 'next/head';
import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CTASection } from '../components/CTASection';
import { ScrollProgress, FloatingActionButton } from '../components/ScrollComponents';

const faqs = [
  {
    q: 'What dissertation help do you offer?',
    a: 'Topic selection, proposal, literature review, methodology, data analysis (SPSS, Excel), results and discussion chapters, editing and full-dissertation support for undergraduate, Masters and MBA levels.',
  },
  {
    q: 'Can you help if my supervisor is not replying or my proposal was rejected?',
    a: 'Yes. Share your feedback and rubric. We help you narrow the topic, fix methodology gaps, and prepare a stronger resubmission with a clear plan.',
  },
  {
    q: 'Do you help with data analysis and questionnaires?',
    a: 'Yes. Survey design, sample size guidance, data cleaning, SPSS analysis, interpretation and APA 7th reporting of results.',
  },
  {
    q: 'How do we start?',
    a: 'Send your topic, level, word count, deadline, rubric and any supervisor notes via the order form or WhatsApp. We confirm scope, price and timeline in writing before payment.',
  },
];

export default function DissertationHelpUk() {
  const canonical = 'https://www.academiahelper.com/dissertation-help-uk/';
  const title = 'Dissertation Help UK 2026: Proposal to Final Submission | Academia Helper';
  const description =
    'Dissertation help for UK students: proposals, literature reviews, methodology, SPSS data analysis, results and editing. Human-written, original, on-time. Get a written quote.';
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
    name: 'Dissertation Help UK',
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
              <Link href="/" className="hover:underline">Home</Link> / Dissertation Help UK
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Dissertation Help UK: From Topic to Final Submission
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              Structured support for proposals, chapters, data analysis and editing.
              Send your topic and rubric for a written quote and realistic timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="/#contact" className="px-8 py-4 bg-stone-900 text-white rounded-2xl font-semibold text-center">
                Get Dissertation Quote
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

            <h2 className="text-2xl font-bold text-stone-900 mb-4">Stages we support</h2>
            <ul className="list-disc pl-6 mb-10 text-stone-700 space-y-2">
              <li>Topic narrowing, research questions, objectives and proposal writing</li>
              <li>Literature review, conceptual framework, methodology design</li>
              <li>Questionnaire design, interviews, SPSS / Excel analysis and interpretation</li>
              <li>Results, discussion, conclusion, proofreading and formatting</li>
            </ul>

            <h2 className="text-2xl font-bold text-stone-900 mb-4">Related guides</h2>
            <ul className="mb-10 space-y-3">
              <li><Link href="/blog/dissertation-help-uk-stages/" className="text-amber-800 underline">Dissertation Help UK: Stages Explained</Link></li>
              <li><Link href="/blog/12-week-dissertation-timeline/" className="text-amber-800 underline">12-Week Dissertation Timeline</Link></li>
              <li><Link href="/blog/dissertation-proposal-help/" className="text-amber-800 underline">Dissertation Proposal Help</Link></li>
              <li><Link href="/blog/mba-dissertation-help/" className="text-amber-800 underline">MBA Dissertation Help</Link></li>
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
