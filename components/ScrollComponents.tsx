import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mail } from 'lucide-react';
import { IntelligentChatWidget } from './IntelligentChatWidget';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const current = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      if (height) setScrollProgress((current / height) * 100);
    };
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-stone-500 to-emerald-400 z-50 origin-left"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    />
  );
};

export const FloatingActionButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false);
  const [showIntelligentChat, setShowIntelligentChat] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={() => setShowChatWidget(true)}
            className="fixed bottom-6 right-6 group p-4 bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900 text-white rounded-full shadow-2xl z-40"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageCircle className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showChatWidget && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 max-w-[calc(100vw-3rem)] z-50"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden">
              <div className="bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900 text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-xl">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Need Help? 👋</h3>
                      <p className="text-stone-200 text-sm font-light">We are here to assist you!</p>
                    </div>
                  </div>
                  <button onClick={() => setShowChatWidget(false)} className="p-2 hover:bg-white/10 rounded-xl">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="text-stone-700 font-medium">Hi there! How can we help you excel in your studies today? 🌟</div>
                <div className="space-y-3">
                  <motion.button
                    onClick={() => { setShowChatWidget(false); setShowIntelligentChat(true); }}
                    className="group w-full text-left p-4 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-2xl border border-blue-200/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-500 rounded-xl mr-3">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-stone-800">Chat with Alex AI</div>
                        <div className="text-stone-600 text-sm">Academic writing assistant 🤖</div>
                      </div>
                    </div>
                  </motion.button>

                  <motion.button
                    onClick={() => { window.open('https://wa.me/8801577128417', '_blank'); setShowChatWidget(false); }}
                    className="group w-full text-left p-4 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-2xl border border-green-200/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-green-500 rounded-xl mr-3">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-stone-800">WhatsApp Chat</div>
                        <div className="text-stone-600 text-sm">+8801577128417 📱</div>
                      </div>
                    </div>
                  </motion.button>

                  <motion.a
                    href="mailto:academiahelp0@gmail.com"
                    onClick={() => setShowChatWidget(false)}
                    className="group block w-full text-left p-4 bg-gradient-to-br from-stone-50 to-slate-50 hover:from-stone-100 hover:to-slate-100 rounded-2xl border border-stone-200/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-stone-700 rounded-xl mr-3">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-stone-800">Send Email</div>
                        <div className="text-stone-600 text-sm">academiahelp0@gmail.com 📧</div>
                      </div>
                    </div>
                  </motion.a>
                </div>

                <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 text-center">
                  🎯 Expert help with essays, reports, and assignments<br />
                  🌟 UK & USA academic standards · ⚡ Quick response
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <IntelligentChatWidget
        isOpen={showIntelligentChat}
        onClose={() => setShowIntelligentChat(false)}
      />
    </>
  );
};
