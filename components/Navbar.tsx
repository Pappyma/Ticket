
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    if (currentPage !== 'home') {
      onNavigate('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    const scrollToTarget = () => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(scrollToTarget, 100);
    } else {
      scrollToTarget();
    }
    
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const navLinkClass = "text-gray-300 hover:text-brand-primary transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer relative group";
  const mobileNavLinkClass = "text-gray-300 hover:text-white hover:bg-gray-800/50 block px-3 py-4 rounded-md text-lg font-medium cursor-pointer border-b border-gray-800/50";

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-2 shadow-2xl' : 'bg-transparent py-4'}`} 
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" 
            onClick={scrollToTop}
          >
            <div className="bg-brand-primary/10 p-2 rounded-xl group-hover:scale-110 group-hover:bg-brand-primary/20 transition-all">
              <i className="fa-solid fa-ticket text-brand-primary text-2xl"></i>
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">
              Ticket<span className="text-brand-primary">Zero</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={navLinkClass}>
                Services
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a href="#benefits" onClick={(e) => handleNavClick(e, 'benefits')} className={navLinkClass}>
                Why Us
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className={navLinkClass}>
                Process
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="bg-brand-primary hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 cursor-pointer ml-4"
              >
                Book Consultation
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button 
              type="button" 
              onClick={toggleMobileMenu} 
              className="inline-flex items-center justify-center p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-[64px] bg-brand-dark transition-all duration-300 z-40 ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="px-6 pt-8 pb-3 space-y-2 h-full overflow-y-auto">
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={mobileNavLinkClass}>Services</a>
          <a href="#benefits" onClick={(e) => handleNavClick(e, 'benefits')} className={mobileNavLinkClass}>Why Us</a>
          <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className={mobileNavLinkClass}>Process</a>
          <div className="pt-8">
             <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="w-full text-center bg-brand-primary text-white block px-3 py-4 rounded-xl text-lg font-bold shadow-lg shadow-blue-500/20">Book Demo</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
