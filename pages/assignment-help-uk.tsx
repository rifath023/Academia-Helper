import Head from 'next/head';
import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CTASection } from '../components/CTASection';
import { ScrollProgress, FloatingActionButton } from '../components/ScrollComponents';

const faqs = [
  {
    q: 'How much does assignment help cost in the UK?',
    a: 'Pricing depends on word count, level, subject and deadline. Send your brief, rubric, word count and deadline via the order form or WhatsApp and you get a written quote showing exactly what is included before you pay.',
  },
  {
    q: 'How fast can you deliver?',
    a: 'We handle urgent deadlines and guarantee on-time delivery. Share your exact deadline and timezone. If a deadline is too tight for quality work we tell you honestly.',
  },
  {
    q: 'Is the work original and AI-free?',
    a: 'Yes. Human-written only, plagiarism under 10%, 0% AI content, with unlimited revisions until it matches your brief.',
  },
  {
    q: 'What do you need from me to start?',
    a: 'Assignment question, marking rubric, word count, deadline, referencing style (Harvard, APA, etc.) and any lecturer notes or sources.',
  },
];

export default function AssignmentHelpUk() {
  const canonical = 'https://www.academiahelper.com/assignment-help-uk/';
  const title = 'Assignment Help UK 2026: Essays, Coursework & Reports | Academia Helper';
  const description =
    'Assignment help for UK students: essays, coursework, case studies, reports and presentations. Human-written, plagiarism-free, 0% AI, on-time delivery. Get a written quote today.';
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
    name: 'Assignment Help UK',
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
              <Link href="/" className="hover:underline">Home</Link> / Assignment Help UK
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Assignment Help UK: Essays, Coursework, Case Studies &amp; Reports
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              Professional support for UK university students. Send your brief and rubric —
              get a written quote, human-written work, and on-time delivery with unlimited revisions.
            </p>
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

            <h2 className="text-2xl font-bold text-stone-900 mb-4">What we cover</h2>
            <ul className="list-disc pl-6 mb-10 text-stone-700 space-y-2">
              <li>Essays, reports, case studies, reflective journals, literature reviews</li>
              <li>Business, finance, accounting, marketing, HRM, management, computer science, psychology and more</li>
              <li>Harvard, APA, MLA, IEEE and other referencing styles</li>
              <li>Proofreading, editing, feedback and planning support</li>
            </ul>

            <h2 className="text-2xl font-bold text-stone-900 mb-4">How it works</h2>
            <ol className="list-decimal pl-6 mb-10 text-stone-700 space-y-2">
              <li>Send your assignment question, rubric, word count, deadline and referencing style.</li>
              <li>We confirm scope, price and delivery time in writing before payment.</li>
              <li>An MA/PhD-qualified subject expert completes your paper.</li>
              <li>You review and request unlimited revisions until it matches your brief.</li>
            </ol>

            <h2 className="text-2xl font-bold text-stone-900 mb-4">Related guides</h2>
            <ul className="mb-10 space-y-3">
              <li><Link href="/blog/assignment-help-uk/" className="text-amber-800 underline">Assignment Help UK: 12 Things to Check Before Choosing a Service</Link></li>
              <li><Link href="/blog/how-to-read-marking-rubric/" className="text-amber-800 underline">How to Read a University Marking Rubric</Link></li>
              <li><Link href="/blog/before-starting-assignment-checklist/" className="text-amber-800 underline">15 Things to Check Before You Start Any Assignment</Link></li>
              <li><Link href="/blog/assignment-help-cost-uk/" className="text-amber-800 underline">How Much Does Assignment Help Cost in the UK?</Link></li>
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
