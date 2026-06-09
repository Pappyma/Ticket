import React from 'react';

const Hero: React.FC = () => {
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

  // Opens the existing Dialogflow df-messenger widget embedded in index.html
  // (the same one behind the bottom-right "Ask me anything!" bubble).
  const openChatAgent = () => {
    const bubble = document.querySelector('df-messenger-chat-bubble') as
      | (HTMLElement & { openChat?: () => void })
      | null;
    bubble?.openChat?.();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-8" 
          data-aos="fade-down"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          The Future of Support is Here
        </div>

        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-5xl" 
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          Replace Your Tier-1 Support Team with <span className="text-gradient">AI Agents</span> That Resolve Most Support Tickets Instantly — 24/7
        </h1>

        <p 
          className="mt-4 max-w-3xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          Trusted by high-growth SaaS, e-commerce, and travel brands to slash response times to <strong>near-instant</strong>, drive higher CSAT, and deliver significant cost savings per agent replaced. Built on Google Cloud—minimized hallucinations, strong data protection, just grounded, human-like support.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 mb-16" 
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')}
            className="bg-brand-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/40 flex items-center justify-center gap-2 cursor-pointer"
          >
            See a 2-Min Demo <i className="fa-solid fa-play text-sm"></i>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="border border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center cursor-pointer"
          >
            Free Pilot: Automate Your Next 100 Tickets
          </a>
          <button
            type="button"
            onClick={openChatAgent}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/40 flex items-center justify-center gap-2 cursor-pointer"
          >
            Try the AI Agent <i className="fa-solid fa-robot text-sm"></i>
          </button>
        </div>

        {/* Live Chat Demo Visual */}
        <div 
          className="mt-8 relative w-full max-w-4xl animate-float" 
          data-aos="fade-up" 
          data-aos-delay="500"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10 h-full w-full"></div>
          <div className="glass-card rounded-xl p-4 md:p-6 border border-gray-700 shadow-2xl">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            {/* Mock Chat Interface */}
            <div className="space-y-6 text-left font-sans text-sm md:text-base">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-user text-gray-300"></i>
                </div>
                <div className="bg-gray-800/80 p-4 rounded-2xl rounded-tl-none max-w-md text-gray-200 border border-gray-700 shadow-sm">
                  My order #4922 hasn't arrived yet. Can you help?
                </div>
              </div>
              <div className="flex gap-3 flex-row-reverse">
                <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-robot text-white"></i>
                </div>
                <div className="bg-blue-900/40 border border-blue-500/30 p-4 rounded-2xl rounded-tr-none max-w-md text-blue-50 shadow-inner">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">TicketZero Agent • Instantly</span>
                  </div>
                  Hello! I've checked order #4922. It is currently out for delivery and should arrive by 5:00 PM today. Would you like the tracking link?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;