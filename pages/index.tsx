import Head from 'next/head';
import { ScrollProgress, FloatingActionButton } from '../components/ScrollComponents';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Academia Helper | University Study Resources, Guides & Free Tools</title>
        <meta name="description" content="Free university study guides, grade calculators and study planners for UK, US and Australian students, with academic support alongside them." />
        <meta name="keywords" content="assignment help, essay writing service, dissertation help, coursework help, UK, USA, Australia, academic writing service, Assignment Writing Services UK" />
        <meta property="og:title" content="Academia Helper | Assignment Writing Services UK" />
        <meta property="og:description" content="Explore study guides on essays, dissertations and research methods, plus free calculators and planners. Check your university rules before applying general guidance." />
        <meta property="og:url" content="https://www.academiahelper.com/" />
        <link rel="canonical" href="https://www.academiahelper.com/" />
      </Head>
      

      <div className="min-h-screen bg-white text-black overflow-x-hidden relative">
        <ScrollProgress />
        <Header />
        <main>
          <section id="home"><HeroSection /></section>
          <section id="services"><FeaturesSection /></section>
          <section id="testimonials"><TestimonialsSection /></section>
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
        <FloatingActionButton />
      </div>
    </>
  );
}
