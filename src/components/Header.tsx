import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, BookOpen, MessageCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (href.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-stone-200/50' 
          : 'bg-neutral-800'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Enhanced Design */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={`p-3 rounded-2xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-br from-stone-700 to-slate-800 shadow-lg' 
                : 'bg-white backdrop-blur-sm border border-white/30 shadow-xl'
            }`}>
              <BookOpen className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-black'}`} />
            </div>
            <div>
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-stone-900' : 'text-white'
              }`}>
                Academia Helper
              </span>
              <div className={`text-xs font-medium transition-colors duration-300 ${
                isScrolled ? 'text-stone-600' : 'text-stone-200'
              }`}>
                Expert Writing Services
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation - Enhanced Styling */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative font-semibold transition-all duration-300 group ${
                  isScrolled 
                    ? 'text-stone-700 hover:text-stone-900' 
                    : 'text-white hover:text-stone-200'
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-stone-900' : 'bg-white'
                }`}></div>
              </motion.button>
            ))}
            
            {/* WhatsApp Button - Redesigned */}
            <motion.a
              href="https://wa.me/8801577128417"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                <span>Chat Now</span>
              </div>
            </motion.a>
          </nav>

          {/* Mobile Menu Button - Enhanced */}
          <motion.button
            onClick={toggleMenu}
            className={`md:hidden relative p-3 rounded-2xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-stone-100 text-stone-900 hover:bg-stone-200' 
                : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation - Enhanced Design */}
        <motion.nav
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`pt-6 pb-4 space-y-2 ${
            isScrolled ? 'border-t border-stone-200 mt-4' : 'border-t border-white/20 mt-4'
          }`}>
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left py-3 px-4 rounded-2xl font-semibold transition-all duration-300 ${
                  isScrolled 
                    ? 'text-stone-700 hover:bg-stone-100 hover:text-stone-900' 
                    : 'text-white hover:bg-white/10'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Mobile WhatsApp Button */}
            <motion.a
              href="https://wa.me/8801577128417"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center justify-center mt-4 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
              <span>Contact via WhatsApp</span>
            </motion.a>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};