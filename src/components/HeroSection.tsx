import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronDown, BookOpen, GraduationCap, Users } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center px-6 py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(248,250,252,0.95) 0%, rgba(241,245,249,0.9) 100%), url('https://images.unsplash.com/photo-1633396520324-5f03ca27ebce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50/80 via-slate-100/70 to-stone-200/60"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Asymmetrical Layout */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-sm font-medium text-amber-800"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                ✨ Expert Academic Writing Services
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900 bg-clip-text text-transparent">
                  Excellence in
                </span>
                <br />
                <span className="text-stone-700 font-light">Academic Writing</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-stone-600 max-w-2xl leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Get outstanding essays, reports, and assignments for Business, Finance, Tourism, and more. 
                Written by dedicated UK & USA experts with guaranteed originality.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 bg-stone-900 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-stone-800 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <span className="mr-2 font-medium">Place Your Order</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/8801577128417"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white border-2 border-stone-200 text-stone-700 rounded-2xl shadow-lg hover:shadow-xl hover:border-stone-300 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium">WhatsApp Chat</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Stats - Modern Layout */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  number: '500+', 
                  label: 'Completed Projects', 
                  icon: <BookOpen className="w-7 h-7" />,
                  gradient: 'from-amber-400 to-orange-500'
                },
                { 
                  number: '0%', 
                  label: 'AI Content', 
                  icon: <GraduationCap className="w-7 h-7" />,
                  gradient: 'from-emerald-400 to-teal-500'
                },
                { 
                  number: '24/7', 
                  label: 'Expert Support', 
                  icon: <Users className="w-7 h-7" />,
                  gradient: 'from-blue-400 to-indigo-500'
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-50/50 to-slate-100/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white mb-4 shadow-lg`}>
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-stone-900 mb-2">{stat.number}</div>
                    <div className="text-stone-600 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-stone-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};