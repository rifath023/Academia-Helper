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
        <title>Academia Helper | Professional Assignment Writing Service in UK, USA & Australia</title>
        <meta name="description" content="Get expert assignment help with Academia Helper. Our MA & PhD writers provide essays, dissertations, coursework & proofreading services in the UK, USA, and Australia. 100% plagiarism-free, affordable, and always on time." />
        <meta name="keywords" content="assignment help, essay writing service, dissertation help, coursework help, UK, USA, Australia, online assignment writing, academic writing service" />
        <meta property="og:title" content="Academia Helper | Professional Assignment Writing Service" />
        <meta property="og:description" content="Expert academic writing services for UK and USA students. Professional, original, and timely delivery guaranteed with 0% AI content." />
        <meta property="og:url" content="https://YOUR-DOMAIN.com/" />
        <link rel="canonical" href="https://YOUR-DOMAIN.com/" />
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
