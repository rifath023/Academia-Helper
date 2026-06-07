import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag, Star, CheckCircle, XCircle, ShoppingCart, ChevronRight, List } from 'lucide-react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ScrollProgress, FloatingActionButton } from '../../components/ScrollComponents';
import { getAllPosts, getPostBySlug, getRelatedPosts, type BlogPost, type AmazonProduct } from '../../lib/posts';

interface Props {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

// ── Star Rating ───────────────────────────────────────────────────────────────
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

// ── Amazon Product Card ───────────────────────────────────────────────────────
const AmazonProductCard = ({ product, rank }: { product: AmazonProduct; rank: number }) => (
  <div className="mb-10">
    <motion.div
      className="bg-white rounded-3xl border-2 border-stone-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: rank * 0.1 }} whileHover={{ y: -4 }}
    >
      {/* Card Header */}
      <div className="bg-gradient-to-r from-stone-900 to-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 bg-amber-400 text-stone-900 rounded-full flex items-center justify-center text-sm font-black">#{rank}</span>
          <h3 className="text-white font-bold text-lg">{product.name}</h3>
        </div>
        {product.badge && (
          <span className="px-3 py-1 bg-amber-400 text-stone-900 rounded-full text-xs font-black uppercase tracking-wide">{product.badge}</span>
        )}
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image + Rating */}
          <div className="md:w-52 flex-shrink-0">
            <div className="bg-stone-50 rounded-2xl p-4 flex items-center justify-center h-52 border border-stone-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.name} className="max-h-44 max-w-full object-contain" />
            </div>
            <div className="mt-3 text-center">
              <StarRating rating={product.rating} />
              <div className="text-xs text-stone-500 mt-1">{product.rating}/5 · {product.reviewCount.toLocaleString()} reviews</div>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <p className="text-stone-600 mb-5 leading-relaxed">{product.description}</p>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 p-4 bg-stone-50 rounded-2xl">
              <div>
                <div className="text-xs font-black text-emerald-700 uppercase tracking-widest mb-3">✅ Pros</div>
                <ul className="space-y-2">
                  {product.pros.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-black text-red-700 uppercase tracking-widest mb-3">❌ Cons</div>
                <ul className="space-y-2">
                  {product.cons.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                      <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specifications */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="mb-5">
                <div className="text-xs font-black text-stone-700 uppercase tracking-widest mb-3">📋 Specifications</div>
                <div className="rounded-2xl border border-stone-200 overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {product.specifications.map((spec, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-stone-50' : 'bg-white'}>
                          <td className="px-4 py-2.5 font-semibold text-stone-700 w-2/5 border-r border-stone-200">{spec.label}</td>
                          <td className="px-4 py-2.5 text-stone-600">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Buy Button — hidden until affiliate links ready */}
            {/*
            <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg">
              <ShoppingCart className="w-4 h-4" />Check Price on Amazon<ChevronRight className="w-4 h-4" />
            </a>
            */}
          </div>
        </div>
      </div>
    </motion.div>

    {/* Discussion — appears below the card */}
    {product.discussion && (
      <div className="mt-4 px-6 py-5 bg-blue-50 border border-blue-100 rounded-2xl">
        <div className="text-xs font-black text-blue-700 uppercase tracking-widest mb-2">💬 Our Take</div>
        <p className="text-stone-700 leading-relaxed text-base">{product.discussion}</p>
      </div>
    )}
  </div>
);

// ── Comparison Table ──────────────────────────────────────────────────────────
const ComparisonTable = ({ products }: { products: AmazonProduct[] }) => (
  <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-lg mb-10">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-stone-900 text-white">
          <th className="text-left px-4 py-4 font-bold">Product</th>
          <th className="text-center px-4 py-4 font-bold">Rating</th>
          {/* <th className="text-center px-4 py-4 font-bold">Price</th> */}
          <th className="text-center px-4 py-4 font-bold">Best For</th>
          {/* <th className="text-center px-4 py-4 font-bold">Buy</th> */}
        </tr>
      </thead>
      <tbody>
        {products.map((product, i) => (
          <tr key={i} className={`border-t border-stone-100 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50'} hover:bg-amber-50 transition-colors`}>
            <td className="px-4 py-4">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.image} alt={product.name} className="w-12 h-12 object-contain bg-stone-100 rounded-xl p-1" />
                <div>
                  <div className="font-semibold text-stone-900">{product.name}</div>
                  {product.badge && <span className="text-xs text-amber-700 font-medium">{product.badge}</span>}
                </div>
              </div>
            </td>
            <td className="px-4 py-4 text-center">
              <div className="flex flex-col items-center gap-1">
                <StarRating rating={product.rating} size="sm" />
                <span className="text-xs text-stone-500">{product.rating}/5</span>
              </div>
            </td>
            {/* <td className="px-4 py-4 text-center font-bold text-stone-900">{product.price}</td> */}
            <td className="px-4 py-4 text-center text-stone-600 font-medium">{product.badge || '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ── Table of Contents ─────────────────────────────────────────────────────────
const TableOfContents = ({ content }: { content: string }) => {
  const [activeId, setActiveId] = useState('');
  const headings = content.split('\n')
    .filter(l => l.startsWith('## ') || l.startsWith('### '))
    .map(line => {
      const level = line.startsWith('### ') ? 3 : 2;
      const text = line.replace(/^#{2,3} /, '');
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return { level, text, id };
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); }); },
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

// ── Markdown Renderer ─────────────────────────────────────────────────────────
const MarkdownContent = ({ content }: { content: string }) => {
  const components = {
    h2: ({ children }: any) => {
      const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return <h2 id={id} className="text-2xl font-bold text-stone-900 mt-10 mb-4 scroll-mt-24 pb-2 border-b border-stone-100">{children}</h2>;
    },
    h3: ({ children }: any) => {
      const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return <h3 id={id} className="text-xl font-bold text-stone-800 mt-8 mb-3 scroll-mt-24">{children}</h3>;
    },
    p: ({ children }: any) => <p className="text-stone-700 leading-relaxed mb-4 text-base">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc list-outside pl-10 space-y-3 mb-4 text-stone-700">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside pl-10 space-y-2 mb-4 text-stone-700">{children}</ol>,
    li: ({ children }: any) => <li className="text-stone-700 leading-relaxed">{children}</li>,
    strong: ({ children }: any) => <strong className="font-bold text-stone-900">{children}</strong>,
    a: ({ href, children }: any) => <a href={href} className="text-amber-700 hover:text-amber-900 underline" target="_blank" rel="noopener noreferrer">{children}</a>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 rounded-r-xl text-stone-700 italic">{children}</blockquote>,
  };
  return <ReactMarkdown components={components}>{content}</ReactMarkdown>;
};

// ── Split content at 3rd H2 (for transactional layout) ───────────────────────
const splitContentForTransactional = (content: string) => {
  const lines = content.split('\n');
  let h2Count = 0;
  let splitIndex = lines.length;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('## ')) {
      h2Count++;
      if (h2Count === 3) { splitIndex = i; break; }
    }
  }
  return {
    before: lines.slice(0, splitIndex).join('\n'),
    after: lines.slice(splitIndex).join('\n'),
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
          <div key={related.id} className="group bg-stone-50 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={() => router.push(`/blog/${related.slug}`)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
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

// ── CTA Box ───────────────────────────────────────────────────────────────────
const CTABox = () => (
  <div className="mt-16 p-8 bg-gradient-to-br from-stone-900 via-slate-800 to-stone-900 rounded-3xl text-white text-center">
    <h3 className="text-2xl font-bold mb-3">Need Help With Your Assignment?</h3>
    <p className="text-stone-300 mb-6">Expert writers ready to help — plagiarism-free, on time, 0% AI content.</p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="https://wa.me/8801577128417" target="_blank" rel="noopener noreferrer"
        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-semibold transition-colors duration-200">WhatsApp Us Now</a>
      <a href="/#contact" className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-2xl font-semibold transition-colors duration-200">Place an Order</a>
    </div>
  </div>
);

// ── INFORMATIONAL LAYOUT ──────────────────────────────────────────────────────
const InformationalLayout = ({ post, relatedPosts }: Props) => {
  const router = useRouter();
  return (
    <>
      <div className="relative h-64 md:h-96 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-800 rounded-full text-xs font-bold uppercase tracking-wide">{post.category}</span>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <motion.button onClick={() => router.push('/blog')} className="flex items-center text-stone-500 hover:text-stone-900 mb-8 group" whileHover={{ x: -4 }}>
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />Back to Blog
        </motion.button>
        <div className="flex flex-col lg:flex-row gap-12">
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
          <article className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-stone-500">
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
              <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-stone-500 mb-8 leading-relaxed border-l-4 border-amber-400 pl-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map(tag => <span key={tag} className="flex items-center px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-medium"><Tag className="w-3 h-3 mr-1" />{tag}</span>)}
            </div>
            <MarkdownContent content={post.content} />
            <CTABox />
            <RelatedPosts posts={relatedPosts} />
          </article>
        </div>
      </div>
    </>
  );
};

// ── TRANSACTIONAL LAYOUT ──────────────────────────────────────────────────────
const TransactionalLayout = ({ post, relatedPosts }: Props) => {
  const router = useRouter();
  const products: AmazonProduct[] = post.products || [];
  const { before, after } = splitContentForTransactional(post.content);

  return (
    <>
      <div className="relative h-64 md:h-80 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className="px-3 py-1 bg-amber-400 text-stone-900 rounded-full text-xs font-bold uppercase tracking-wide mb-4 inline-block">{post.category}</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">{post.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <motion.button onClick={() => router.push('/blog')} className="flex items-center text-stone-500 hover:text-stone-900 mb-6 group" whileHover={{ x: -4 }}>
          <ArrowLeft className="w-4 h-4 mr-2" />Back to Blog
        </motion.button>

        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-stone-500">
          <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
          <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</div>
        </div>

        <p className="text-xl text-stone-600 mb-6 leading-relaxed">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => <span key={tag} className="flex items-center px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-medium"><Tag className="w-3 h-3 mr-1" />{tag}</span>)}
        </div>

        {/* <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 text-sm text-amber-800">
          <strong>Disclosure:</strong> This post contains affiliate links. We may earn a small commission at no extra cost to you if you purchase through our links.
        </div> */}

        {/* PART 1: Intro + First 2 Headings */}
        <div className="mb-10">
          <MarkdownContent content={before} />
        </div>

        {/* Quick Comparison Table */}
        {products.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-6 pb-2 border-b border-stone-100">Quick Comparison</h2>
            <ComparisonTable products={products} />
          </div>
        )}

        {/* Detailed Reviews — each card has specs + discussion below */}
        {products.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-8 pb-2 border-b border-stone-100">Detailed Reviews</h2>
            {products.map((p, i) => (
              <AmazonProductCard key={i} product={p} rank={i + 1} />
            ))}
          </div>
        )}

        {/* PART 2: 3rd Heading + Conclusion + FAQs */}
        {after && (
          <div className="mt-4">
            <MarkdownContent content={after} />
          </div>
        )}

        <RelatedPosts posts={relatedPosts} />
      </div>
    </>
  );
};

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Article',
          headline: post.title, description: post.excerpt, image: post.image,
          author: { '@type': 'Organization', name: 'Academia Helper' },
          publisher: { '@type': 'Organization', name: 'Academia Helper' },
          datePublished: post.date,
          mainEntityOfPage: `https://www.academiahelper.com/blog/${post.slug}/`,
        })}} />
      </Head>
      <div className="min-h-screen bg-white text-black overflow-x-hidden">
        <ScrollProgress /><Header />
        <main className="pt-20">
          {post.type === 'transactional'
            ? <TransactionalLayout post={post} relatedPosts={relatedPosts} />
            : <InformationalLayout post={post} relatedPosts={relatedPosts} />}
        </main>
        <Footer /><FloatingActionButton />
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
