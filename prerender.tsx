import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from './App';

// Build-time entry used by scripts/prerender.mjs.
// Renders the home page to static HTML so the deployed dist/index.html
// ships real content (headline, services, how-it-works, stats) for
// crawlers and social scrapers instead of an empty <div id="root">.
export function render(): string {
  return renderToStaticMarkup(<App />);
}
