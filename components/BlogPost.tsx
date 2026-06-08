import React from 'react';
import type { Post } from '../content/posts';

interface BlogPostProps {
  post: Post;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  return (
    <section className="pt-32 pb-24 min-h-screen bg-brand-dark relative overflow-hidden">
      {/* Background blobs to match the rest of the site */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 cursor-pointer"
        >
          <i className="fa-solid fa-arrow-left text-sm"></i> Back to Blog
        </button>

        <div className={`h-1.5 w-24 rounded-full ${post.imageColor} mb-8`}></div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-brand-primary mb-5">
          <span className="uppercase tracking-wider">{post.category}</span>
          <span className="w-1 h-1 rounded-full bg-gray-500"></span>
          <span className="text-gray-500">{post.readTime}</span>
          <span className="w-1 h-1 rounded-full bg-gray-500"></span>
          <span className="text-gray-500">{post.date}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

        {post.excerpt && (
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">{post.excerpt}</p>
        )}

        {post.draft && (
          <div className="mb-10 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-5 py-4 text-yellow-200 text-sm flex items-center gap-3">
            <i className="fa-solid fa-pen-ruler"></i>
            <span><strong>Draft</strong> — this article is a placeholder. Real content coming soon.</span>
          </div>
        )}

        <article className="article-body" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
      </div>
    </section>
  );
};

export default BlogPost;
