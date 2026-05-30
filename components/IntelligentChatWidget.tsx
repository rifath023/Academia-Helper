import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface IntelligentChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── Knowledge base ───────────────────────────────────────────────────────────
const KB: { patterns: RegExp[]; reply: string }[] = [
  {
    patterns: [/price|cost|how much|rate|charge|fee|pricing/i],
    reply:
      "Our pricing depends on the word count, subject, and deadline. We keep rates student-friendly! 💰\n\nFor an exact quote, please reach out:\n📱 WhatsApp: +8801577128417\n📧 academiahelp0@gmail.com\n\nWe'll get back to you within minutes!",
  },
  {
    patterns: [/order|place|start|get started|submit/i],
    reply:
      "Placing an order is super easy! Here's how:\n\n1️⃣ Fill in the order form on this page (scroll down to 'Place Your Order')\n2️⃣ Tell us your subject, word count & deadline\n3️⃣ Upload your assignment brief\n4️⃣ We'll confirm and get started!\n\nOr message us directly on WhatsApp: +8801577128417 for instant help.",
  },
  {
    patterns: [/deadline|urgent|fast|quick|rush|hours|days/i],
    reply:
      "We handle tight deadlines! ⚡ Whether you need it in 24 hours or a few days, our team works around the clock.\n\nShare your deadline on WhatsApp (+8801577128417) and we'll confirm availability right away.",
  },
  {
    patterns: [/plagiarism|original|copied|turnitin|similarity/i],
    reply:
      "Every assignment we deliver is 100% original and written from scratch. ✅\n\n• Less than 10% similarity guaranteed\n• Turnitin-safe content\n• No copy-paste, no reused work\n\nYou can request a plagiarism report with your order!",
  },
  {
    patterns: [/ai|chatgpt|ai.?generat|ai.?written|ai.?detect/i],
    reply:
      "We guarantee 0% AI-generated content. 🙅‍♂️\n\nAll assignments are written by human academic experts — no ChatGPT, no AI tools. Your work will pass any AI detector confidently.",
  },
  {
    patterns: [/revision|edit|change|update|redo|rewrite/i],
    reply:
      "We offer unlimited free revisions! 🔄\n\nIf anything doesn't meet your requirements, just let us know and we'll fix it — no extra charge, no questions asked.",
  },
  {
    patterns: [/subject|topic|type|what.*(do|can|offer|cover)|business|finance|tourism|marketing|accounting|hrm|case study|powerpoint|presentation/i],
    reply:
      "We cover a wide range of subjects! 📚\n\n• Business Essays\n• Finance Assignments\n• Tourism Reports\n• Marketing Analysis\n• Accounting Reports\n• HRM Essays\n• Case Studies\n• PowerPoint Presentations\n\nDon't see yours? Message us — we likely cover it!",
  },
  {
    patterns: [/citation|reference|apa|harvard|mla|chicago|referencing|cite/i],
    reply:
      "We follow any citation style you need! 📖\n\n• APA 7th Edition\n• Harvard Referencing\n• MLA Format\n• Chicago Style\n• OSCOLA (for law)\n\nJust mention your preferred style when placing your order and we'll handle it perfectly.",
  },
  {
    patterns: [/essay|structure|how to write|introduction|conclusion|body|paragraph/i],
    reply:
      "A strong essay structure typically looks like this: 📝\n\n1. Introduction — Hook + background + thesis statement\n2. Body paragraphs — One main idea per paragraph (PEEL method works great)\n3. Conclusion — Summarise key points + restate thesis\n\nNeed it written professionally? We're here to help — just place an order!",
  },
  {
    patterns: [/word count|words|length|how long/i],
    reply:
      "We handle any word count — from short 500-word essays to 5,000+ word dissertations. 📄\n\nJust specify your required word count in the order form or on WhatsApp (+8801577128417) and we'll quote accordingly.",
  },
  {
    patterns: [/payment|pay|method|bkash|card|bank|transfer/i],
    reply:
      "For payment details and methods, please contact us directly so we can guide you:\n\n📱 WhatsApp: +8801577128417\n📧 academiahelp0@gmail.com\n\nWe'll walk you through the process step by step!",
  },
  {
    patterns: [/confidential|private|secret|safe|secure|trust/i],
    reply:
      "Your privacy is our top priority. 🔒\n\n• Your personal details are never shared\n• All orders are handled confidentially\n• We don't store or reuse your work\n\nYou can trust us completely — hundreds of students already do!",
  },
  {
    patterns: [/guarantee|quality|satisfaction|good|standard/i],
    reply:
      "We stand behind every assignment with these guarantees: ✅\n\n• 0% AI-generated content\n• Less than 10% plagiarism\n• On-time delivery — always\n• Unlimited free revisions\n• Written by subject-matter experts\n\nYour satisfaction is our priority!",
  },
  {
    patterns: [/contact|reach|whatsapp|email|phone|talk|speak/i],
    reply:
      "You can reach us anytime! 📞\n\n📱 WhatsApp: +8801577128417 (fastest response)\n📧 Email: academiahelp0@gmail.com\n\nWe typically respond within minutes on WhatsApp!",
  },
  {
    patterns: [/hello|hi|hey|good morning|good evening|howdy|greet/i],
    reply:
      "Hello! 👋 Great to hear from you!\n\nI'm Alex, your academic assistant at Academia Helper. Whether you need help with an essay, report, or case study — we've got you covered.\n\nWhat can I help you with today?",
  },
  {
    patterns: [/thank|thanks|appreciate|helpful/i],
    reply:
      "You're very welcome! 😊 Happy to help anytime.\n\nIf you're ready to get started with your assignment, just fill in the order form on this page or ping us on WhatsApp: +8801577128417. Good luck with your studies! 🎓",
  },
  {
    patterns: [/who are you|what are you|about you|about academia/i],
    reply:
      "I'm Alex, the virtual assistant for Academia Helper! 🤖\n\nAcademia Helper is a trusted academic writing service specialising in business, finance, tourism, marketing, accounting, HRM, and more.\n\nWe help students get high-quality, plagiarism-free assignments delivered on time. How can I assist you today?",
  },
];

const FALLBACK_REPLIES = [
  "That's a great question! For the most accurate answer, our team is ready to help directly:\n\n📱 WhatsApp: +8801577128417\n📧 academiahelp0@gmail.com\n\nWe respond within minutes!",
  "I want to make sure you get the right answer! Please reach out to our team directly:\n\n📱 WhatsApp: +8801577128417\n\nThey'll sort you out right away. 😊",
  "I'm not 100% sure about that one, but our expert team will know! Drop them a message:\n\n📱 WhatsApp: +8801577128417\n📧 academiahelp0@gmail.com",
];

let fallbackIndex = 0;
function getReply(input: string): string {
  const trimmed = input.trim();
  for (const entry of KB) {
    if (entry.patterns.some(p => p.test(trimmed))) {
      return entry.reply;
    }
  }
  // Rotate through fallbacks so it doesn't feel repetitive
  const reply = FALLBACK_REPLIES[fallbackIndex % FALLBACK_REPLIES.length];
  fallbackIndex++;
  return reply;
}

// ─── Component ────────────────────────────────────────────────────────────────
export const IntelligentChatWidget: React.FC<IntelligentChatWidgetProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content:
        "Hi there! 👋 I'm Alex, your academic writing assistant from Academia Helper.\n\nI can help you with:\n• Assignment types & subjects\n• Pricing & deadlines\n• Citation styles\n• Essay structure tips\n• Placing an order\n\nWhat can I help you with today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!inputMessage.trim() || isLoading) return;

    const userText = inputMessage.trim();
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate a natural typing delay (800–1400 ms)
    const delay = 800 + Math.random() * 600;
    setTimeout(() => {
      const reply = getReply(userText);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: reply,
          timestamp: new Date(),
        },
      ]);
      setIsLoading(false);
    }, delay);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickActions = [
    "How much does it cost?",
    "What subjects do you cover?",
    "Can I get it urgently?",
    "How do I place an order?",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-20 right-4 w-80 max-w-[calc(100vw-2rem)] z-50"
          initial={{ opacity: 0, scale: 0.85, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col"
            style={{ maxHeight: '75vh' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900 text-white px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-white/20 rounded-lg">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-sm leading-tight">Alex — Academic Assistant</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-stone-300 text-xs font-light">Online now</p>
                  </div>
                </div>
              </div>
              <button onClick={onClose} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0">
              {messages.map(message => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2.5 ${
                      message.role === 'user'
                        ? 'bg-stone-900 text-white rounded-br-sm'
                        : 'bg-stone-100 text-stone-900 rounded-bl-sm'
                    }`}
                  >
                    <div className="flex items-start gap-1.5">
                      {message.role === 'assistant' && (
                        <Bot className="w-3.5 h-3.5 mt-0.5 text-stone-500 shrink-0" />
                      )}
                      {message.role === 'user' && (
                        <User className="w-3.5 h-3.5 mt-0.5 text-stone-300 shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        <p className="text-[10px] mt-1 text-stone-400">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="bg-stone-100 rounded-2xl rounded-bl-sm px-3 py-2.5 flex items-center gap-2">
                    <Bot className="w-3.5 h-3.5 text-stone-500" />
                    <div className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 bg-stone-400 rounded-full block"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="border-t border-stone-100 px-3 py-2 shrink-0">
              <p className="text-[10px] text-stone-400 mb-1.5">Quick questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {quickActions.map((action, i) => (
                  <button
                    key={i}
                    onClick={() => { setInputMessage(action); }}
                    disabled={isLoading}
                    className="text-[10px] px-2 py-1 bg-stone-100 hover:bg-amber-50 hover:text-amber-700 text-stone-600 rounded-full transition-colors duration-150 disabled:opacity-50"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-stone-200 px-3 py-2.5 shrink-0">
              <div className="flex items-end gap-2">
                <textarea
                  value={inputMessage}
                  onChange={e => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 resize-none border border-stone-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent leading-relaxed"
                  rows={1}
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="p-2 bg-stone-900 text-white rounded-xl hover:bg-amber-600 disabled:bg-stone-300 disabled:cursor-not-allowed transition-colors duration-200 shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[10px] text-stone-400 text-center mt-1.5">
                WhatsApp +8801577128417 · academiahelp0@gmail.com
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};