import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Heart, 
  X, 
  UserPlus, 
  Star,
  MapPin,
  TrendingUp,
  Users,
  Instagram,
  Youtube,
  Eye,
  Sparkles,
  ChevronDown,
  Grid3x3,
  List,
  Send,
  Bookmark,
  BookmarkCheck,
  Zap
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const YELLOW = '#FEFD7F';
const BLACK = '#18181B';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Mock creator data
const mockCreators = [
  {
    id: 1,
    name: 'Maya Johnson',
    handle: '@mayacreates',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya',
    followers: 485000,
    engagement: 8.7,
    location: 'Los Angeles, CA',
    categories: ['Fashion', 'Lifestyle'],
    platforms: ['instagram', 'tiktok'],
    matchScore: 94,
    recentBrands: ['Zara', 'H&M'],
    thumbnail: 'bg-gradient-to-br from-pink-400 to-rose-500',
    verified: true,
    saved: false
  },
  {
    id: 2,
    name: 'Alex Chen',
    handle: '@alextech',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexC',
    followers: 320000,
    engagement: 12.3,
    location: 'San Francisco, CA',
    categories: ['Tech', 'Gaming'],
    platforms: ['youtube', 'tiktok'],
    matchScore: 89,
    recentBrands: ['Samsung', 'Logitech'],
    thumbnail: 'bg-gradient-to-br from-blue-400 to-indigo-500',
    verified: true,
    saved: true
  },
  {
    id: 3,
    name: 'Sophie Williams',
    handle: '@sophiefitness',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
    followers: 892000,
    engagement: 6.8,
    location: 'Miami, FL',
    categories: ['Fitness', 'Beauty'],
    platforms: ['instagram', 'youtube'],
    matchScore: 82,
    recentBrands: ['Nike', 'Gymshark'],
    thumbnail: 'bg-gradient-to-br from-emerald-400 to-green-500',
    verified: true,
    saved: false
  },
  {
    id: 4,
    name: 'Jordan Rivera',
    handle: '@jordaneats',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan',
    followers: 156000,
    engagement: 15.2,
    location: 'Austin, TX',
    categories: ['Food', 'Travel'],
    platforms: ['instagram', 'tiktok'],
    matchScore: 78,
    recentBrands: ['HelloFresh', 'Airbnb'],
    thumbnail: 'bg-gradient-to-br from-amber-400 to-orange-500',
    verified: false,
    saved: false
  },
  {
    id: 5,
    name: 'Emma Davis',
    handle: '@emmastyle',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmmaD',
    followers: 1200000,
    engagement: 5.4,
    location: 'New York, NY',
    categories: ['Fashion', 'Beauty'],
    platforms: ['instagram', 'youtube', 'tiktok'],
    matchScore: 91,
    recentBrands: ['Sephora', 'Revolve'],
    thumbnail: 'bg-gradient-to-br from-purple-400 to-pink-500',
    verified: true,
    saved: true
  },
  {
    id: 6,
    name: 'Marcus Thompson',
    handle: '@marcusgames',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    followers: 567000,
    engagement: 9.1,
    location: 'Seattle, WA',
    categories: ['Gaming', 'Tech'],
    platforms: ['youtube', 'tiktok'],
    matchScore: 85,
    recentBrands: ['Razer', 'NVIDIA'],
    thumbnail: 'bg-gradient-to-br from-violet-400 to-purple-500',
    verified: true,
    saved: false
  },
];

const categories = ['All', 'Fashion', 'Tech', 'Fitness', 'Beauty', 'Food', 'Travel', 'Gaming', 'Lifestyle'];

export default function CreatorNetwork() {
  const [viewMode, setViewMode] = useState('discover');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [creators, setCreators] = useState(mockCreators);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCreator, setSelectedCreator] = useState(null);

  const filteredCreators = creators.filter(c => {
    const matchesCategory = selectedCategory === 'All' || c.categories.includes(selectedCategory);
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         c.handle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesView = viewMode === 'discover' ? true : c.saved;
    return matchesCategory && matchesSearch && matchesView;
  });

  const toggleSave = (id) => {
    setCreators(creators.map(c => 
      c.id === id ? { ...c, saved: !c.saved } : c
    ));
  };

  return (
    <div className="p-4 md:p-8 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Creator Network</h1>
          <p className="text-sm md:text-base text-zinc-500">Discover and connect with verified creators</p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-bold shadow-lg transition-colors flex items-center gap-2 text-sm md:text-base"
          style={{ backgroundColor: YELLOW, color: BLACK }}
        >
          <UserPlus size={18} />
          Invite Creator
        </motion.button>
      </div>

      {/* View Toggle & Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-xl p-1">
          <button
            onClick={() => setViewMode('discover')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
              viewMode === 'discover' ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-900"
            )}
          >
            <Sparkles size={16} />
            Discover
          </button>
          <button
            onClick={() => setViewMode('shortlist')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
              viewMode === 'shortlist' ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-900"
            )}
          >
            <Bookmark size={16} />
            Shortlist ({creators.filter(c => c.saved).length})
          </button>
        </div>

        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search creators by name or handle..."
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
            {cat}
          </button>
        ))}
      </div>

      {/* AI Match Banner */}
      {viewMode === 'discover' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-4 md:p-6 flex items-center gap-4"
          style={{ backgroundColor: `${YELLOW}30`, border: `2px solid ${YELLOW}60` }}
        >
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: YELLOW }}
          >
            <Zap size={24} style={{ color: BLACK }} />
          </div>
          <div className="flex-1">
            <p className="font-bold text-zinc-900">AI-Powered Matching</p>
            <p className="text-sm text-zinc-600">Creators are ranked by brand compatibility, audience authenticity, and engagement quality.</p>
          </div>
        </motion.div>
      )}

      {/* Creator Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredCreators.map((creator, index) => (
          <CreatorCard 
            key={creator.id} 
            creator={creator} 
            index={index}
            onSave={() => toggleSave(creator.id)}
            onView={() => setSelectedCreator(creator)}
          />
        ))}
      </div>

      {filteredCreators.length === 0 && (
        <div className="text-center py-12">
          <Users size={48} className="mx-auto text-zinc-300 mb-4" />
          <p className="text-zinc-500 font-medium">No creators found</p>
          <p className="text-sm text-zinc-400">Try adjusting your filters or search query</p>
        </div>
      )}

      {/* Creator Detail Modal */}
      <AnimatePresence>
        {selectedCreator && (
          <CreatorModal 
            creator={selectedCreator} 
            onClose={() => setSelectedCreator(null)}
            onSave={() => toggleSave(selectedCreator.id)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function CreatorCard({ creator, index, onSave, onView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group"
    >
      {/* Header with thumbnail */}
      <div className={cn("h-24 relative", creator.thumbnail)}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Match Score */}
        <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur rounded-lg flex items-center gap-1">
          <Star size={12} className="text-amber-500 fill-amber-500" />
          <span className="text-xs font-bold">{creator.matchScore}% match</span>
        </div>

        {/* Save Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onSave(); }}
          className={cn(
            "absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all",
            creator.saved 
              ? "bg-zinc-900 text-white" 
              : "bg-white/90 backdrop-blur text-zinc-600 hover:text-zinc-900"
          )}
        >
          {creator.saved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
        </button>

        {/* Avatar */}
        <img
          src={creator.avatar}
          alt={creator.name}
          className="absolute -bottom-8 left-4 w-16 h-16 rounded-xl border-4 border-white shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="pt-10 px-4 pb-4" onClick={onView}>
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-lg">{creator.name}</h3>
              {creator.verified && (
                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <p className="text-sm text-zinc-500">{creator.handle}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-zinc-50 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{(creator.followers / 1000).toFixed(0)}K</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Followers</p>
          </div>
          <div className="bg-emerald-50 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-emerald-600">{creator.engagement}%</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Engagement</p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {creator.categories.map((cat) => (
            <span 
              key={cat} 
              className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded text-[10px] font-bold"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 mb-4">
          <MapPin size={12} />
          <span>{creator.location}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-2.5 rounded-xl font-bold text-sm transition-colors"
            style={{ backgroundColor: YELLOW, color: BLACK }}
          >
            Quick Pitch
          </motion.button>
          <button className="px-4 py-2.5 bg-zinc-100 text-zinc-700 rounded-xl font-bold text-sm hover:bg-zinc-200 transition-colors">
            <Eye size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function CreatorModal({ creator, onClose, onSave }) {
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
        <div className={cn("h-32 relative", creator.thumbnail)}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <X size={20} />
          </button>
          <img
            src={creator.avatar}
            alt={creator.name}
            className="absolute -bottom-10 left-6 w-20 h-20 rounded-2xl border-4 border-white shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 pt-14">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">{creator.name}</h2>
                {creator.verified && (
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              <p className="text-zinc-500">{creator.handle}</p>
            </div>
            <div 
              className="px-4 py-2 rounded-xl flex items-center gap-2"
              style={{ backgroundColor: `${YELLOW}30` }}
            >
              <Star size={18} className="text-amber-500 fill-amber-500" />
              <span className="font-bold">{creator.matchScore}% match</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-zinc-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">{(creator.followers / 1000).toFixed(0)}K</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Followers</p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600">{creator.engagement}%</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Engagement</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-blue-600">{creator.platforms.length}</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Platforms</p>
            </div>
          </div>

          {/* Categories & Location */}
          <div className="mb-6">
            <p className="text-sm font-bold text-zinc-700 mb-2">Categories</p>
            <div className="flex flex-wrap gap-2">
              {creator.categories.map((cat) => (
                <span 
                  key={cat} 
                  className="px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-lg text-sm font-bold"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-zinc-600 mb-6">
            <MapPin size={16} />
            <span>{creator.location}</span>
          </div>

          {/* Recent Brands */}
          <div className="mb-6">
            <p className="text-sm font-bold text-zinc-700 mb-2">Recently worked with</p>
            <div className="flex gap-2">
              {creator.recentBrands.map((brand) => (
                <span 
                  key={brand} 
                  className="px-3 py-1.5 bg-zinc-900 text-white rounded-lg text-sm font-bold"
                >
                  {brand}
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
              creator.saved
                ? "bg-zinc-900 text-white"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
            )}
          >
            {creator.saved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
            {creator.saved ? 'Saved' : 'Save'}
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
            style={{ backgroundColor: YELLOW, color: BLACK }}
          >
            <Send size={18} />
            Send Campaign Pitch
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
