import Head from 'next/head';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CTASection } from '../../components/CTASection';
import { ScrollProgress, FloatingActionButton } from '../../components/ScrollComponents';

const services = [
  { name: 'Essays', href: '/services/essays/', desc: 'Argumentative, analytical and descriptive essays.' },
  { name: 'Reports', href: '/services/reports/', desc: 'Business, lab and technical reports.' },
  { name: 'Case Studies', href: '/services/case-studies/', desc: 'Real-world scenario analysis.' },
  { name: 'Reflective Journals', href: '/services/reflective-journals/', desc: 'Theory-to-practice reflections.' },
  { name: 'Literature Reviews', href: '/services/literature-reviews/', desc: 'Critical synthesis and gaps.' },
  { name: 'Presentations', href: '/services/presentations/', desc: 'Slides and speaker notes.' },
  { name: 'Problem Sets', href: '/services/problem-sets/', desc: 'Maths, economics and statistics.' },
  { name: 'Dissertations & Theses', href: '/services/dissertations-theses/', desc: 'UG, Masters and doctoral projects.' },
  { name: 'Annotated Bibliographies', href: '/services/annotated-bibliographies/', desc: 'Summaries and evaluations.' },
  { name: 'Group Projects', href: '/services/group-projects/', desc: 'Team reports and presentations.' },
  { name: 'Portfolio / ePortfolio', href: '/services/portfolio-eportfolio/', desc: 'Artefacts and reflections.' },
];

export default function ServicesIndex() {
  const canonical = 'https://www.academiahelper.com/services/';
  const title = 'Academic Writing Services UK 2026: Essays to Dissertations | Academia Helper';
  const description =
    'All academic writing services: essays, reports, case studies, dissertations, presentations and more. Human-written, original, on-time.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
      </Head>
      <div className="min-h-screen bg-white text-black overflow-x-hidden">
        <ScrollProgress />
        <Header />
        <main className="pt-28 pb-16 px-6 bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100">
          <div className="container mx-auto max-w-5xl">
            <p className="text-sm font-semibold text-stone-500 mb-4">
              <Link href="/" className="hover:underline">Home</Link> / Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Our Academic Writing Services</h1>
            <p className="text-xl text-stone-600 mb-10">
              Choose your assignment type. Every page has a written quote, human-written work and unlimited revisions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block bg-white rounded-2xl border border-stone-200 p-6 hover:shadow-xl transition-shadow"
                >
                  <h2 className="text-xl font-bold text-stone-900 mb-2">{s.name}</h2>
                  <p className="text-stone-600 mb-3">{s.desc}</p>
                  <span className="font-semibold text-stone-900 underline underline-offset-4">Learn more →</span>
                </Link>
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
