import { marked } from 'marked';

// --- Types -----------------------------------------------------------------

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  /** Tailwind background class used for the card banner, e.g. "bg-blue-500". */
  imageColor: string;
  /** When true the post is unfinished: shown with a draft notice and marked
   *  noindex in the prerendered HTML so search engines don't index it yet. */
  draft: boolean;
}

export interface Post extends PostMeta {
  /** Rendered HTML of the Markdown body. */
  bodyHtml: string;
}

// --- Frontmatter parsing ----------------------------------------------------
// Small, dependency-free parser for the flat `key: value` frontmatter we use.
// (No nested structures, so we don't need a full YAML parser.)

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw };

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    // Strip a single pair of surrounding quotes if present.
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key) data[key] = value;
  }
  return { data, body: match[2] ?? '' };
}

// --- Load all Markdown posts ------------------------------------------------
// Vite inlines these at build time (client and SSR), so the parsed data is
// available everywhere without any runtime file I/O.

const files = import.meta.glob('./posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function toPost(path: string, raw: string): Post {
  const { data, body } = parseFrontmatter(raw);
  const fallbackSlug = path.split('/').pop()!.replace(/\.md$/, '');
  return {
    slug: data.slug || fallbackSlug,
    title: data.title ?? '',
    excerpt: data.excerpt ?? '',
    date: data.date ?? '',
    category: data.category ?? '',
    readTime: data.readTime ?? '',
    imageColor: data.imageColor || 'bg-blue-500',
    draft: data.draft === 'true',
    bodyHtml: marked.parse(body.trim(), { async: false }) as string,
  };
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => toPost(path, raw))
  // Newest first; entries with an unparseable date sort last.
  .sort((a, b) => {
    const ta = Date.parse(a.date);
    const tb = Date.parse(b.date);
    if (isNaN(ta) && isNaN(tb)) return 0;
    if (isNaN(ta)) return 1;
    if (isNaN(tb)) return -1;
    return tb - ta;
  });

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
