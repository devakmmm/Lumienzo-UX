import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X,
  Sparkles,
  Target,
  DollarSign,
  Calendar,
  FileText,
  Zap,
  Send,
  ChevronRight,
  CheckCircle,
  MessageCircle,
  Wand2
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const YELLOW = '#FEFD7F';
const BLACK = '#18181B';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function PitchModal({ isOpen, onClose, creator }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    campaign: '',
    objective: '',
    dealSize: '',
    duration: '',
    deliverables: '',
    terms: '',
    additionalNotes: ''
  });
  const [aiMessage, setAiMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateAIPreview = () => {
    setStep(2);
    setTimeout(() => {
      setAiMessage(`Hey ${creator?.name || 'Creator'}! 👋

I'm Lumi, the AI assistant for ${formData.campaign}. We're looking for talented creators like you to collaborate with us!

Here's what we have in mind:
🎯 **Objective:** ${formData.objective}
💰 **Compensation:** $${formData.dealSize}
📅 **Timeline:** ${formData.duration}
📦 **Deliverables:** ${formData.deliverables}

${formData.additionalNotes ? `\n📝 Additional Info: ${formData.additionalNotes}\n` : ''}
We think your content style would be a perfect fit for this campaign. The ${formData.terms} are flexible, and we're excited to work with authentic creators who align with our brand values.

Interested? Let me know and I'll connect you directly with the brand team to finalize the details! 🚀

- Lumi AI`);
    }, 500);
  };

  const sendPitch = () => {
    setIsSending(true);
    setTimeout(() => {
      setStep(3);
      setIsSending(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="relative p-8 text-white" style={{ background: `linear-gradient(135deg, ${YELLOW} 0%, #E5E46B 100%)` }}>
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-black/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-black/20 transition-colors"
              style={{ color: BLACK }}
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-black/10 backdrop-blur rounded-2xl flex items-center justify-center" style={{ color: BLACK }}>
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold" style={{ color: BLACK }}>Create Campaign Pitch</h2>
                <p className="text-sm" style={{ color: '#3f3f46' }}>Powered by Lumi AI</p>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center gap-2 mt-6">
              {[
                { num: 1, label: 'Details' },
                { num: 2, label: 'Preview' },
                { num: 3, label: 'Send' }
              ].map((s, i) => (
                <React.Fragment key={s.num}>
                  <div className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold transition-all",
                    step >= s.num ? "bg-white" : "bg-black/10"
                  )} style={{ color: step >= s.num ? BLACK : '#52525B' }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: step >= s.num ? `${YELLOW}50` : 'transparent' }}>
                      {s.num}
                    </span>
                    {s.label}
                  </div>
                  {i < 2 && <ChevronRight size={16} style={{ color: '#52525B' }} />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <FormField
                    label="Campaign Name"
                    icon={<Target size={18} />}
                    placeholder="e.g., Summer Collection Launch 2024"
                    value={formData.campaign}
                    onChange={(e) => handleInputChange('campaign', e.target.value)}
                    required
                  />

                  <FormField
                    label="Campaign Objective"
                    icon={<FileText size={18} />}
                    placeholder="What's the goal? (Brand awareness, product launch, etc.)"
                    value={formData.objective}
                    onChange={(e) => handleInputChange('objective', e.target.value)}
                    textarea
                    required
                  />

                  <div className="grid grid-cols-2 gap-6">
                    <FormField
                      label="Deal Size"
                      icon={<DollarSign size={18} />}
                      placeholder="5000"
                      value={formData.dealSize}
                      onChange={(e) => handleInputChange('dealSize', e.target.value)}
                      prefix="$"
                      required
                    />

                    <FormField
                      label="Duration"
                      icon={<Calendar size={18} />}
                      placeholder="e.g., 2 weeks, 1 month"
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      required
                    />
                  </div>

                  <FormField
                    label="Deliverables"
                    icon={<CheckCircle size={18} />}
                    placeholder="e.g., 3 Instagram Reels, 1 YouTube video, story mentions"
                    value={formData.deliverables}
                    onChange={(e) => handleInputChange('deliverables', e.target.value)}
                    textarea
                    required
                  />

                  <FormField
                    label="Terms & Conditions"
                    icon={<FileText size={18} />}
                    placeholder="Usage rights, exclusivity, payment terms, etc."
                    value={formData.terms}
                    onChange={(e) => handleInputChange('terms', e.target.value)}
                    textarea
                  />

                  <FormField
                    label="Additional Notes (Optional)"
                    placeholder="Any specific requirements or creative direction?"
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    textarea
                  />
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 mb-4" style={{ color: BLACK }}>
                    <Wand2 size={20} />
                    <p className="font-bold">Lumi has crafted your message:</p>
                  </div>

                  <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-6">
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-zinc-200">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: YELLOW }}>
                        <Zap size={20} style={{ color: BLACK }} className="fill-current" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Lumi AI Assistant</p>
                        <p className="text-xs text-zinc-500">Lumienzo Platform</p>
                      </div>
                    </div>

                    <div className="whitespace-pre-wrap text-zinc-700 leading-relaxed">
                      {aiMessage}
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                    <MessageCircle size={18} className="text-blue-600 mt-0.5" />
                    <div className="text-sm text-blue-900">
                      <p className="font-bold mb-1">What happens next?</p>
                      <p className="text-blue-700">Lumi will send this message to the creator and monitor for a response. You'll be notified when they reply or express interest.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: `${YELLOW}20` }}
                  >
                    <CheckCircle size={48} style={{ color: BLACK }} />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3">Pitch Sent Successfully!</h3>
                  <p className="text-zinc-500 mb-8 max-w-md mx-auto">
                    Lumi is now reaching out to {creator?.name || 'the creator'}. You'll receive a notification when they respond.
                  </p>

                  <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-6 max-w-md mx-auto">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-zinc-500">Estimated Response Time</span>
                      <span className="font-bold text-zinc-900">24-48 hours</span>
                    </div>
                    <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '30%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full"
                        style={{ backgroundColor: YELLOW }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="border-t border-zinc-200 p-6 bg-zinc-50">
            <div className="flex items-center justify-between">
              {step > 1 && step < 3 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 bg-white border border-zinc-200 text-zinc-900 rounded-xl font-bold hover:border-zinc-300 transition-colors"
                >
                  Back
                </button>
              )}
              
              <div className={cn("flex items-center gap-3", step === 1 ? "ml-auto" : step === 3 ? "mx-auto" : "")}>
                {step === 1 && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={generateAIPreview}
                    disabled={!formData.campaign || !formData.objective || !formData.dealSize || !formData.duration || !formData.deliverables}
                    className="px-8 py-3 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg"
                    style={{ backgroundColor: YELLOW, color: BLACK }}
                  >
                    Generate AI Pitch <Sparkles size={18} />
                  </motion.button>
                )}

                {step === 2 && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={sendPitch}
                    disabled={isSending}
                    className="px-8 py-3 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg"
                    style={{ backgroundColor: YELLOW, color: BLACK }}
                  >
                    {isSending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Zap size={18} className="fill-current" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Pitch via Lumi
                      </>
                    )}
                  </motion.button>
                )}

                {step === 3 && (
                  <button
                    onClick={onClose}
                    className="px-8 py-3 rounded-xl font-bold transition-colors"
                    style={{ backgroundColor: YELLOW, color: BLACK }}
                  >
                    Done
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function FormField({ label, icon, placeholder, value, onChange, textarea, prefix, required }) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-bold text-zinc-700">
        {icon && <span style={{ color: BLACK }}>{icon}</span>}
        {label}
        {required && <span className="text-rose-500">*</span>}
      </label>
      
      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={3}
          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-all resize-none"
        />
      ) : (
        <div className="relative">
          {prefix && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-bold">
              {prefix}
            </span>
          )}
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={cn(
              "w-full bg-white border border-zinc-200 rounded-xl py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-all",
              prefix ? "pl-8 pr-4" : "px-4"
            )}
          />
        </div>
      )}
    </div>
  );
}
