import React from 'react';
import { BookOpen, MessageCircle, Mail, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-stone-900 via-slate-800 to-stone-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-stone-700 to-slate-800 rounded-2xl shadow-lg">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">Academia Helper</span>
                <div className="text-sm text-stone-400 font-medium">Expert Writing Services</div>
              </div>
            </div>
            
            <p className="text-stone-300 leading-relaxed font-light text-lg max-w-md">
              Expert academic writing services for UK and USA students. Professional, original, and timely delivery guaranteed with 0% AI content.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/8801577128417"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                WhatsApp
              </a>
              <a
                href="mailto:academiahelp0@gmail.com"
                className="group inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Email
              </a>
            </div>
          </div>

                    {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-4">
              {[
                'Business Essays',
                'Finance & Accounting', 
                'Tourism Reports',
                'Marketing Analysis',
                'HRM Papers',
                'Case Studies',
                'Computer Science',
                'Programming Languages',
                'Database Management',
                'Web Design & Development',
                'Networking',
                'Social Science',
                'Psychology',
                'Statistics'
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="group flex items-center text-stone-300 hover:text-white transition-all duration-300 font-medium"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Guarantees Combined */}
          <div className="space-y-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Services', href: '#services' },
                  { name: 'Testimonials', href: '#testimonials' },
                  { name: 'Contact', href: '#contact' },
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="group flex items-center text-stone-300 hover:text-white transition-all duration-300 font-medium"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guarantees */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Our Guarantees</h3>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: '0% AI Content', color: 'text-emerald-400' },
                  { icon: CheckCircle, text: '<10% Plagiarism', color: 'text-blue-400' },
                  { icon: Clock, text: 'On-Time Delivery', color: 'text-amber-400' },
                  { icon: ArrowRight, text: 'Unlimited Revisions', color: 'text-purple-400' },
                ].map((guarantee, index) => (
                  <div key={index} className="flex items-center group">
                    <guarantee.icon className={`w-5 h-5 mr-3 ${guarantee.color} group-hover:scale-110 transition-transform duration-200`} />
                    <span className="text-stone-300 group-hover:text-white transition-colors duration-200 font-medium">
                      {guarantee.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Urgent Help Section */}
        <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/30 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 rounded-full mb-4">
              <Clock className="w-5 h-5 text-amber-400 mr-2" />
              <span className="text-amber-200 font-semibold">Need Urgent Help?</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">24/7 Expert Support Available</h3>
            <p className="text-stone-300 font-light">Get immediate assistance with your assignments anytime, anywhere</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-stone-400 text-sm font-light">
              © {currentYear} Academia Helper. All rights reserved. Professional academic writing services for students worldwide.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                'Privacy Policy',
                'Terms of Service', 
                'Refund Policy',
                'Quality Guarantee'
              ].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-stone-400 hover:text-white transition-colors duration-300 font-medium hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};