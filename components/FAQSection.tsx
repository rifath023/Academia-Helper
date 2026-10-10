import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const title = 'Frequently Asked Questions';
  const description = 'How ordering, pricing, originality checks and support work.';
  
  const faqs = [
    {
      question: 'How do I make an enquiry?',
      answer: 'Send your topic, word count, deadline, marking rubric and referencing style via WhatsApp (+8801577128417) or email (academiahelp0@gmail.com). We review what you need and confirm the scope, price and timing in writing before any payment.',
    },
    {
      question: 'What subjects and assignment types do you cover?',
      answer: 'Business, finance, accounting, marketing, HRM, management, computer science, psychology, healthcare, education, law, engineering and more. We provide study guides and permitted support such as feedback, explanations, structure planning and proofreading. Always check what your university allows for your specific assessment.',
    },
    {
      question: 'How much does academic support cost?',
      answer: 'Cost depends on word count, academic level, subject complexity and deadline. You will receive a written quote showing exactly what is included. Confirm the scope, price, timing and cancellation terms in writing before paying.',
    },
    {
      question: 'How do you support originality and academic integrity?',
      answer: 'Our guides help you develop your own work. Before requesting feedback or editing, check your institutional assessment rules on permitted assistance. Do not submit someone else\u2019s work as your own. See our editorial policy for how guides are researched and corrected.',
    },
    {
      question: 'How do deadlines and availability work?',
      answer: 'Share your exact deadline and timezone when enquiring. If a deadline is too tight for useful support, we will tell you honestly. Calculator and planner outputs are estimates for planning only; always confirm official deadlines and regulations with your university.',
    },
    {
      question: 'Is my personal information kept private?',
      answer: 'We only ask for what is needed to respond to your enquiry, never ask for your university login, and advise against sending passwords, identity documents or confidential research data. Calculator inputs run in your browser and are not sent to us. See our privacy policy for details.',
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