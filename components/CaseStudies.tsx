import React from 'react';

const CaseStudies: React.FC = () => {
  const studies = [
    {
      company: "TechFlow",
      industry: "SaaS",
      metric: "98%",
      metricLabel: "Reduction in First Response Time",
      title: "Scaling support from 500 to 50,000 users without hiring",
      description: "TechFlow faced a massive surge in users after their Series B. With TicketZero, they automated 82% of incoming tickets, allowing their core team to focus on enterprise clients.",
      tags: ["Automation", "Scale", "SaaS"]
    },
    {
      company: "Velour & Co.",
      industry: "E-Commerce",
      metric: "24/7",
      metricLabel: "Coverage across 12 Timezones",
      title: "Global support in 40+ languages instantly",
      description: "Velour needed to support customers in Europe and Asia. TicketZero's translation engine allowed their US-based team to oversee a global operation seamlessly.",
      tags: ["Localization", "E-Commerce", "CX"]
    },
    {
      company: "FinGuard",
      industry: "FinTech",
      metric: "Zero",
      metricLabel: "Security Breaches",
      title: "Enterprise-grade security for sensitive data",
      description: "Handling sensitive financial data requires perfection. TicketZero's private cloud deployment ensured 100% compliance while improving user trust.",
      tags: ["Security", "FinTech", "Compliance"]
    }
  ];

  return (
    <section className="pt-32 pb-24 min-h-screen bg-brand-dark relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-3">Success Stories</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Proven Results</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            See how forward-thinking companies are revolutionizing their customer experience with TicketZero.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {studies.map((study, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-8 md:p-12 border border-gray-800 hover:border-brand-primary/50 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-gray-700 pb-8 md:pb-0 md:pr-8 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-white mb-1">{study.company}</h4>
                  <span className="inline-block px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-xs font-semibold mb-6">{study.industry}</span>
                  
                  <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent mb-2">
                    {study.metric}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide font-semibold">
                    {study.metricLabel}
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-brand-card border border-gray-700 text-gray-300 text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;