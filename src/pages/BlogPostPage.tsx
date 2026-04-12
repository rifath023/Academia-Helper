import React, { useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Tag, MessageCircle, CheckCircle, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { sampleBlogPosts } from './BlogPage';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Scroll to top when opening a blog post (forward navigation)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  const post = sampleBlogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/8801577128417?text=Hi, I need help with my assignment', '_blank');
  };

  // Save current blog scroll position then go back to blog list
  const handleBackToBlog = () => {
    const savedY = sessionStorage.getItem('blogScrollY');
    navigate('/blog');
    // Restore scroll after navigation paint
    if (savedY) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: parseInt(savedY), behavior: 'instant' });
        });
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100 pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.button
          onClick={handleBackToBlog}
          className="mb-8 flex items-center text-stone-600 hover:text-stone-900 transition-colors duration-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -4 }}
        >
          <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
          Back to Blog
        </motion.button>

        <motion.article
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-64 md:h-96">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-stone-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="prose prose-lg prose-stone max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-stone-900 mt-8 mb-4 border-b pb-2" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3" {...props} />,
                  p: ({node, ...props}) => <p className="text-stone-700 leading-relaxed mb-4" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
                  li: ({node, ...props}) => <li className="text-stone-700 leading-relaxed ml-4" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-bold text-stone-900" {...props} />,
                  em: ({node, ...props}) => <em className="italic text-stone-800" {...props} />,
                  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-stone-300 pl-4 italic text-stone-600 my-6" {...props} />,
                  code: ({node, inline, ...props}) =>
                    inline
                      ? <code className="bg-stone-100 text-stone-800 px-1 py-0.5 rounded text-sm" {...props} />
                      : <code className="block bg-stone-100 text-stone-800 p-4 rounded-lg text-sm overflow-x-auto" {...props} />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Call-to-Action Section */}
            <motion.div
              className="mt-12 mb-8 bg-gradient-to-br from-slate-800 via-stone-900 to-slate-900 rounded-2xl p-8 border border-stone-700 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 animate-pulse"></div>
              </div>

              <div className="relative z-10 text-center">
                <motion.div
                  className="inline-flex items-center justify-center mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-8 h-8 text-green-400" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Need Expert Help with Your Assignment?
                </h3>

                <p className="text-lg text-stone-300 mb-6 max-w-2xl mx-auto">
                  Don't struggle alone! Get <span className="font-bold text-green-400">affordable, high-quality, and plagiarism-free</span> assignments from our MA & PhD qualified experts. We guarantee <span className="font-bold text-green-400">on-time delivery</span> and support in all subjects!
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-stone-200">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-200">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-medium">100% Original Work</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-200">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-medium">Student-Friendly Prices</span>
                  </div>
                </div>

                <motion.button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  Chat on WhatsApp Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <p className="mt-4 text-sm text-stone-400">
                  📱 WhatsApp: <span className="font-semibold text-green-400">+880 1577 128417</span>
                </p>
              </div>
            </motion.div>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-stone-200">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};