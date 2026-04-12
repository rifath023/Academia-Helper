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

const SYSTEM_PROMPT = `You are Alex, a friendly academic writing assistant for Academia Helper — a premium assignment writing service.

Help students with:
- Essay structure, formatting, and writing advice
- APA, Harvard, MLA citation styles
- Business, Finance, Tourism, Marketing, Accounting, HRM, Case Study assignments

About Academia Helper:
- Services: Business Essays, Finance Assignments, Tourism Reports, Marketing Analysis, Accounting Reports, HRM Essays, Case Studies, PowerPoint Presentations
- Guarantees: 0% AI content, less than 10% plagiarism, timely delivery, unlimited revisions
- Contact: WhatsApp +8801577128417 | Email academiahelp0@gmail.com
- Process: Submit requirements → Expert writing → Receive & review

Keep replies warm, concise (3-5 sentences). Suggest WhatsApp for placing orders.`;

export const IntelligentChatWidget: React.FC<IntelligentChatWidgetProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi there! 👋 I'm Alex, your academic writing assistant from Academia Helper.\n\nI can help you with essay structure, citation styles, assignment guidance, and more. What are you working on today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userText = inputMessage.trim();
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Build full conversation for context
      const allMessages = [
        ...messages.map(m => ({ role: m.role, content: m.content })),
        { role: 'user', content: userText }
      ];

      const response = await fetch('https://api.youware.com/public/v1/ai/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...allMessages
          ],
          temperature: 0.75,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('API error:', response.status, errText);
        throw new Error(`API ${response.status}`);
      }

      const data = await response.json();
      const replyText = data.choices?.[0]?.message?.content ?? "I'm not sure how to help with that. Could you rephrase?";

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: replyText,
        timestamp: new Date()
      }]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Sorry, I'm having a little trouble right now. For immediate help reach us on:\n\n📱 WhatsApp: +8801577128417\n📧 academiahelp0@gmail.com",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickActions = [
    "Essay structure tips",
    "Citation help",
    "How do I place an order?",
    "What subjects do you cover?"
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
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
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
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`max-w-[85%] rounded-2xl px-3 py-2.5 ${
                    message.role === 'user'
                      ? 'bg-stone-900 text-white rounded-br-sm'
                      : 'bg-stone-100 text-stone-900 rounded-bl-sm'
                  }`}>
                    <div className="flex items-start gap-1.5">
                      {message.role === 'assistant' && <Bot className="w-3.5 h-3.5 mt-0.5 text-stone-500 shrink-0" />}
                      {message.role === 'user' && <User className="w-3.5 h-3.5 mt-0.5 text-stone-300 shrink-0" />}
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
                    onClick={() => setInputMessage(action)}
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
                  onChange={(e) => setInputMessage(e.target.value)}
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