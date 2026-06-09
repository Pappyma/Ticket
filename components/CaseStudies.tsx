import React from 'react';

const CaseStudies: React.FC = () => {
  // Illustrative, hypothetical examples — NOT real named clients or measured results.
  const studies = [
    {
      company: "Example: SaaS Platform",
      industry: "SaaS",
      metric: "Faster",
      metricLabel: "First-Response Times",
      title: "Scaling support without scaling the team",
      description: "For example, a fast-growing SaaS platform facing a surge in signups could automate a large share of routine Tier-1 tickets—freeing its core team to focus on complex, high-value accounts.",
      tags: ["Automation", "Scale", "SaaS"]
    },
    {
      company: "Example: Global E-commerce Brand",
      industry: "E-Commerce",
      metric: "24/7",
      metricLabel: "Always-On Coverage",
      title: "Around-the-clock support in many languages",
      description: "A retailer expanding into new regions could use AI translation to help customers in their own languages and time zones—overseen by a single team, without hiring separately for each market.",
      tags: ["Localization", "E-Commerce", "CX"]
    },
    {
      company: "Example: FinTech Company",
      industry: "FinTech",
      metric: "Secure",
      metricLabel: "Private Cloud Deployment",
      title: "Enterprise-grade security for sensitive data",
      description: "A company handling sensitive financial data could keep it in a private, isolated cloud environment with encryption and strict access controls—protecting customers while building trust.",
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
          <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-3">Example Outcomes</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">What's Possible with TicketZero</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Illustrative examples of the kinds of outcomes TicketZero is designed to deliver. These are hypothetical scenarios for illustration—not specific named clients or measured results.
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