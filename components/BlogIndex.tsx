import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollProgress, FloatingActionButton } from './ScrollComponents';
import type { BlogPost } from '../lib/posts';
import { BLOG_PAGE_SIZE, SITE_URL, getBlogPagePath } from '../lib/blog-pagination';

export interface BlogIndexProps {
  posts: BlogPost[];
  page: number;
}

function thumbnail(image: string): string {
  try {
    const url = new URL(image);
    if (url.hostname === 'images.unsplash.com') {
      url.searchParams.set('auto', 'format');
      url.searchParams.set('fit', 'crop');
      url.searchParams.set('w', '640');
      url.searchParams.set('q', '75');
      return url.toString();
    }
  } catch {
    // Local images can use a relative URL.
  }
  return image;
}

function displayDate(value: string): string {
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
  });
}

export default function BlogIndex({ posts, page }: BlogIndexProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPage, setFilteredPage] = useState(1);
  const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];
  const query = searchTerm.trim().toLowerCase();
  const filtering = Boolean(query) || selectedCategory !== 'All';
  const filteredPosts = posts.filter(post => (
    (!query || `${post.title} ${post.excerpt}`.toLowerCase().includes(query)) &&
    (selectedCategory === 'All' || post.category === selectedCategory)
  ));
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / BLOG_PAGE_SIZE));
  const currentPage = filtering ? Math.min(filteredPage, totalPages) : page;
  const visiblePosts = filteredPosts.slice((currentPage - 1) * BLOG_PAGE_SIZE, currentPage * BLOG_PAGE_SIZE);
  const canonical = `${SITE_URL}${getBlogPagePath(page)}`;
  const title = page === 1 ? 'Academic Writing Blog | Essays & Study Tips' : `Academic Writing Blog – Page ${page} | Academia Helper`;
  const paginationClass = 'inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border px-3 py-2 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-700';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Expert academic writing tips, essay guides, dissertation advice and study strategies for UK and USA university students from Academia Helper." />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
      </Head>
      <div className="min-h-screen bg-white text-black overflow-x-hidden">
        <ScrollProgress />
        <Header />
        <main className="min-h-screen bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100 pt-20">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Academia Helper Blog</h1>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">Expert insights, writing tips, and academic guidance to help you excel in your studies</p>
            </div>
            <div className="mb-8 space-y-6">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Search className="h-5 w-5 text-stone-400" /></div>
                <label htmlFor="blog-search" className="sr-only">Search all articles</label>
                <input id="blog-search" type="search" placeholder="Search all articles..." value={searchTerm}
                  onChange={event => { setSearchTerm(event.target.value); setFilteredPage(1); }}
                  className="block w-full pl-10 pr-3 py-3 border border-stone-200 rounded-2xl bg-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent" />
              </div>
              <div className="flex flex-wrap justify-center gap-3" aria-label="Article categories">
                {categories.map(category => (
                  <button key={category} type="button" aria-pressed={selectedCategory === category}
                    onClick={() => { setSelectedCategory(category); setFilteredPage(1); }}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${selectedCategory === category ? 'bg-stone-900 text-white shadow-lg' : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'}`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <p className="mb-6 text-sm text-stone-600" role="status">
              {filteredPosts.length ? `Showing ${(currentPage - 1) * BLOG_PAGE_SIZE + 1}–${Math.min(currentPage * BLOG_PAGE_SIZE, filteredPosts.length)} of ${filteredPosts.length} articles` : 'No articles found'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visiblePosts.map((post, index) => (
                <article key={post.slug} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
                  <Link href={`/blog/${post.slug}/`} prefetch={false}
                    className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-stone-700">
                    <div className="relative h-48 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={thumbnail(post.image)} alt={post.title} width={640} height={384}
                        loading={index < 3 ? 'eager' : 'lazy'} decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-800 rounded-full text-xs font-medium">{post.category}</span>
                      {post.type === 'transactional' && <span className="absolute top-4 right-4 px-3 py-1 bg-amber-400 text-stone-900 rounded-full text-xs font-bold">Product Review</span>}
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-stone-500">
                        {post.date && <time dateTime={post.date} className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{displayDate(post.date)}</time>}
                        <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-stone-700 line-clamp-2">{post.title}</h2>
                      <p className="text-stone-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-stone-500">{post.author}</span>
                        <span className="flex items-center text-sm text-stone-500">Read more<ArrowRight className="w-4 h-4 ml-2" /></span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            {!filteredPosts.length && <div className="text-center py-12"><h2 className="text-2xl font-semibold text-stone-900 mb-2">No articles found</h2><p className="text-stone-600">Try adjusting your search or filter criteria</p></div>}
            {totalPages > 1 && (
              <nav aria-label="Blog pagination" className="mt-12 flex flex-wrap items-center justify-center gap-2">
                {filtering ? (
                  <>
                    <button type="button" disabled={currentPage === 1} onClick={() => setFilteredPage(currentPage - 1)} className={`${paginationClass} bg-white disabled:opacity-40`}>Previous</button>
                    <span className="px-3 text-sm text-stone-600">Page {currentPage} of {totalPages}</span>
                    <button type="button" disabled={currentPage === totalPages} onClick={() => setFilteredPage(currentPage + 1)} className={`${paginationClass} bg-white disabled:opacity-40`}>Next</button>
                  </>
                ) : (
                  <>
                    {page > 1 && <Link href={getBlogPagePath(page - 1)} prefetch={false} rel="prev" className={`${paginationClass} bg-white hover:bg-stone-100`}>Previous</Link>}
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(number => number === page ? (
                      <span key={number} aria-current="page" aria-label={`Page ${number}`} className={`${paginationClass} bg-stone-900 border-stone-900 text-white`}>{number}</span>
                    ) : (
                      <Link key={number} href={getBlogPagePath(number)} prefetch={false} aria-label={`Page ${number}`} className={`${paginationClass} bg-white hover:bg-stone-100`}>{number}</Link>
                    ))}
                    {page < totalPages && <Link href={getBlogPagePath(page + 1)} prefetch={false} rel="next" className={`${paginationClass} bg-white hover:bg-stone-100`}>Next</Link>}
                  </>
                )}
              </nav>
            )}
          </div>
        </main>
        <Footer />
        <FloatingActionButton />
      </div>
    </>
  );
}
