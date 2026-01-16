import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  TrendingUp, 
  Eye, 
  Heart, 
  MessageCircle,
  Share2,
  Check,
  Clock,
  AlertCircle,
  Filter,
  Grid3x3,
  List,
  ChevronDown,
  Plus
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const YELLOW = '#FEFD7F';
const BLACK = '#18181B';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Mock campaign content data
const campaigns = [
  {
    id: 1,
    name: 'Summer Collection Launch',
    creators: [
      {
        id: 1,
        name: 'Sarah Martinez',
        handle: '@sarahstyle',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        content: [
          { id: 1, platform: 'instagram', status: 'live', type: 'organic', views: 145000, engagement: 8.2, thumbnail: 'bg-gradient-to-br from-pink-500 to-rose-500' },
          { id: 2, platform: 'tiktok', status: 'live', type: 'boosted', views: 320000, engagement: 12.5, thumbnail: 'bg-gradient-to-br from-purple-500 to-indigo-500' },
          { id: 3, platform: 'youtube', status: 'draft', type: 'organic', views: 0, engagement: 0, thumbnail: 'bg-gradient-to-br from-red-500 to-orange-500' },
        ]
      },
      {
        id: 2,
        name: 'James Chen',
        handle: '@jamestech',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
        content: [
          { id: 4, platform: 'instagram', status: 'live', type: 'organic', views: 89000, engagement: 6.5, thumbnail: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
          { id: 5, platform: 'youtube', status: 'live', type: 'organic', views: 240000, engagement: 11.8, thumbnail: 'bg-gradient-to-br from-emerald-500 to-green-500' },
        ]
      },
    ]
  },
  {
    id: 2,
    name: 'Holiday Gift Guide',
    creators: [
      {
        id: 3,
        name: 'Alex Rivera',
        handle: '@alexlifestyle',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
        content: [
          { id: 6, platform: 'tiktok', status: 'live', type: 'organic', views: 520000, engagement: 15.2, thumbnail: 'bg-gradient-to-br from-yellow-500 to-amber-500' },
        ]
      },
    ]
  },
];

export default function CampaignWall() {
  const [viewMode, setViewMode] = useState('campaign');
  const [selectedCampaign, setSelectedCampaign] = useState(campaigns[0]);
  const [filterStatus, setFilterStatus] = useState('all');

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Campaign Wall</h1>
          <p className="text-zinc-500">Visual content organization across all campaigns</p>
        </div>
        
        <div className="flex items-center gap-3">
          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-xl p-1">
            <button
              onClick={() => setViewMode('campaign')}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-bold transition-all",
                viewMode === 'campaign' ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-900"
              )}
            >
              <Grid3x3 size={16} className="inline mr-2" />
              Campaign View
            </button>
            <button
              onClick={() => setViewMode('creator')}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-bold transition-all",
                viewMode === 'creator' ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-900"
              )}
            >
              <List size={16} className="inline mr-2" />
              Creator View
            </button>
          </div>
          
          {/* Filter */}
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
            <Filter size={16} />
            <span className="text-sm font-bold">Filter</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Campaign Selector */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {campaigns.map((campaign) => (
          <button
            key={campaign.id}
            onClick={() => setSelectedCampaign(campaign)}
            className={cn(
              "px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all",
              selectedCampaign.id === campaign.id
                ? "bg-zinc-900 text-white shadow-lg"
                : "bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300"
            )}
          >
            {campaign.name}
          </button>
        ))}
      </div>

      {/* Aggregated Stats */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard title="Total Reach" value="1.2M" change="+18%" />
        <StatCard title="Avg. Engagement" value="9.8%" change="+2.4%" />
        <StatCard title="Content Pieces" value="24" change="+6" />
        <StatCard title="Active Creators" value={selectedCampaign.creators.length} />
      </div>

      {/* Content Grid */}
      <div className="space-y-8">
        {selectedCampaign.creators.map((creator) => (
          <CreatorContentRow key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
}

function StatCard({ title, value, change }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm"
    >
      <p className="text-sm text-zinc-500 mb-1">{title}</p>
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-bold">{value}</h3>
        {change && (
          <span className="text-sm font-bold text-emerald-600">
            {change}
          </span>
        )}
      </div>
    </motion.div>
  );
}

function CreatorContentRow({ creator }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm"
    >
      {/* Creator Header */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={creator.avatar}
          alt={creator.name}
          className="w-12 h-12 rounded-full border-2 border-zinc-200"
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg">{creator.name}</h3>
          <p className="text-sm text-zinc-500">{creator.handle}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-zinc-500">Content</p>
          <p className="text-2xl font-bold">{creator.content.length}</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-4 gap-4">
        {creator.content.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
        
        {/* Add More Placeholder */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="aspect-[9/16] rounded-xl border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center text-zinc-400 hover:border-zinc-900 hover:text-zinc-900 transition-colors"
        >
          <Plus size={24} />
          <span className="text-xs font-bold mt-2">Request More</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

function ContentCard({ content }) {
  const statusConfig = {
    live: { label: 'Live', color: 'bg-emerald-500', icon: <Check size={12} /> },
    draft: { label: 'Draft', color: 'bg-yellow-500', icon: <Clock size={12} /> },
    review: { label: 'Review', color: 'bg-amber-500', icon: <AlertCircle size={12} /> },
  };

  const typeConfig = {
    organic: { label: 'Organic', color: 'bg-green-500/90' },
    boosted: { label: 'Boosted', color: 'bg-blue-500/90' },
  };

  const status = statusConfig[content.status];
  const type = typeConfig[content.type];

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all"
    >
      {/* Thumbnail */}
      <div className={cn("absolute inset-0 flex items-center justify-center", content.thumbnail)}>
        <Play size={48} className="text-white/80 group-hover:scale-110 transition-transform" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white space-y-2">
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1">
              <Eye size={14} />
              <span>{(content.views / 1000).toFixed(0)}K</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp size={14} />
              <span>{content.engagement}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Badge */}
      <div className="absolute top-2 left-2 flex items-center gap-2">
        <div className={cn("flex items-center gap-1 px-2 py-1 rounded-full text-white text-[10px] font-bold", status.color)}>
          {status.icon}
          {status.label}
        </div>
        {content.status === 'live' && (
          <div className={cn("px-2 py-1 rounded-full text-white text-[10px] font-bold", type.color)}>
            {type.label}
          </div>
        )}
      </div>

      {/* Platform Badge */}
      <div className="absolute top-2 right-2 w-6 h-6 bg-white/90 backdrop-blur rounded-full flex items-center justify-center">
        <span className="text-xs font-bold">{content.platform[0].toUpperCase()}</span>
      </div>
    </motion.div>
  );
}
