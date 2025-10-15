import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { sampleBlogPosts } from './BlogPage'; // Export this from BlogPage

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = sampleBlogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100 pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.button
          onClick={() => navigate('/blog')}
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

            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-stone-200">
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