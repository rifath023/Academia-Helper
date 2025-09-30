import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MessageCircle, Mail, Phone, Clock, Shield, CheckCircle, Send } from 'lucide-react';

export const CTASection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    wordCount: '',
    deadline: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Word Count: ${formData.wordCount}
Deadline: ${formData.deadline}
Message: ${formData.message}
    `;
    
    window.location.href = `mailto:academiahelp0@gmail.com?subject=Assignment Order: ${formData.subject}&body=${encodeURIComponent(emailBody)}`;
  };

  const subjects = [
    'Business Essay',
    'Finance Assignment',
    'Tourism Report',
    'Marketing Analysis',
    'Accounting Report',
    'HRM Essay',
    'Case Study',
    'PowerPoint Presentation',
    'Other'
  ];

  return (
    <section 
      ref={containerRef}
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-stone-900 via-slate-800 to-stone-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Ready to</span>
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-light">
              Excel?
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-stone-300 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get your high-quality assignment written by experts. Fast turnaround, original content, and guaranteed satisfaction.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form - Enhanced Design */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">Place Your Order</h3>
                <p className="text-stone-300 font-light">Fill out the form below and we'll get started on your assignment</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <label className="block text-sm font-medium text-stone-200 mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-stone-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <label className="block text-sm font-medium text-stone-200 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-stone-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <label className="block text-sm font-medium text-stone-200 mb-3">
                    Assignment Type *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                  >
                    <option value="" className="text-stone-900">Select assignment type</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject} className="text-stone-900">{subject}</option>
                    ))}
                  </select>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    <label className="block text-sm font-medium text-stone-200 mb-3">
                      Word Count
                    </label>
                    <input
                      type="text"
                      name="wordCount"
                      value={formData.wordCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-stone-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                      placeholder="e.g., 2000 words"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <label className="block text-sm font-medium text-stone-200 mb-3">
                      Deadline
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  <label className="block text-sm font-medium text-stone-200 mb-3">
                    Assignment Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-stone-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm resize-none transition-all duration-200"
                    placeholder="Please provide detailed requirements, citation style, and any specific instructions..."
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    Submit Your Order
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Features */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Instant Contact */}
            <motion.div
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Get Instant Help</h3>
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/8801577128417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <div className="font-bold">WhatsApp Chat</div>
                    <div className="text-sm opacity-90">Instant response guaranteed</div>
                  </div>
                </motion.a>
                
                <motion.a
                  href="mailto:academiahelp0@gmail.com"
                  className="group flex items-center p-4 bg-white/20 text-white rounded-2xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <div className="font-bold">Email Support</div>
                    <div className="text-sm opacity-90">academiahelp0@gmail.com</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Why Choose Our Service?</h3>
              <div className="space-y-4">
                {[
                  { icon: <Shield className="w-5 h-5" />, text: '0% AI content guarantee', color: 'text-emerald-400' },
                  { icon: <CheckCircle className="w-5 h-5" />, text: 'Less than 10% plagiarism', color: 'text-blue-400' },
                  { icon: <Clock className="w-5 h-5" />, text: 'Timely delivery always', color: 'text-amber-400' },
                  { icon: <ArrowRight className="w-5 h-5" />, text: 'Unlimited revisions', color: 'text-purple-400' },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center text-white group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  >
                    <div className={`${item.color} mr-3 group-hover:scale-110 transition-transform duration-200`}>
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Simple 3-Step Process</h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Submit Requirements', desc: 'Tell us about your assignment' },
                  { step: '2', title: 'Expert Writing', desc: 'Our specialists work on your paper' },
                  { step: '3', title: 'Receive & Review', desc: 'Get your completed assignment' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start text-white group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-bold mb-1">{item.title}</div>
                      <div className="text-sm opacity-90 font-light">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};