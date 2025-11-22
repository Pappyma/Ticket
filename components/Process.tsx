import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "1",
      colorClass: "bg-brand-primary",
      title: "Audit & Strategy",
      description: "We analyze your current ticket volume and common queries to design the perfect AI logic flow."
    },
    {
      number: "2",
      colorClass: "bg-brand-accent",
      title: "Training & Integration",
      description: "We ingest your documentation into the LLM and connect the AI to your existing CRM tools."
    },
    {
      number: "3",
      colorClass: "bg-brand-success",
      title: "Launch & Optimize",
      description: "We go live. The AI handles 80% of volume immediately. We refine based on edge cases."
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
                    <h4 className="text-xl font-bold text-white">{step.title}</h4>
                    <p className="text-gray-400 mt-1">{step.description}</p>
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