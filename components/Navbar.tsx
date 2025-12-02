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
      // Allow time for Home component to mount before scrolling
      setTimeout(scrollToTarget, 100);
    } else {
      scrollToTarget();
    }
    
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const navLinkClass = "hover:text-brand-primary transition-colors px-3 py-2 rounded-md text-sm font-medium cursor-pointer";
  const mobileNavLinkClass = "text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer";

  return (
    <nav 
      className={`fixed w-full z-50 glass-nav transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`} 
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={scrollToTop}
          >
            <i className="fa-solid fa-ticket text-brand-primary text-2xl"></i>
            <span className="font-bold text-2xl tracking-tight text-white">
              Ticket<span className="text-brand-primary">Zero</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={navLinkClass}>Services</a>
              <a href="#benefits" onClick={(e) => handleNavClick(e, 'benefits')} className={navLinkClass}>Why Us</a>
              <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className={navLinkClass}>Process</a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="bg-brand-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 cursor-pointer"
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-b border-gray-800" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={mobileNavLinkClass}>Services</a>
            <a href="#benefits" onClick={(e) => handleNavClick(e, 'benefits')} className={mobileNavLinkClass}>Why Us</a>
            <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className={mobileNavLinkClass}>Process</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-brand-primary font-bold block px-3 py-2 rounded-md text-base cursor-pointer">Book Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;