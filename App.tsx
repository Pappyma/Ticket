import React, { useEffect } from 'react';
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

// Declaration for AOS global
declare global {
  interface Window {
    AOS: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        offset: 50
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Capabilities />
        <WhyUs />
        <Infrastructure />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;