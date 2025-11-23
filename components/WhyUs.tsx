import React from 'react';

const WhyUs: React.FC = () => {
  const benefits = [
    {
      icon: "fa-solid fa-layer-group",
      colorClass: "text-blue-400",
      bgClass: "bg-blue-500/20",
      title: "Infinite Scalability",
      description: "Whether you have 10 tickets or 10,000, our agents handle the load instantly without hiring delays."
    },
    {
      icon: "fa-solid fa-language",
      colorClass: "text-purple-400",
      bgClass: "bg-purple-500/20",
      title: "100+ Languages",
      description: "Break language barriers instantly. Our AI fluently supports customers in their native language."
    },
    {
      icon: "fa-solid fa-shield-halved",
      colorClass: "text-pink-400",
      bgClass: "bg-pink-500/20",
      title: "Enterprise Security",
      description: "SOC2 compliant data handling. We ensure your customer data is processed securely and privately."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary font-bold tracking-wide uppercase mb-3">Why Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for Modern Growth</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">Scalability without the headcount. See why high-growth startups switch to TicketZero.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-brand-primary/50 transition duration-300" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${benefit.bgClass} ${benefit.colorClass}`}>
                <i className={`${benefit.icon} text-xl`}></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;