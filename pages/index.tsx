import Head from 'next/head';
import { ScrollProgress, FloatingActionButton } from '../components/ScrollComponents';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Academia Helper | Study Guides, Grade Calculators & Academic Support</title>
        <meta name="description" content="Free grade calculators, dissertation planners and practical university study guides. Explore research methods, academic writing and academic support enquiries." />
        <meta name="keywords" content="assignment help, essay writing service, dissertation help, coursework help, UK, USA, Australia, academic writing service, Assignment Writing Services UK" />
        <meta property="og:title" content="Academia Helper | University Study Guides & Free Tools" />
        <meta property="og:description" content="Plan your studies with free calculators and practical guides to writing, research methods and university assessment. Contact Academia Helper about academic support." />
        <meta property="og:url" content="https://www.academiahelper.com/" />
        <link rel="canonical" href="https://www.academiahelper.com/" />
      </Head>
      

      <div className="min-h-screen bg-white text-black overflow-x-hidden relative">
        <ScrollProgress />
        <Header />
        <main>
          <section id="home"><HeroSection /></section>
          <section id="services"><FeaturesSection /></section>
          <section id="testimonials" className="py-16 px-6 bg-stone-50">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Free resources for your next assignment</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <a className="block rounded-2xl bg-white border border-stone-200 p-6" href="/tools/"><h3 className="text-xl font-semibold mb-2">Study calculators and planners</h3><p>Check weighted grades, plan word counts and map your dissertation milestones.</p></a>
                <a className="block rounded-2xl bg-white border border-stone-200 p-6" href="/blog/understand-assignment-brief/"><h3 className="text-xl font-semibold mb-2">Understand your assignment brief</h3><p>Identify the task, evidence requirements and marking criteria before you start.</p></a>
                <a className="block rounded-2xl bg-white border border-stone-200 p-6" href="/blog/"><h3 className="text-xl font-semibold mb-2">Browse the study guides</h3><p>Explore writing, referencing, research methods and university procedures.</p></a>
              </div>
            </div>
          </section>
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
        <FloatingActionButton />
      </div>
    </>
  );
}
