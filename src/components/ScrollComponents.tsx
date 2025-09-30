import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, X, Send, Mail } from 'lucide-react';
import { IntelligentChatWidget } from './IntelligentChatWidget';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setScrollProgress((currentProgress / scrollHeight) * 100);
      }
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

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 p-3 bg-white text-stone-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200 z-40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export const FloatingActionButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false);
  const [showIntelligentChat, setShowIntelligentChat] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={() => setShowChatWidget(true)}
            className="fixed bottom-6 right-6 group p-4 bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900 text-white rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 z-40"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Widget Overlay */}
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
              {/* Header */}
              <div className="bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900 text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-xl">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Need Help? 👋</h3>
                      <p className="text-stone-200 text-sm mt-1 font-light">We're here to assist you with your assignment!</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowChatWidget(false)}
                    className="p-2 hover:bg-white/10 rounded-xl transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="text-stone-700 font-medium">
                  Hi there! 🌟 How can we help you excel in your studies today?
                </div>
                
                <div className="space-y-3">
                  <motion.button
                    onClick={() => {
                      setShowChatWidget(false);
                      setShowIntelligentChat(true);
                    }}
                    className="group w-full text-left p-4 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-2xl border border-blue-200/50 hover:border-blue-300/70 transition-all duration-300 hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-500 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-200">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-stone-800">Chat with Alex AI</div>
                        <div className="text-stone-600 text-sm font-medium">Academic writing assistant 🤖</div>
                      </div>
                    </div>
                  </motion.button>
                  
                  <motion.button
                    onClick={() => {
                      window.open('https://wa.me/8801577128417', '_blank');
                      setShowChatWidget(false);
                    }}
                    className="group w-full text-left p-4 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-2xl border border-green-200/50 hover:border-green-300/70 transition-all duration-300 hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-green-500 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-200">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-stone-800">WhatsApp Chat</div>
                        <div className="text-stone-600 text-sm font-medium">+8801577128417 📱</div>
                      </div>
                    </div>
                  </motion.button>
                  
                  <motion.a
                    href="mailto:academiahelp0@gmail.com"
                    className="group block w-full text-left p-4 bg-gradient-to-br from-stone-50 to-slate-50 hover:from-stone-100 hover:to-slate-100 rounded-2xl border border-stone-200/50 hover:border-stone-300/70 transition-all duration-300 hover:shadow-lg"
                    onClick={() => setShowChatWidget(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-stone-700 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-200">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-stone-800">Send Email</div>
                        <div className="text-stone-600 text-sm font-medium">academiahelp0@gmail.com 📧</div>
                      </div>
                    </div>
                  </motion.a>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <div className="text-xs text-stone-500 text-center">
                    🎯 Expert help with essays, reports, and assignments<br/>
                    🌟 UK & USA academic standards<br/>
                    ⚡ Quick response guaranteed
                  </div>
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