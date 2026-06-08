import React from 'react';

const Pricing: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
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

  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      subtitle: "Best for: Small teams automating FAQs",
      features: [
        "Up to 1,000 support tickets/month",
        "AI trained on your website + 5 PDFs",
        "Auto-resolution of most Tier-1 inquiries",
        "100+ languages, 24/7 availability",
        "Email + chat support"
      ],
      buttonText: "Get Started",
      popular: false,
      accentColor: "border-blue-500",
      textColor: "text-blue-400",
      bgGradient: "from-blue-500/10 to-transparent"
    },
    {
      name: "Professional",
      price: "$899",
      period: "/month",
      subtitle: "Best for: Scaling brands replacing 1 support agent",
      features: [
        "Up to 5,000 tickets/month",
        "Full knowledge base ingestion",
        "CRM: Shopify, HubSpot, Zendesk",
        "Automated workflows (Refunds, Resets)",
        "Live chat + email deflection",
        "Monthly CSAT & ROI report",
        "Priority support + onboarding call"
      ],
      buttonText: "Start Free Pilot",
      popular: true,
      accentColor: "border-brand-primary",
      textColor: "text-brand-primary",
      bgGradient: "from-brand-primary/20 to-transparent"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      subtitle: "Best for: High-volume brands replacing entire teams",
      features: [
        "Unlimited tickets & data sources",
        "Salesforce, ServiceNow, or custom API",
        "Dedicated AI agent manager",
        "Custom workflows & SLA monitoring",
        "GDPR, HIPAA, SOC 2 compliance",
        "Quarterly business reviews",
        "White-glove deployment & training"
      ],
      buttonText: "Book Consultation",
      popular: false,
      accentColor: "border-purple-500",
      textColor: "text-purple-400",
      bgGradient: "from-purple-500/10 to-transparent"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative bg-brand-dark border-t border-gray-800 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-brand-primary/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-brand-primary font-bold tracking-[0.2em] uppercase mb-3">
            Transparent Value
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pay for Outcomes—<span className="text-gradient">Not Just Features</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We price based on the value you get: fewer tickets, faster resolutions, and real cost savings. No guesswork. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative glass-card rounded-3xl p-8 border border-gray-800 flex flex-col transition-all duration-500 group ${
                plan.popular ? 'ring-2 ring-brand-primary/50 -translate-y-4 shadow-2xl shadow-brand-primary/20' : 'hover:-translate-y-2'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg z-20">
                  Most Popular
                </div>
              )}

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${plan.bgGradient} opacity-50 rounded-3xl pointer-events-none`}></div>

              <div className="relative z-10 flex-grow">
                <h4 className="text-xl font-bold text-white mb-1 tracking-wide">{plan.name}</h4>
                <p className="text-gray-400 text-xs font-semibold mb-6 uppercase tracking-wider">{plan.subtitle}</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`text-4xl font-extrabold text-white`}>{plan.price}</span>
                  <span className="text-gray-500 font-medium">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <i className={`fa-solid fa-circle-check mt-0.5 mr-3 ${plan.textColor} opacity-80`}></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-auto">
                <a 
                  href="#contact" 
                  onClick={handleScrollToContact}
                  className={`block w-full text-center py-4 rounded-xl transition-all font-bold text-sm ${
                    plan.popular 
                    ? 'bg-brand-primary hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-gray-800/80 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-500'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Notes Section */}
        <div className="max-w-4xl mx-auto space-y-6" data-aos="fade-up">
          <div className="p-8 rounded-2xl glass-card border border-gray-800 bg-brand-primary/5">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-success/20 flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-check-double text-brand-success"></i>
              </div>
              <div>
                <h5 className="text-white font-bold text-lg mb-1">All plans include:</h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Enterprise-grade Google Cloud infrastructure, 100% data privacy, zero hallucinations, and 24/7 monitoring.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-lightbulb text-brand-primary"></i>
              </div>
              <div>
                <h5 className="text-white font-bold text-lg mb-1">Not sure which plan?</h5>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Try our <strong className="text-brand-primary">Free Pilot</strong>: We’ll automate your next 100 tickets at no cost. 
                  Pay only if your CSAT improves or ticket deflection hits 70%.
                </p>
                <a 
                  href="#contact" 
                  onClick={handleScrollToContact}
                  className="inline-flex items-center gap-2 text-brand-primary font-bold hover:underline"
                >
                  Claim Free Pilot <i className="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;