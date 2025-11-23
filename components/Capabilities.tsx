import React from 'react';

const Capabilities: React.FC = () => {
  const capabilities = [
    {
      title: "INSTANT TRANSLATION",
      description: "Your AI assistant automatically detects the user's language (Spanish, French, German, etc.) and responds fluently and instantly.",
      icon: "fa-solid fa-language",
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      title: "NEVER MISS A LEAD",
      description: "The assistant politely asks for Name, Email, and Phone Number before booking an appointment, ensuring you get actionable data",
      icon: "fa-solid fa-address-book",
      color: "text-purple-400",
      bg: "bg-purple-500/10"
    },
    {
      title: "AUTO-BOOKING",
      description: "Connects to your calendar logic to negotiate times and schedule viewings or calls without you lifting a finger.",
      icon: "fa-solid fa-calendar-check",
      color: "text-green-400",
      bg: "bg-green-500/10"
    },
    {
      title: "TRAINED ON YOUR DATA",
      description: "We upload your specific PDFs, price lists, and website data so the system knows your business inside out.",
      icon: "fa-solid fa-database",
      color: "text-pink-400",
      bg: "bg-pink-500/10"
    }
  ];

  return (
    <section id="capabilities" className="py-24 relative overflow-hidden bg-brand-card/30 border-t border-gray-800">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-brand-primary font-bold tracking-[0.2em] uppercase mb-3">
            Powerful Capabilities
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
             Intelligent Features
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Advanced functionality built into every agent to drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((cap, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row items-start gap-6 p-8 rounded-2xl glass-card border border-gray-800 hover:border-brand-primary/30 transition-all duration-300 group hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${cap.bg} ${cap.color} group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${cap.icon} text-3xl`}></i>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2 tracking-wide uppercase">{cap.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;