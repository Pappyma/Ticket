import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "fa-solid fa-headset",
      color: "blue",
      hoverColor: "group-hover:text-white",
      title: "AI Support Agents",
      description: "Human-like conversational agents trained on your brand voice. They handle Tier-1 inquiries instantly, 24/7.",
      bgClass: "bg-blue-900/30",
      hoverBgClass: "group-hover:bg-brand-primary",
      iconClass: "text-blue-400"
    },
    {
      icon: "fa-solid fa-ticket-simple",
      color: "purple",
      hoverColor: "group-hover:text-white",
      title: "Automated Ticket Handling",
      description: "Intelligent tagging, routing, and prioritization. AI analyzes sentiment and urgency to route tickets correctly.",
      bgClass: "bg-purple-900/30",
      hoverBgClass: "group-hover:bg-brand-accent",
      iconClass: "text-purple-400"
    },
    {
      icon: "fa-solid fa-comments",
      color: "green",
      hoverColor: "group-hover:text-white",
      title: "Live Chat Assistants",
      description: "Real-time web and app assistants that guide users through checkout, troubleshooting, and onboarding.",
      bgClass: "bg-green-900/30",
      hoverBgClass: "group-hover:bg-brand-success",
      iconClass: "text-green-400"
    },
    {
      icon: "fa-solid fa-network-wired",
      color: "pink",
      hoverColor: "group-hover:text-white",
      title: "Workflow Automation",
      description: "Connect your support AI to your CRM (Salesforce, HubSpot, Zendesk) to process refunds and updates automatically.",
      bgClass: "bg-pink-900/30",
      hoverBgClass: "group-hover:bg-pink-500",
      iconClass: "text-pink-400"
    },
    {
      icon: "fa-solid fa-book-open",
      color: "yellow",
      hoverColor: "group-hover:text-white",
      title: "Knowledge-Base Creation",
      description: "We use AI to scan your slack, emails, and docs to generate and maintain a self-updating help center.",
      bgClass: "bg-yellow-900/30",
      hoverBgClass: "group-hover:bg-yellow-500",
      iconClass: "text-yellow-400"
    },
    {
      icon: "fa-solid fa-chart-pie",
      color: "cyan",
      hoverColor: "group-hover:text-white",
      title: "Analytics & Insights",
      description: "Deep dive into customer sentiment and agent performance with AI-driven reporting dashboards.",
      bgClass: "bg-cyan-900/30",
      hoverBgClass: "group-hover:bg-cyan-500",
      iconClass: "text-cyan-400"
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary font-bold tracking-wide uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Intelligent Support Ecosystem</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">We don't just build chatbots; we create comprehensive AI workforce architectures tailored to your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover:border-brand-primary/50 transition-all duration-300 hover:-translate-y-2 group" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${service.bgClass} ${service.hoverBgClass}`}>
                <i className={`${service.icon} text-2xl ${service.iconClass} ${service.hoverColor}`}></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;