import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import WhyUs from './components/WhyUs';
import Infrastructure from './components/Infrastructure';
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

import AOS from 'aos';
import 'aos/dist/aos.css';


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    console.log('Initializing AOS...');
    try {
      AOS.init({
        duration: 800,
        once: true,
        offset: 50
      });
      console.log('AOS initialized');
    } catch (error) {
      console.error('AOS initialization failed:', error);
    }
  }, [currentPage]); // Re-init AOS on page change

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />s
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Stats />
            <Services />
            <Capabilities />
            <WhyUs />
            <Infrastructure />
            <Process />
            <Pricing />
            <Contact />
          </>
        )}
        
        {currentPage === 'case-studies' && <CaseStudies />}
        {currentPage === 'blog' && <Blog />}
        {currentPage === 'privacy' && <PrivacyPolicy />}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;