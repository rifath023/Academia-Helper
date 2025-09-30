import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, BookOpen, Users, Presentation, Calculator, GraduationCap, ClipboardList, PenTool, Briefcase, DollarSign, Code, TrendingUp, Activity, Globe, Plane, Scale, Atom } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { 
    once: true, 
    margin: "-100px 0px -100px 0px"
  });

  const description = 'We provide expert support across all major academic assignment types used in UK, USA, and Australian universities.';

  const services = [
    {
      icon: <FileText className="w-7 h-7" />,
      title: 'Essays',
      description: 'Argumentative, analytical, and descriptive essays crafted with academic rigor.',
      color: 'from-amber-100 to-orange-100',
      iconColor: 'from-amber-500 to-orange-600',
    },
    {
      icon: <ClipboardList className="w-7 h-7" />,
      title: 'Reports',
      description: 'Business, lab, and technical reports following structured academic formats.',
      color: 'from-emerald-100 to-teal-100',
      iconColor: 'from-emerald-500 to-teal-600',
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Case Studies',
      description: 'In-depth real-world scenario analysis across business, law, and healthcare.',
      color: 'from-blue-100 to-indigo-100',
      iconColor: 'from-blue-500 to-indigo-600',
    },
    {
      icon: <PenTool className="w-7 h-7" />,
      title: 'Reflective Journals',
      description: 'Personal reflection tasks linking academic theory to practice.',
      color: 'from-purple-100 to-pink-100',
      iconColor: 'from-purple-500 to-pink-600',
    },
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: 'Literature Reviews',
      description: 'Critical analysis of academic sources, highlighting debates and research gaps.',
      color: 'from-rose-100 to-red-100',
      iconColor: 'from-rose-500 to-red-600',
    },
    {
      icon: <Presentation className="w-7 h-7" />,
      title: 'Presentations',
      description: 'Professional PowerPoint and oral presentation content for academic settings.',
      color: 'from-slate-100 to-stone-100',
      iconColor: 'from-slate-500 to-stone-600',
    },
    {
      icon: <Calculator className="w-7 h-7" />,
      title: 'Problem Sets',
      description: 'Accurate solutions for quantitative subjects including math, economics, and physics.',
      color: 'from-cyan-100 to-sky-100',
      iconColor: 'from-cyan-500 to-sky-600',
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: 'Dissertations & Theses',
      description: 'Comprehensive research projects at undergraduate, masters, and doctoral levels.',
      color: 'from-green-100 to-lime-100',
      iconColor: 'from-green-500 to-lime-600',
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: 'Annotated Bibliographies',
      description: 'Annotated lists of sources with concise summaries and evaluations for research preparation.',
      color: 'from-indigo-100 to-violet-100',
      iconColor: 'from-indigo-500 to-violet-600',
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Group Work / Group Projects',
      description: 'Collaborative projects, peer assessments, and team presentations with role distribution.',
      color: 'from-yellow-100 to-amber-100',
      iconColor: 'from-yellow-500 to-amber-600',
    },
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: 'Portfolio / ePortfolio',
      description: 'Curated collections showcasing learning artefacts, reflections, and professional development.',
      color: 'from-pink-100 to-rose-100',
      iconColor: 'from-pink-500 to-rose-600',
    },
  ];

  const subjectAreas = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Business & Management',
      description: 'MBA assignments, strategic management, business analysis, case studies, and organizational behavior papers.',
      gradient: 'rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.15)',
      iconBg: 'from-amber-500 to-orange-600',
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Finance & Accounting',
      description: 'Financial analysis, accounting principles, investment reports, corporate finance, and economic theory assignments.',
      gradient: 'rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.15)',
      iconBg: 'from-emerald-500 to-teal-600',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Computer Science & IT',
      description: 'Programming projects, software engineering, database design, networking, and cybersecurity assignments.',
      gradient: 'rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.15)',
      iconBg: 'from-blue-500 to-indigo-600',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Marketing & Communications',
      description: 'Digital marketing strategies, consumer behavior, brand management, market research, and advertising campaigns.',
      gradient: 'rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.15)',
      iconBg: 'from-purple-500 to-pink-600',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Human Resources & Psychology',
      description: 'HR management, organizational psychology, talent acquisition, employee relations, and workplace behavior studies.',
      gradient: 'rgba(244, 63, 94, 0.1), rgba(239, 68, 68, 0.15)',
      iconBg: 'from-rose-500 to-red-600',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Literature & Humanities',
      description: 'Literary analysis, critical essays, philosophy papers, history research, and cultural studies assignments.',
      gradient: 'rgba(139, 92, 246, 0.1), rgba(124, 58, 237, 0.15)',
      iconBg: 'from-violet-500 to-purple-600',
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Healthcare & Nursing',
      description: 'Medical case studies, nursing care plans, healthcare management, public health research, and clinical papers.',
      gradient: 'rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.15)',
      iconBg: 'from-green-500 to-emerald-600',
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Education & Teaching',
      description: 'Curriculum development, educational psychology, lesson planning, pedagogy research, and teaching methodology.',
      gradient: 'rgba(249, 115, 22, 0.1), rgba(234, 88, 12, 0.15)',
      iconBg: 'from-orange-500 to-amber-600',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Social Sciences',
      description: 'Sociology papers, political science research, anthropology studies, international relations, and public policy analysis.',
      gradient: 'rgba(6, 182, 212, 0.1), rgba(14, 165, 233, 0.15)',
      iconBg: 'from-cyan-500 to-sky-600',
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: 'Tourism & Hospitality',
      description: 'Hotel management, tourism development, event planning, hospitality operations, and travel industry analysis.',
      gradient: 'rgba(59, 130, 246, 0.1), rgba(79, 70, 229, 0.15)',
      iconBg: 'from-blue-500 to-indigo-600',
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Law & Legal Studies',
      description: 'Legal research, case law analysis, contract law, constitutional studies, and legal essay writing.',
      gradient: 'rgba(100, 116, 139, 0.1), rgba(71, 85, 105, 0.15)',
      iconBg: 'from-slate-500 to-gray-600',
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: 'Engineering & Sciences',
      description: 'Technical reports, lab experiments, research papers, mathematical analysis, and scientific methodology studies.',
      gradient: 'rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.15)',
      iconBg: 'from-teal-500 to-cyan-600',
    },
  ];

  const guarantees = [
    { title: '0% AI Content', description: 'Human-written papers only', icon: '🤖' },
    { title: '<10% Plagiarism', description: 'Original work guaranteed', icon: '✅' },
    { title: 'Unlimited Revisions', description: 'Until you are satisfied', icon: '🔄' },
    { title: 'On-Time Delivery', description: 'Never miss your deadline', icon: '⏰' },
  ];

  return (
    <section 
      ref={containerRef}
      id="services" 
      className="py-24 px-6 bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120,119,198,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255,183,77,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(168,162,158,0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header with Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block">Our</span>
              <span className="bg-gradient-to-r from-stone-700 to-slate-600 bg-clip-text text-transparent font-light">
                Assignment Expertise
              </span>
            </motion.h2>
          </motion.div>
          
          <motion.div
            className="lg:col-span-4 flex items-end"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl text-stone-600 leading-relaxed font-light">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Services Grid - Asymmetrical */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group relative bg-gradient-to-br ${service.color} p-8 rounded-3xl border border-white/50 hover:border-white/70 transition-all duration-500 backdrop-blur-sm ${
                index === 1 ? 'md:translate-y-8' : ''
              } ${
                index === 4 ? 'lg:translate-y-12' : ''
              }`}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: index === 1 ? 32 : index === 4 ? 48 : 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 1.0 + index * 0.15 }}
              whileHover={{ y: (index === 1 ? 32 : index === 4 ? 48 : 0) - 12, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.iconColor} text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-stone-800 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-stone-700 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subject Areas We Cover */}
        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl">
            <div className="text-center mb-10">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-stone-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.9 }}
              >
                Expert Assignment Help Across All Academic Disciplines
              </motion.h3>
              <motion.p
                className="text-stone-600 text-lg font-light max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.1 }}
              >
                Professional writing assistance from qualified experts in your field of study
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjectAreas.map((subject, index) => (
                <motion.div 
                  key={index} 
                  className="group relative overflow-hidden p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-stone-200/50"
                  style={{
                    background: `linear-gradient(135deg, ${subject.gradient})`
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${subject.iconBg} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {subject.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-stone-900 transition-colors">
                        {subject.title}
                      </h4>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        {subject.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quality Guarantees */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl">
            <div className="text-center mb-10">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-stone-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                Our Quality Guarantees
              </motion.h3>
              <motion.p
                className="text-stone-600 text-lg font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.9 }}
              >
                Committed to excellence in every assignment
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((guarantee, index) => (
                <motion.div 
                  key={index} 
                  className="group text-center p-6 rounded-2xl bg-gradient-to-br from-stone-50/80 to-slate-100/60 hover:from-stone-100/90 hover:to-slate-200/70 transition-all duration-300 border border-stone-200/50"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                    {guarantee.icon}
                  </div>
                  <div className="text-lg font-bold text-stone-800 mb-2">{guarantee.title}</div>
                  <div className="text-sm text-stone-600 font-medium">{guarantee.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};