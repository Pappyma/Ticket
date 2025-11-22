import React from 'react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
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

  return (
    <footer className="bg-black border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <i className="fa-solid fa-ticket text-brand-primary text-xl"></i>
              <span className="font-bold text-xl text-white">Ticket<span className="text-brand-primary">Zero</span></span>
            </div>
            <p className="text-gray-500 text-sm">
              Revolutionizing customer experience through intelligent automation and human-centric AI design.
            </p>
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
              <li><a href="#benefits" onClick={(e) => handleScroll(e, 'benefits')} className="hover:text-brand-primary transition cursor-pointer">About Us</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-primary transition cursor-default opacity-70">Case Studies</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-primary transition cursor-default opacity-70">Blog</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-primary transition cursor-default opacity-70">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white transition">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white transition">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white transition">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
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