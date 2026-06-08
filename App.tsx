
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import Infrastructure from './components/Infrastructure';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudies from './components/CaseStudies';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import PrivacyPolicy from './components/PrivacyPolicy';
import { getPostBySlug } from './content/posts';

// Declaration for AOS global
declare global {
  interface Window {
    AOS: any;
  }
}

interface AppProps {
  /** Initial pathname; supplied by the client entry (window.location.pathname)
   *  and by the prerenderer for each route. Defaults to "/" for SSR safety. */
  initialPath?: string;
}

const BLOG_PREFIX = '/blog/';

/** Returns the post slug if the path is /blog/<slug>, otherwise null. */
export function getSlugFromPath(path: string): string | null {
  if (!path.startsWith(BLOG_PREFIX)) return null;
  const slug = path.slice(BLOG_PREFIX.length).replace(/\/+$/, '');
  return slug || null;
}

const App: React.FC<AppProps> = ({ initialPath = '/' }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [path, setPath] = useState(initialPath);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        offset: 50
      });
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentPage, path]);

  // Navigate between the root-level views (home / blog list / etc.).
  const navigateTo = (page: string) => {
    if (path !== '/') {
      window.history.pushState({}, '', '/');
      setPath('/');
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate to an individual blog post at /blog/<slug>.
  const openPost = (slug: string) => {
    const nextPath = `${BLOG_PREFIX}${slug}`;
    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const slug = getSlugFromPath(path);
  const post = slug ? getPostBySlug(slug) : undefined;

  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans selection:bg-brand-primary/30 selection:text-white">
      <Navbar onNavigate={navigateTo} currentPage={post ? 'blog' : currentPage} />

      <main>
        {post ? (
          <BlogPost post={post} onBack={() => navigateTo('blog')} />
        ) : (
          <>
            {currentPage === 'home' && (
              <>
                <Hero />
                <Stats />
                <Services />
                <Infrastructure />
                <Capabilities />
                <WhyUs />
                <About />
                <Testimonials />
                <Process />
                <Pricing />
                <Contact />
              </>
            )}

            {currentPage === 'case-studies' && <CaseStudies />}
            {currentPage === 'blog' && <Blog onOpenPost={openPost} />}
            {currentPage === 'privacy' && <PrivacyPolicy />}
          </>
        )}
      </main>

      {/* Floating Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 left-8 z-40 w-12 h-12 rounded-full glass-card border border-gray-700 flex items-center justify-center text-brand-primary transition-all duration-300 transform ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'} hover:bg-brand-primary hover:text-white hover:scale-110 shadow-xl`}
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
