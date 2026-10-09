import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const title = 'Frequently Asked Questions';
  const description = 'Using the free resources and enquiring about academic support.';
  
  const faqs = [
    {
      question: 'How do I enquire about academic support?',
      answer: 'Use the contact page, WhatsApp (+8801577128417) or email (academiahelp0@gmail.com). Describe your question, academic level and deadline. Check your assessment rules first, and ask for the permitted scope, price and timing in writing before paying or sending documents.',
    },
    {
      question: 'What subjects and assignment types do you cover?',
      answer: 'The site has resources on essays, reports, dissertations, referencing, research methods and university assessment. Availability of individual support depends on your question and the permitted scope; confirm it through the contact channels.',
    },
    {
      question: 'How much does assignment help cost?',
      answer: 'The study guides and browser-based tools are free to use. For individual support, request a written quote specifying what is included, timing, payment terms and any revision arrangements.',
    },
    {
      question: 'Can a similarity or AI score prove my work is acceptable?',
      answer: 'No. A detector score does not establish authorship, correct attribution or compliance with your assessment rules. Use support to develop your own work, cite sources properly and follow your institution’s policy on AI and outside assistance.',
    },
    {
      question: 'Can I enquire about a short deadline?',
      answer: 'Include the date, time and timezone in your enquiry and ask what is feasible. A message does not confirm availability or delivery. Keep responsibility for your submission and contact your university if you need an extension.',
    },
    {
      question: 'What should I share in an enquiry?',
      answer: 'Start with a short description of your question. Do not send university passwords, participant data or confidential documents. Read the privacy notice and confirm how any files will be handled before sharing them through email or WhatsApp.',
    },
  ];

  const [openItems, setOpenItems] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const toggleItem = (index: number) => {
    const itemId = index.toString();
    setOpenItems(prev =>
      prev.includes(itemId) ? prev.filter(item => item !== itemId) : [...prev, itemId]
    );
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <section
      ref={containerRef}
      className="py-20 px-6 bg-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container mx-auto max-w-3xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-xl text-zinc-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index.toString());
            
            return (
              <motion.div
                key={index}
                className="group border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <motion.button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-zinc-900 pr-4">
                    {faq.question}
                  </h3>
                  
                  <motion.div
                    animate={{ 
                      rotate: isOpen ? 180 : 0,
                      backgroundColor: isOpen ? '#27272a' : '#f4f4f5'
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${
                      isOpen ? 'text-white' : 'text-zinc-600'
                    }`} />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div 
                        className="px-6 pb-6"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <p className="text-zinc-800 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
