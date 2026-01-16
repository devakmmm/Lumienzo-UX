import React from 'react';
import { 
  LayoutGrid, 
  User, 
  CreditCard, 
  Sliders, 
  Bell, 
  Search, 
  FileText, 
  CheckCircle, 
  TrendingUp, 
  MapPin, 
  ArrowUpRight,
  MoreVertical,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import LumienzoLogo from './LumienzoLogo';

// Brand colors
const YELLOW = '#FEFD7F';
const BLACK = '#18181B';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function CreatorDashboard() {
  return (
    <div className="flex h-screen bg-zinc-50 overflow-hidden font-sans">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-64 bg-zinc-50 border-r border-zinc-200 flex-col py-8 px-4">
        <div className="px-4 mb-12">
          <LumienzoLogo size="xl" />
        </div>

        <nav className="flex-1 space-y-1">
          <NavItem icon={<LayoutGrid size={20} />} label="Dashboard" active />
          <NavItem icon={<FileText size={20} />} label="Portfolio" />
          <NavItem icon={<CreditCard size={20} />} label="Wallet" />
          <NavItem icon={<TrendingUp size={20} />} label="Analytics" />
          <NavItem icon={<Sliders size={20} />} label="Settings" />
        </nav>

        <div className="mt-auto p-4 bg-white rounded-2xl border border-zinc-200 shadow-sm">
           <div className="flex items-center gap-3 mb-3">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: YELLOW }}
              >
                 <Zap size={14} style={{ color: BLACK }} className="fill-current" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Pro Plan</p>
           </div>
           <p className="text-sm text-zinc-600 mb-4 leading-snug">Unlock advanced AI analysis and unlimited team seats.</p>
           <button className="w-full py-2 bg-zinc-900 text-white rounded-lg text-xs font-bold hover:bg-zinc-800 transition-colors">
             Upgrade Now
           </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-zinc-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex-1 max-w-xl">
             <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search projects, brands, or tasks... (⌘K)" 
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-2.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:bg-white transition-all"
                />
             </div>
          </div>
          
          <div className="flex items-center gap-6 ml-8">
             <button className="relative text-zinc-400 hover:text-zinc-900 transition-colors">
                <Bell size={22} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
             </button>
             <div className="flex items-center gap-3 pl-6 border-l border-zinc-200">
                <div className="text-right hidden sm:block">
                   <p className="text-sm font-bold">Totok Michael</p>
                   <p className="text-xs text-zinc-500">michael@lumienzo.com</p>
                </div>
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael" 
                  alt="Avatar" 
                  className="w-10 h-10 rounded-full border-2 border-zinc-200"
                />
             </div>
          </div>
        </header>

        {/* Scrollable Dashboard Body */}
        <div className="flex-1 overflow-y-auto p-8 flex flex-col lg:flex-row gap-8">
           {/* Left Section - Work Feed & Analytics (65%) */}
           <div className="flex-1 space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                 <StatCard title="Total Earnings" value="$12,850" change="+12.5%" trend="up" />
                 <StatCard title="Active Campaigns" value="6" change="+2" trend="up" />
                 <StatCard title="Total Reach" value="2.4M" change="-4.1%" trend="down" />
              </div>

              {/* Work Feed - Urgent Actions */}
              <section className="space-y-4">
                 <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Urgent Actions</h2>
                    <button className="text-sm font-bold text-zinc-900 hover:underline">View All</button>
                 </div>
                 <div className="space-y-3">
                    <ActionItem 
                      title="Sign Contract: Samsung Galaxy S24 Ultra"
                      subtitle="Deadline: Today, 6:00 PM"
                      badge="High Priority"
                      badgeColor="bg-rose-100 text-rose-600"
                    />
                    <ActionItem 
                      title="Submit Script: Nike 'Move You' Campaign"
                      subtitle="Status: Draft required"
                      badge="Awaiting Script"
                      badgeColor="bg-amber-100 text-amber-600"
                    />
                 </div>
              </section>

              {/* Active Projects */}
              <section className="space-y-4">
                 <h2 className="text-xl font-bold">Active Projects</h2>
                 <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden divide-y divide-zinc-100 shadow-sm">
                    <ProjectRow brand="Samsung" title="S24 Ultra Tech Review" status="Scripting" progress={35} />
                    <ProjectRow brand="Nike" title="Move You Series" status="Funded" progress={100} />
                    <ProjectRow brand="Adobe" title="Max 2024 Promotion" status="Review" progress={80} />
                 </div>
              </section>
           </div>

           {/* Right Section - Financial Hub & Health (35%) */}
           <div className="w-full lg:w-[380px] space-y-8">
              {/* Financial Hub */}
              <WalletCard />

              {/* Lumi Health Check */}
              <HealthCheck />

              {/* Audience Deep Dive */}
              <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
                 <h3 className="text-lg font-bold mb-6">Audience Geography</h3>
                 <div className="space-y-4">
                    <GeoItem country="United States" percentage={42} />
                    <GeoItem country="United Kingdom" percentage={18} />
                    <GeoItem country="Canada" percentage={12} />
                    <GeoItem country="Germany" percentage={9} />
                 </div>
                 <div className="mt-8 pt-6 border-t border-zinc-100">
                    <button className="w-full py-2.5 rounded-xl border border-zinc-200 text-sm font-bold hover:bg-zinc-50 transition-colors">
                       View Full Analytics
                    </button>
                 </div>
              </div>
           </div>
        </div>

        {/* Mobile Bottom Nav */}
        <nav className="md:hidden h-20 bg-white/80 backdrop-blur-xl border-t border-zinc-200 flex items-center justify-around px-6 shrink-0">
           <button className="text-zinc-900 flex flex-col items-center gap-1">
              <LayoutGrid size={24} />
              <span className="text-[10px] font-bold">Home</span>
           </button>
           <button className="text-zinc-400 flex flex-col items-center gap-1">
              <FileText size={24} />
              <span className="text-[10px] font-bold">Tasks</span>
           </button>
           <button className="text-zinc-400 flex flex-col items-center gap-1">
              <CreditCard size={24} />
              <span className="text-[10px] font-bold">Wallet</span>
           </button>
           <button className="text-zinc-400 flex flex-col items-center gap-1">
              <User size={24} />
              <span className="text-[10px] font-bold">Profile</span>
           </button>
        </nav>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <button className={cn(
      "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all",
      active 
        ? "bg-zinc-900 text-white shadow-lg shadow-zinc-200" 
        : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
    )}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function StatCard({ title, value, change, trend }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
       <p className="text-sm text-zinc-500 mb-1">{title}</p>
       <div className="flex items-end justify-between">
          <h3 className="text-2xl font-bold">{value}</h3>
          <span className={cn(
            "text-xs font-bold px-2 py-1 rounded-lg",
            trend === 'up' ? "text-emerald-600 bg-emerald-50" : "text-rose-600 bg-rose-50"
          )}>
            {change}
          </span>
       </div>
    </div>
  );
}

function ActionItem({ title, subtitle, badge, badgeColor }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-zinc-200 flex items-center justify-between group cursor-pointer hover:border-zinc-300 transition-colors shadow-sm">
       <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center border border-zinc-100 text-zinc-400 group-hover:text-zinc-900 transition-colors">
             <CheckCircle size={20} />
          </div>
          <div>
             <p className="font-bold text-zinc-900">{title}</p>
             <p className="text-sm text-zinc-500">{subtitle}</p>
          </div>
       </div>
       <span className={cn("text-xs font-bold px-3 py-1.5 rounded-full", badgeColor)}>
          {badge}
       </span>
    </div>
  );
}

function ProjectRow({ brand, title, status, progress }) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors cursor-pointer group">
       <div className="flex items-center gap-4 flex-1">
          <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white font-bold text-xs">
             {brand[0]}
          </div>
          <div>
             <p className="font-bold text-zinc-900">{title}</p>
             <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">{brand}</p>
          </div>
       </div>
       
       <div className="flex items-center gap-8">
          <div className="hidden md:block w-32">
             <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-zinc-400 uppercase">Progress</span>
                <span className="text-[10px] font-bold text-zinc-900">{progress}%</span>
             </div>
             <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-500" 
                  style={{ width: `${progress}%`, backgroundColor: YELLOW }} 
                />
             </div>
          </div>
          
          <div className={cn(
            "w-24 text-center py-1.5 rounded-lg text-xs font-bold border",
            status === 'Funded' ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
            status === 'Scripting' ? "bg-zinc-50 text-zinc-600 border-zinc-200" :
            "bg-amber-50 text-amber-600 border-amber-100"
          )}>
            {status}
          </div>
          
          <button className="p-1 text-zinc-300 hover:text-zinc-900">
             <MoreVertical size={18} />
          </button>
       </div>
    </div>
  );
}

function WalletCard() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-zinc-400">
       <div className="absolute top-0 right-0 p-8">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20">
             <CreditCard size={24} />
          </div>
       </div>
       
       <p className="text-zinc-400 text-sm font-medium mb-1">Available Balance</p>
       <h2 className="text-4xl font-bold mb-8 tracking-tight">$4,250.00</h2>
       
       <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
             <span className="text-sm text-zinc-400">Pending in Escrow</span>
             <span className="text-sm font-bold text-amber-400">$1,200.00</span>
          </div>
          <div className="h-px bg-white/10" />
          <div className="flex items-center justify-between">
             <span className="text-sm text-zinc-400">Last Payout</span>
             <span className="text-sm font-bold text-white">Jan 12, 2026</span>
          </div>
       </div>
       
       <button 
         className="w-full py-4 rounded-2xl font-bold hover:opacity-90 transition-all active:scale-[0.98] shadow-lg"
         style={{ backgroundColor: YELLOW, color: BLACK }}
       >
          Cash Out to Bank
       </button>
    </div>
  );
}

function HealthCheck() {
  return (
    <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm relative overflow-hidden group">
       <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold">Lumi Health Check</h3>
          <div className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-[10px] font-bold border border-emerald-100 uppercase">
             Healthy
          </div>
       </div>
       
       <div className="flex items-center gap-6 mb-8">
          <div className="relative w-20 h-20">
             <svg className="w-full h-full -rotate-90">
                <circle cx="40" cy="40" r="36" fill="none" stroke="#F4F4F5" strokeWidth="8" />
                <circle 
                  cx="40" 
                  cy="40" 
                  r="36" 
                  fill="none" 
                  stroke="#16A34A" 
                  strokeWidth="8" 
                  strokeDasharray="226.2" 
                  strokeDashoffset="45.24" 
                  strokeLinecap="round" 
                />
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold">82%</span>
             </div>
          </div>
          <div className="flex-1 space-y-2">
             <p className="text-xs text-zinc-500 font-medium">Engagement is up <span className="text-emerald-600">+4%</span> this week. "Saves" are slightly dipping.</p>
          </div>
       </div>

       <div className="rounded-xl p-4 border border-zinc-100" style={{ backgroundColor: `${YELLOW}20` }}>
          <div className="flex items-center gap-2 mb-2">
             <div 
               className="w-5 h-5 rounded flex items-center justify-center"
               style={{ backgroundColor: YELLOW }}
             >
                <Zap size={10} style={{ color: BLACK }} className="fill-current" />
             </div>
             <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Lumi AI Tip</span>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed italic">
            "Your 'Saves' are down—try adding a clear Call to Action in your next IG caption to boost retention."
          </p>
       </div>
    </div>
  );
}

function GeoItem({ country, percentage }) {
  return (
    <div className="space-y-1.5">
       <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
          <span className="text-zinc-500">{country}</span>
          <span className="text-zinc-900">{percentage}%</span>
       </div>
       <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
          <div className="h-full bg-zinc-900" style={{ width: `${percentage}%` }} />
       </div>
    </div>
  );
}
