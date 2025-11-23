import React from 'react';

const Infrastructure: React.FC = () => {
  return (
    <section id="infrastructure" className="py-24 bg-gradient-to-b from-brand-dark to-brand-card/20 relative overflow-hidden border-t border-gray-800">
        {/* Background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <h2 className="text-brand-primary font-bold tracking-[0.3em] uppercase mb-6 text-sm md:text-base" data-aos="fade-down">
                Enterprise-Grade Infrastructure
            </h2>
            
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight" data-aos="fade-up">
                The Intelligence of Google.<br/>
                <span className="text-gray-500">The Ease of a Partner.</span>
            </h3>

            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                We don't use cheap, hallucinating scripts. We build your agent on Google Cloud's enterprise infrastructure—the same technology used by Fortune 500 companies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                {/* Item 1 */}
                <div className="bg-brand-card/30 p-6 rounded-2xl border border-gray-800 hover:border-brand-primary/30 transition-colors" data-aos="fade-up" data-aos-delay="200">
                    <div className="w-14 h-14 rounded-full bg-blue-900/20 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                        <i className="fa-solid fa-shield-halved text-xl"></i>
                    </div>
                    <h4 className="text-white font-bold text-lg mb-3">100% Data Privacy</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Your business data never leaves the secure cloud ecosystem.
                    </p>
                </div>

                {/* Item 2 */}
                <div className="bg-brand-card/30 p-6 rounded-2xl border border-gray-800 hover:border-brand-primary/30 transition-colors" data-aos="fade-up" data-aos-delay="300">
                    <div className="w-14 h-14 rounded-full bg-purple-900/20 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                        <i className="fa-solid fa-bullseye text-xl"></i>
                    </div>
                    <h4 className="text-white font-bold text-lg mb-3">Grounded Accuracy</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The AI answers strictly based on your content. No making things up.
                    </p>
                </div>

                {/* Item 3 */}
                <div className="bg-brand-card/30 p-6 rounded-2xl border border-gray-800 hover:border-brand-primary/30 transition-colors" data-aos="fade-up" data-aos-delay="400">
                    <div className="w-14 h-14 rounded-full bg-green-900/20 border border-green-500/20 flex items-center justify-center mb-6 text-green-400">
                        <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
                    </div>
                    <h4 className="text-white font-bold text-lg mb-3">Zero Technical Headache</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        We handle the complex coding and cloud setup so you can focus on closing deals.
                    </p>
                </div>
            </div>

        </div>
    </section>
  );
};

export default Infrastructure;