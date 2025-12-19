
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import Infrastructure from './components/Infrastructure';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudies from './components/CaseStudies';
import Blog from './components/Blog';
import PrivacyPolicy from './components/PrivacyPolicy';

// Declaration for AOS global
declare global {
  interface Window {
    AOS: any;
  }
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        offset: 50
      });
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans selection:bg-brand-primary/30 selection:text-white">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Stats />
            <Services />
            <Infrastructure />
            <Capabilities />
            <WhyUs />
            <About />
            <Testimonials />
            <Process />
            <Pricing />
            <Contact />
          </>
        )}
        
        {currentPage === 'case-studies' && <CaseStudies />}
        {currentPage === 'blog' && <Blog />}
        {currentPage === 'privacy' && <PrivacyPolicy />}
      </main>

      {/* Floating Scroll to Top */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-24 left-8 z-40 w-12 h-12 rounded-full glass-card border border-gray-700 flex items-center justify-center text-brand-primary transition-all duration-300 transform ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'} hover:bg-brand-primary hover:text-white hover:scale-110 shadow-xl`}
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
