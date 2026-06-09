
import React from 'react';

const Testimonials: React.FC = () => {
  // Illustrative example scenarios — NOT real customer quotes or named people.
  const reviews = [
    {
      name: "High-Volume SaaS Support",
      role: "Illustrative scenario",
      content: "A SaaS team facing a surge in tickets could shift from slow, queued replies to near-instant resolution on routine questions—lifting customer satisfaction without adding headcount.",
      avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=SaaS"
    },
    {
      name: "Boutique E-commerce Brand",
      role: "Illustrative scenario",
      content: "A smaller brand worried that AI would feel impersonal could deploy agents that handle returns and order-tracking questions conversationally, so customers get quick, human-like help.",
      avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Ecommerce"
    },
    {
      name: "Multilingual Product Launch",
      role: "Illustrative scenario",
      content: "A company launching in new regions could offer support in customers' native languages from day one—without standing up a separate team for each market.",
      avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Global"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-dark/50 relative overflow-hidden border-t border-gray-800">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-brand-primary font-bold tracking-[0.2em] uppercase mb-3 text-sm">Illustrative Scenarios</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">How Different Teams Could Use TicketZero</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">Illustrative examples of how different teams might use TicketZero—not real customer quotes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-3xl border border-gray-800 flex flex-col h-full hover:border-brand-primary/40 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-2 mb-4 text-brand-primary text-xs font-bold uppercase tracking-wider">
                <i className="fa-solid fa-lightbulb"></i> Example
              </div>
              <p className="text-gray-300 mb-8 flex-grow leading-relaxed">
                {review.content}
              </p>
              <div className="flex items-center gap-4 border-t border-gray-800 pt-6">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full bg-gray-700 border border-gray-600" />
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
