// Post-build prerender step.
//
// `npm run build` runs:
//   1. vite build                         -> client bundle in dist/
//   2. vite build --ssr prerender.tsx     -> dist-ssr/prerender.js
//   3. node scripts/prerender.mjs         -> this file
//
// It imports the compiled SSR entry, renders the app to static HTML, and
// injects it into the empty <div id="root"></div> of dist/index.html so the
// deployed page contains real content. The dist-ssr/ folder is then removed.

import { readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const distIndex = path.join(root, 'dist', 'index.html');
const ssrEntry = path.join(root, 'dist-ssr', 'prerender.js');
const ssrDir = path.join(root, 'dist-ssr');

if (!existsSync(distIndex)) {
  throw new Error(`Missing ${distIndex}. Run "vite build" first.`);
}
if (!existsSync(ssrEntry)) {
  throw new Error(`Missing ${ssrEntry}. Run "vite build --ssr prerender.tsx --outDir dist-ssr" first.`);
}

// pathToFileURL is required so dynamic import works with Windows paths.
const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();

const placeholder = '<div id="root"></div>';
let html = readFileSync(distIndex, 'utf8');

if (!html.includes(placeholder)) {
  throw new Error(`Could not find ${placeholder} in dist/index.html; nothing to prerender into.`);
}

html = html.replace(placeholder, `<div id="root">${appHtml}</div>`);
writeFileSync(distIndex, html);

// Remove the throwaway SSR build so it never gets deployed.
rmSync(ssrDir, { recursive: true, force: true });

console.log(`Prerendered ${appHtml.length} chars of HTML into dist/index.html`);
