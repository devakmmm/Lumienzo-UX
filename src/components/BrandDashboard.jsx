import React, { useState, useEffect } from 'react';
import { 
  LayoutGrid, 
  Users, 
  Search, 
  Bell, 
  Sliders,
  TrendingUp,
  DollarSign,
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  Target,
  Package,
  FileText,
  Zap,
  ArrowUpRight,
  ChevronRight,
  Filter,
  Download,
  BarChart3,
  Shield,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import CampaignWall from './CampaignWall';
import VettingEngine from './VettingEngine';
import PipelineView from './PipelineView';
import LogisticsHub from './LogisticsHub';
import CreatorNetwork from './CreatorNetwork';
import LumienzoLogo from './LumienzoLogo';
import LumiAssistant from './LumiAssistant';

// Brand colors
const YELLOW = '#FEFD7F';
const BLACK = '#18181B';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Mock data
const activeCampaigns = [
  { id: 1, name: 'Summer Collection Launch', progress: 75, creators: 12, budget: 45000, spent: 33750, status: 'active' },
  { id: 2, name: 'Holiday Gift Guide', progress: 45, creators: 8, budget: 28000, spent: 12600, status: 'active' },
  { id: 3, name: 'Product Review Series', progress: 90, creators: 5, budget: 15000, spent: 13500, status: 'active' },
];

const urgentActions = [
  { id: 1, creator: 'Sarah Martinez', action: 'Requested 3rd revision', campaign: 'Summer Collection', type: 'approval', cost: 50 },
  { id: 2, creator: 'James Chen', action: 'Script ready for review', campaign: 'Holiday Gift Guide', type: 'review', cost: 0 },
  { id: 3, creator: 'Alex Rivera', action: 'Product received - Ready to shoot', campaign: 'Product Review', type: 'notification', cost: 0 },
];

const pipelineStages = [
  { name: 'Negotiating', count: 4, color: 'amber' },
  { name: 'Product Shipped', count: 6, color: 'blue' },
  { name: 'Scripting', count: 8, color: 'purple' },
  { name: 'Review', count: 5, color: 'orange' },
  { name: 'Live', count: 12, color: 'emerald' },
];

export default function BrandDashboard() {
  const [savingsAmount, setSavingsAmount] = useState(12450);
  const [selectedView, setSelectedView] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSavingsAmount(prev => prev + Math.floor(Math.random() * 10));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen bg-zinc-50 overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-64 bg-white border-r border-zinc-200 flex-col py-8 px-4 shadow-sm">
        <div className="px-4 mb-12">
          <LumienzoLogo size="xl" />
        </div>

        <nav className="flex-1 space-y-1">
          <NavItem 
            icon={<LayoutGrid size={20} />} 
            label="Command Center" 
            active={selectedView === 'home'} 
            onClick={() => setSelectedView('home')}
          />
          <NavItem 
            icon={<FileText size={20} />} 
            label="Campaign Wall" 
            active={selectedView === 'campaigns'} 
            onClick={() => setSelectedView('campaigns')}
            badge={3}
          />
          <NavItem 
            icon={<Shield size={20} />} 
            label="Vetting Engine" 
            active={selectedView === 'vetting'} 
            onClick={() => setSelectedView('vetting')}
          />
          <NavItem 
            icon={<BarChart3 size={20} />} 
            label="Pipeline" 
            active={selectedView === 'pipeline'} 
            onClick={() => setSelectedView('pipeline')}
          />
          <NavItem 
            icon={<Package size={20} />} 
            label="Logistics Hub" 
            active={selectedView === 'logistics'} 
            onClick={() => setSelectedView('logistics')}
          />
          <NavItem 
            icon={<Users size={20} />} 
            label="Creator Network" 
            active={selectedView === 'network'} 
            onClick={() => setSelectedView('network')}
          />
          <NavItem icon={<Sliders size={20} />} label="Settings" />
        </nav>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 transition-colors"
          style={{ backgroundColor: YELLOW, color: BLACK }}
        >
          <Plus size={18} />
          New Campaign
        </motion.button>
      </aside>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-zinc-200 flex-col py-8 px-4 shadow-xl z-50 md:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <LumienzoLogo size="xl" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 space-y-1">
                <NavItem 
                  icon={<LayoutGrid size={20} />} 
                  label="Command Center" 
                  active={selectedView === 'home'} 
                  onClick={() => { setSelectedView('home'); setMobileMenuOpen(false); }}
                />
                <NavItem 
                  icon={<FileText size={20} />} 
                  label="Campaign Wall" 
                  active={selectedView === 'campaigns'} 
                  onClick={() => { setSelectedView('campaigns'); setMobileMenuOpen(false); }}
                  badge={3}
                />
                <NavItem 
                  icon={<Shield size={20} />} 
                  label="Vetting Engine" 
                  active={selectedView === 'vetting'} 
                  onClick={() => { setSelectedView('vetting'); setMobileMenuOpen(false); }}
                />
                <NavItem 
                  icon={<BarChart3 size={20} />} 
                  label="Pipeline" 
                  active={selectedView === 'pipeline'} 
                  onClick={() => { setSelectedView('pipeline'); setMobileMenuOpen(false); }}
                />
                <NavItem 
                  icon={<Package size={20} />} 
                  label="Logistics Hub" 
                  active={selectedView === 'logistics'} 
                  onClick={() => { setSelectedView('logistics'); setMobileMenuOpen(false); }}
                />
                <NavItem 
                  icon={<Users size={20} />} 
                  label="Creator Network" 
                  active={selectedView === 'network'} 
                  onClick={() => { setSelectedView('network'); setMobileMenuOpen(false); }}
                />
                <NavItem icon={<Sliders size={20} />} label="Settings" onClick={() => setMobileMenuOpen(false)} />
              </nav>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 transition-colors mt-4"
                style={{ backgroundColor: YELLOW, color: BLACK }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Plus size={18} />
                New Campaign
              </motion.button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 md:h-20 bg-white border-b border-zinc-200 flex items-center justify-between px-4 md:px-8 shrink-0">
          <div className="flex items-center gap-3 md:gap-0">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 hover:bg-zinc-100 rounded-lg transition-colors"
            >
              <Menu size={20} />
            </button>
            <div className="md:hidden">
              <LumienzoLogo size="md" />
            </div>
            <div className="flex-1 max-w-xl hidden md:block">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search campaigns, creators, or content..." 
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-2.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:bg-white transition-all text-sm"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 md:gap-6">
            <button className="relative text-zinc-400 hover:text-zinc-900 transition-colors p-2 md:p-0">
              <Bell size={20} className="md:w-[22px] md:h-[22px]" />
              <span className="absolute top-1 right-1 md:top-0 md:right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-2 md:gap-3 md:pl-6 md:border-l md:border-zinc-200">
              <div className="text-right hidden sm:block">
                <p className="text-xs md:text-sm font-bold">Nike Marketing</p>
                <p className="text-[10px] md:text-xs text-zinc-500">Team Lead</p>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-xs md:text-base">
                N
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Search */}
        <div className="md:hidden px-4 py-3 bg-white border-b border-zinc-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:bg-white transition-all text-sm"
            />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {selectedView === 'home' && <CommandCenter savingsAmount={savingsAmount} />}
            {selectedView === 'campaigns' && <CampaignWall />}
            {selectedView === 'vetting' && <VettingEngine />}
            {selectedView === 'pipeline' && <PipelineView />}
            {selectedView === 'logistics' && <LogisticsHub />}
            {selectedView === 'network' && <CreatorNetwork />}
          </AnimatePresence>
        </div>
      </main>

      {/* Lumi AI Assistant */}
      <LumiAssistant userType="brand" />
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick, badge }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl font-medium transition-all",
        active 
          ? "bg-zinc-900 text-white shadow-lg" 
          : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
      {badge && (
        <span className="px-2 py-0.5 bg-rose-500 text-white text-xs font-bold rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}

function CommandCenter({ savingsAmount }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-4 md:p-8 space-y-6 md:space-y-8"
    >
      {/* Savings Ticker */}
      <motion.div 
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="relative overflow-hidden rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl"
        style={{ backgroundColor: YELLOW }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -translate-y-32 translate-x-32" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2" style={{ color: BLACK }}>
            <DollarSign size={18} className="md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider opacity-80">Agency Commissions Saved</span>
          </div>
          <motion.h2 
            key={savingsAmount}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-2"
            style={{ color: BLACK }}
          >
            ${savingsAmount.toLocaleString()}
          </motion.h2>
          <p className="text-xs md:text-sm opacity-70" style={{ color: BLACK }}>Based on standard 20% agency fees</p>
        </div>
      </motion.div>

      {/* Campaign Pulse */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold">Campaign Pulse</h2>
          <button className="text-xs md:text-sm font-bold text-zinc-900 hover:underline flex items-center gap-1">
            View All <ChevronRight size={14} className="md:w-4 md:h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {activeCampaigns.map((campaign, index) => (
            <CampaignCard key={campaign.id} campaign={campaign} index={index} />
          ))}
        </div>
      </section>

      {/* Pipeline Overview */}
      <section className="bg-white rounded-2xl border border-zinc-200 p-4 md:p-6 shadow-sm">
        <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Active Pipeline</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {pipelineStages.map((stage, index) => (
            <PipelineStage key={stage.name} stage={stage} index={index} />
          ))}
        </div>
      </section>

      {/* Urgent Actions */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
          <h2 className="text-lg md:text-xl font-bold">Urgent Actions</h2>
          <span className="text-xs md:text-sm text-zinc-500">Powered by Lumi AI</span>
        </div>
        
        <div className="space-y-2 md:space-y-3">
          {urgentActions.map((action, index) => (
            <UrgentActionCard key={action.id} action={action} index={index} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}

function CampaignCard({ campaign, index }) {
  const progressColor = campaign.progress >= 75 ? '#10B981' : campaign.progress >= 50 ? '#F59E0B' : '#71717A';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-zinc-200 p-4 md:p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
    >
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <span 
          className="px-2 md:px-3 py-1 text-[10px] md:text-xs font-bold rounded-full"
          style={{ backgroundColor: `${YELLOW}30`, color: BLACK }}
        >
          Active
        </span>
        <button className="text-zinc-400 hover:text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight size={16} className="md:w-[18px] md:h-[18px]" />
        </button>
      </div>
      
      <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 line-clamp-2">{campaign.name}</h3>
      
      {/* Progress Circle */}
      <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
        <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
          <svg className="w-full h-full -rotate-90">
            <circle cx="40" cy="40" r="36" fill="none" stroke="#F4F4F5" strokeWidth="8" />
            <circle 
              cx="40" 
              cy="40" 
              r="36" 
              fill="none" 
              stroke={progressColor}
              strokeWidth="8" 
              strokeDasharray="226.2" 
              strokeDashoffset={226.2 * (1 - campaign.progress / 100)} 
              strokeLinecap="round" 
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg md:text-xl font-bold" style={{ color: progressColor }}>{campaign.progress}%</span>
          </div>
        </div>
        
        <div className="flex-1 space-y-2 min-w-0">
          <div className="flex items-center justify-between text-xs md:text-sm">
            <span className="text-zinc-500">Creators</span>
            <span className="font-bold">{campaign.creators}</span>
          </div>
          <div className="flex items-center justify-between text-xs md:text-sm">
            <span className="text-zinc-500">Spent</span>
            <span className="font-bold">${campaign.spent.toLocaleString()}</span>
          </div>
        </div>
      </div>
      
      <div className="pt-3 md:pt-4 border-t border-zinc-100">
        <div className="flex items-center justify-between text-[10px] md:text-xs text-zinc-500 mb-1">
          <span>Budget</span>
          <span>${campaign.budget.toLocaleString()}</span>
        </div>
        <div className="h-1.5 md:h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="h-full"
            style={{ backgroundColor: YELLOW }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function PipelineStage({ stage, index }) {
  const colors = {
    amber: 'bg-amber-50 text-amber-600 border-amber-200',
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className={cn("rounded-xl border-2 p-3 md:p-4 text-center", colors[stage.color])}
    >
      <p className="text-2xl md:text-3xl font-bold mb-1">{stage.count}</p>
      <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider leading-tight">{stage.name}</p>
    </motion.div>
  );
}

function UrgentActionCard({ action, index }) {
  const typeIcons = {
    approval: <AlertCircle size={18} className="md:w-5 md:h-5 text-rose-500" />,
    review: <FileText size={18} className="md:w-5 md:h-5 text-amber-500" />,
    notification: <CheckCircle size={18} className="md:w-5 md:h-5 text-blue-500" />,
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl border border-zinc-200 p-3 md:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-zinc-300 transition-colors group"
    >
      <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
        <div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center border border-zinc-100 flex-shrink-0">
          {typeIcons[action.type]}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-sm md:text-base text-zinc-900 truncate">{action.creator}</p>
          <p className="text-xs md:text-sm text-zinc-500 truncate">{action.action}</p>
          <p className="text-[10px] md:text-xs text-zinc-400 mt-0.5 truncate">{action.campaign}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-end sm:justify-start">
        {action.cost > 0 && (
          <span className="text-xs md:text-sm font-bold text-zinc-900 whitespace-nowrap">+${action.cost}</span>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-colors whitespace-nowrap"
          style={{ backgroundColor: YELLOW, color: BLACK }}
        >
          {action.type === 'approval' ? 'Approve' : 'Review'}
        </motion.button>
      </div>
    </motion.div>
  );
}
