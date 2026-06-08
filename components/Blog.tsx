import React from 'react';
import { posts } from '../content/posts';

interface BlogProps {
  onOpenPost: (slug: string) => void;
}

const Blog: React.FC<BlogProps> = ({ onOpenPost }) => {
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
              key={post.slug}
              onClick={() => onOpenPost(post.slug)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenPost(post.slug);
                }
              }}
              role="link"
              tabIndex={0}
              aria-label={`Read article: ${post.title}`}
              className="glass-card rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-primary/50 transition-all duration-300 group hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-primary/60"
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
                    <button
                      onClick={(e) => { e.stopPropagation(); onOpenPost(post.slug); }}
                      className="text-brand-primary font-semibold text-sm group-hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      Read Article <i className="fa-solid fa-arrow-right text-xs"></i>
                    </button>
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
