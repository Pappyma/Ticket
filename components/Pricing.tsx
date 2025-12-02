import React from 'react';

const Pricing: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const plans = [
    {
      name: "STARTER",
      subtitle: "Best for FAQs",
      features: [
        "Training: 1 Website",
        "Automated Q&A",
        "100+ Languages",
        "Basic Lead Capture"
      ],
      buttonText: "Request Starter Quote",
      accentColor: "border-blue-500",
      textColor: "text-blue-400",
      bgGradient: "from-blue-500/10 to-transparent"
    },
    {
      name: "PROFESSIONAL",
      subtitle: "Best for Sales",
      features: [
        "Training: Sites + PDFs",
        "Smart Appointment Booking",
        "Lead Qualification Logic",
        "Priority Email Support"
      ],
      buttonText: "Request Professional Quote",
      accentColor: "border-purple-500",
      textColor: "text-purple-400",
      bgGradient: "from-purple-500/10 to-transparent"
    },
    {
      name: "ENTERPRISE",
      subtitle: "Best for Complex Needs",
      features: [
        "Unlimited Data Sources",
        "Full CRM Integration",
        "Custom Workflows",
        "Dedicated Manager"
      ],
      buttonText: "Book Consultation",
      accentColor: "border-pink-500",
      textColor: "text-pink-400",
      bgGradient: "from-pink-500/10 to-transparent"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative bg-brand-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-brand-primary font-bold tracking-[0.2em] uppercase mb-3">
            Tailored Solutions
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Choose Your Intelligence Level
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the level of intelligence your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-card rounded-2xl p-8 border-t-4 ${plan.accentColor} flex flex-col hover:-translate-y-2 transition-transform duration-300`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${plan.bgGradient} opacity-50 rounded-2xl pointer-events-none`}></div>

              <div className="relative z-10 flex-grow">
                <h4 className={`text-2xl font-bold ${plan.textColor} mb-1 tracking-wide`}>{plan.name}</h4>
                <p className="text-gray-400 text-sm font-medium mb-8 uppercase tracking-wider">{plan.subtitle}</p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <i className={`fa-solid fa-check mt-1 mr-3 ${plan.textColor}`}></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-auto">
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="block w-full text-center py-3 rounded-lg border border-gray-600 hover:border-white text-white hover:bg-gray-800 transition-all font-semibold text-sm"
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <p className="text-xl text-white font-bold tracking-widest uppercase opacity-80">
            Ready to Start?
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;