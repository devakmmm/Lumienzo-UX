import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock,
  Package,
  FileEdit,
  Eye,
  Rocket,
  CheckCircle,
  MoreVertical,
  MessageCircle,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const YELLOW = '#FEFD7F';
const BLACK = '#18181B';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const columns = [
  { id: 'negotiating', title: 'Negotiating', color: 'amber', icon: <Clock size={18} /> },
  { id: 'shipped', title: 'Product Shipped', color: 'blue', icon: <Package size={18} /> },
  { id: 'scripting', title: 'Scripting', color: 'purple', icon: <FileEdit size={18} /> },
  { id: 'review', title: 'Review', color: 'orange', icon: <Eye size={18} /> },
  { id: 'live', title: 'Live', color: 'green', icon: <Rocket size={18} /> },
];

// Mock data for pipeline
const pipelineData = {
  negotiating: [
    { id: 1, creator: 'Emma Wilson', campaign: 'Summer Launch', deal: 2500, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma', daysInStage: 2, lumiStatus: 'Awaiting creator response' },
    { id: 2, creator: 'Marcus Lee', campaign: 'Holiday Guide', deal: 1800, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus', daysInStage: 1, lumiStatus: 'Contract review' },
  ],
  shipped: [
    { id: 3, creator: 'Sarah Martinez', campaign: 'Summer Launch', deal: 3000, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', daysInStage: 5, tracking: 'UPS-12345', eta: 'Tomorrow' },
    { id: 4, creator: 'David Park', campaign: 'Product Review', deal: 2200, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David', daysInStage: 3, tracking: 'FDX-67890', eta: '2 days' },
  ],
  scripting: [
    { id: 5, creator: 'Alex Rivera', campaign: 'Summer Launch', deal: 2800, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex', daysInStage: 4, scriptStatus: 'Draft uploaded', nextAction: 'Brand review' },
    { id: 6, creator: 'Jordan Kim', campaign: 'Holiday Guide', deal: 3200, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan', daysInStage: 2, scriptStatus: 'In progress', nextAction: 'Waiting for upload' },
    { id: 7, creator: 'Taylor Swift', campaign: 'Product Review', deal: 1500, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor', daysInStage: 1, scriptStatus: 'Draft uploaded', nextAction: 'Brand review' },
  ],
  review: [
    { id: 8, creator: 'James Chen', campaign: 'Summer Launch', deal: 2900, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James', daysInStage: 1, reviewStatus: 'Pending approval', revisions: 1 },
    { id: 9, creator: 'Nina Patel', campaign: 'Holiday Guide', deal: 3500, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nina', daysInStage: 2, reviewStatus: 'Editing in progress', revisions: 0 },
  ],
  live: [
    { id: 10, creator: 'Chris Brown', campaign: 'Summer Launch', deal: 4000, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chris', platform: 'Instagram', views: 245000, engagement: 8.5, organic: true },
    { id: 11, creator: 'Lisa Wang', campaign: 'Product Review', deal: 2700, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa', platform: 'TikTok', views: 520000, engagement: 12.2, organic: true },
    { id: 12, creator: 'Miguel Santos', campaign: 'Holiday Guide', deal: 3100, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Miguel', platform: 'YouTube', views: 180000, engagement: 6.8, organic: false },
  ],
};

export default function PipelineView() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Automated Pipeline</h1>
          <p className="text-zinc-500">Track every creator from brief to delivery</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-white border border-zinc-200 rounded-xl">
            <span className="text-sm font-bold text-zinc-500">Total Active: </span>
            <span className="text-sm font-bold text-zinc-900">{Object.values(pipelineData).flat().length}</span>
          </div>
        </div>
      </div>

      {/* Pipeline Board */}
      <div className="flex gap-6 overflow-x-auto pb-6">
        {columns.map((column, index) => (
          <PipelineColumn 
            key={column.id} 
            column={column} 
            cards={pipelineData[column.id]}
            index={index}
            onCardClick={setSelectedCard}
          />
        ))}
      </div>

      {/* Lumi Bot Activity Feed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-6">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: YELLOW }}
          >
            <MessageCircle size={16} style={{ color: BLACK }} />
          </div>
          <h3 className="font-bold text-lg">Lumi Bot Activity</h3>
          <span className="text-xs text-zinc-500">Real-time updates</span>
        </div>
        
        <div className="space-y-3">
          <LumiBotUpdate 
            creator="Sarah Martinez" 
            action="Sent 24-hour reminder for script upload"
            time="15 mins ago"
          />
          <LumiBotUpdate 
            creator="Alex Rivera" 
            action="Translated feedback: 'Great start! Can you add more product close-ups?'"
            time="2 hours ago"
          />
          <LumiBotUpdate 
            creator="Marcus Lee" 
            action="Negotiated contract terms - deal increased to $1,850"
            time="5 hours ago"
          />
        </div>
      </motion.div>
    </div>
  );
}

function PipelineColumn({ column, cards, index, onCardClick }) {
  const colorConfig = {
    amber: 'bg-amber-50 border-amber-200 text-amber-600',
    blue: 'bg-blue-50 border-blue-200 text-blue-600',
    purple: 'bg-purple-50 border-purple-200 text-purple-600',
    orange: 'bg-orange-50 border-orange-200 text-orange-600',
    green: 'bg-emerald-50 border-emerald-200 text-emerald-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex-shrink-0 w-80"
    >
      {/* Column Header */}
      <div className={cn("rounded-xl border-2 p-4 mb-4", colorConfig[column.color])}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {column.icon}
            <h3 className="font-bold">{column.title}</h3>
          </div>
          <span className="px-2 py-1 bg-white/50 rounded-full text-sm font-bold">
            {cards.length}
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-3 max-h-[calc(100vh-400px)] overflow-y-auto pr-2">
        {cards.map((card, cardIndex) => (
          <CreatorCard 
            key={card.id} 
            card={card} 
            columnId={column.id}
            cardIndex={cardIndex}
            onClick={() => onCardClick(card)}
          />
        ))}
      </div>
    </motion.div>
  );
}

function CreatorCard({ card, columnId, cardIndex, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: cardIndex * 0.05 }}
      whileHover={{ y: -2, scale: 1.02 }}
      onClick={onClick}
      className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm hover:shadow-lg transition-all cursor-pointer"
    >
      {/* Creator Info */}
      <div className="flex items-center gap-3 mb-3">
        <img 
          src={card.avatar} 
          alt={card.creator}
          className="w-10 h-10 rounded-full border-2 border-zinc-200"
        />
        <div className="flex-1">
          <p className="font-bold text-sm">{card.creator}</p>
          <p className="text-xs text-zinc-500">{card.campaign}</p>
        </div>
        <button className="text-zinc-400 hover:text-zinc-900 transition-colors">
          <MoreVertical size={16} />
        </button>
      </div>

      {/* Deal Amount */}
      <div className="flex items-center justify-between mb-3 pb-3 border-b border-zinc-100">
        <span className="text-xs text-zinc-500 font-medium">Deal Size</span>
        <span className="text-sm font-bold text-zinc-900">${card.deal.toLocaleString()}</span>
      </div>

      {/* Column-specific content */}
      {columnId === 'negotiating' && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <Clock size={12} className="text-amber-500" />
            <span className="text-zinc-600">{card.daysInStage} days in stage</span>
          </div>
          <div className="px-2 py-1 bg-amber-50 border border-amber-100 rounded text-xs text-amber-700 font-medium">
            {card.lumiStatus}
          </div>
        </div>
      )}

      {columnId === 'shipped' && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-500">Tracking</span>
            <span className="font-mono font-bold text-blue-600">{card.tracking}</span>
          </div>
          <div className="px-2 py-1 bg-blue-50 border border-blue-100 rounded text-xs text-blue-700 font-medium text-center">
            ETA: {card.eta}
          </div>
        </div>
      )}

      {columnId === 'scripting' && (
        <div className="space-y-2">
          <div className="px-2 py-1 bg-purple-50 border border-purple-100 rounded text-xs text-purple-700 font-medium">
            {card.scriptStatus}
          </div>
          <div className="flex items-center gap-1 text-xs text-zinc-600">
            <AlertCircle size={12} />
            <span>{card.nextAction}</span>
          </div>
        </div>
      )}

      {columnId === 'review' && (
        <div className="space-y-2">
          <div className="px-2 py-1 bg-orange-50 border border-orange-100 rounded text-xs text-orange-700 font-medium">
            {card.reviewStatus}
          </div>
          <div className="text-xs text-zinc-600">
            Revisions: <span className="font-bold">{card.revisions}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <button 
              className="py-1.5 rounded-lg text-xs font-bold hover:opacity-90"
              style={{ backgroundColor: YELLOW, color: BLACK }}
            >
              Approve
            </button>
            <button className="py-1.5 bg-zinc-100 text-zinc-700 rounded-lg text-xs font-bold hover:bg-zinc-200">
              Request Edit
            </button>
          </div>
        </div>
      )}

      {columnId === 'live' && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-500">Platform</span>
            <span className="font-bold text-zinc-900">{card.platform}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="px-2 py-1 bg-zinc-50 rounded">
              <div className="text-zinc-500">Views</div>
              <div className="font-bold text-zinc-900">{(card.views / 1000).toFixed(0)}K</div>
            </div>
            <div className="px-2 py-1 bg-emerald-50 rounded">
              <div className="text-emerald-600">Engagement</div>
              <div className="font-bold text-emerald-700">{card.engagement}%</div>
            </div>
          </div>
          <div className={cn(
            "px-2 py-1 rounded text-xs font-bold text-center",
            card.organic ? "bg-green-50 text-green-700 border border-green-200" : "bg-blue-50 text-blue-700 border border-blue-200"
          )}>
            {card.organic ? '🌱 Organic' : '🚀 Boosted'}
          </div>
        </div>
      )}
    </motion.div>
  );
}

function LumiBotUpdate({ creator, action, time }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100"
    >
      <div 
        className="w-2 h-2 rounded-full mt-2"
        style={{ backgroundColor: YELLOW }}
      />
      <div className="flex-1">
        <p className="text-sm text-zinc-900">
          <span className="font-bold">{creator}</span> • {action}
        </p>
        <p className="text-xs text-zinc-500 mt-1">{time}</p>
      </div>
    </motion.div>
  );
}
