import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Share2, 
  Copy, 
  Eye,
  Edit3,
  Instagram,
  Youtube,
  TrendingUp,
  Users,
  Heart,
  MessageCircle,
  DollarSign,
  CheckCircle,
  Sparkles,
  Link2,
  Mail,
  ExternalLink,
  Calculator,
  Info
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const YELLOW = '#FEFD7F';
const BLACK = '#18181B';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Mock creator data
const creatorData = {
  name: 'Totok Michael',
  handle: '@totokmichael',
  bio: 'Tech & lifestyle creator sharing authentic experiences with the latest gadgets and travel adventures.',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
  location: 'Los Angeles, CA',
  categories: ['Tech', 'Lifestyle', 'Travel'],
  stats: {
    totalFollowers: 485000,
    avgEngagement: 7.8,
    avgViews: 125000,
    totalContent: 342
  },
  platforms: [
    { name: 'Instagram', followers: 245000, engagement: 8.2, icon: Instagram },
    { name: 'YouTube', followers: 180000, engagement: 6.5, icon: Youtube },
    { name: 'TikTok', followers: 60000, engagement: 12.4, icon: TrendingUp }
  ],
  demographics: {
    age: { '18-24': 32, '25-34': 45, '35-44': 18, '45+': 5 },
    gender: { male: 42, female: 55, other: 3 },
    topLocations: ['United States', 'United Kingdom', 'Canada', 'Australia']
  },
  pastBrands: ['Samsung', 'Nike', 'Adobe', 'Notion', 'Airbnb']
};

// Rate calculator data
const deliverableRates = {
  'Instagram Reel': { base: 500, marketAvg: 450 },
  'Instagram Post': { base: 350, marketAvg: 320 },
  'Instagram Story': { base: 150, marketAvg: 120 },
  'TikTok Video': { base: 600, marketAvg: 550 },
  'YouTube Video': { base: 2500, marketAvg: 2200 },
  'YouTube Short': { base: 800, marketAvg: 700 }
};

export default function MediaKit() {
  const [activeTab, setActiveTab] = useState('preview');
  const [copied, setCopied] = useState(false);
  const [selectedDeliverables, setSelectedDeliverables] = useState(['Instagram Reel', 'TikTok Video']);

  const copyLink = () => {
    navigator.clipboard.writeText('https://lumienzo.com/kit/totokmichael');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const totalRate = selectedDeliverables.reduce((sum, d) => sum + (deliverableRates[d]?.base || 0), 0);
  const marketTotal = selectedDeliverables.reduce((sum, d) => sum + (deliverableRates[d]?.marketAvg || 0), 0);

  return (
    <div className="p-4 md:p-8 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Media Kit</h1>
          <p className="text-sm md:text-base text-zinc-500">Your professional portfolio for brand partnerships</p>
        </div>
        
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={copyLink}
            className="px-4 py-2.5 bg-white border border-zinc-200 rounded-xl font-bold text-sm flex items-center gap-2 hover:border-zinc-300 transition-colors"
          >
            {copied ? <CheckCircle size={16} className="text-emerald-500" /> : <Link2 size={16} />}
            {copied ? 'Copied!' : 'Copy Link'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors"
            style={{ backgroundColor: YELLOW, color: BLACK }}
          >
            <Download size={16} />
            Download PDF
          </motion.button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-xl p-1 w-fit">
        {[
          { id: 'preview', label: 'Preview', icon: <Eye size={16} /> },
          { id: 'customize', label: 'Customize', icon: <Edit3 size={16} /> },
          { id: 'rates', label: 'Rate Calculator', icon: <Calculator size={16} /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
              activeTab === tab.id ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-900"
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'preview' && <MediaKitPreview data={creatorData} />}
      {activeTab === 'customize' && <MediaKitCustomize data={creatorData} />}
      {activeTab === 'rates' && (
        <RateCalculator 
          selectedDeliverables={selectedDeliverables}
          setSelectedDeliverables={setSelectedDeliverables}
          totalRate={totalRate}
          marketTotal={marketTotal}
          deliverableRates={deliverableRates}
        />
      )}

      {/* Share Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-zinc-200 p-6"
      >
        <h3 className="font-bold text-lg mb-4">Share Your Media Kit</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl hover:bg-zinc-100 transition-colors">
            <Link2 size={20} className="text-zinc-600" />
            <div className="text-left">
              <p className="font-bold text-sm">Public Link</p>
              <p className="text-xs text-zinc-500">lumienzo.com/kit/totokmichael</p>
            </div>
            <ExternalLink size={16} className="ml-auto text-zinc-400" />
          </button>
          <button className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl hover:bg-zinc-100 transition-colors">
            <Mail size={20} className="text-zinc-600" />
            <div className="text-left">
              <p className="font-bold text-sm">Email Directly</p>
              <p className="text-xs text-zinc-500">Send to brands</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl hover:bg-zinc-100 transition-colors">
            <Download size={20} className="text-zinc-600" />
            <div className="text-left">
              <p className="font-bold text-sm">Download PDF</p>
              <p className="text-xs text-zinc-500">High-quality export</p>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function MediaKitPreview({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-lg"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={data.avatar}
            alt={data.name}
            className="w-24 h-24 rounded-2xl border-4 border-white/20"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-1">{data.name}</h2>
            <p className="text-zinc-400 mb-3">{data.handle} • {data.location}</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {data.categories.map((cat) => (
                <span 
                  key={cat} 
                  className="px-3 py-1 rounded-full text-sm font-bold"
                  style={{ backgroundColor: YELLOW, color: BLACK }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="p-6 border-b border-zinc-200">
        <p className="text-zinc-600 text-center md:text-left">{data.bio}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-b border-zinc-200">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-zinc-500 mb-1">
            <Users size={16} />
            <span className="text-sm">Total Followers</span>
          </div>
          <p className="text-2xl font-bold">{(data.stats.totalFollowers / 1000).toFixed(0)}K</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-zinc-500 mb-1">
            <Heart size={16} />
            <span className="text-sm">Avg. Engagement</span>
          </div>
          <p className="text-2xl font-bold text-emerald-600">{data.stats.avgEngagement}%</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-zinc-500 mb-1">
            <Eye size={16} />
            <span className="text-sm">Avg. Views</span>
          </div>
          <p className="text-2xl font-bold">{(data.stats.avgViews / 1000).toFixed(0)}K</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-zinc-500 mb-1">
            <MessageCircle size={16} />
            <span className="text-sm">Total Content</span>
          </div>
          <p className="text-2xl font-bold">{data.stats.totalContent}</p>
        </div>
      </div>

      {/* Platforms */}
      <div className="p-6 border-b border-zinc-200">
        <h3 className="font-bold text-lg mb-4">Platforms</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <div key={platform.name} className="bg-zinc-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={20} className="text-zinc-600" />
                  <span className="font-bold">{platform.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-zinc-500">Followers</p>
                    <p className="font-bold">{(platform.followers / 1000).toFixed(0)}K</p>
                  </div>
                  <div className="text-right">
                    <p className="text-zinc-500">Engagement</p>
                    <p className="font-bold text-emerald-600">{platform.engagement}%</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Demographics */}
      <div className="p-6 border-b border-zinc-200">
        <h3 className="font-bold text-lg mb-4">Audience Demographics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-bold text-zinc-500 mb-3">Age Distribution</p>
            <div className="space-y-2">
              {Object.entries(data.demographics.age).map(([age, percent]) => (
                <div key={age} className="flex items-center gap-3">
                  <span className="text-sm text-zinc-600 w-12">{age}</span>
                  <div className="flex-1 h-2 bg-zinc-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full"
                      style={{ width: `${percent}%`, backgroundColor: YELLOW }}
                    />
                  </div>
                  <span className="text-sm font-bold w-10 text-right">{percent}%</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-zinc-500 mb-3">Top Locations</p>
            <div className="space-y-2">
              {data.demographics.topLocations.map((loc, i) => (
                <div key={loc} className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-900 text-white text-xs flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm">{loc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Past Collaborations */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-4">Past Collaborations</h3>
        <div className="flex flex-wrap gap-3">
          {data.pastBrands.map((brand) => (
            <span 
              key={brand} 
              className="px-4 py-2 bg-zinc-900 text-white rounded-xl font-bold"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MediaKitCustomize({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl border border-zinc-200 p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <Sparkles size={24} style={{ color: BLACK }} />
        <div>
          <h3 className="font-bold text-lg">Customize Your Media Kit</h3>
          <p className="text-sm text-zinc-500">Choose which sections to display</p>
        </div>
      </div>

      <div className="space-y-4">
        {[
          { id: 'bio', label: 'Bio & About', enabled: true },
          { id: 'stats', label: 'Overall Statistics', enabled: true },
          { id: 'platforms', label: 'Platform Breakdown', enabled: true },
          { id: 'demographics', label: 'Audience Demographics', enabled: true },
          { id: 'brands', label: 'Past Collaborations', enabled: true },
          { id: 'rates', label: 'Rate Card', enabled: false },
          { id: 'testimonials', label: 'Brand Testimonials', enabled: false },
        ].map((section) => (
          <div key={section.id} className="flex items-center justify-between p-4 bg-zinc-50 rounded-xl">
            <span className="font-medium">{section.label}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked={section.enabled} className="sr-only peer" />
              <div className="w-11 h-6 bg-zinc-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-900"></div>
            </label>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: `${YELLOW}30` }}>
        <div className="flex items-start gap-3">
          <Info size={20} style={{ color: BLACK }} />
          <p className="text-sm" style={{ color: BLACK }}>
            <strong>Pro Tip:</strong> Including rate information can help brands understand your value upfront and lead to faster deals.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function RateCalculator({ selectedDeliverables, setSelectedDeliverables, totalRate, marketTotal, deliverableRates }) {
  const toggleDeliverable = (d) => {
    if (selectedDeliverables.includes(d)) {
      setSelectedDeliverables(selectedDeliverables.filter(x => x !== d));
    } else {
      setSelectedDeliverables([...selectedDeliverables, d]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* AI Suggestion Banner */}
      <div 
        className="rounded-2xl p-6 flex items-center gap-4"
        style={{ backgroundColor: `${YELLOW}30`, border: `2px solid ${YELLOW}60` }}
      >
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: YELLOW }}
        >
          <Sparkles size={28} style={{ color: BLACK }} />
        </div>
        <div className="flex-1">
          <p className="font-bold text-lg" style={{ color: BLACK }}>AI-Suggested Rates</p>
          <p className="text-sm" style={{ color: BLACK, opacity: 0.7 }}>Based on your engagement (7.8%), follower count (485K), and content quality. Rates are 8% above market average.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deliverables Selection */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-6">
          <h3 className="font-bold text-lg mb-4">Select Deliverables</h3>
          <div className="space-y-3">
            {Object.entries(deliverableRates).map(([name, rates]) => (
              <button
                key={name}
                onClick={() => toggleDeliverable(name)}
                className={cn(
                  "w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all text-left",
                  selectedDeliverables.includes(name)
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 hover:border-zinc-300"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-5 h-5 rounded border-2 flex items-center justify-center",
                    selectedDeliverables.includes(name)
                      ? "border-white bg-white"
                      : "border-zinc-300"
                  )}>
                    {selectedDeliverables.includes(name) && (
                      <CheckCircle size={14} className="text-zinc-900" />
                    )}
                  </div>
                  <span className="font-medium">{name}</span>
                </div>
                <div className="text-right">
                  <p className={cn(
                    "font-bold",
                    selectedDeliverables.includes(name) ? "text-white" : "text-zinc-900"
                  )}>
                    ${rates.base}
                  </p>
                  <p className={cn(
                    "text-xs",
                    selectedDeliverables.includes(name) ? "text-zinc-300" : "text-zinc-500"
                  )}>
                    Market avg: ${rates.marketAvg}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Rate Summary */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-6">
          <h3 className="font-bold text-lg mb-4">Rate Summary</h3>
          
          {selectedDeliverables.length > 0 ? (
            <>
              <div className="space-y-3 mb-6">
                {selectedDeliverables.map((d) => (
                  <div key={d} className="flex items-center justify-between text-sm">
                    <span className="text-zinc-600">{d}</span>
                    <span className="font-bold">${deliverableRates[d].base}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-200 pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">Your Rate</span>
                  <span className="text-2xl font-bold">${totalRate.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-zinc-500">
                  <span>Market Average</span>
                  <span>${marketTotal.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-emerald-600">Above Market</span>
                  <span className="font-bold text-emerald-600">+${(totalRate - marketTotal).toLocaleString()} (+{Math.round((totalRate - marketTotal) / marketTotal * 100)}%)</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                style={{ backgroundColor: YELLOW, color: BLACK }}
              >
                <Copy size={18} />
                Copy Rate Quote
              </motion.button>
            </>
          ) : (
            <div className="text-center py-8 text-zinc-500">
              <DollarSign size={48} className="mx-auto mb-4 text-zinc-300" />
              <p>Select deliverables to see rate summary</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
