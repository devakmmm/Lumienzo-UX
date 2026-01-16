import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Building2, 
  Instagram, 
  Youtube, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  DollarSign,
  TrendingUp,
  Zap,
  Upload,
  Grid3x3,
  FileText,
  Sparkles,
  UserPlus,
  Settings,
  Target,
  Camera,
  Video,
  Palette,
  CreditCard,
  Shield,
  Check
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import LumienzoLogo from './LumienzoLogo';

const YELLOW = '#FEFD7F';
const BLACK = '#18181B';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const benefits = {
  persona: {
    title: "Direct Connections",
    description: "No middlemen. No agency fees. Connect directly with the world's top brands and creators.",
    icon: <Users className="w-8 h-8" style={{ color: BLACK }} />
  },
  connect: {
    title: "Secure & Private",
    description: "Bank-level security. We only request limited read-only permissions to verify your reach.",
    icon: <ShieldCheck className="w-8 h-8" style={{ color: BLACK }} />
  },
  portfolio: {
    title: "Showcase Your Best",
    description: "Build a stunning portfolio that gets you noticed by premium brands.",
    icon: <Sparkles className="w-8 h-8" style={{ color: BLACK }} />
  },
  profile: {
    title: "AI-Powered Matching",
    description: "Our algorithm finds perfect brand partnerships based on your unique style and audience.",
    icon: <Target className="w-8 h-8" style={{ color: BLACK }} />
  },
  payment: {
    title: "Instant Payments",
    description: "Secure escrow payments. Get paid what you're worth, exactly when you finish.",
    icon: <DollarSign className="w-8 h-8" style={{ color: BLACK }} />
  },
  terms: {
    title: "Fair & Transparent",
    description: "Clear contracts. No hidden fees. 100% of your earnings go directly to you.",
    icon: <FileText className="w-8 h-8" style={{ color: BLACK }} />
  },
  brandIdentity: {
    title: "Zero Commission",
    description: "Pay creators directly. No agency tax. Save thousands on every campaign.",
    icon: <TrendingUp className="w-8 h-8" style={{ color: BLACK }} />
  },
  brandTeam: {
    title: "Team Collaboration",
    description: "Invite your team. Set permissions. Streamline approvals across your organization.",
    icon: <UserPlus className="w-8 h-8" style={{ color: BLACK }} />
  },
  brandDNA: {
    title: "AI Brand Matching",
    description: "We analyze your brand aesthetic to find creators who perfectly match your vibe.",
    icon: <Palette className="w-8 h-8" style={{ color: BLACK }} />
  },
  brandShield: {
    title: "Fraud Protection",
    description: "Advanced bot detection. Audience authenticity checks. Only real influencers, guaranteed.",
    icon: <Shield className="w-8 h-8" style={{ color: BLACK }} />
  },
  brandWorkflow: {
    title: "Automated Workflows",
    description: "Custom pipelines. Lumi AI handles the busywork. Focus on strategy, not admin.",
    icon: <Settings className="w-8 h-8" style={{ color: BLACK }} />
  }
};

const categories = ['Fashion', 'Tech', 'Fitness', 'Beauty', 'Food', 'Travel', 'Gaming', 'Lifestyle', 'Business', 'Education'];
const vibes = ['Cinematic', 'Lo-Fi/Raw', 'High-Energy', 'Minimal/Clean', 'Informative', 'Humorous', 'Inspirational', 'Documentary'];
const industries = ['D2C Beauty', 'SaaS', 'FMCG', 'Tech', 'Fashion', 'Fitness', 'Food & Beverage', 'E-commerce', 'Finance', 'Travel'];
const workflowSteps = ['Ideation', 'Brief', 'Script', 'Content Creation', 'Review', 'Revisions', 'Final Approval', 'Promotion'];

export default function OnboardingFlow({ onComplete }) {
  const [step, setStep] = useState(1);
  const [persona, setPersona] = useState(null);
  const [connectedPlatforms, setConnectedPlatforms] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedVibes, setSelectedVibes] = useState([]);
  const [bio, setBio] = useState('');
  const [paymentPref, setPaymentPref] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  // Brand specific
  const [brandName, setBrandName] = useState('');
  const [brandLogo, setBrandLogo] = useState(null);
  const [industry, setIndustry] = useState('');
  const [monthlySpend, setMonthlySpend] = useState(10000);
  const [teamMembers, setTeamMembers] = useState([]);
  const [brandPlatforms, setBrandPlatforms] = useState([]);
  const [audienceAuth, setAudienceAuth] = useState(80);
  const [organicRatio, setOrganicRatio] = useState(60);
  const [selectedWorkflow, setSelectedWorkflow] = useState([]);

  const benefitKey = persona === 'creator' 
    ? ['persona', 'connect', 'portfolio', 'profile', 'payment', 'terms'][Math.min(step - 1, 5)]
    : ['persona', 'brandIdentity', 'brandTeam', 'brandDNA', 'brandShield', 'brandWorkflow'][Math.min(step - 1, 5)];

  const currentBenefit = benefits[benefitKey] || benefits.persona;

  const nextStep = () => {
    if (persona === 'creator') {
      if (step < 8) setStep(step + 1);
      else onComplete(persona);
    } else {
      if (step < 7) setStep(step + 1);
      else onComplete(persona);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const togglePlatform = (platform) => {
    if (connectedPlatforms.includes(platform)) {
      setConnectedPlatforms(connectedPlatforms.filter(p => p !== platform));
    } else {
      setConnectedPlatforms([...connectedPlatforms, platform]);
    }
  };

  const togglePost = (postId) => {
    if (selectedPosts.includes(postId)) {
      setSelectedPosts(selectedPosts.filter(p => p !== postId));
    } else if (selectedPosts.length < 16) {
      setSelectedPosts([...selectedPosts, postId]);
    }
  };

  const canProceed = () => {
    if (step === 1) return persona !== null;
    if (persona === 'creator') {
      if (step === 2) return connectedPlatforms.length > 0;
      if (step === 3) return selectedPosts.length > 0;
      if (step === 4) return bio && selectedCategories.length > 0 && selectedVibes.length > 0;
      if (step === 5) return paymentPref !== '';
      if (step === 6) return termsAccepted;
    } else {
      if (step === 2) return brandName && industry;
      if (step === 3) return true;
      if (step === 4) return brandPlatforms.length > 0;
      if (step === 5) return true;
      if (step === 6) return selectedWorkflow.length > 0;
    }
    return true;
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white overflow-hidden">
      {/* Left Pane - Benefits (40%) */}
      <div 
        className="hidden md:flex md:w-[40%] border-r border-zinc-200 p-12 flex-col justify-center relative overflow-hidden"
        style={{ backgroundColor: YELLOW }}
      >
        <div className="absolute top-12 left-12">
          <LumienzoLogo size="xl" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={benefitKey}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-md"
          >
            <div className="mb-6">{currentBenefit.icon}</div>
            <h2 className="text-4xl font-bold mb-4 leading-tight" style={{ color: BLACK }}>
              {currentBenefit.title}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#3f3f46' }}>
              {currentBenefit.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-12 left-12 flex gap-2">
          {Object.keys(persona === 'creator' ? {persona:1,connect:1,portfolio:1,profile:1,payment:1,terms:1} : {persona:1,brandIdentity:1,brandTeam:1,brandDNA:1,brandShield:1,brandWorkflow:1}).map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === Math.min(step - 1, 5) ? "w-8 bg-zinc-900" : "w-2 bg-zinc-400"
              )}
            />
          ))}
        </div>
      </div>

      {/* Mobile Benefit Banner */}
      <div 
        className="md:hidden border-b border-zinc-200 p-6 flex flex-col justify-center sticky top-0 z-10"
        style={{ backgroundColor: YELLOW }}
      >
        <div className="flex items-center gap-2 mb-2">
           <Sparkles style={{ color: BLACK }} className="w-4 h-4" />
           <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#3f3f46' }}>Benefit</span>
        </div>
        <p className="font-bold text-lg" style={{ color: BLACK }}>{currentBenefit.title}</p>
      </div>

      {/* Right Pane - Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 bg-white relative overflow-y-auto">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep(step, persona, {
                persona, setPersona,
                connectedPlatforms, togglePlatform,
                selectedPosts, togglePost,
                bio, setBio,
                selectedCategories, setSelectedCategories,
                selectedVibes, setSelectedVibes,
                paymentPref, setPaymentPref,
                termsAccepted, setTermsAccepted,
                // Brand
                brandName, setBrandName,
                brandLogo, setBrandLogo,
                industry, setIndustry,
                monthlySpend, setMonthlySpend,
                teamMembers, setTeamMembers,
                brandPlatforms, setBrandPlatforms,
                audienceAuth, setAudienceAuth,
                organicRatio, setOrganicRatio,
                selectedWorkflow, setSelectedWorkflow
              })}
            </motion.div>
          </AnimatePresence>

          {/* Navigation - Step 1 */}
          {step === 1 && persona && (
            <div className="mt-12 flex justify-center">
              <button 
                onClick={nextStep}
                className="px-12 py-4 rounded-xl font-bold flex items-center gap-2 transition-colors shadow-2xl"
                style={{ backgroundColor: YELLOW, color: BLACK }}
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Navigation - Middle Steps */}
          {step > 1 && step < (persona === 'creator' ? 7 : 6) && (
            <div className="mt-12 flex items-center justify-between">
              <button 
                onClick={prevStep}
                className="flex items-center gap-2 text-zinc-500 font-medium hover:text-zinc-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button 
                onClick={nextStep}
                disabled={!canProceed()}
                className="px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                style={{ backgroundColor: YELLOW, color: BLACK }}
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Navigation - Final Steps */}
          {step >= (persona === 'creator' ? 7 : 6) && step !== 1 && (
            <div className="mt-12 flex items-center justify-between">
              {step < (persona === 'creator' ? 8 : 7) && (
                <button 
                  onClick={prevStep}
                  className="flex items-center gap-2 text-zinc-500 font-medium hover:text-zinc-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              )}
              <button 
                onClick={nextStep}
                disabled={!canProceed()}
                className="px-12 py-4 rounded-xl font-bold flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl ml-auto"
                style={{ backgroundColor: YELLOW, color: BLACK }}
              >
                {step === (persona === 'creator' ? 7 : 6) ? 'Complete Setup' : 'Go to Dashboard'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function renderStep(step, persona, props) {
  // Step 1: Persona Selection
  if (step === 1) {
    return (
      <div className="space-y-8">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight">How will you use Lumienzo?</h1>
          <p className="text-zinc-500 text-lg">Choose the profile that fits your goals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PersonaCard 
            icon={<Users className="w-7 h-7" />}
            title="I'm a Creator"
            description="I want to collaborate with top brands"
            selected={props.persona === 'creator'}
            onClick={() => props.setPersona('creator')}
          />
          <PersonaCard 
            icon={<Building2 className="w-7 h-7" />}
            title="I'm a Brand"
            description="I want to find perfect influencers"
            selected={props.persona === 'brand'}
            onClick={() => props.setPersona('brand')}
          />
        </div>
      </div>
    );
  }

  // CREATOR PATH
  if (persona === 'creator') {
    if (step === 2) return <ConnectSocialStep {...props} />;
    if (step === 3) return <PortfolioBuilderStep {...props} />;
    if (step === 4) return <ProfileStep {...props} />;
    if (step === 5) return <PaymentPreferenceStep {...props} />;
    if (step === 6) return <TermsStep {...props} />;
    if (step === 7) return <LumiGreetingStep persona="creator" onComplete={props.nextStep} />;
  }

  // BRAND PATH
  if (persona === 'brand') {
    if (step === 2) return <BrandIdentityStep {...props} />;
    if (step === 3) return <TeamAccessStep {...props} />;
    if (step === 4) return <BrandDNAStep {...props} />;
    if (step === 5) return <AntiFraudStep {...props} />;
    if (step === 6) return <WorkflowBuilderStep {...props} />;
    if (step === 7) return <LumiGreetingStep persona="brand" />;
  }
}

// ============ HELPER COMPONENTS ============

function PersonaCard({ icon, title, description, selected, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "group p-8 rounded-3xl border-2 text-left transition-all cursor-pointer",
        selected ? "border-zinc-900 bg-zinc-900 shadow-2xl" : "border-zinc-200 bg-white hover:border-zinc-300"
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <div 
          className="p-4 rounded-2xl transition-all"
          style={{ 
            backgroundColor: selected ? YELLOW : '#F4F4F5',
            color: selected ? BLACK : '#52525B'
          }}
        >
          {icon}
        </div>
      </div>
      <p className={cn("font-bold text-xl mb-2", selected ? "text-white" : "text-zinc-900")}>
        {title}
      </p>
      <p className={cn("text-sm", selected ? "text-zinc-300" : "text-zinc-500")}>
        {description}
      </p>
    </motion.button>
  );
}

function ConnectSocialStep({ connectedPlatforms, togglePlatform }) {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Connect your socials</h1>
        <p className="text-zinc-500 text-lg">We use this to verify your reach and build your profile.</p>
      </div>
      <div className="space-y-4">
        {[
          { name: 'Instagram', icon: <Instagram className="w-5 h-5 text-pink-600" />, color: 'pink' },
          { name: 'TikTok', icon: <Video className="w-5 h-5 text-zinc-900" />, color: 'zinc' },
          { name: 'YouTube', icon: <Youtube className="w-5 h-5 text-red-600" />, color: 'red' }
        ].map((platform) => (
          <button 
            key={platform.name}
            onClick={() => togglePlatform(platform.name)}
            className={cn(
              "w-full p-5 rounded-2xl border-2 flex items-center justify-between transition-all",
              connectedPlatforms.includes(platform.name)
                ? "border-zinc-900 bg-zinc-900" 
                : "border-zinc-200 hover:border-zinc-300 bg-white"
            )}
            style={connectedPlatforms.includes(platform.name) ? { boxShadow: `0 0 0 4px ${YELLOW}30` } : {}}
          >
            <div className="flex items-center gap-4">
              {platform.icon}
              <span className={cn(
                "font-bold text-lg",
                connectedPlatforms.includes(platform.name) ? "text-white" : "text-zinc-900"
              )}>
                {platform.name}
              </span>
            </div>
            {connectedPlatforms.includes(platform.name) ? (
              <CheckCircle2 className="w-6 h-6" style={{ color: YELLOW }} />
            ) : (
              <span className="text-sm font-bold text-zinc-400 uppercase">Connect</span>
            )}
          </button>
        ))}
      </div>
      <div 
        className="p-5 rounded-2xl flex gap-3 items-start"
        style={{ backgroundColor: `${YELLOW}30`, border: `2px solid ${YELLOW}60` }}
      >
        <ShieldCheck className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: BLACK }} />
        <p className="text-sm leading-relaxed" style={{ color: '#3f3f46' }}>
          <strong>Bank-Level Security:</strong> We only request limited "Read-Only" permissions to verify your reach. Your passwords are never shared with us.
        </p>
      </div>
    </div>
  );
}

function PortfolioBuilderStep({ selectedPosts, togglePost }) {
  const mockPosts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    thumbnail: `bg-gradient-to-br ${['from-pink-400 to-rose-500', 'from-purple-400 to-indigo-500', 'from-blue-400 to-cyan-500', 'from-emerald-400 to-green-500', 'from-amber-400 to-orange-500'][i % 5]}`
  }));

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Build your portfolio</h1>
        <p className="text-zinc-500 text-lg">Choose up to 16 posts that showcase your best work.</p>
        <p className="text-sm font-bold text-zinc-900">Selected: {selectedPosts.length}/16</p>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-3">
        {mockPosts.map((post) => (
          <motion.button
            key={post.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => togglePost(post.id)}
            className={cn(
              "aspect-square rounded-xl relative overflow-hidden",
              post.thumbnail,
              selectedPosts.includes(post.id) && "ring-4 ring-zinc-900"
            )}
          >
            {selectedPosts.includes(post.id) && (
              <div className="absolute inset-0 bg-zinc-900/50 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: YELLOW }}>
                  <Check className="w-5 h-5" style={{ color: BLACK }} />
                </div>
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function ProfileStep({ bio, setBio, selectedCategories, setSelectedCategories, selectedVibes, setSelectedVibes }) {
  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const toggleVibe = (vibe) => {
    if (selectedVibes.includes(vibe)) {
      setSelectedVibes(selectedVibes.filter(v => v !== vibe));
    } else {
      setSelectedVibes([...selectedVibes, vibe]);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Tell us about yourself</h1>
        <p className="text-zinc-500 text-lg">Help brands understand your unique style.</p>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-bold text-zinc-700">Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="A brief description about yourself and your content..."
          rows={4}
          className="w-full bg-white border-2 border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:border-zinc-900 transition-all resize-none"
          style={{ '--tw-ring-color': `${YELLOW}50` }}
        />
      </div>

      <div className="space-y-3">
        <label className="text-sm font-bold text-zinc-700">Content Categories</label>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-xl font-bold text-sm transition-all",
                selectedCategories.includes(cat)
                  ? "bg-zinc-900 shadow-lg"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              )}
              style={selectedCategories.includes(cat) ? { color: YELLOW } : {}}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-bold text-zinc-700">Content Vibe</label>
        <div className="flex flex-wrap gap-3">
          {vibes.map((vibe) => (
            <button
              key={vibe}
              onClick={() => toggleVibe(vibe)}
              className={cn(
                "px-5 py-2.5 rounded-xl font-bold text-sm transition-all",
                selectedVibes.includes(vibe)
                  ? "bg-zinc-900 shadow-lg"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              )}
              style={selectedVibes.includes(vibe) ? { color: YELLOW } : {}}
            >
              {vibe}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function PaymentPreferenceStep({ paymentPref, setPaymentPref }) {
  const options = [
    { id: 'cash', label: 'Cash Only', icon: <DollarSign size={24} />, description: 'I prefer monetary compensation' },
    { id: 'barter', label: 'Barter Only', icon: <Grid3x3 size={24} />, description: 'I work for products/services' },
    { id: 'mix', label: 'Mix of Both', icon: <TrendingUp size={24} />, description: 'I\'m flexible with payment' }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Payment preference</h1>
        <p className="text-zinc-500 text-lg">How do you prefer to be compensated?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setPaymentPref(option.id)}
            className={cn(
              "p-6 rounded-2xl border-2 text-center transition-all",
              paymentPref === option.id
                ? "border-zinc-900 bg-zinc-900 shadow-2xl"
                : "border-zinc-200 bg-white hover:border-zinc-300"
            )}
          >
            <div 
              className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              style={{ 
                backgroundColor: paymentPref === option.id ? YELLOW : '#F4F4F5',
                color: paymentPref === option.id ? BLACK : '#52525B'
              }}
            >
              {option.icon}
            </div>
            <p className={cn("font-bold text-lg mb-2", paymentPref === option.id ? "text-white" : "text-zinc-900")}>
              {option.label}
            </p>
            <p className={cn("text-sm", paymentPref === option.id ? "text-zinc-300" : "text-zinc-500")}>
              {option.description}
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function TermsStep({ termsAccepted, setTermsAccepted }) {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Terms & Conditions</h1>
        <p className="text-zinc-500 text-lg">Please review and accept our terms.</p>
      </div>

      <div className="bg-zinc-50 border-2 border-zinc-200 rounded-2xl p-6 h-64 overflow-y-auto">
        <h3 className="font-bold text-lg mb-4">Lumienzo Platform Agreement</h3>
        <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
          <p>By using Lumienzo, you agree to connect brands and creators directly, with zero platform commission on deals.</p>
          <p>All payments are held in secure escrow and released upon campaign completion and mutual approval.</p>
          <p>Creators maintain full ownership of their content while granting usage rights as specified in individual campaign contracts.</p>
          <p>Both parties agree to conduct professional, respectful communication and deliver quality work as agreed.</p>
          <p>Lumienzo reserves the right to remove users who violate platform guidelines or engage in fraudulent activity.</p>
        </div>
      </div>

      <button
        onClick={() => setTermsAccepted(!termsAccepted)}
        className="flex items-center gap-3 p-5 bg-white border-2 border-zinc-200 rounded-2xl hover:border-zinc-300 transition-all w-full"
      >
        <div className={cn(
          "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all",
          termsAccepted ? "bg-zinc-900 border-zinc-900" : "border-zinc-300"
        )}>
          {termsAccepted && <Check className="w-4 h-4" style={{ color: YELLOW }} />}
        </div>
        <span className="font-bold text-zinc-900">I accept the Terms and Conditions</span>
      </button>
    </div>
  );
}

function BrandIdentityStep({ brandName, setBrandName, industry, setIndustry, monthlySpend, setMonthlySpend }) {
  const agencySavings = (monthlySpend * 0.2).toLocaleString();

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Brand identity</h1>
        <p className="text-zinc-500 text-lg">Tell us about your brand.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-sm font-bold text-zinc-700">Brand Name</label>
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="Your Brand Name"
            className="w-full bg-white border-2 border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:border-zinc-900 transition-all"
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-bold text-zinc-700">Industry</label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full bg-white border-2 border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:border-zinc-900 transition-all"
          >
            <option value="">Select Industry</option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 text-white">
        <div className="flex items-center gap-3 mb-6">
          <DollarSign size={28} />
          <h3 className="text-2xl font-bold">Agency Tax Calculator</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-bold text-zinc-300 mb-2 block">
              How much do you spend on influencers monthly?
            </label>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(parseInt(e.target.value))}
              className="w-full h-3 bg-zinc-700 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${YELLOW} 0%, ${YELLOW} ${(monthlySpend / 100000) * 100}%, #3f3f46 ${(monthlySpend / 100000) * 100}%, #3f3f46 100%)`
              }}
            />
            <p className="text-3xl font-bold mt-4">${monthlySpend.toLocaleString()}</p>
          </div>

          <div className="pt-6 border-t border-zinc-700">
            <p className="text-sm text-zinc-400 mb-2">Agency Commission Saved (20%):</p>
            <p className="text-4xl font-bold" style={{ color: YELLOW }}>${agencySavings}</p>
            <p className="text-sm text-zinc-400 mt-2">per month with $0 commission on Lumienzo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamAccessStep({ teamMembers, setTeamMembers }) {
  const [email, setEmail] = React.useState('');
  const [role, setRole] = React.useState('Editor');

  const addMember = () => {
    if (email) {
      setTeamMembers([...teamMembers, { email, role }]);
      setEmail('');
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Invite your team</h1>
        <p className="text-zinc-500 text-lg">Collaborate with team members and set permissions.</p>
      </div>

      <div className="flex gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="teammate@company.com"
          className="flex-1 bg-white border-2 border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:border-zinc-900 transition-all"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="bg-white border-2 border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:border-zinc-900 transition-all"
        >
          <option>Admin</option>
          <option>Editor</option>
          <option>Viewer</option>
        </select>
        <button
          onClick={addMember}
          className="px-6 py-4 bg-zinc-900 rounded-2xl font-bold hover:bg-zinc-800 transition-colors"
          style={{ color: YELLOW }}
        >
          <UserPlus size={20} />
        </button>
      </div>

      {teamMembers.length > 0 && (
        <div className="space-y-3">
          {teamMembers.map((member, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-zinc-50 border-2 border-zinc-200 rounded-xl">
              <span className="font-medium text-zinc-900">{member.email}</span>
              <span 
                className="px-3 py-1 rounded-lg text-xs font-bold"
                style={{ backgroundColor: YELLOW, color: BLACK }}
              >
                {member.role}
              </span>
            </div>
          ))}
        </div>
      )}

      <p className="text-sm text-zinc-500 italic">You can skip this step and invite team members later from settings.</p>
    </div>
  );
}

function BrandDNAStep({ brandPlatforms, setBrandPlatforms }) {
  const togglePlatform = (platform) => {
    if (brandPlatforms.includes(platform)) {
      setBrandPlatforms(brandPlatforms.filter(p => p !== platform));
    } else {
      setBrandPlatforms([...brandPlatforms, platform]);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Define your brand vibe</h1>
        <p className="text-zinc-500 text-lg">Connect your social accounts so our AI can analyze your aesthetic.</p>
      </div>

      <div className="space-y-4">
        {[
          { name: 'Instagram', icon: <Instagram className="w-5 h-5 text-pink-600" /> },
          { name: 'TikTok', icon: <Video className="w-5 h-5 text-zinc-900" /> }
        ].map((platform) => (
          <button
            key={platform.name}
            onClick={() => togglePlatform(platform.name)}
            className={cn(
              "w-full p-5 rounded-2xl border-2 flex items-center justify-between transition-all",
              brandPlatforms.includes(platform.name)
                ? "border-zinc-900 bg-zinc-900"
                : "border-zinc-200 hover:border-zinc-300 bg-white"
            )}
            style={brandPlatforms.includes(platform.name) ? { boxShadow: `0 0 0 4px ${YELLOW}30` } : {}}
          >
            <div className="flex items-center gap-4">
              {platform.icon}
              <span className={cn(
                "font-bold text-lg",
                brandPlatforms.includes(platform.name) ? "text-white" : "text-zinc-900"
              )}>
                {platform.name}
              </span>
            </div>
            {brandPlatforms.includes(platform.name) ? (
              <CheckCircle2 className="w-6 h-6" style={{ color: YELLOW }} />
            ) : (
              <span className="text-sm font-bold text-zinc-400 uppercase">Connect</span>
            )}
          </button>
        ))}
      </div>

      {brandPlatforms.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl"
          style={{ backgroundColor: `${YELLOW}30`, border: `2px solid ${YELLOW}60` }}
        >
          <div className="flex gap-3 items-start">
            <Sparkles className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: BLACK }} />
            <div>
              <p className="font-bold mb-2" style={{ color: BLACK }}>AI Analysis Complete</p>
              <p className="text-sm leading-relaxed" style={{ color: '#3f3f46' }}>
                We've analyzed your recent content. Your brand uses <strong>minimalist, high-contrast imagery</strong> with a focus on <strong>modern aesthetics</strong>. We'll use this to match you with creators who align with your visual style.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function AntiFraudStep({ audienceAuth, setAudienceAuth, organicRatio, setOrganicRatio }) {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Anti-Fraud Shield</h1>
        <p className="text-zinc-500 text-lg">Set quality thresholds to filter out fake influencers.</p>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-white border-2 border-zinc-200 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <label className="font-bold text-zinc-900">Minimum Audience Authenticity</label>
            <span className="text-2xl font-bold text-zinc-900">{audienceAuth}%</span>
          </div>
          <input
            type="range"
            min="50"
            max="100"
            value={audienceAuth}
            onChange={(e) => setAudienceAuth(parseInt(e.target.value))}
            className="w-full h-3 bg-zinc-200 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, ${BLACK} 0%, ${BLACK} ${audienceAuth}%, #e4e4e7 ${audienceAuth}%, #e4e4e7 100%)`
            }}
          />
          <p className="text-sm text-zinc-500 mt-3">
            Don't show creators with &gt;{100 - audienceAuth}% suspicious followers
          </p>
        </div>

        <div className="p-6 bg-white border-2 border-zinc-200 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <label className="font-bold text-zinc-900">Minimum Organic Reach</label>
            <span className="text-2xl font-bold text-zinc-900">{organicRatio}%</span>
          </div>
          <input
            type="range"
            min="30"
            max="100"
            value={organicRatio}
            onChange={(e) => setOrganicRatio(parseInt(e.target.value))}
            className="w-full h-3 bg-zinc-200 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, ${BLACK} 0%, ${BLACK} ${organicRatio}%, #e4e4e7 ${organicRatio}%, #e4e4e7 100%)`
            }}
          />
          <p className="text-sm text-zinc-500 mt-3">
            Prefer creators with &gt;{organicRatio}% organic vs boosted content
          </p>
        </div>
      </div>

      <div 
        className="p-5 rounded-2xl flex gap-3 items-start"
        style={{ backgroundColor: `${YELLOW}30`, border: `2px solid ${YELLOW}60` }}
      >
        <Shield className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: BLACK }} />
        <p className="text-sm leading-relaxed" style={{ color: '#3f3f46' }}>
          These settings help filter the creator network. You can adjust them anytime from your dashboard settings.
        </p>
      </div>
    </div>
  );
}

function WorkflowBuilderStep({ selectedWorkflow, setSelectedWorkflow }) {
  const toggleStep = (step) => {
    if (selectedWorkflow.includes(step)) {
      setSelectedWorkflow(selectedWorkflow.filter(s => s !== step));
    } else {
      setSelectedWorkflow([...selectedWorkflow, step]);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Build your workflow</h1>
        <p className="text-zinc-500 text-lg">Select the steps in your typical campaign process.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {workflowSteps.map((step) => (
          <button
            key={step}
            onClick={() => toggleStep(step)}
            className={cn(
              "p-4 rounded-2xl border-2 text-center transition-all",
              selectedWorkflow.includes(step)
                ? "border-zinc-900 bg-zinc-900 text-white shadow-lg"
                : "border-zinc-200 bg-white text-zinc-900 hover:border-zinc-300"
            )}
          >
            <p className="font-bold text-sm">{step}</p>
          </button>
        ))}
      </div>

      {selectedWorkflow.length > 0 && (
        <div className="p-6 bg-zinc-50 border-2 border-zinc-200 rounded-2xl">
          <p className="text-sm font-bold text-zinc-700 mb-3">Your Workflow Preview:</p>
          <div className="flex items-center gap-2 flex-wrap">
            {selectedWorkflow.map((step, i) => (
              <React.Fragment key={step}>
                <span 
                  className="px-3 py-1.5 rounded-lg text-xs font-bold"
                  style={{ backgroundColor: YELLOW, color: BLACK }}
                >
                  {step}
                </span>
                {i < selectedWorkflow.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-zinc-400" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function LumiGreetingStep({ persona }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12 space-y-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="mx-auto"
      >
        <LumienzoLogo size="3xl" className="mx-auto" />
      </motion.div>

      <div className="space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl font-bold"
        >
          Welcome to Lumienzo! 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-zinc-500 max-w-md mx-auto"
        >
          I'm Lumi, your AI assistant. I'll help you {persona === 'creator' ? 'find amazing brand partnerships' : 'discover perfect creators for your campaigns'}.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="max-w-lg mx-auto p-6 bg-zinc-50 border-2 border-zinc-200 rounded-2xl text-left"
      >
        <p className="text-sm text-zinc-600 leading-relaxed mb-3">
          <strong>Your setup is complete!</strong> Here's what happens next:
        </p>
        <ul className="space-y-2 text-sm text-zinc-600">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BLACK }} />
            <span>{persona === 'creator' ? 'Browse brand campaigns tailored to your style' : 'Access your command center and start creating campaigns'}</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BLACK }} />
            <span>{persona === 'creator' ? 'I\'ll notify you when brands are interested' : 'Use our vetting engine to find authentic creators'}</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BLACK }} />
            <span>Track everything from one unified dashboard</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
