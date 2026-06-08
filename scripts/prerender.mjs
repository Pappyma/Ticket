// Post-build prerender step.
//
// `npm run build` runs:
//   1. vite build                         -> client bundle in dist/
//   2. vite build --ssr prerender.tsx     -> dist-ssr/prerender.js
//   3. node scripts/prerender.mjs         -> this file
//
// It imports the compiled SSR entry, renders every route (home + one page per
// blog post) to static HTML, applies per-page <head> tags, and writes each to
// its own file under dist/ (e.g. dist/blog/<slug>/index.html). The dist-ssr/
// folder is then removed.

import { readFileSync, writeFileSync, rmSync, existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const distDir = path.join(root, 'dist');
const distIndex = path.join(distDir, 'index.html');
const ssrDir = path.join(root, 'dist-ssr');
const ssrEntry = path.join(ssrDir, 'prerender.js');

if (!existsSync(distIndex)) {
  throw new Error(`Missing ${distIndex}. Run "vite build" first.`);
}
if (!existsSync(ssrEntry)) {
  throw new Error(`Missing ${ssrEntry}. Run "vite build --ssr prerender.tsx --outDir dist-ssr" first.`);
}

// pathToFileURL is required so dynamic import works with Windows paths.
const { render, getRoutes } = await import(pathToFileURL(ssrEntry).href);

const ROOT_PLACEHOLDER = '<div id="root"></div>';
const baseHtml = readFileSync(distIndex, 'utf8');

if (!baseHtml.includes(ROOT_PLACEHOLDER)) {
  throw new Error(`Could not find ${ROOT_PLACEHOLDER} in dist/index.html; nothing to prerender into.`);
}

const escapeAttr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeText = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const replaceMetaName = (html, name, value) => {
  const re = new RegExp(`(<meta name="${name}" content=")[^"]*(")`);
  return re.test(html) ? html.replace(re, `$1${escapeAttr(value)}$2`) : html;
};
const replaceMetaProp = (html, prop, value) => {
  const re = new RegExp(`(<meta property="${prop}" content=")[^"]*(")`);
  return re.test(html) ? html.replace(re, `$1${escapeAttr(value)}$2`) : html;
};

function applyHead(html, route) {
  if (route.title) {
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(route.title)}</title>`);
    html = replaceMetaProp(html, 'og:title', route.title);
    html = replaceMetaName(html, 'twitter:title', route.title);
  }
  if (route.description) {
    html = replaceMetaName(html, 'description', route.description);
    html = replaceMetaProp(html, 'og:description', route.description);
    html = replaceMetaName(html, 'twitter:description', route.description);
  }
  if (route.canonical) {
    html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${escapeAttr(route.canonical)}" />`);
    html = replaceMetaProp(html, 'og:url', route.canonical);
  }
  if (route.ogType) {
    html = replaceMetaProp(html, 'og:type', route.ogType);
  }
  if (route.noindex && !/name="robots"/.test(html)) {
    html = html.replace('</title>', '</title>\n    <meta name="robots" content="noindex" />');
  }
  return html;
}

const routes = getRoutes();
let count = 0;

for (const route of routes) {
  const appHtml = render(route.path);
  let html = applyHead(baseHtml, route);
  html = html.replace(ROOT_PLACEHOLDER, `<div id="root">${appHtml}</div>`);

  const outPath = path.join(distDir, route.outFile);
  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  count++;
  console.log(`  ${route.path} -> dist/${route.outFile} (${appHtml.length} chars${route.noindex ? ', noindex' : ''})`);
}

// Remove the throwaway SSR build so it never gets deployed.
rmSync(ssrDir, { recursive: true, force: true });

console.log(`Prerendered ${count} route${count === 1 ? '' : 's'} into dist/.`);
