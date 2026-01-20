import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  X, 
  Send, 
  Sparkles,
  FileText,
  Users,
  BarChart3,
  Clock,
  ChevronRight
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const YELLOW = '#FEFD7F';
const BLACK = '#18181B';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const quickActions = [
  { icon: <FileText size={16} />, label: 'Create a campaign brief', action: 'create_brief' },
  { icon: <Users size={16} />, label: 'Find creators for my brand', action: 'find_creators' },
  { icon: <BarChart3 size={16} />, label: 'Show campaign analytics', action: 'show_analytics' },
  { icon: <Clock size={16} />, label: 'Send reminders to creators', action: 'send_reminders' },
];

const mockResponses = {
  create_brief: "I'll help you create a campaign brief! What type of campaign are you planning? Options: Product Launch, Brand Awareness, Seasonal Promotion, or User-Generated Content.",
  find_creators: "Looking for creators! What category works best for your brand? I can search by: Fashion, Tech, Fitness, Beauty, Food, Travel, or Lifestyle.",
  show_analytics: "Here's your campaign overview:\n\n📊 Active Campaigns: 3\n👥 Total Creators: 25\n💰 Budget Used: $67,850 / $88,000 (77%)\n📈 Avg. Engagement: 8.2%\n\nWould you like details on a specific campaign?",
  send_reminders: "I found 3 creators with pending actions:\n\n1. Sarah Martinez - Script overdue (2 days)\n2. James Chen - Awaiting content upload\n3. Alex Rivera - Contract not signed\n\nShould I send reminders to all of them?",
  default: "I'm Lumi, your AI assistant! I can help you:\n\n• Create campaign briefs\n• Find and vet creators\n• Track deliverables\n• Analyze performance\n• Send automated reminders\n\nWhat would you like to do?"
};

export default function LumiAssistant({ userType = 'brand' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      type: 'assistant', 
      content: userType === 'brand' 
        ? "Hey! 👋 I'm Lumi, your AI campaign assistant. How can I help you today?"
        : "Hey! 👋 I'm Lumi, your AI assistant. Need help finding opportunities or managing your campaigns?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = { id: Date.now(), type: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let response = mockResponses.default;
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes('brief') || lowerText.includes('campaign')) {
        response = mockResponses.create_brief;
      } else if (lowerText.includes('creator') || lowerText.includes('find') || lowerText.includes('influencer')) {
        response = mockResponses.find_creators;
      } else if (lowerText.includes('analytics') || lowerText.includes('performance') || lowerText.includes('stats')) {
        response = mockResponses.show_analytics;
      } else if (lowerText.includes('remind') || lowerText.includes('pending') || lowerText.includes('overdue')) {
        response = mockResponses.send_reminders;
      }

      setMessages(prev => [...prev, { id: Date.now(), type: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  const handleQuickAction = (action) => {
    const actionLabels = {
      create_brief: "Create a campaign brief",
      find_creators: "Find creators for my brand",
      show_analytics: "Show my campaign analytics",
      send_reminders: "Send reminders to creators with pending tasks"
    };
    handleSend(actionLabels[action]);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center z-40 transition-colors",
          isOpen && "hidden"
        )}
        style={{ backgroundColor: YELLOW }}
      >
        <Zap size={24} style={{ color: BLACK }} className="fill-current" />
        
        {/* Pulse animation */}
        <span 
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ backgroundColor: YELLOW }}
        />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[380px] h-[560px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-zinc-200"
          >
            {/* Header */}
            <div 
              className="p-4 flex items-center justify-between shrink-0"
              style={{ backgroundColor: YELLOW }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: BLACK }}>Lumi AI</h3>
                  <p className="text-xs" style={{ color: BLACK, opacity: 0.7 }}>Your campaign assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors"
              >
                <X size={18} style={{ color: BLACK }} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex",
                    message.type === 'user' ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-3",
                      message.type === 'user'
                        ? "bg-zinc-900 text-white rounded-br-md"
                        : "bg-zinc-100 text-zinc-900 rounded-bl-md"
                    )}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-zinc-100 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs font-bold text-zinc-400 mb-2">QUICK ACTIONS</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action.action}
                      onClick={() => handleQuickAction(action.action)}
                      className="flex items-center gap-2 p-2 bg-zinc-50 rounded-lg text-left hover:bg-zinc-100 transition-colors"
                    >
                      <span className="text-zinc-500">{action.icon}</span>
                      <span className="text-xs font-medium text-zinc-700 line-clamp-1">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-zinc-200 shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask Lumi anything..."
                  className="flex-1 bg-zinc-100 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  style={{ backgroundColor: YELLOW, color: BLACK }}
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
