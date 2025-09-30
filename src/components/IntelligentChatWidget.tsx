import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, MessageCircle, Loader2 } from 'lucide-react';
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

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

export const IntelligentChatWidget: React.FC<IntelligentChatWidgetProps> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi there! 👋 I'm Alex, your academic writing assistant from Academia Helper. I'm here to help you with:\n\n• Essay writing tips and guidance\n• Assignment structure and formatting\n• Research methodology advice\n• Citation and referencing help\n• Business, Finance, Tourism topics\n\nHow can I assist you with your academic work today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      console.log('🤖 AI Chat: Sending message to academic assistant');
      
      // Get AI configuration
      const config = globalThis.ywConfig?.ai_config?.chat_assistant;
      if (!config) {
        throw new Error('AI configuration not found');
      }

      const openai = createOpenAI({
        baseURL: 'https://api.youware.com/public/v1/ai',
        apiKey: 'sk-YOUWARE'
      });

      // Build conversation history for context
      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const systemPrompt = config.system_prompt({
        currentTime: new Date().toLocaleString()
      });

      const { text } = await generateText({
        model: openai(config.model),
        messages: [
          { role: 'system', content: systemPrompt },
          ...conversationHistory,
          { role: 'user', content: inputMessage }
        ],
        temperature: config.temperature || 0.8,
        maxTokens: config.maxTokens || 4000
      });

      console.log('✅ AI Chat: Received response from academic assistant');

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: text,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);

    } catch (error) {
      console.error('❌ AI Chat Error:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I apologize, but I'm having trouble responding right now. For immediate assistance with your academic needs, please contact us directly:\n\n📱 WhatsApp: +8801577128417\n📧 Email: academiahelp0@gmail.com\n\nOur expert team is ready to help you with your assignments!",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
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
    "Help me with essay structure",
    "Citation format guidance", 
    "Business assignment tips",
    "How to improve my writing"
  ];

  const handleQuickAction = (action: string) => {
    setInputMessage(action);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] z-50"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Alex - Academic Assistant</h3>
                    <p className="text-stone-200 text-sm font-light">Academia Helper Support</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`max-w-[80%] ${
                    message.role === 'user' 
                      ? 'bg-stone-900 text-white' 
                      : 'bg-stone-100 text-stone-900'
                  } rounded-2xl p-3`}>
                    <div className="flex items-start space-x-2">
                      {message.role === 'assistant' && (
                        <Bot className="w-4 h-4 mt-0.5 text-stone-600" />
                      )}
                      {message.role === 'user' && (
                        <User className="w-4 h-4 mt-0.5 text-white" />
                      )}
                      <div className="flex-1">
                        <div className="whitespace-pre-wrap text-sm leading-relaxed">
                          {message.content}
                        </div>
                        <div className={`text-xs mt-1 ${
                          message.role === 'user' ? 'text-stone-300' : 'text-stone-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-stone-100 text-stone-900 rounded-2xl p-3 max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4 text-stone-600" />
                      <div className="flex items-center space-x-1">
                        <Loader2 className="w-4 h-4 animate-spin text-stone-600" />
                        <span className="text-sm text-stone-600">Alex is thinking...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="border-t border-stone-200 p-3">
              <div className="text-xs text-stone-600 mb-2">Quick questions:</div>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    className="text-xs px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-full transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-stone-200 p-4">
              <div className="flex items-center space-x-3">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about academic writing..."
                  className="flex-1 resize-none border border-stone-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent"
                  rows={1}
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="p-3 bg-stone-900 text-white rounded-2xl hover:bg-stone-800 disabled:bg-stone-400 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
              
              {/* Contact Info */}
              <div className="mt-3 text-xs text-stone-500 text-center">
                For assignment help: WhatsApp +8801577128417 | academiahelp0@gmail.com
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};