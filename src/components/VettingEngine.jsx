import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Shield, 
  AlertTriangle,
  TrendingUp,
  Users,
  Eye,
  Target,
  CheckCircle,
  XCircle,
  BarChart3,
  Sparkles,
  Globe,
  MessageCircle
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import PitchModal from './PitchModal';

const YELLOW = '#FEFD7F';
const BLACK = '#18181B';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function VettingEngine() {
  const [handle, setHandle] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [isPitchModalOpen, setIsPitchModalOpen] = useState(false);

  const handleScan = async () => {
    if (!handle) return;
    
    setIsScanning(true);
    
    // Simulate API call
    setTimeout(() => {
      setScanResult({
        handle: handle,
        name: 'Sarah Martinez',
        followers: 245000,
        following: 892,
        posts: 1453,
        avgEngagement: 7.2,
        compatibilityScore: 87,
        audienceAuthenticity: 91,
        boostDetection: 22,
        topLocations: [
          { country: 'United States', percentage: 45 },
          { country: 'United Kingdom', percentage: 18 },
          { country: 'Canada', percentage: 12 },
        ],
        demographics: {
          age: { '18-24': 22, '25-34': 48, '35-44': 20, '45+': 10 },
          gender: { female: 68, male: 30, other: 2 }
        },
        redFlags: [
          { type: 'warning', message: 'Follower spike detected in Feb 2025 (+12K in 3 days)' },
          { type: 'info', message: 'High boost usage on recent posts (avg 22%)' },
        ],
        greenFlags: [
          { message: 'Consistent engagement rate over 12 months' },
          { message: 'Low bot percentage in followers (<5%)' },
          { message: 'Active response to comments (avg 4.2 hours)' },
        ]
      });
      setIsScanning(false);
    }, 2500);
  };

  return (
    <div className="p-4 md:p-8 space-y-4 md:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Vetting Engine</h1>
        <p className="text-sm md:text-base text-zinc-500">AI-powered creator analysis & fraud detection</p>
      </div>

      {/* Handle Scanner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
        style={{ backgroundColor: YELLOW }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -translate-y-48 translate-x-48" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4" style={{ color: BLACK }}>
            <Shield size={24} className="md:w-7 md:h-7" />
            <h2 className="text-xl md:text-2xl font-bold">Handle Scanner</h2>
          </div>
          <p className="mb-4 md:mb-6 text-sm md:text-base" style={{ color: BLACK, opacity: 0.8 }}>Paste any Instagram, TikTok, or YouTube handle to generate a Truth Report</p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} className="md:w-5 md:h-5" />
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                placeholder="@username or profile URL"
                className="w-full bg-white text-zinc-900 rounded-xl py-3 md:py-4 pl-10 md:pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-black/10 transition-all font-medium text-sm md:text-base"
                onKeyPress={(e) => e.key === 'Enter' && handleScan()}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleScan}
              disabled={isScanning || !handle}
              className="px-6 md:px-8 py-3 md:py-4 bg-zinc-900 text-white rounded-xl font-bold hover:bg-zinc-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
            >
              {isScanning ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles size={18} className="md:w-5 md:h-5" />
                  </motion.div>
                  Scanning...
                </>
              ) : (
                'Analyze'
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Scan Results */}
      <AnimatePresence>
        {scanResult && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="space-y-6"
          >
            {/* Profile Summary */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
                  {scanResult.name[0]}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{scanResult.name}</h3>
                  <p className="text-zinc-500 font-medium">{scanResult.handle}</p>
                </div>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-2xl font-bold">{(scanResult.followers / 1000).toFixed(0)}K</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Followers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{scanResult.posts}</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Posts</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: BLACK }}>{scanResult.avgEngagement}%</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Engagement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Dial Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <DialMetric
                title="Compatibility Score"
                score={scanResult.compatibilityScore}
                description="Audience overlap & brand sentiment"
                color="emerald"
              />
              <DialMetric
                title="Audience Authenticity"
                score={scanResult.audienceAuthenticity}
                description="Real followers vs. suspicious accounts"
                color="blue"
              />
              <DialMetric
                title="Boost Detection"
                score={scanResult.boostDetection}
                description="Paid promotion vs. organic reach"
                color="amber"
                inverse
              />
            </div>

            {/* Red Flags & Green Flags */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Red Flags */}
              <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle size={20} className="text-rose-500" />
                  <h3 className="font-bold text-lg">Red Flags</h3>
                </div>
                <div className="space-y-3">
                  {scanResult.redFlags.map((flag, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-lg",
                        flag.type === 'warning' ? 'bg-rose-50 border border-rose-100' : 'bg-amber-50 border border-amber-100'
                      )}
                    >
                      <XCircle size={16} className={flag.type === 'warning' ? 'text-rose-500 mt-0.5' : 'text-amber-500 mt-0.5'} />
                      <p className="text-sm text-zinc-700">{flag.message}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Green Flags */}
              <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle size={20} className="text-emerald-500" />
                  <h3 className="font-bold text-lg">Green Flags</h3>
                </div>
                <div className="space-y-3">
                  {scanResult.greenFlags.map((flag, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50 border border-emerald-100"
                    >
                      <CheckCircle size={16} className="text-emerald-500 mt-0.5" />
                      <p className="text-sm text-zinc-700">{flag.message}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Audience Deep Dive */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-6">Audience Deep Dive</h3>
              <div className="grid grid-cols-2 gap-8">
                {/* Geography */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Globe size={18} style={{ color: BLACK }} />
                    <h4 className="font-bold">Top Locations</h4>
                  </div>
                  <div className="space-y-3">
                    {scanResult.topLocations.map((loc) => (
                      <div key={loc.country} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-zinc-700">{loc.country}</span>
                          <span className="font-bold text-zinc-900">{loc.percentage}%</span>
                        </div>
                        <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${loc.percentage}%` }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-full"
                            style={{ backgroundColor: YELLOW }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Demographics */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Users size={18} style={{ color: BLACK }} />
                    <h4 className="font-bold">Demographics</h4>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-bold text-zinc-500 mb-2">Age Distribution</p>
                      <div className="flex gap-2">
                        {Object.entries(scanResult.demographics.age).map(([range, percent]) => (
                          <div key={range} className="flex-1 text-center">
                            <div 
                              className="rounded-t-lg mb-1"
                              style={{ height: `${percent * 1.5}px`, backgroundColor: YELLOW }}
                            />
                            <p className="text-xs font-bold text-zinc-900">{percent}%</p>
                            <p className="text-[10px] text-zinc-500">{range}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsPitchModalOpen(true)}
                className="flex-1 py-3 md:py-4 rounded-xl font-bold transition-colors shadow-lg text-sm md:text-base"
                style={{ backgroundColor: YELLOW, color: BLACK }}
              >
                Send Campaign Pitch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-zinc-200 text-zinc-900 rounded-xl font-bold hover:border-zinc-300 transition-colors text-sm md:text-base"
              >
                Export Report
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pitch Modal */}
      <PitchModal 
        isOpen={isPitchModalOpen} 
        onClose={() => setIsPitchModalOpen(false)}
        creator={scanResult}
      />
    </div>
  );
}

function DialMetric({ title, score, description, color, inverse = false }) {
  const colorConfig = {
    emerald: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-600',
      stroke: '#10B981'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-600',
      stroke: '#3B82F6'
    },
    amber: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-600',
      stroke: '#F59E0B'
    }
  };

  const config = colorConfig[color];
  const displayScore = inverse ? 100 - score : score;
  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn("rounded-xl md:rounded-2xl border-2 p-4 md:p-6 text-center", config.bg, config.border)}
    >
      <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">{title}</h3>
      <p className="text-[10px] md:text-xs text-zinc-500 mb-4 md:mb-6">{description}</p>
      
      <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-3 md:mb-4">
        <svg className="w-full h-full -rotate-90">
          <circle 
            cx="80" 
            cy="80" 
            r="70" 
            fill="none" 
            stroke="currentColor"
            strokeWidth="12"
            className="text-zinc-200"
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke={config.stroke}
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("text-3xl md:text-4xl font-bold", config.text)}>{displayScore}</span>
          <span className="text-xs md:text-sm text-zinc-500">/100</span>
        </div>
      </div>
      
      <div className={cn("inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold text-xs md:text-sm", config.text, config.bg, config.border, "border")}>
        {displayScore >= 80 ? 'Excellent' : displayScore >= 60 ? 'Good' : displayScore >= 40 ? 'Fair' : 'Poor'}
      </div>
    </motion.div>
  );
}
