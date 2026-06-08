import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    onNavigate('home');
    
    setTimeout(() => {
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
    }, 100);
  };

  const handlePageNav = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <footer className="bg-black border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <i className="fa-solid fa-ticket text-brand-primary text-xl"></i>
              <span className="font-bold text-xl text-white">Ticket<span className="text-brand-primary">Zero</span></span>
            </div>
            <p className="text-gray-500 text-sm">
              Revolutionizing customer experience through intelligent automation and human-centric AI design.
            </p>
            <a
              href="https://wa.me/393892829798"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-[#25D366] hover:text-[#1ebe57] transition font-semibold text-sm"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              Chat on WhatsApp
            </a>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-brand-primary transition cursor-pointer">AI Agents</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-brand-primary transition cursor-pointer">Ticket Automation</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-brand-primary transition cursor-pointer">Live Chat</a></li>
              <li><a href="#process" onClick={(e) => handleScroll(e, 'process')} className="hover:text-brand-primary transition cursor-pointer">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-brand-primary transition cursor-pointer">About Us</a></li>
              <li><a href="#" onClick={(e) => handlePageNav(e, 'case-studies')} className="hover:text-brand-primary transition cursor-pointer">Case Studies</a></li>
              <li><a href="#" onClick={(e) => handlePageNav(e, 'blog')} className="hover:text-brand-primary transition cursor-pointer">Blog</a></li>
              <li><a href="#" onClick={(e) => handlePageNav(e, 'privacy')} className="hover:text-brand-primary transition cursor-pointer">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-600 text-sm">&copy; 2023 TicketZero Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;