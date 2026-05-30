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
        <title>Academia Helper | Expert Assignment Writing Service</title>
        <meta name="description" content="Expert assignment help for UK & USA students. MA & PhD writers deliver plagiarism-free essays, dissertations and coursework on time. 0% AI content guaranteed." />
        <meta name="keywords" content="assignment help, essay writing service, dissertation help, coursework help, UK, USA, Australia, academic writing service" />
        <meta property="og:title" content="Academia Helper | Expert Assignment Writing Service" />
        <meta property="og:description" content="Expert assignment help for UK & USA students. Plagiarism-free, on time, 0% AI content guaranteed." />
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
