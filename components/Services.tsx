import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "fa-solid fa-headset",
      title: "AI Support Agents",
      subtitle: "Resolve most Tier-1 inquiries instantly—24/7.",
      bullets: [
        "Trained on your knowledge base, PDFs, and past tickets",
        "Human-like conversations (no “press 1 for help”)",
        "Auto-detects language → responds fluently in 100+ languages",
        "Answers grounded strictly in your data—never makes things up"
      ],
      bgClass: "bg-blue-900/30",
      hoverBgClass: "group-hover:bg-brand-primary",
      iconClass: "text-blue-400"
    },
    {
      icon: "fa-solid fa-route",
      title: "Intelligent Ticket Triage",
      subtitle: "Route every ticket to the right team—on the first try.",
      bullets: [
        "AI analyzes intent, sentiment, and urgency",
        "Auto-tags, prioritizes, and assigns to agents or workflows",
        "Reduces misrouted tickets by 70%",
        "Seamless sync with Zendesk, Freshdesk, Salesforce"
      ],
      bgClass: "bg-purple-900/30",
      hoverBgClass: "group-hover:bg-brand-accent",
      iconClass: "text-purple-400"
    },
    {
      icon: "fa-solid fa-comments",
      title: "Live Chat Assistants",
      subtitle: "Guide users to success—before they contact support.",
      bullets: [
        "Embeddable in web, mobile, or checkout flows",
        "Helps with onboarding, troubleshooting, and cart recovery",
        "Captures qualified leads: “Can I get your email to send details?”",
        "Reduces inbound tickets by 30–50%"
      ],
      bgClass: "bg-green-900/30",
      hoverBgClass: "group-hover:bg-brand-success",
      iconClass: "text-green-400"
    },
    {
      icon: "fa-solid fa-gears",
      title: "Automated Workflows",
      subtitle: "Take action—not just answer questions.",
      bullets: [
        "Process refunds, update orders, reset passwords via your CRM",
        "Trigger Slack alerts for urgent issues",
        "Works with Shopify, HubSpot, Salesforce, or custom APIs",
        "No engineering needed—we handle the integration"
      ],
      bgClass: "bg-pink-900/30",
      hoverBgClass: "group-hover:bg-pink-500",
      iconClass: "text-pink-400"
    },
    {
      icon: "fa-solid fa-book-sparkles",
      title: "Self-Updating Knowledge Base",
      subtitle: "Your help center that writes and maintains itself.",
      bullets: [
        "AI scans your Slack, emails, docs, and support logs",
        "Auto-generates FAQs, guides, and policy updates",
        "Flags outdated content and suggests improvements",
        "Feeds answers directly to agents and your website"
      ],
      bgClass: "bg-yellow-900/30",
      hoverBgClass: "group-hover:bg-yellow-500",
      iconClass: "text-yellow-400"
    },
    {
      icon: "fa-solid fa-magnifying-glass-chart",
      title: "AI-Powered Insights",
      subtitle: "Turn support data into growth intelligence.",
      bullets: [
        "Track CSAT, resolution rate, and deflection by agent",
        "Spot product gaps (“Customers keep asking about X”)",
        "Measure ROI: cost per ticket, $ saved vs. human agents",
        "Export to Google Sheets, Looker, or your BI tool"
      ],
      bgClass: "bg-cyan-900/30",
      hoverBgClass: "group-hover:bg-cyan-500",
      iconClass: "text-cyan-400"
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-brand-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">Our Ecosystem</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto">
            We Don’t Build Chatbots. <br className="hidden md:block"/> We Deploy Your <span className="text-gradient">AI Support Workforce.</span>
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Unlike rule-based bots that frustrate customers, TicketZero’s agents are intelligent, stateful, and trained on your business—so they resolve real issues, not just deflect them. All agents run on <strong className="text-gray-200">Google Cloud’s enterprise AI infrastructure</strong>, ensuring military-grade security, zero hallucinations, and full data privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl border border-gray-800 hover:border-brand-primary/30 transition-all duration-500 group flex flex-col h-full" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${service.bgClass} ${service.hoverBgClass}`}>
                <i className={`${service.icon} text-2xl ${service.iconClass} group-hover:text-white transition-colors`}></i>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
              <p className="text-brand-primary/90 font-bold text-sm mb-6 leading-relaxed">
                {service.subtitle}
              </p>
              
              <ul className="space-y-4 mt-auto">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <i className="fa-solid fa-circle-check text-brand-primary/40 mt-1 text-[10px]"></i>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;