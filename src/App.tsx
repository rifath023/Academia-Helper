import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollProgress } from "./components/ScrollComponents";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { FloatingActionButton } from "./components/ScrollComponents";
import { BlogPage } from "./pages/BlogPage";

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden relative">
      <div className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>
        <section id="services">
          <FeaturesSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <FAQSection />
        <CTASection />
      </div>
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black overflow-x-hidden relative">
        <ScrollProgress />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
        <FloatingActionButton />
      </div>
    </Router>
  );
}

export default App;