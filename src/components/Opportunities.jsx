import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star,
  DollarSign,
  Clock,
  ChevronDown,
  Bookmark,
  BookmarkCheck,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  Calendar,
  Building2,
  CheckCircle,
  X,
  Zap
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const YELLOW = '#FEFD7F';
const BLACK = '#18181B';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Mock opportunities data
const mockOpportunities = [
  {
    id: 1,
    brand: 'Nike',
    brandLogo: 'N',
    campaign: 'Summer Running Collection',
    description: 'Looking for fitness creators to showcase our new lightweight running shoes in authentic workout content.',
    budget: { min: 2000, max: 5000 },
    deadline: '2026-02-15',
    categories: ['Fitness', 'Lifestyle'],
    deliverables: ['1 Instagram Reel', '2 Stories', '1 TikTok'],
    matchScore: 94,
    applicants: 45,
    saved: false,
    featured: true
  },
  {
    id: 2,
    brand: 'Samsung',
    brandLogo: 'S',
    campaign: 'Galaxy S25 Launch',
    description: 'Tech creators needed for authentic unboxing and review content for our latest flagship phone.',
    budget: { min: 3000, max: 8000 },
    deadline: '2026-02-01',
    categories: ['Tech', 'Lifestyle'],
    deliverables: ['1 YouTube Video', '3 Instagram Posts', '1 TikTok'],
    matchScore: 87,
    applicants: 128,
    saved: true,
    featured: true
  },
  {
    id: 3,
    brand: 'Glossier',
    brandLogo: 'G',
    campaign: 'Spring Beauty Refresh',
    description: 'Beauty creators to feature our new spring collection in get-ready-with-me style content.',
    budget: { min: 1500, max: 3500 },
    deadline: '2026-02-20',
    categories: ['Beauty', 'Lifestyle'],
    deliverables: ['2 Instagram Reels', '3 Stories'],
    matchScore: 72,
    applicants: 89,
    saved: false,
    featured: false
  },
  {
    id: 4,
    brand: 'HelloFresh',
    brandLogo: 'H',
    campaign: 'Quick & Easy Meals',
    description: 'Food creators to showcase easy meal prep using our ingredient boxes. Family-friendly content preferred.',
    budget: { min: 800, max: 2000 },
    deadline: '2026-03-01',
    categories: ['Food', 'Lifestyle'],
    deliverables: ['1 Instagram Reel', '1 TikTok', 'Product mention'],
    matchScore: 68,
    applicants: 34,
    saved: false,
    featured: false
  },
  {
    id: 5,
    brand: 'Airbnb',
    brandLogo: 'A',
    campaign: 'Unique Stays 2026',
    description: 'Travel creators for a sponsored stay at unique Airbnb properties. Document your experience authentically.',
    budget: { min: 5000, max: 12000 },
    deadline: '2026-02-28',
    categories: ['Travel', 'Lifestyle'],
    deliverables: ['1 YouTube Vlog', '5 Instagram Posts', '3 Reels', '10 Stories'],
    matchScore: 81,
    applicants: 256,
    saved: true,
    featured: true
  },
];

const categories = ['All', 'For You', 'Fashion', 'Tech', 'Fitness', 'Beauty', 'Food', 'Travel'];

export default function Opportunities() {
  const [activeTab, setActiveTab] = useState('matches');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [opportunities, setOpportunities] = useState(mockOpportunities);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOpp, setSelectedOpp] = useState(null);

  const filteredOpps = opportunities.filter(o => {
    const matchesCategory = selectedCategory === 'All' || 
                           selectedCategory === 'For You' ||
                           o.categories.includes(selectedCategory);
    const matchesSearch = o.brand.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         o.campaign.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'matches' ? true : 
                      activeTab === 'saved' ? o.saved : 
                      o.featured;
    return matchesCategory && matchesSearch && matchesTab;
  }).sort((a, b) => activeTab === 'matches' ? b.matchScore - a.matchScore : 0);

  const toggleSave = (id) => {
    setOpportunities(opportunities.map(o => 
      o.id === id ? { ...o, saved: !o.saved } : o
    ));
  };

  return (
    <div className="p-4 md:p-8 space-y-4 md:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Opportunities</h1>
        <p className="text-sm md:text-base text-zinc-500">AI-curated brand partnerships matched to your profile</p>
      </div>

      {/* AI Match Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl p-4 md:p-6 shadow-lg relative overflow-hidden"
        style={{ backgroundColor: YELLOW }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -translate-y-32 translate-x-32" />
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center flex-shrink-0">
            <Sparkles size={28} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-lg" style={{ color: BLACK }}>Your Match Score This Week: 87%</p>
            <p className="text-sm" style={{ color: BLACK, opacity: 0.7 }}>Based on your engagement, audience, and content style. 5 new perfect matches found!</p>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-xl p-1 w-fit">
        {[
          { id: 'matches', label: 'AI Matches', icon: <Target size={16} /> },
          { id: 'browse', label: 'Browse All', icon: <TrendingUp size={16} /> },
          { id: 'saved', label: 'Saved', icon: <Bookmark size={16} /> },
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
            {tab.id === 'saved' && (
              <span className="px-1.5 py-0.5 bg-zinc-700 text-white text-xs rounded-full">
                {opportunities.filter(o => o.saved).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search brands or campaigns..."
            className="w-full bg-white border border-zinc-200 rounded-xl py-2.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 transition-all text-sm"
          />
        </div>

        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
          <Filter size={16} />
          <span className="text-sm font-bold">Filters</span>
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all",
              selectedCategory === cat
                ? "bg-zinc-900 text-white"
                : "bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300"
            )}
          >
            {cat === 'For You' && <Sparkles size={14} className="inline mr-1" />}
            {cat}
          </button>
        ))}
      </div>

      {/* Opportunities List */}
      <div className="space-y-4">
        {filteredOpps.map((opp, index) => (
          <OpportunityCard 
            key={opp.id} 
            opportunity={opp} 
            index={index}
            onSave={() => toggleSave(opp.id)}
            onView={() => setSelectedOpp(opp)}
          />
        ))}
      </div>

      {filteredOpps.length === 0 && (
        <div className="text-center py-12">
          <Building2 size={48} className="mx-auto text-zinc-300 mb-4" />
          <p className="text-zinc-500 font-medium">No opportunities found</p>
          <p className="text-sm text-zinc-400">Try adjusting your filters or check back later</p>
        </div>
      )}

      {/* Opportunity Detail Modal */}
      <AnimatePresence>
        {selectedOpp && (
          <OpportunityModal 
            opportunity={selectedOpp} 
            onClose={() => setSelectedOpp(null)}
            onSave={() => toggleSave(selectedOpp.id)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function OpportunityCard({ opportunity, index, onSave, onView }) {
  const daysLeft = Math.ceil((new Date(opportunity.deadline) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      onClick={onView}
      className="bg-white rounded-2xl border border-zinc-200 p-4 md:p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Brand Logo */}
        <div className="w-14 h-14 rounded-2xl bg-zinc-900 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
          {opportunity.brandLogo}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-lg">{opportunity.campaign}</h3>
                {opportunity.featured && (
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded-full flex items-center gap-1">
                    <Star size={10} className="fill-amber-500" /> Featured
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-500">{opportunity.brand}</p>
            </div>
            
            {/* Match Score */}
            <div 
              className="px-3 py-1.5 rounded-xl flex items-center gap-2 flex-shrink-0"
              style={{ backgroundColor: `${YELLOW}30` }}
            >
              <Zap size={14} style={{ color: BLACK }} />
              <span className="font-bold text-sm">{opportunity.matchScore}% match</span>
            </div>
          </div>

          <p className="text-sm text-zinc-600 mb-4 line-clamp-2">{opportunity.description}</p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5 text-zinc-600">
              <DollarSign size={14} />
              <span className="font-bold">${opportunity.budget.min.toLocaleString()} - ${opportunity.budget.max.toLocaleString()}</span>
            </div>
            <div className={cn(
              "flex items-center gap-1.5",
              daysLeft <= 7 ? "text-rose-600" : "text-zinc-600"
            )}>
              <Clock size={14} />
              <span className="font-medium">{daysLeft} days left</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-500">
              <span>{opportunity.applicants} applicants</span>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {opportunity.categories.map((cat) => (
              <span 
                key={cat} 
                className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded text-xs font-bold"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex md:flex-col gap-2 flex-shrink-0">
          <button
            onClick={(e) => { e.stopPropagation(); onSave(); }}
            className={cn(
              "p-3 rounded-xl transition-colors",
              opportunity.saved
                ? "bg-zinc-900 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            )}
          >
            {opportunity.saved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => { e.stopPropagation(); }}
            className="p-3 rounded-xl font-bold transition-colors"
            style={{ backgroundColor: YELLOW, color: BLACK }}
          >
            <Send size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function OpportunityModal({ opportunity, onClose, onSave }) {
  const daysLeft = Math.ceil((new Date(opportunity.deadline) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-50"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-200">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 text-white flex items-center justify-center text-3xl font-bold">
                {opportunity.brandLogo}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{opportunity.campaign}</h2>
                <p className="text-zinc-500">{opportunity.brand}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center hover:bg-zinc-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Match Score Banner */}
          <div 
            className="rounded-xl p-4 mb-6 flex items-center gap-3"
            style={{ backgroundColor: `${YELLOW}30` }}
          >
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: YELLOW }}
            >
              <Zap size={24} style={{ color: BLACK }} />
            </div>
            <div>
              <p className="font-bold text-lg">{opportunity.matchScore}% Match Score</p>
              <p className="text-sm text-zinc-600">This campaign aligns well with your content style and audience</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">About this campaign</h3>
            <p className="text-zinc-600">{opportunity.description}</p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-zinc-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-zinc-500 mb-1">
                <DollarSign size={16} />
                <span className="text-sm">Budget</span>
              </div>
              <p className="text-xl font-bold">${opportunity.budget.min.toLocaleString()} - ${opportunity.budget.max.toLocaleString()}</p>
            </div>
            <div className={cn(
              "rounded-xl p-4",
              daysLeft <= 7 ? "bg-rose-50" : "bg-zinc-50"
            )}>
              <div className={cn(
                "flex items-center gap-2 mb-1",
                daysLeft <= 7 ? "text-rose-500" : "text-zinc-500"
              )}>
                <Calendar size={16} />
                <span className="text-sm">Deadline</span>
              </div>
              <p className={cn(
                "text-xl font-bold",
                daysLeft <= 7 ? "text-rose-600" : "text-zinc-900"
              )}>{daysLeft} days left</p>
            </div>
          </div>

          {/* Deliverables */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-3">Deliverables</h3>
            <div className="space-y-2">
              {opportunity.deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-2 text-zinc-700">
                  <CheckCircle size={16} className="text-emerald-500" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {opportunity.categories.map((cat) => (
                <span 
                  key={cat} 
                  className="px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-lg text-sm font-bold"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 border-t border-zinc-200 flex gap-3">
          <button
            onClick={onSave}
            className={cn(
              "px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors",
              opportunity.saved
                ? "bg-zinc-900 text-white"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
            )}
          >
            {opportunity.saved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
            {opportunity.saved ? 'Saved' : 'Save'}
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
            style={{ backgroundColor: YELLOW, color: BLACK }}
          >
            <Send size={18} />
            Apply Now
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
