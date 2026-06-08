import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from './App';
import { posts } from './content/posts';

// Build-time entry used by scripts/prerender.mjs.
// Renders each route to static HTML so the deployed pages ship real content
// (headline, services, blog posts, …) for crawlers and social scrapers
// instead of an empty <div id="root">.

export interface PrerenderRoute {
  /** URL path, e.g. "/" or "/blog/my-post". */
  path: string;
  /** Output file relative to dist/, e.g. "index.html" or "blog/my-post/index.html". */
  outFile: string;
  /** Per-page <head> overrides. The home route leaves these undefined so the
   *  values already baked into index.html are kept. */
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  /** When true, emit <meta name="robots" content="noindex"> (draft posts). */
  noindex?: boolean;
}

const SITE = 'https://ticketzero.world';

export function getRoutes(): PrerenderRoute[] {
  const home: PrerenderRoute = { path: '/', outFile: 'index.html' };

  const postRoutes: PrerenderRoute[] = posts.map((p) => ({
    path: `/blog/${p.slug}`,
    outFile: `blog/${p.slug}/index.html`,
    title: `${p.title} | TicketZero Blog`,
    description: p.excerpt || 'Draft — content coming soon.',
    canonical: `${SITE}/blog/${p.slug}`,
    ogType: 'article',
    noindex: p.draft,
  }));

  return [home, ...postRoutes];
}

export function render(path: string): string {
  return renderToStaticMarkup(<App initialPath={path} />);
}
