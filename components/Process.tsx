import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "1",
      colorClass: "bg-brand-primary",
      title: "CONNECT",
      subtitle: "Send us your data",
      description: "Simply provide your website URL or upload your training PDFs. We clean and structure your data for the AI."
    },
    {
      number: "2",
      colorClass: "bg-brand-accent",
      title: "WE BUILD",
      subtitle: "We configure the agent",
      description: "We set up the logic, test the responses, and customize the tone to match your brand perfectly."
    },
    {
      number: "3",
      colorClass: "bg-brand-success",
      title: "GO LIVE",
      subtitle: "We launch it for you",
      description: "We generate the smart code snippet. You can paste it yourself, or our team can log in and install it for you so you don't have to lift a finger."
    }
  ];

  const techStack = [
    { icon: "fa-brands fa-salesforce", color: "text-blue-400", label: "Salesforce" },
    { icon: "fa-brands fa-hubspot", color: "text-orange-500", label: "HubSpot" },
    { icon: "fa-brands fa-slack", color: "text-purple-400", label: "Slack" },
    { icon: "fa-brands fa-intercom", color: "text-blue-500", label: "Intercom" },
    { icon: "fa-brands fa-shopify", color: "text-green-500", label: "Shopify" },
    { icon: "fa-solid fa-code", color: "text-gray-400", label: "Custom API" },
  ];

  return (
    <section id="process" className="py-24 bg-brand-card border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seamless Integration in <span className="text-brand-primary">3 Steps</span>
            </h3>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className={`flex items-center justify-center h-12 w-12 rounded-full ${step.colorClass} text-white font-bold text-xl`}>
                      {step.number}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-brand-primary tracking-wider uppercase mb-1">{step.title}</h4>
                    <h5 className="text-xl font-bold text-white mb-2">{step.subtitle}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3 opacity-20 blur-lg"></div>
            <div className="glass-card p-8 rounded-2xl relative">
              <h4 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Tech Stack Compatibility</h4>
              <div className="grid grid-cols-3 gap-6 text-center">
                {techStack.map((tech, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition">
                    <i className={`${tech.icon} text-3xl ${tech.color} mb-2`}></i>
                    <div className="text-xs text-gray-400">{tech.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;