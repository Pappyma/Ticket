import React from 'react';

const WhyUs: React.FC = () => {
  const criteria = [
    { text: "Handle 500+ support tickets/month", icon: "fa-ticket" },
    { text: "Struggle to hire or retain support staff", icon: "fa-user-minus" },
    { text: "Need 24/7 coverage across time zones", icon: "fa-clock" },
    { text: "Use Shopify, Salesforce, or HubSpot", icon: "fa-plug" }
  ];

  const trustCards = [
    {
      title: "Infinite Scalability",
      description: "Whether you get 10 tickets or 10,000 in a day, your AI agents handle the load instantly—no hiring freezes, no onboarding delays, no overtime costs.",
      icon: "fa-chart-line-up",
      color: "text-blue-400"
    },
    {
      title: "100+ Languages. Zero Friction.",
      description: "Your customers get support in their native language—Spanish, French, Japanese, Arabic, and more—with perfect fluency and cultural nuance.",
      icon: "fa-language",
      color: "text-purple-400"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Data is processed in private, isolated environments on Google Cloud—with end-to-end encryption and strict access controls.",
      icon: "fa-shield-check",
      color: "text-green-400"
    },
    {
      title: "Google-Powered Intelligence",
      description: "We build agents on the same AI infrastructure trusted by Fortune 500 companies—so you get cutting-edge accuracy without managing servers.",
      icon: "fa-brain-circuit",
      color: "text-brand-primary"
    },
    {
      title: "100% Data Privacy",
      description: "Your business data is never used to train public AI models. It stays in your dedicated environment—owned by you, governed by you.",
      icon: "fa-lock-keyhole",
      color: "text-pink-400"
    },
    {
      title: "Zero Technical Headache",
      description: "We handle all the complex AI engineering, cloud configuration, and integration work. You get a ready-to-deploy agent—no DevOps required.",
      icon: "fa-wand-sparkles",
      color: "text-orange-400"
    }
  ];

  const trustBadges = [
    { label: "Strict Access Controls", icon: "fa-lock" },
    { label: "Google Cloud Infrastructure", icon: "fa-cloud" },
    { label: "GDPR & CCPA Ready", icon: "fa-earth-americas" },
    { label: "Enterprise Encryption", icon: "fa-shield-halved" }
  ];

  return (
    <section id="benefits" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-brand-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">Why TicketZero</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Built for Modern Growth—Without the Headcount
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            High-growth companies don’t need more chatbots. They need a support workforce that scales instantly, never sleeps, and protects their brand. That’s TicketZero.
          </p>
        </div>

        {/* Targeted Solutions / Checklist Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div data-aos="fade-right">
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-gray-800 shadow-2xl">
              <p className="text-2xl font-bold text-white mb-8">If you...</p>
              <ul className="space-y-6">
                {criteria.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-4 rounded-xl bg-blue-900/20 border border-blue-500/20">
                <p className="text-blue-200 font-medium italic text-center">
                  "...then TicketZero isn’t just an upgrade—it’s your unfair advantage."
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pl-8" data-aos="fade-left">
             <h4 className="text-2xl font-bold text-white mb-4">The Support Bottleneck Ends Here</h4>
             <p className="text-gray-400 mb-6 leading-relaxed">
               Most companies scale their support by throwing people at the problem. We scale it by throwing intelligence. By automating the repetitive majority, your human agents can finally focus on what matters: complex problem solving and white-glove service.
             </p>
             <div className="flex flex-col gap-4">
               <div className="flex items-center gap-4 text-brand-primary font-bold">
                 <i className="fa-solid fa-circle-check"></i>
                 <span>Enterprise-ready deployment in under 7 days</span>
               </div>
               <div className="flex items-center gap-4 text-brand-success font-bold">
                 <i className="fa-solid fa-circle-check"></i>
                 <span>Seamless integration with your existing CRM</span>
               </div>
             </div>
          </div>
        </div>

        {/* 6-Card Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {trustCards.map((card, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl border border-gray-800 hover:border-brand-primary/30 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6 ${card.color} group-hover:bg-brand-primary group-hover:text-white transition-all`}>
                <i className={`fa-solid ${card.icon} text-xl`}></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
                {card.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges Row */}
        <div className="pt-12 border-t border-gray-800" data-aos="fade-up">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-400 text-sm font-semibold hover:text-white transition-colors cursor-default grayscale hover:grayscale-0">
                <i className={`fa-solid ${badge.icon} text-brand-primary`}></i>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;