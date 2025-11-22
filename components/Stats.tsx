import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-12 border-y border-gray-800 bg-brand-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div data-aos="fade-up">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Availability</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="text-4xl font-bold text-brand-primary mb-2">0s</div>
            <div className="text-gray-400">Wait Time</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="text-4xl font-bold text-white mb-2">85%</div>
            <div className="text-gray-400">Auto-Resolution</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="text-4xl font-bold text-brand-accent mb-2">3x</div>
            <div className="text-gray-400">ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;