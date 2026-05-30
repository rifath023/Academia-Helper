import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ScrollProgress, FloatingActionButton } from '../../components/ScrollComponents';
import { sampleBlogPosts, type BlogPost } from '../../lib/blogData';

interface Props {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostPage({ post, relatedPosts }: Props) {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: post.title,
              description: post.excerpt,
              image: post.image,
              author: { '@type': 'Organization', name: 'Academia Helper' },
              publisher: { '@type': 'Organization', name: 'Academia Helper' },
              datePublished: post.date,
              mainEntityOfPage: `https://www.academiahelper.com/blog/${post.slug}/`,
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-white text-black overflow-x-hidden">
        <ScrollProgress />
        <Header />
        <main className="pt-20">
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-800 rounded-full text-xs font-medium">{post.category}</span>
            </div>
          </div>

          <div className="container mx-auto px-6 py-12 max-w-4xl">
            {/* Back */}
            <motion.button
              onClick={() => router.push('/blog')}
              className="flex items-center text-stone-600 hover:text-stone-900 mb-8 group transition-colors duration-200"
              whileHover={{ x: -4 }}
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Blog
            </motion.button>

            {/* Meta */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-stone-500">
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <div className="flex items-center"><Clock className="w-4 h-4 mr-1" />{post.readTime}</div>
                <span>By {post.author}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">{post.title}</h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">{post.excerpt}</p>
            </motion.div>

            {/* Tags */}
            <motion.div className="flex flex-wrap gap-2 mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm">
                  <Tag className="w-3 h-3 mr-1" />{tag}
                </span>
              ))}
            </motion.div>

            {/* Content */}
            <motion.div
              className="prose prose-stone prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-stone-700 prose-li:text-stone-700 prose-strong:text-stone-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-16 p-8 bg-gradient-to-br from-stone-900 via-slate-800 to-stone-900 rounded-3xl text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-3">Need Help With Your Assignment?</h3>
              <p className="text-stone-300 mb-6">Expert writers ready to help — plagiarism-free, on time, 0% AI content.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/8801577128417" target="_blank" rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-semibold transition-colors duration-200">
                  WhatsApp Us Now
                </a>
                <a href="/#contact" className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-2xl font-semibold transition-colors duration-200">
                  Place an Order
                </a>
              </div>
            </motion.div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <motion.div className="mt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                <h3 className="text-2xl font-bold text-stone-900 mb-8">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((related) => (
                    <div
                      key={related.id}
                      className="group bg-stone-50 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                      onClick={() => router.push(`/blog/${related.slug}`)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={related.image} alt={related.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="p-4">
                        <h4 className="font-bold text-stone-900 text-sm mb-2 line-clamp-2 group-hover:text-stone-700">{related.title}</h4>
                        <span className="text-xs text-stone-500">{related.readTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </main>
        <Footer />
        <FloatingActionButton />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sampleBlogPosts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = sampleBlogPosts.find((p) => p.slug === slug) || null;
  if (!post) return { notFound: true };
  const relatedPosts = sampleBlogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  return { props: { post, relatedPosts } };
};
