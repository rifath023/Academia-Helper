import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const title = 'What Our Students Say';
  const [isHovered, setIsHovered] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      name: 'Emma Thompson',
      role: 'Business Student',
      content: 'Excellent work on my business strategy assignment! The analysis was thorough and the writing quality exceptional. Delivered on time with zero plagiarism.',
      rating: 5,
      subject: 'Business Strategy',
      avatar: 'ET',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      id: 2,
      name: 'James Wilson',
      role: 'Finance Masters',
      content: 'Outstanding financial modeling work. The calculations were accurate and the report was professionally structured. Highly recommend for finance assignments.',
      rating: 5,
      subject: 'Financial Analysis',
      avatar: 'JW',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      id: 3,
      name: 'Sarah Mitchell',
      role: 'Tourism Student',
      content: 'Amazing tourism management essay! The writer clearly understood the industry and provided excellent insights. Will definitely use this service again.',
      rating: 5,
      subject: 'Tourism Management',
      avatar: 'SM',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      id: 4,
      name: 'David Chen',
      role: 'MBA Student',
      content: 'Perfect case study analysis for my MBA program. The depth of research and quality of writing exceeded my expectations. Truly professional service.',
      rating: 5,
      subject: 'Case Study',
      avatar: 'DC',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      id: 5,
      name: 'Lisa Rodriguez',
      role: 'Accounting Student',
      content: 'Comprehensive accounting report with perfect calculations. The explanations were clear and helped me understand complex concepts better.',
      rating: 5,
      subject: 'Management Accounting',
      avatar: 'LR',
      gradient: 'from-rose-400 to-red-500',
    },
    {
      id: 6,
      name: 'Michael Brown',
      role: 'Marketing Student',
      content: 'Brilliant marketing research paper! The market analysis was spot-on and the recommendations were practical and well-justified.',
      rating: 5,
      subject: 'Marketing Research',
      avatar: 'MB',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
    id: 7,
    name: 'Rachel Green',
    role: 'HR Management Student',
    content: 'Fantastic work on my human resource management dissertation! The research was comprehensive and the writing was clear and professional. Exceeded all my expectations.',
    rating: 5,
    subject: 'HR Management',
    avatar: 'RG',
    gradient: 'from-violet-400 to-purple-500',
  },
  {
    id: 8,
    name: 'Alex Johnson',
    role: 'Economics Student',
    content: 'Outstanding economic analysis paper! The data interpretation was spot-on and the conclusions were well-supported. Will definitely recommend to fellow students.',
    rating: 5,
    subject: 'Economics',
    avatar: 'AJ',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    id: 9,
    name: 'Sophie Turner',
    role: 'International Business',
    content: 'Brilliant international business case study! The cross-cultural analysis was insightful and the recommendations were practical. Top-quality work delivered on time.',
    rating: 5,
    subject: 'International Business',
    avatar: 'ST',
    gradient: 'from-pink-400 to-rose-500',
  },
  {
    id: 10,
    name: 'Daniel Kim',
    role: 'Finance Student',
    content: 'Perfect financial statement analysis! The calculations were accurate and the explanations helped me understand complex financial concepts better. Highly professional service.',
    rating: 5,
    subject: 'Financial Analysis',
    avatar: 'DK',
    gradient: 'from-indigo-400 to-blue-500',
  },
  {
    id: 11,
    name: 'Maya Patel',
    role: 'Hospitality Management',
    content: 'Excellent hospitality management research paper! The industry insights were valuable and the writing quality was exceptional. Will use this service again for sure.',
    rating: 5,
    subject: 'Hospitality Management',
    avatar: 'MP',
    gradient: 'from-orange-400 to-red-500',
  },
  {
    id: 12,
    name: 'Oliver Smith',
    role: 'Business Analytics',
    content: 'Amazing data analysis project! The statistical analysis was thorough and the visualizations were professional. Perfect work that helped me achieve top grades.',
    rating: 5,
    subject: 'Business Analytics',
    avatar: 'OS',
    gradient: 'from-teal-400 to-cyan-500',
  },
  {
    id: 13,
    name: 'Isabella Martinez',
    role: 'Marketing Student',
    content: 'Superb digital marketing strategy report! The market research was detailed and the campaign recommendations were creative and feasible. Truly impressed!',
    rating: 5,
    subject: 'Digital Marketing',
    avatar: 'IM',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    id: 14,
    name: 'Thomas Anderson',
    role: 'Operations Management',
    content: 'Outstanding operations management case study! The process analysis was thorough and the improvement suggestions were practical. High-quality academic writing.',
    rating: 5,
    subject: 'Operations Management',
    avatar: 'TA',
    gradient: 'from-gray-400 to-slate-500',
  },
  {
    id: 15,
    name: 'Chloe Williams',
    role: 'Event Management',
    content: 'Brilliant event planning dissertation! The project management framework was well-structured and the research was comprehensive. Delivered exactly what I needed.',
    rating: 5,
    subject: 'Event Management',
    avatar: 'CW',
    gradient: 'from-lime-400 to-green-500',
  },
  {
    id: 16,
    name: 'Ryan Cooper',
    role: 'Supply Chain Student',
    content: 'Exceptional supply chain analysis! The logistics evaluation was detailed and the optimization strategies were innovative. Professional work that impressed my professors.',
    rating: 5,
    subject: 'Supply Chain',
    avatar: 'RC',
    gradient: 'from-sky-400 to-blue-500',
  },
  {
    id: 17,
    name: 'Zara Ahmed',
    role: 'Public Administration',
    content: 'Excellent public policy analysis! The research methodology was sound and the policy recommendations were well-justified. Top-notch academic writing service.',
    rating: 5,
    subject: 'Public Policy',
    avatar: 'ZA',
    gradient: 'from-fuchsia-400 to-pink-500',
  },
  {
    id: 18,
    name: 'Jake Thompson',
    role: 'Project Management',
    content: 'Outstanding project management case study! The risk analysis was comprehensive and the project timeline was realistic. Professional quality work delivered on schedule.',
    rating: 5,
    subject: 'Project Management',
    avatar: 'JT',
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    id: 19,
    name: 'Natalie Davis',
    role: 'Organizational Behavior',
    content: 'Fantastic organizational psychology research! The behavioral analysis was insightful and the theoretical framework was well-applied. Exceeded my expectations completely.',
    rating: 5,
    subject: 'Organizational Behavior',
    avatar: 'ND',
    gradient: 'from-rose-400 to-pink-500',
  },
  {
    id: 20,
    name: 'Marcus Johnson',
    role: 'Strategic Management',
    content: 'Perfect strategic analysis report! The SWOT analysis was thorough and the strategic recommendations were actionable. High-quality work that helped me secure top marks.',
    rating: 5,
    subject: 'Strategic Management',
    avatar: 'MJ',
    gradient: 'from-amber-400 to-yellow-500',
  }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-stone-300'}`} 
      />
    ));
  };

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 bg-gradient-to-br from-slate-50 via-stone-50 to-slate-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header - Asymmetrical Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-stone-900">What Our</span>
              <br />
              <span className="bg-gradient-to-r from-stone-700 to-slate-600 bg-clip-text text-transparent font-light">
                Students Say
              </span>
            </motion.h2>
          </motion.div>
          
          <motion.div
            className="lg:col-span-5 flex items-end"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <p className="text-xl text-stone-600 leading-relaxed font-light">
                Join hundreds of satisfied students who achieved academic excellence with our expert writing services
              </p>
              
              {/* Mini Stats */}
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-stone-900">4.9/5</div>
                  <div className="text-sm text-stone-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-stone-900">500+</div>
                  <div className="text-sm text-stone-600">Happy Students</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Marquee */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            }}
          >
            <motion.div
              className="flex gap-8"
              animate={isHovered ? {} : {
                x: [0, -100 * testimonials.length],
              }}
              transition={isHovered ? {} : {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
              style={{
                width: `${120 * testimonials.length}%`,
              }}
            >
              {/* First set of testimonials */}
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="group flex-shrink-0 w-96 bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -12, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    {/* Quote Icon & Rating */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <Quote className="w-6 h-6 text-stone-400 mr-3" />
                        <div className="flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <div className="text-xs font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                        {testimonial.subject}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <blockquote className="text-stone-800 leading-relaxed mb-6 font-medium">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 shadow-lg`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-stone-900">
                          {testimonial.name}
                        </div>
                        <div className="text-stone-600 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial) => (
                <motion.div
                  key={`duplicate-${testimonial.id}`}
                  className="group flex-shrink-0 w-96 bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -12, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    {/* Quote Icon & Rating */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <Quote className="w-6 h-6 text-stone-400 mr-3" />
                        <div className="flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <div className="text-xs font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                        {testimonial.subject}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <blockquote className="text-stone-800 leading-relaxed mb-6 font-medium">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 shadow-lg`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-stone-900">
                          {testimonial.name}
                        </div>
                        <div className="text-stone-600 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '500+', label: 'Satisfied Students', icon: '👥' },
                { number: '100%', label: 'On-Time Delivery', icon: '⏰' },
                { number: '4.9/5', label: 'Average Rating', icon: '⭐' },
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-stone-900 mb-2">{stat.number}</div>
                  <div className="text-stone-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};