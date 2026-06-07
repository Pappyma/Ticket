
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "VP of Operations, CloudStream",
      content: "TicketZero completely transformed our support desk. We went from a 4-hour response time to instantaneous resolution. Our CSAT scores jumped from 3.8 to 4.9 in just two months.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 5
    },
    {
      name: "Marcus Thorne",
      role: "Founder, LuxeCart E-commerce",
      content: "As a boutique brand, we were worried AI would feel cold. TicketZero's agents are surprisingly human. They handle returns and tracking queries with such grace that customers don't even realize they're talking to a bot.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Support, Finly App",
      content: "The multilingual support is the killer feature. We launched in Brazil and Japan simultaneously without hiring a single new agent. TicketZero handled everything flawlessly in their native languages.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-dark/50 relative overflow-hidden border-t border-gray-800">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-brand-primary font-bold tracking-[0.2em] uppercase mb-3 text-sm">Customer Stories</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by High-Growth Teams</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">Don't just take our word for it. Here's how TicketZero is impacting real businesses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-3xl border border-gray-800 flex flex-col h-full hover:border-brand-primary/40 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex gap-1 mb-4 text-yellow-500 text-sm">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 flex-grow leading-relaxed">
                "{review.content}"
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
