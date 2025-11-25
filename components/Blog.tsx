import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "The Death of the Queue: Why 0s Wait Time Matters",
      excerpt: "In 2024, customers expect instant gratification. Here is why removing the wait time is the single biggest lever for CSAT scores.",
      date: "Oct 12, 2023",
      category: "Strategy",
      readTime: "5 min read",
      imageColor: "bg-blue-500"
    },
    {
      title: "LLMs in Customer Support: Hallucination vs Reality",
      excerpt: "How we ground our AI agents in your data to prevent made-up answers and ensure 100% factual accuracy.",
      date: "Oct 05, 2023",
      category: "Technology",
      readTime: "8 min read",
      imageColor: "bg-purple-500"
    },
    {
      title: "How to Train Your Custom Agent in Under 24 Hours",
      excerpt: "A step-by-step guide to preparing your knowledge base for ingestion by the TicketZero engine.",
      date: "Sep 28, 2023",
      category: "Tutorial",
      readTime: "6 min read",
      imageColor: "bg-pink-500"
    },
    {
      title: "The ROI of Automated Ticket Routing",
      excerpt: "Stop wasting senior agent time on password resets. Calculate the exact savings of intelligent triage.",
      date: "Sep 15, 2023",
      category: "Business",
      readTime: "4 min read",
      imageColor: "bg-green-500"
    }
  ];

  return (
    <section className="pt-32 pb-24 min-h-screen bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-3">Our Blog</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Insights & News</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Latest thoughts on AI, Customer Experience, and the future of work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-primary/50 transition-all duration-300 group hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`h-48 w-full ${post.imageColor} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              <div className="p-8 -mt-48 bg-gradient-to-t from-brand-card via-brand-card/90 to-transparent relative z-10 h-full flex flex-col pt-32">
                 <div className="flex items-center gap-3 text-xs font-semibold text-brand-primary mb-3">
                    <span className="uppercase tracking-wider">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                    <span className="text-gray-500">{post.readTime}</span>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{post.title}</h3>
                 <p className="text-gray-400 mb-6 flex-grow">{post.excerpt}</p>
                 <div className="flex items-center justify-between border-t border-gray-800 pt-4 mt-auto">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <button className="text-brand-primary font-semibold text-sm group-hover:underline">Read Article</button>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;