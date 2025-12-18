import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Visual Card / Mission Focus */}
          <div data-aos="fade-right">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-card p-10 rounded-3xl border border-gray-800">
                <h2 className="text-brand-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">About TicketZero</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                  Our Mission is <span className="text-gradient">Simple.</span>
                </h3>
                <p className="text-gray-300 text-lg italic leading-relaxed mb-8 border-l-4 border-brand-primary pl-6">
                  "Give every business an AI support team that’s as capable, reliable, and brand-aligned as your best human agent—without the cost, turnover, or delays."
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">
                     TZ
                   </div>
                   <div>
                     <p className="text-white font-bold text-sm">TicketZero Leadership</p>
                     <p className="text-gray-500 text-xs uppercase tracking-widest">Built for modern growth</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Narrative Content */}
          <div className="space-y-6" data-aos="fade-left">
            <p className="text-2xl font-semibold text-white leading-snug">
              We founded TicketZero because we watched brilliant companies lose customers—not from bad products, but from slow, inconsistent support.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Today, we work with high-growth SaaS, e-commerce, and service brands who refuse to choose between scale and customer experience. We don’t sell chatbots. We deliver outcomes: faster resolutions, higher CSAT, and real cost savings—backed by the security and intelligence of Google Cloud.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              TicketZero is built by former support leaders, product engineers, and AI specialists who know that great automation doesn’t replace humans—it <span className="text-white font-medium">frees them to do their best work.</span>
            </p>

            <div className="pt-6 flex flex-wrap gap-8">
              <div>
                <div className="text-2xl font-bold text-white">0%</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Hallucinations</div>
              </div>
              <div className="w-px h-10 bg-gray-800"></div>
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Brand Aligned</div>
              </div>
              <div className="w-px h-10 bg-gray-800"></div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Human Care</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;