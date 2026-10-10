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

// Six neutral, helpful preset replies. Not live chat, not a real-time AI assistant.
const KB: { patterns: RegExp[]; reply: string }[] = [
  {
    patterns: [/enquir|quote|price|cost|order|support request/i],
    reply:
      "To make an enquiry, email academiahelp0@gmail.com or message +8801577128417 with your topic, word count, deadline and marking rubric. Confirm the scope, price and timing in writing before paying, and check what your institution permits for that assessment.",
  },
  {
    patterns: [/guide|blog|article|research methods|academic writing|assessment/i],
    reply:
      "Free study guides are at /blog/, with topic hubs at /guides/research-methods/, /guides/academic-writing/ and /guides/university-assessment/. Each guide lists its sources; check your current university rules before applying general guidance.",
  },
  {
    patterns: [/tool|calculator|gpa|wam|grade|planner|reading|word count|timeline/i],
    reply:
      "Free tools are at /tools/: weighted grade, GPA (4.0), Australian WAM, UK degree classification estimate, UK-to-US GPA guidance, dissertation timeline, word-count and reading-time planners. Calculations run in your browser and results are estimates.",
  },
  {
    patterns: [/integrity|permitted|allowed|rule|policy|cheat|misconduct/i],
    reply:
      "Use guides to develop your own work and check your assessment instructions for permitted assistance. Do not submit someone else's work as your own. Our editorial policy (/editorial-policy/) explains how guides are written and corrected.",
  },
  {
    patterns: [/mistake|error|correction|wrong|update/i],
    reply:
      "To report an error, use the contact page (/contact/) with the page URL, the statement you believe is wrong and a link to the relevant source. See our editorial policy for the corrections process.",
  },
  {
    patterns: [/contact|whatsapp|email|talk|human|live chat/i],
    reply:
      "This panel only shows preset replies and is not live chat. For an enquiry use WhatsApp +8801577128417 or email academiahelp0@gmail.com. Do not send passwords, identity documents or confidential research data.",
  },
];

const FALLBACK_REPLY =
  "This is a preset-reply panel, not live chat. Try one of the quick questions, or contact us at +8801577128417 / academiahelp0@gmail.com. Study tools: /tools/. Guides: /blog/.";

function getReply(input: string): string {
  const trimmed = input.trim();
  for (const entry of KB) {
    if (entry.patterns.some((p) => p.test(trimmed))) {
      return entry.reply;
    }
  }
  return FALLBACK_REPLY;
}

export const IntelligentChatWidget: React.FC<IntelligentChatWidgetProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content:
        "Study help — preset replies (not live chat).\n\nChoose a quick question below or type a topic. Replies are pre-written guidance only, not answers from a real-time AI assistant.",
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

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    const delay = 400 + Math.random() * 400;
    setTimeout(() => {
      const reply = getReply(userText);
      setMessages((prev) => [
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
    "How do I make an enquiry?",
    "What free tools are available?",
    "What study guides do you have?",
    "How do I report an error?",
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
            <div className="bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900 text-white px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-white/20 rounded-lg">
                  <Bot aria-hidden="true" className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-sm leading-tight">Study help — preset replies</p>
                  <div className="flex items-center gap-1.5">
                    <p className="text-stone-300 text-xs font-light">Not live chat</p>
                  </div>
                </div>
              </div>
              <button onClick={onClose} aria-label="Close study help panel" className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                <X aria-hidden="true" className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0">
              {messages.map((message) => (
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
                        <Bot aria-hidden="true" className="w-3.5 h-3.5 mt-0.5 text-stone-500 shrink-0" />
                      )}
                      {message.role === 'user' && (
                        <User aria-hidden="true" className="w-3.5 h-3.5 mt-0.5 text-stone-300 shrink-0" />
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
                    <Bot aria-hidden="true" className="w-3.5 h-3.5 text-stone-500" />
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
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

            <div className="border-t border-stone-100 px-3 py-2 shrink-0">
              <p className="text-[10px] text-stone-400 mb-1.5">Quick questions (preset replies):</p>
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

            <div className="border-t border-stone-200 px-3 py-2.5 shrink-0">
              <div className="flex items-end gap-2">
                <label htmlFor="study-help-input" className="sr-only">Ask a study question (preset replies only)</label>
                <textarea
                  id="study-help-input"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about guides, tools or enquiries..."
                  className="flex-1 resize-none border border-stone-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent leading-relaxed"
                  rows={1}
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  aria-label="Send study question"
                  className="p-2 bg-stone-900 text-white rounded-xl hover:bg-amber-600 disabled:bg-stone-300 disabled:cursor-not-allowed transition-colors duration-200 shrink-0"
                >
                  <Send aria-hidden="true" className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[10px] text-stone-400 text-center mt-1.5">
                Preset replies only · Not live chat · WhatsApp +8801577128417
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
