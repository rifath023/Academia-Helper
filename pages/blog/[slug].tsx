import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag, Star, CheckCircle, XCircle, List } from 'lucide-react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ScrollProgress, FloatingActionButton } from '../../components/ScrollComponents';
import { getAllPosts, getPostBySlug, getRelatedPosts, type BlogPost } from '../../lib/posts';

interface Props {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

// ─────────────────────────────────────────────────────────────────────────────
// HOW CONTENT WORKS
//
// Everything is written in the markdown body. No frontmatter blocks, no [TAGS].
// Special fenced code blocks are intercepted by the `code` renderer and turned
// into rich UI components. Everything else is plain GFM markdown.
//
// AVAILABLE FENCED BLOCK TYPES:
//
// ```product          — full review card (any fields you want)
// ```product-table    — comparison table (any columns you want)
// ```disclosure       — affiliate disclosure banner
// ```cta              — call-to-action banner
//
// See POST_WRITING_GUIDE.md for full syntax examples.
// ─────────────────────────────────────────────────────────────────────────────

// ── Tiny helpers ─────────────────────────────────────────────────────────────

// Parse a simple "key: value" block into an object. Handles multi-line values
// that continue on indented lines after the key.
function parseBlock(raw: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const line of raw.split('\n')) {
    const match = line.match(/^([a-zA-Z0-9_][a-zA-Z0-9_ ]*?):\s*(.*)/);
    if (match) {
      result[match[1].trim().toLowerCase()] = match[2].trim();
    }
  }
  return result;
}

// Parse a markdown table string into { headers, rows }
function parseMarkdownTable(raw: string): { headers: string[]; rows: string[][] } {
  const lines = raw.trim().split('\n').filter(l => l.trim() && !l.match(/^[\s|:-]+$/));
  const parseRow = (line: string) =>
    line.split('|').map(c => c.trim()).filter((_, i, a) => i > 0 && i < a.length - 1);
  const [headerLine, ...dataLines] = lines;
  return { headers: parseRow(headerLine), rows: dataLines.map(parseRow) };
}

const StarRating = ({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' }) => {
  const sz = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(s => (
        <Star key={s} className={`${sz} ${s <= Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-stone-300'}`} />
      ))}
    </div>
  );
};

// ── ```product renderer ───────────────────────────────────────────────────────
// Accepts ANY key: value pairs. Reserved keys with special rendering:
//   name, badge, rating, reviews, image, price, affiliateLink
//   pros (comma-separated), cons (comma-separated)
//   discussion — paragraph rendered below the card in the blue box
// Any other key → rendered as a specification row in the specs table.
// Add or remove any field freely in the markdown — no code changes needed.

const ProductCard = ({ raw, index }: { raw: string; index: number }) => {
  const data = parseBlock(raw);

  const name        = data['name'] || 'Product';
  const badge       = data['badge'] || '';
  const rating      = parseFloat(data['rating'] || '0');
  const reviews     = parseInt(data['reviews'] || data['review count'] || '0', 10);
  const image       = data['image'] || '';
  const discussion  = data['discussion'] || '';
  const pros        = data['pros']  ? data['pros'].split('|').map(s => s.trim()).filter(Boolean)  : [];
  const cons        = data['cons']  ? data['cons'].split('|').map(s => s.trim()).filter(Boolean)  : [];

  // Everything that isn't a known display key → specs table
  const reservedKeys = new Set(['name','badge','rating','reviews','review count','image','price','affiliatelink','pros','cons','discussion']);
  const specs = Object.entries(data).filter(([k]) => !reservedKeys.has(k));

  return (
    <div className="mb-10 font-sans">
      <motion.div
        className="bg-white rounded-3xl border-2 border-stone-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08 }} whileHover={{ y: -4 }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-900 to-slate-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 bg-amber-400 text-stone-900 rounded-full flex items-center justify-center text-sm font-black">
              #{index + 1}
            </span>
            <h3 className="text-white font-bold text-lg">{name}</h3>
          </div>
          {badge && (
            <span className="px-3 py-1 bg-amber-400 text-stone-900 rounded-full text-xs font-black uppercase tracking-wide">
              {badge}
            </span>
          )}
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image + rating */}
            {image && (
              <div className="md:w-52 flex-shrink-0">
                <div className="bg-stone-50 rounded-2xl p-4 flex items-center justify-center h-52 border border-stone-100">
                  <img
                    src={image} alt={name}
                    className="max-h-44 max-w-full object-contain"
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                {rating > 0 && (
                  <div className="mt-3 text-center">
                    <div className="flex justify-center"><StarRating rating={rating} /></div>
                    <div className="text-xs text-stone-500 mt-1">
                      {rating}/5{reviews > 0 && ` · ${reviews.toLocaleString()} reviews`}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Details */}
            <div className="flex-1">
              {/* Pros & Cons — only shown if at least one is present */}
              {(pros.length > 0 || cons.length > 0) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 p-4 bg-stone-50 rounded-2xl overflow-hidden">
                  {pros.length > 0 && (
                    <div className="min-w-0">
                      <div className="text-xs font-black text-emerald-700 uppercase tracking-widest mb-3">✅ PROS</div>
                      <ul className="space-y-2">
                        {pros.map((p, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-stone-700">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="break-words min-w-0">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {cons.length > 0 && (
                    <div className="min-w-0">
                      <div className="text-xs font-black text-red-700 uppercase tracking-widest mb-3">❌ CONS</div>
                      <ul className="space-y-2">
                        {cons.map((c, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-stone-700">
                            <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                            <span className="break-words min-w-0">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Specs — every unknown key becomes a row automatically */}
              {specs.length > 0 && (
                <div className="mb-4">
                  <div className="text-xs font-black text-stone-700 uppercase tracking-widest mb-3">📋 SPECIFICATIONS</div>
                  <div className="rounded-2xl border border-stone-200 overflow-hidden">
                    <table className="w-full text-sm">
                      <tbody>
                        {specs.map(([label, value], j) => (
                          <tr key={j} className={j % 2 === 0 ? 'bg-stone-50' : 'bg-white'}>
                            <td className="px-4 py-2.5 font-semibold text-stone-800 w-2/5 border-r border-stone-200 capitalize">
                              {label}
                            </td>
                            <td className="px-4 py-2.5 text-amber-600 font-medium">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Discussion */}
      {discussion && (
        <div className="mt-4 px-6 py-5 bg-blue-50 border border-blue-100 rounded-2xl">
          <div className="text-xs font-black text-blue-700 uppercase tracking-widest mb-2">💬 Our Take</div>
          <p className="text-stone-700 leading-relaxed text-base break-words whitespace-normal">{discussion}</p>
        </div>
      )}
    </div>
  );
};

// ── ```product-table renderer ─────────────────────────────────────────────────
// Write a normal markdown table inside the fence — any columns you want.
// The first row is the header; each subsequent row is a product.
// If a cell contains a URL ending in an image extension, it renders as <img>.
// If a cell contains only a number 1–5 with optional decimal, it renders stars.
//
// Example with 4 columns:
//   | Product | Rating | Best For | Price |
//   |---------|--------|----------|-------|
//   | BenQ    | 4.8    | Long hours | $99 |

const ProductTable = ({ raw }: { raw: string }) => {
  const { headers, rows } = parseMarkdownTable(raw);
  if (!headers.length) return null;

  // If there's an "Image" column, find its index and strip it from visible headers.
  // That column's value will be rendered as a thumbnail inside the first data column.
  const imgColIdx = headers.findIndex(h => h.trim().toLowerCase() === 'image');
  const visibleHeaders = headers.filter((_, i) => i !== imgColIdx);

  const isRating = (val: string) => /^\d(\.\d)?$/.test(val.trim()) && parseFloat(val) >= 1 && parseFloat(val) <= 5;

  const renderCell = (val: string, originalColIndex: number) => {
    if (isRating(val)) {
      return (
        <div className="flex flex-col items-center gap-1">
          <StarRating rating={parseFloat(val)} size="sm" />
          <span className="text-xs text-stone-500">{val}/5</span>
        </div>
      );
    }
    // First visible column (product name) — bold, no centering
    if (originalColIndex === (imgColIdx === 0 ? 1 : 0)) {
      return <span className="font-semibold text-stone-900">{val}</span>;
    }
    return <span className="text-stone-600">{val}</span>;
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-lg my-8 font-sans">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-stone-900 text-white">
            {visibleHeaders.map((h, i) => (
              <th key={i} className="px-4 py-4 font-bold text-left whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => {
            const imgUrl = imgColIdx >= 0 ? (row[imgColIdx] ?? '') : '';
            const visibleCells = row.filter((_, ci) => ci !== imgColIdx);
            // index of the first data column in the original headers (to identify product name col)
            const firstDataCol = headers.findIndex((_, i) => i !== imgColIdx);
            return (
              <tr key={ri} className={`border-t border-stone-100 ${ri % 2 === 0 ? 'bg-white' : 'bg-amber-50/40'} hover:bg-amber-50 transition-colors`}>
                {visibleCells.map((val, ci) => {
                  const originalIdx = headers.indexOf(visibleHeaders[ci]);
                  const isFirstCol = ci === 0;
                  return (
                    <td key={ci} className={`px-4 py-4 ${isFirstCol ? 'text-left' : 'text-center'}`}>
                      {isFirstCol && imgUrl ? (
                        // Thumbnail + name + badge layout (like Image 3)
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 flex-shrink-0 bg-stone-100 rounded-xl border border-stone-200 flex items-center justify-center overflow-hidden">
                            <img src={imgUrl} alt={val}
                              className="max-h-10 max-w-full object-contain"
                              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                          </div>
                          <div>
                            <div className="font-semibold text-stone-900">{val}</div>
                            {/* badge is shown in amber under the name if next col is "Best For"-ish */}
                          </div>
                        </div>
                      ) : (
                        renderCell(val, originalIdx)
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// ── ```disclosure renderer ────────────────────────────────────────────────────
// Write any text inside — it renders as the amber disclosure banner.
// Leave the body empty to get the default disclosure text.

const Disclosure = ({ text }: { text: string }) => (
  <div className="my-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-800">
    <strong>Disclosure: </strong>
    {text.trim() || 'This post contains affiliate links. We may earn a small commission at no extra cost to you if you purchase through our links.'}
  </div>
);

// ── ```cta renderer ───────────────────────────────────────────────────────────
// Supports optional key: value overrides inside the fence:
//   heading: Custom Heading
//   subtext: Custom subtext
//   button1_label: WhatsApp Us
//   button1_url: https://wa.me/...
//   button2_label: Place an Order
//   button2_url: /#contact
// Leave empty for defaults.

const CTABox = ({ raw }: { raw: string }) => {
  const data = parseBlock(raw);
  const heading  = data['heading']       || 'Need Help With Your Assignment?';
  const subtext  = data['subtext']       || 'Expert writers ready to help — plagiarism-free, on time, 0% AI content.';
  const b1label  = data['button1_label'] || data['button1 label'] || 'WhatsApp Us Now';
  const b1url    = data['button1_url']   || data['button1 url']   || 'https://wa.me/8801577128417';
  const b2label  = data['button2_label'] || data['button2 label'] || 'Place an Order';
  const b2url    = data['button2_url']   || data['button2 url']   || '/#contact';

  return (
    <div className="my-12 p-8 bg-gradient-to-br from-stone-900 via-slate-800 to-stone-900 rounded-3xl text-white text-center">
      <h3 className="text-2xl font-bold mb-3">{heading}</h3>
      <p className="text-stone-300 mb-6">{subtext}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={b1url} target="_blank" rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-semibold transition-colors duration-200">
          {b1label}
        </a>
        <a href={b2url}
          className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-2xl font-semibold transition-colors duration-200">
          {b2label}
        </a>
      </div>
    </div>
  );
};

// ── Table of Contents ─────────────────────────────────────────────────────────
const TableOfContents = ({ content }: { content: string }) => {
  const [activeId, setActiveId] = useState('');

  const headings = content.split('\n')
    .filter(l => l.startsWith('## ') || l.startsWith('### '))
    .map(line => {
      const level = line.startsWith('### ') ? 3 : 2;
      const text  = line.replace(/^#{2,3} /, '');
      const id    = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return { level, text, id };
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { rootMargin: '-80px 0px -80% 0px' }
    );
    headings.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  if (headings.length < 2) return null;

  return (
    <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 mb-8 lg:mb-0">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-5 h-5 text-stone-600" />
        <span className="font-bold text-stone-900 text-sm uppercase tracking-wide">Table of Contents</span>
      </div>
      <nav>
        <ul className="space-y-1">
          {headings.map(({ level, text, id }) => (
            <li key={id} className={level === 3 ? 'ml-4' : ''}>
              <a href={`#${id}`}
                className={`block py-1.5 px-3 rounded-xl text-sm transition-all duration-200 ${activeId === id ? 'bg-stone-900 text-white font-semibold' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200'}`}
                onClick={e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }}>
                {level === 3 && <span className="text-stone-400 mr-1">›</span>}{text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

// ── Markdown component map ────────────────────────────────────────────────────
// The `code` renderer is the interception point for all special fenced blocks.
// Inline code and unknown languages render normally.

// We track product index across renders using a ref-like counter per render pass.
// Since mdComponents is rebuilt each render, we use a closure counter.
let _productCardIndex = 0;

const buildMdComponents = () => {
  _productCardIndex = 0; // reset on each full render

  return {
    // ── Headings with anchor IDs ──────────────────────────────────────────────
    h2: ({ children }: any) => {
      const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return <h2 id={id} className="text-2xl font-bold text-stone-900 mt-10 mb-4 scroll-mt-24 pb-2 border-b border-stone-100">{children}</h2>;
    },
    h3: ({ children }: any) => {
      const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return <h3 id={id} className="text-xl font-bold text-stone-800 mt-8 mb-3 scroll-mt-24">{children}</h3>;
    },
    h4: ({ children }: any) => <h4 className="text-lg font-bold text-stone-800 mt-6 mb-2">{children}</h4>,

    // ── Body text ─────────────────────────────────────────────────────────────
    p:          ({ children }: any) => <p className="text-stone-700 leading-relaxed mb-4 text-base">{children}</p>,
    ul:         ({ children }: any) => <ul className="list-disc list-inside space-y-2 mb-4 text-stone-700 ml-2">{children}</ul>,
    ol:         ({ children }: any) => <ol className="list-decimal list-inside space-y-2 mb-4 text-stone-700 ml-2">{children}</ol>,
    li:         ({ children }: any) => <li className="text-stone-700 leading-relaxed">{children}</li>,
    strong:     ({ children }: any) => <strong className="font-bold text-stone-900">{children}</strong>,
    em:         ({ children }: any) => <em className="italic text-stone-700">{children}</em>,
    a:          ({ href, children }: any) => <a href={href} className="text-amber-700 hover:text-amber-900 underline font-medium" target="_blank" rel="noopener noreferrer">{children}</a>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 rounded-r-xl text-stone-700 italic">{children}</blockquote>,
    hr:         ()                  => <hr className="my-8 border-stone-200" />,

    // ── GFM tables (plain markdown tables in content) ─────────────────────────
    table:  ({ children }: any) => (
      <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-md my-6">
        <table className="w-full text-sm border-collapse">{children}</table>
      </div>
    ),
    thead:  ({ children }: any) => <thead className="bg-stone-900 text-white">{children}</thead>,
    tbody:  ({ children }: any) => <tbody>{children}</tbody>,
    tr:     ({ children }: any) => <tr className="border-t border-stone-100 hover:bg-amber-50/40 transition-colors even:bg-stone-50">{children}</tr>,
    th:     ({ children }: any) => <th className="px-4 py-3 text-left font-bold text-white whitespace-nowrap">{children}</th>,
    td:     ({ children }: any) => <td className="px-4 py-3 text-stone-700 align-top">{children}</td>,

    // ── Fenced code blocks — special types intercepted here ──────────────────
    code: ({ inline, className, children }: any) => {
      const raw  = String(children).replace(/\n$/, '');
      const lang = (className || '').replace('language-', '').trim();

      // product card
      if (lang === 'product') {
        const idx = _productCardIndex++;
        return <ProductCard raw={raw} index={idx} />;
      }

      // product-table — pass the raw markdown table string
      if (lang === 'product-table') {
        return <ProductTable raw={raw} />;
      }

      // disclosure banner
      if (lang === 'disclosure') {
        return <Disclosure text={raw} />;
      }

      // cta box
      if (lang === 'cta') {
        return <CTABox raw={raw} />;
      }

      // inline code
      if (inline) {
        return <code className="bg-stone-100 text-stone-800 px-1.5 py-0.5 rounded text-sm font-mono">{raw}</code>;
      }

      // normal code block (unknown language)
      return (
        <pre className="bg-stone-900 text-stone-100 p-4 rounded-2xl overflow-x-auto my-4 text-sm font-mono">
          <code>{raw}</code>
        </pre>
      );
    },
  };
};

// ── Related Posts ─────────────────────────────────────────────────────────────
const RelatedPosts = ({ posts }: { posts: BlogPost[] }) => {
  const router = useRouter();
  if (posts.length === 0) return null;
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-stone-900 mb-8">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map(related => (
          <div key={related.id}
            className="group bg-stone-50 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={() => router.push(`/blog/${related.slug}`)}>
            <img src={related.image} alt={related.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-4">
              <h4 className="font-bold text-stone-900 text-sm mb-1 line-clamp-2 group-hover:text-stone-700">{related.title}</h4>
              <span className="text-xs text-stone-500">{related.readTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Universal Layout ──────────────────────────────────────────────────────────
const UniversalLayout = ({ post, relatedPosts }: Props) => {
  const router    = useRouter();
  const hasSidebar = post.type === 'informational';
  const mdComponents = buildMdComponents();

  return (
    <>
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-800 rounded-full text-xs font-bold uppercase tracking-wide">
            {post.category}
          </span>
        </div>
      </div>

      <div className={`container mx-auto px-6 py-12 ${hasSidebar ? 'max-w-7xl' : 'max-w-5xl'}`}>
        <motion.button onClick={() => router.push('/blog')} className="flex items-center text-stone-500 hover:text-stone-900 mb-8 group" whileHover={{ x: -4 }}>
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </motion.button>

        <div className={`flex gap-12 ${hasSidebar ? 'flex-col lg:flex-row' : 'flex-col'}`}>

          {hasSidebar && (
            <aside className="lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <TableOfContents content={post.content} />
                <div className="mt-6 bg-stone-900 rounded-2xl p-6 text-white">
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-stone-900 font-bold text-lg mb-3">A</div>
                  <div className="font-bold mb-1">Academia Helper</div>
                  <div className="text-stone-400 text-xs leading-relaxed">Expert academic writing service for UK & USA students. MA & PhD qualified writers.</div>
                </div>
              </div>
            </aside>
          )}

          <article className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-stone-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-stone-500 mb-8 leading-relaxed border-l-4 border-amber-400 pl-4">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map(tag => (
                <span key={tag} className="flex items-center px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-medium">
                  <Tag className="w-3 h-3 mr-1" />{tag}
                </span>
              ))}
            </div>

            {/* Pure markdown — fenced blocks handle all special UI */}
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
              {post.content}
            </ReactMarkdown>

            <RelatedPosts posts={relatedPosts} />
          </article>
        </div>
      </div>
    </>
  );
};

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function BlogPostPage({ post, relatedPosts }: Props) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);
  if (!post) return null;

  return (
    <>
      <Head>
        <title>{post.title} | Academia Helper</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta property="og:title" content={`${post.title} | Academia Helper`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://www.academiahelper.com/blog/${post.slug}/`} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://www.academiahelper.com/blog/${post.slug}/`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'Article',
            headline: post.title, description: post.excerpt, image: post.image,
            author: { '@type': 'Organization', name: 'Academia Helper' },
            publisher: { '@type': 'Organization', name: 'Academia Helper' },
            datePublished: post.date,
            mainEntityOfPage: `https://www.academiahelper.com/blog/${post.slug}/`,
          })
        }} />
      </Head>

      <div className="min-h-screen bg-white text-black overflow-x-hidden">
        <ScrollProgress />
        <Header />
        <main className="pt-20">
          <UniversalLayout post={post} relatedPosts={relatedPosts} />
        </main>
        <Footer />
        <FloatingActionButton />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllPosts().map(p => ({ params: { slug: p.slug } }));
  return { paths: slugs, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);
  if (!post) return { notFound: true };
  const relatedPosts = getRelatedPosts(slug, post.category);
  return { props: { post, relatedPosts } };
};