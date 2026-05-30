import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ScrollProgress, FloatingActionButton } from '../../components/ScrollComponents';
import { sampleBlogPosts } from '../../lib/blogData';

export default function BlogPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const categories = ['All', 'Business Writing', 'Finance', 'Tourism', 'Academic Tips'];

  const filteredPosts = sampleBlogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Academic Writing Blog | Essays, Dissertations & Study Tips</title>
        <meta name="description" content="Expert academic writing tips, essay guides, dissertation advice and study strategies for UK and USA university students from Academia Helper." />
        <meta property="og:title" content="Academic Writing Blog | Academia Helper" />
        <meta property="og:url" content="https://www.academiahelper.com/blog/" />
        <link rel="canonical" href="https://www.academiahelper.com/blog/" />
      </Head>

      <div className="min-h-screen bg-white text-black overflow-x-hidden">
        <ScrollProgress />
        <Header />
        <main className="min-h-screen bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100 pt-20">
          <div className="container mx-auto px-6 py-12">

            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Academia Helper Blog</h1>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Expert insights, writing tips, and academic guidance to help you excel in your studies
              </p>
            </motion.div>

            <motion.div className="mb-12 space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-stone-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-stone-200 rounded-2xl bg-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-stone-900 text-white shadow-lg'
                        : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => router.push(`/blog/${post.slug}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-800 rounded-full text-xs font-medium">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-stone-500">
                      <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{new Date(post.date).toLocaleDateString()}</div>
                      <div className="flex items-center"><Clock className="w-4 h-4 mr-1" />{post.readTime}</div>
                    </div>
                    <h2 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-stone-700 transition-colors duration-200">{post.title}</h2>
                    <p className="text-stone-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-stone-500">{post.author}</span>
                      <div className="flex items-center text-stone-400 group-hover:text-stone-600 transition-colors duration-200">
                        <span className="text-sm mr-2">Read more</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <motion.div className="text-center py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3 className="text-2xl font-semibold text-stone-900 mb-2">No articles found</h3>
                <p className="text-stone-600">Try adjusting your search or filter criteria</p>
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

export async function getStaticProps() {
  return { props: {} };
}
