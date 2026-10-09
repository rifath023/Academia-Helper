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
  { patterns: [/citation|reference|apa|harvard|mla/i], reply: 'Use the citation style specified by your module. Check author, title, date and source details against the original publication. Our blog has referencing guides.' },
  { patterns: [/essay|structure|introduction|conclusion/i], reply: 'Start with your assignment brief and marking criteria. An essay usually needs a clear argument, evidence-based discussion and a conclusion that answers the question. Use the free word-count planner as a starting point.' },
  { patterns: [/ai|plagiarism|turnitin|detector|similarity/i], reply: 'Check your assessment rules before using outside help or AI. Similarity and AI-detector scores do not establish academic integrity, and no detector outcome can be guaranteed.' },
  { patterns: [/privacy|confidential|data/i], reply: 'This assistant uses preset replies in your browser. It does not send your typed messages to a person. Email and WhatsApp have separate privacy practices; avoid sharing sensitive documents.' },
  { patterns: [/price|cost|order|deadline|urgent|revision|refund/i], reply: 'For availability, scope, price or service terms, contact academiahelp0@gmail.com or WhatsApp +8801577128417. Request written terms before payment. This automated assistant cannot confirm an order, quote or deadline.' },
  { patterns: [/hello|hi|who are you|about/i], reply: 'This is an automated guide using preset replies, not a live adviser. You can browse study guides and free tools, or contact the team by email or WhatsApp.' },
];

const FALLBACK_REPLIES = [
  'This preset assistant cannot answer that reliably. Check the relevant study guide or contact academiahelp0@gmail.com or WhatsApp +8801577128417. Your message here has not been sent to the team.',
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
        "Hello. This is an automated study guide with preset replies, not live chat. Ask about essay structure or referencing, or use the contact links to reach the team. Messages here stay in this page and are cleared when you reload.",
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
                  <p className="font-semibold text-sm leading-tight">Study help assistant</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-stone-300 text-xs font-light">Automated replies · not live chat</p>
                  </div>
                </div>
              </div>
              <button aria-label="Close study assistant" onClick={onClose} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
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
