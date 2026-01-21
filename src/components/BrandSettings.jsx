import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2,
  Bell,
  CreditCard,
  Shield,
  Link2,
  FileText,
  Users,
  Sparkles,
  Globe,
  Lock,
  Download,
  Trash2,
  Check,
  AlertCircle,
  RefreshCw,
  Clock,
  DollarSign,
  Percent,
  Upload,
  Eye,
  EyeOff,
  Ban,
  Zap,
  MessageCircle,
  Mail,
  Smartphone,
  CheckCircle,
  XCircle,
  Plus,
  Save,
  Palette,
  Target,
  Briefcase,
  BarChart3,
  Tag,
  Workflow,
  Scale,
  Heart
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const YELLOW = '#FEFD7F';
const BLACK = '#18181B';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const settingsTabs = [
  { id: 'company', label: 'Company Profile', icon: Building2 },
  { id: 'team', label: 'Team & Access', icon: Users },
  { id: 'brand', label: 'Brand Guidelines', icon: Palette },
  { id: 'payments', label: 'Billing & Budget', icon: CreditCard },
  { id: 'campaigns', label: 'Campaign Defaults', icon: Target },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'integrations', label: 'Integrations', icon: Link2 },
  { id: 'lumi', label: 'Lumi AI', icon: Sparkles },
  { id: 'security', label: 'Security', icon: Shield },
];

export default function BrandSettings() {
  const [activeTab, setActiveTab] = useState('company');
  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = () => {
    setHasChanges(true);
  };

  const handleSave = () => {
    setHasChanges(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-4 md:p-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-1">Settings</h1>
          <p className="text-sm md:text-base text-zinc-500">Configure your brand workspace</p>
        </div>
        
        {hasChanges && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg"
            style={{ backgroundColor: YELLOW, color: BLACK }}
          >
            <Save size={18} />
            Save Changes
          </motion.button>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-zinc-200 p-2 lg:sticky lg:top-8">
            <nav className="space-y-1">
              {settingsTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-left",
                      activeTab === tab.id
                        ? "bg-zinc-900 text-white"
                        : "text-zinc-600 hover:bg-zinc-50"
                    )}
                  >
                    <Icon size={18} />
                    <span className="text-sm">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            {activeTab === 'company' && <CompanySettings onChange={handleChange} />}
            {activeTab === 'team' && <TeamSettings onChange={handleChange} />}
            {activeTab === 'brand' && <BrandGuidelinesSettings onChange={handleChange} />}
            {activeTab === 'payments' && <BillingSettings onChange={handleChange} />}
            {activeTab === 'campaigns' && <CampaignDefaultsSettings onChange={handleChange} />}
            {activeTab === 'notifications' && <NotificationSettings onChange={handleChange} />}
            {activeTab === 'integrations' && <IntegrationsSettings onChange={handleChange} />}
            {activeTab === 'lumi' && <LumiSettings onChange={handleChange} />}
            {activeTab === 'security' && <SecuritySettings onChange={handleChange} />}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

// ============ COMPANY SETTINGS ============
function CompanySettings({ onChange }) {
  return (
    <SettingsSection title="Company Profile" description="Your brand's public identity on Lumienzo">
      <div className="space-y-6">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl border-4 border-zinc-200 bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-2xl">
              NT
            </div>
            <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors">
              <Upload size={14} />
            </button>
          </div>
          <div>
            <p className="font-bold mb-1">Company Logo</p>
            <p className="text-sm text-zinc-500 mb-2">PNG or SVG. Min 400x400px.</p>
            <button className="text-sm font-bold text-zinc-900 hover:underline">Remove logo</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Company Name" defaultValue="NaturaTech" onChange={onChange} />
          <InputField label="Website" defaultValue="https://naturatech.com" onChange={onChange} />
        </div>

        <TextAreaField 
          label="Company Description" 
          defaultValue="Sustainable tech accessories for the conscious consumer. We believe innovation and environmental responsibility can coexist."
          maxLength={300}
          onChange={onChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField 
            label="Industry" 
            options={['Technology', 'Fashion', 'Beauty', 'Food & Beverage', 'Health & Wellness', 'Home & Living', 'Sports & Fitness', 'Entertainment']}
            defaultValue="Technology"
            onChange={onChange}
          />
          <SelectField 
            label="Company Size" 
            options={['1-10 employees', '11-50 employees', '51-200 employees', '201-500 employees', '500+ employees']}
            defaultValue="51-200 employees"
            onChange={onChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Headquarters" defaultValue="San Francisco, CA" onChange={onChange} />
          <SelectField 
            label="Timezone" 
            options={['Pacific Time (PT)', 'Mountain Time (MT)', 'Central Time (CT)', 'Eastern Time (ET)', 'UTC', 'GMT']}
            defaultValue="Pacific Time (PT)"
            onChange={onChange}
          />
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Social Profiles</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="Instagram" placeholder="@handle" defaultValue="@naturatech" onChange={onChange} />
            <InputField label="TikTok" placeholder="@handle" onChange={onChange} />
            <InputField label="LinkedIn" placeholder="company/name" defaultValue="company/naturatech" onChange={onChange} />
            <InputField label="Twitter/X" placeholder="@handle" onChange={onChange} />
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

// ============ TEAM SETTINGS ============
function TeamSettings({ onChange }) {
  const teamMembers = [
    { name: 'Sarah Chen', email: 'sarah@naturatech.com', role: 'Admin', avatar: 'Sarah', status: 'active' },
    { name: 'Marcus Williams', email: 'marcus@naturatech.com', role: 'Editor', avatar: 'Marcus', status: 'active' },
    { name: 'Lisa Park', email: 'lisa@naturatech.com', role: 'Viewer', avatar: 'Lisa', status: 'pending' },
  ];

  const roles = [
    { id: 'admin', label: 'Admin', description: 'Full access to all features and settings' },
    { id: 'editor', label: 'Editor', description: 'Can manage campaigns and creators, cannot change billing' },
    { id: 'viewer', label: 'Viewer', description: 'View-only access to reports and analytics' },
  ];

  return (
    <SettingsSection title="Team & Access" description="Manage who has access to your brand workspace">
      <div className="space-y-6">
        {/* Invite */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Invite Team Member</p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="colleague@company.com"
              className="flex-1 bg-white border border-zinc-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-all text-sm"
            />
            <select className="bg-white border border-zinc-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-all text-sm">
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
            <button 
              className="px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap"
              style={{ backgroundColor: YELLOW, color: BLACK }}
            >
              Send Invite
            </button>
          </div>
        </div>

        {/* Team Members */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Team Members ({teamMembers.length})</p>
          
          <div className="space-y-3">
            {teamMembers.map((member) => (
              <div key={member.email} className="flex items-center justify-between p-4 bg-zinc-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.avatar}`}
                    alt={member.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold">{member.name}</p>
                      {member.status === 'pending' && (
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                          Pending
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-500">{member.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <select 
                    defaultValue={member.role}
                    className="bg-white border border-zinc-200 rounded-lg py-2 px-3 text-sm font-medium"
                  >
                    <option>Admin</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                  </select>
                  <button className="text-sm font-bold text-rose-500 hover:text-rose-600">Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roles Explanation */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Role Permissions</p>
          <div className="space-y-3">
            {roles.map((role) => (
              <div key={role.id} className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg">
                <div className="w-8 h-8 rounded-lg bg-zinc-200 flex items-center justify-center flex-shrink-0">
                  <Users size={16} className="text-zinc-600" />
                </div>
                <div>
                  <p className="font-bold">{role.label}</p>
                  <p className="text-sm text-zinc-500">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

// ============ BRAND GUIDELINES SETTINGS ============
function BrandGuidelinesSettings({ onChange }) {
  const [primaryColor, setPrimaryColor] = useState('#10B981');
  const [secondaryColor, setSecondaryColor] = useState('#3B82F6');

  return (
    <SettingsSection title="Brand Guidelines" description="Help creators match your brand aesthetic">
      <div className="space-y-6">
        {/* Brand Colors */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4 flex items-center gap-2">
            <Palette size={18} /> Brand Colors
          </p>
          <p className="text-sm text-zinc-500 mb-4">Creators will see these when creating content for you</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-2">Primary Color</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => { setPrimaryColor(e.target.value); onChange(); }}
                  className="w-12 h-12 rounded-lg border-2 border-zinc-200 cursor-pointer"
                />
                <input
                  type="text"
                  value={primaryColor.toUpperCase()}
                  onChange={(e) => { setPrimaryColor(e.target.value); onChange(); }}
                  className="flex-1 bg-white border border-zinc-200 rounded-xl py-3 px-4 text-sm font-mono"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-2">Secondary Color</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => { setSecondaryColor(e.target.value); onChange(); }}
                  className="w-12 h-12 rounded-lg border-2 border-zinc-200 cursor-pointer"
                />
                <input
                  type="text"
                  value={secondaryColor.toUpperCase()}
                  onChange={(e) => { setSecondaryColor(e.target.value); onChange(); }}
                  className="flex-1 bg-white border border-zinc-200 rounded-xl py-3 px-4 text-sm font-mono"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-xl" style={{ background: `linear-gradient(135deg, ${primaryColor}20 0%, ${secondaryColor}20 100%)` }}>
            <p className="text-sm font-bold mb-2">Preview</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full text-white text-sm" style={{ backgroundColor: primaryColor }}>Primary</span>
              <span className="px-3 py-1 rounded-full text-white text-sm" style={{ backgroundColor: secondaryColor }}>Secondary</span>
            </div>
          </div>
        </div>

        {/* Fonts */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Typography</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField 
              label="Primary Font" 
              options={['Inter', 'Poppins', 'Montserrat', 'Open Sans', 'Roboto', 'Playfair Display', 'DM Sans']}
              defaultValue="Poppins"
              onChange={onChange}
            />
            <SelectField 
              label="Font Style" 
              options={['Modern & Clean', 'Bold & Expressive', 'Classic & Elegant', 'Playful & Fun']}
              defaultValue="Modern & Clean"
              onChange={onChange}
            />
          </div>
        </div>

        {/* Content Guidelines */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Content Guidelines</p>
          
          <TextAreaField 
            label="Do's" 
            placeholder="e.g., Use natural lighting, Show product in use, Include sustainable messaging"
            defaultValue="• Use natural lighting and authentic settings
• Show products being used in daily life
• Emphasize sustainability and eco-friendly aspects
• Feature diverse individuals"
            onChange={onChange}
          />

          <div className="mt-4">
            <TextAreaField 
              label="Don'ts" 
              placeholder="e.g., No competitor products, Don't use filters, Avoid controversial topics"
              defaultValue="• No heavy filters that distort colors
• Don't place near competitor products
• Avoid political or controversial topics
• No claims about product performance not approved by us"
              onChange={onChange}
            />
          </div>
        </div>

        {/* Brand Assets */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-bold">Brand Assets</p>
              <p className="text-sm text-zinc-500">Upload logos, fonts, and other assets for creators</p>
            </div>
            <button 
              className="px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-1"
              style={{ backgroundColor: YELLOW, color: BLACK }}
            >
              <Upload size={16} /> Upload
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Logo (Dark)', 'Logo (Light)', 'Brand Guide PDF', 'Product Images'].map((asset) => (
              <div key={asset} className="p-4 border-2 border-dashed border-zinc-200 rounded-xl text-center hover:border-zinc-300 cursor-pointer">
                <Upload size={20} className="mx-auto text-zinc-400 mb-2" />
                <p className="text-xs text-zinc-500">{asset}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tone of Voice */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Brand Voice</p>
          <div className="flex flex-wrap gap-2">
            {['Professional', 'Friendly', 'Witty', 'Inspiring', 'Educational', 'Bold', 'Minimalist', 'Luxurious', 'Playful'].map((tone) => (
              <button
                key={tone}
                className="px-4 py-2 rounded-lg text-sm font-bold border-2 border-zinc-200 text-zinc-600 hover:border-zinc-900 hover:text-zinc-900 transition-colors"
              >
                {tone}
              </button>
            ))}
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

// ============ BILLING SETTINGS ============
function BillingSettings({ onChange }) {
  return (
    <SettingsSection title="Billing & Budget" description="Manage your subscription and campaign budgets">
      <div className="space-y-6">
        {/* Current Plan */}
        <div 
          className="rounded-xl p-6 border-2"
          style={{ backgroundColor: `${YELLOW}10`, borderColor: YELLOW }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-zinc-500 mb-1">CURRENT PLAN</p>
              <p className="text-2xl font-bold">Growth Plan</p>
              <p className="text-sm text-zinc-600 mt-1">$499/month • Up to 25 active campaigns</p>
            </div>
            <button className="px-6 py-3 bg-zinc-900 text-white rounded-xl font-bold text-sm hover:bg-zinc-800 transition-colors">
              Upgrade Plan
            </button>
          </div>
          
          <div className="mt-6 pt-4 border-t border-zinc-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-600">Next billing date</span>
              <span className="font-bold">Feb 20, 2026</span>
            </div>
          </div>
        </div>

        {/* Budget Overview */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="font-bold">Monthly Budget Overview</p>
            <span className="text-sm text-zinc-500">January 2026</span>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-zinc-600">Campaign Spend</span>
                <span className="font-bold">$12,450 / $20,000</span>
              </div>
              <div className="h-3 bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full bg-zinc-900 rounded-full" style={{ width: '62%' }}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center p-3 bg-zinc-50 rounded-xl">
                <p className="text-2xl font-bold">$7,550</p>
                <p className="text-xs text-zinc-500">Remaining</p>
              </div>
              <div className="text-center p-3 bg-zinc-50 rounded-xl">
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-zinc-500">Active Deals</p>
              </div>
              <div className="text-center p-3 bg-zinc-50 rounded-xl">
                <p className="text-2xl font-bold">$1,556</p>
                <p className="text-xs text-zinc-500">Avg. Per Deal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Budget Alerts */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Budget Alerts</p>
          
          <div className="space-y-4">
            <ToggleField 
              label="Alert when 80% spent"
              description="Get notified when monthly budget is mostly used"
              defaultChecked={true}
              onChange={onChange}
            />
            
            <ToggleField 
              label="Alert when 100% spent"
              description="Stop new campaigns when budget is exhausted"
              defaultChecked={true}
              onChange={onChange}
            />

            <div className="pt-4">
              <InputField 
                label="Monthly Budget Limit" 
                defaultValue="20000" 
                prefix="$"
                type="number"
                helperText="Maximum spend per month across all campaigns"
                onChange={onChange}
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="font-bold">Payment Method</p>
            <button className="text-sm font-bold" style={{ color: BLACK }}>+ Add Card</button>
          </div>

          <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white font-bold text-xs">
                VISA
              </div>
              <div>
                <p className="font-bold">•••• •••• •••• 4242</p>
                <p className="text-sm text-zinc-500">Expires 08/2027</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Default</span>
          </div>
        </div>

        {/* Billing History */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Billing History</p>
          
          <div className="space-y-2">
            {[
              { date: 'Jan 20, 2026', amount: '$499.00', status: 'Paid', invoice: 'INV-2026-001' },
              { date: 'Dec 20, 2025', amount: '$499.00', status: 'Paid', invoice: 'INV-2025-012' },
              { date: 'Nov 20, 2025', amount: '$499.00', status: 'Paid', invoice: 'INV-2025-011' },
            ].map((item) => (
              <div key={item.invoice} className="flex items-center justify-between py-3 border-b border-zinc-100 last:border-0">
                <div>
                  <p className="font-medium">{item.date}</p>
                  <p className="text-sm text-zinc-500">{item.invoice}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">{item.amount}</span>
                  <button className="text-sm font-bold text-zinc-500 hover:text-zinc-900">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

// ============ CAMPAIGN DEFAULTS SETTINGS ============
function CampaignDefaultsSettings({ onChange }) {
  return (
    <SettingsSection title="Campaign Defaults" description="Pre-fill settings for new campaigns">
      <div className="space-y-6">
        {/* Default Terms */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4 flex items-center gap-2">
            <FileText size={18} /> Default Contract Terms
          </p>
          
          <div className="space-y-4">
            <SelectField 
              label="Default Payment Terms" 
              options={['Net 15', 'Net 30', 'Net 45', 'Upon Delivery', '50% upfront, 50% on delivery']}
              defaultValue="Net 30"
              onChange={onChange}
            />

            <SelectField 
              label="Default Usage Rights" 
              options={['Social media only', 'Paid ads included', 'Full commercial rights', 'Organic only - no ads']}
              defaultValue="Social media only"
              onChange={onChange}
            />

            <InputField 
              label="Default Revision Rounds" 
              defaultValue="2" 
              type="number"
              helperText="Number of revisions included in standard deals"
              onChange={onChange}
            />
          </div>
        </div>

        {/* Creator Requirements */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4 flex items-center gap-2">
            <Target size={18} /> Default Creator Requirements
          </p>
          
          <div className="space-y-4">
            <InputField 
              label="Minimum Followers" 
              defaultValue="10000" 
              type="number"
              helperText="Creators below this threshold won't appear in search"
              onChange={onChange}
            />

            <InputField 
              label="Minimum Engagement Rate" 
              defaultValue="2.5" 
              type="number"
              suffix="%"
              helperText="Ensures quality over quantity"
              onChange={onChange}
            />

            <SelectField 
              label="Preferred Creator Tier" 
              options={['Any tier', 'Nano (1K-10K)', 'Micro (10K-100K)', 'Mid-tier (100K-500K)', 'Macro (500K-1M)', 'Mega (1M+)']}
              defaultValue="Micro (10K-100K)"
              onChange={onChange}
            />
          </div>
        </div>

        {/* Content Requirements */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Default Content Requirements</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-2">Required Hashtags</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {['#NaturaTech', '#SustainableTech', '#Ad'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-zinc-100 rounded-full text-sm font-medium flex items-center gap-1">
                    {tag}
                    <button className="hover:text-rose-500">×</button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Add hashtag..."
                className="w-full bg-white border border-zinc-200 rounded-xl py-2 px-4 text-sm"
              />
            </div>

            <ToggleField 
              label="Require FTC disclosure"
              description="Automatically add #Ad or #Sponsored requirement"
              defaultChecked={true}
              onChange={onChange}
            />

            <SelectField 
              label="Default Content Type" 
              options={['Any', 'Video only', 'Photo only', 'Story only', 'Reel/TikTok only']}
              defaultValue="Any"
              onChange={onChange}
            />
          </div>
        </div>

        {/* Workflow Settings */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4 flex items-center gap-2">
            <Workflow size={18} /> Approval Workflow
          </p>
          
          <div className="space-y-4">
            <ToggleField 
              label="Require brief approval before creator starts"
              description="Creators can't begin until you approve the creative brief"
              defaultChecked={true}
              onChange={onChange}
            />
            
            <ToggleField 
              label="Require content approval before posting"
              description="Review all content before it goes live"
              defaultChecked={true}
              onChange={onChange}
            />

            <ToggleField 
              label="Auto-approve vetted creators"
              description="Skip approval steps for creators you've worked with before"
              defaultChecked={false}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

// ============ NOTIFICATIONS SETTINGS ============
function NotificationSettings({ onChange }) {
  return (
    <SettingsSection title="Notifications" description="Choose how your team stays informed">
      <div className="space-y-6">
        {/* Channels */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Notification Channels</p>
          
          <div className="space-y-4">
            <ToggleField 
              label="Email notifications"
              description="Receive updates at team@naturatech.com"
              icon={<Mail size={18} />}
              defaultChecked={true}
              onChange={onChange}
            />
            
            <ToggleField 
              label="Slack integration"
              description="Post updates to #influencer-campaigns"
              icon={<MessageCircle size={18} />}
              defaultChecked={true}
              onChange={onChange}
            />

            <ToggleField 
              label="Push notifications"
              description="Get alerts on mobile devices"
              icon={<Smartphone size={18} />}
              defaultChecked={false}
              onChange={onChange}
            />
          </div>
        </div>

        {/* Notification Types */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">What to Notify</p>
          
          <div className="space-y-4">
            {[
              { label: 'New creator applications', description: 'When creators pitch to your campaigns', defaultChecked: true },
              { label: 'Content ready for review', description: 'When creators submit content for approval', defaultChecked: true },
              { label: 'Campaign milestones', description: 'When campaigns hit 50%, 75%, 100% completion', defaultChecked: true },
              { label: 'Payment due reminders', description: '48 hours before creator payments are due', defaultChecked: true },
              { label: 'Contract signed', description: 'When a creator accepts your offer', defaultChecked: true },
              { label: 'Performance alerts', description: 'When content performs above/below expectations', defaultChecked: false },
              { label: 'Weekly campaign digest', description: 'Summary of all campaign activity', defaultChecked: true },
              { label: 'Budget alerts', description: 'When approaching budget limits', defaultChecked: true },
            ].map((item) => (
              <ToggleField 
                key={item.label}
                label={item.label}
                description={item.description}
                defaultChecked={item.defaultChecked}
                onChange={onChange}
              />
            ))}
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

// ============ INTEGRATIONS SETTINGS ============
function IntegrationsSettings({ onChange }) {
  const integrations = [
    { name: 'Shopify', description: 'Sync products and track affiliate sales', icon: '🛒', connected: true },
    { name: 'Slack', description: 'Get campaign updates in your channels', icon: '💬', connected: true },
    { name: 'HubSpot', description: 'Sync creator data with your CRM', icon: '🧲', connected: false },
    { name: 'Google Analytics', description: 'Track UTM links and conversions', icon: '📊', connected: false },
    { name: 'Notion', description: 'Export briefs and reports', icon: '📝', connected: false },
    { name: 'Zapier', description: 'Connect to 5000+ other apps', icon: '⚡', connected: false },
  ];

  return (
    <SettingsSection title="Integrations" description="Connect your favorite tools">
      <div className="space-y-6">
        {/* API Key */}
        <div 
          className="rounded-xl p-4 flex items-start gap-3"
          style={{ backgroundColor: `${YELLOW}20`, border: `2px solid ${YELLOW}50` }}
        >
          <Lock size={20} style={{ color: BLACK }} className="flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-bold" style={{ color: BLACK }}>API Access</p>
            <p className="text-sm text-zinc-600 mb-3">Use our API for custom integrations</p>
            <div className="flex gap-2">
              <code className="flex-1 bg-white px-3 py-2 rounded-lg text-sm font-mono text-zinc-500 border">
                lumi_sk_••••••••••••••••4f2a
              </code>
              <button className="px-4 py-2 bg-zinc-900 text-white rounded-lg text-sm font-bold">
                Reveal
              </button>
            </div>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {integrations.map((integration) => (
            <div 
              key={integration.name}
              className="bg-white rounded-xl border border-zinc-200 p-5 flex items-start justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-2xl">
                  {integration.icon}
                </div>
                <div>
                  <p className="font-bold">{integration.name}</p>
                  <p className="text-sm text-zinc-500">{integration.description}</p>
                </div>
              </div>
              
              <button 
                className={cn(
                  "px-4 py-2 rounded-lg font-bold text-sm transition-colors",
                  integration.connected
                    ? "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                    : "text-white"
                )}
                style={!integration.connected ? { backgroundColor: BLACK } : {}}
              >
                {integration.connected ? 'Configure' : 'Connect'}
              </button>
            </div>
          ))}
        </div>

        {/* Webhook */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-2">Webhooks</p>
          <p className="text-sm text-zinc-500 mb-4">Receive real-time updates to your own systems</p>
          
          <div className="space-y-3">
            <InputField 
              label="Webhook URL" 
              placeholder="https://your-server.com/webhook"
              onChange={onChange}
            />
            <div className="flex flex-wrap gap-2">
              {['campaign.created', 'creator.applied', 'content.submitted', 'payment.completed'].map((event) => (
                <span key={event} className="px-3 py-1 bg-zinc-100 rounded-full text-xs font-mono">{event}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

// ============ LUMI AI SETTINGS ============
function LumiSettings({ onChange }) {
  const [personality, setPersonality] = useState('professional');

  const personalities = [
    { 
      id: 'professional', 
      label: 'Professional', 
      emoji: '💼',
      description: 'Formal and business-like communications',
      example: '"You have 3 creator applications awaiting review. Would you like me to summarize the top candidates?"'
    },
    { 
      id: 'friendly', 
      label: 'Friendly', 
      emoji: '😊',
      description: 'Warm and approachable tone',
      example: '"Hey! You\'ve got some great creators interested in your campaign. Want me to give you the highlights?"'
    },
    { 
      id: 'concise', 
      label: 'Concise', 
      emoji: '⚡',
      description: 'Brief and to the point',
      example: '"3 new applications. 2 match your criteria. Review?"'
    },
  ];

  return (
    <SettingsSection title="Lumi AI" description="Configure your AI assistant">
      <div className="space-y-6">
        {/* Personality */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Lumi Personality</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {personalities.map((p) => (
              <button
                key={p.id}
                onClick={() => { setPersonality(p.id); onChange(); }}
                className={cn(
                  "p-5 rounded-xl border-2 text-left transition-all",
                  personality === p.id
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 hover:border-zinc-300"
                )}
              >
                <div className="text-3xl mb-3">{p.emoji}</div>
                <p className="font-bold mb-1">{p.label}</p>
                <p className={cn(
                  "text-xs",
                  personality === p.id ? "text-zinc-300" : "text-zinc-500"
                )}>
                  {p.description}
                </p>
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="mt-6 p-4 bg-zinc-50 rounded-xl">
            <p className="text-xs font-bold text-zinc-400 mb-2">PREVIEW</p>
            <div className="flex items-start gap-3">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: YELLOW }}
              >
                <Sparkles size={16} style={{ color: BLACK }} />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
                <p className="text-sm">{personalities.find(p => p.id === personality)?.example}</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Features */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">AI-Powered Features</p>
          
          <div className="space-y-4">
            <ToggleField 
              label="Auto-vet creators"
              description="Let Lumi pre-screen creators based on your criteria"
              defaultChecked={true}
              onChange={onChange}
            />
            
            <ToggleField 
              label="Suggest optimal rates"
              description="Get AI recommendations for creator pricing"
              defaultChecked={true}
              onChange={onChange}
            />

            <ToggleField 
              label="Draft initial messages"
              description="Lumi writes first-contact messages to creators"
              defaultChecked={false}
              onChange={onChange}
            />

            <ToggleField 
              label="Fraud detection alerts"
              description="Flag suspicious follower patterns or engagement"
              defaultChecked={true}
              onChange={onChange}
            />

            <ToggleField 
              label="Content performance predictions"
              description="Estimate reach and engagement before launching"
              defaultChecked={true}
              onChange={onChange}
            />

            <ToggleField 
              label="Auto-match creators to campaigns"
              description="Receive curated creator suggestions for new campaigns"
              defaultChecked={true}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

// ============ SECURITY SETTINGS ============
function SecuritySettings({ onChange }) {
  return (
    <SettingsSection title="Security" description="Protect your brand account">
      <div className="space-y-6">
        {/* 2FA */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Shield size={24} className="text-emerald-600" />
              </div>
              <div>
                <p className="font-bold">Two-Factor Authentication</p>
                <p className="text-sm text-emerald-600">Required for all team members</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-lg font-bold text-sm hover:bg-zinc-200 transition-colors">
              Manage
            </button>
          </div>
        </div>

        {/* SSO */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">Single Sign-On (SSO)</p>
              <p className="text-sm text-zinc-500">Allow team members to log in with company credentials</p>
            </div>
            <button 
              className="px-4 py-2 rounded-lg font-bold text-sm"
              style={{ backgroundColor: YELLOW, color: BLACK }}
            >
              Configure SSO
            </button>
          </div>
        </div>

        {/* IP Whitelist */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <ToggleField 
            label="IP Allowlist"
            description="Only allow access from approved IP addresses"
            defaultChecked={false}
            onChange={onChange}
          />
        </div>

        {/* Session Settings */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Session Settings</p>
          
          <div className="space-y-4">
            <SelectField 
              label="Auto-logout after inactivity" 
              options={['15 minutes', '30 minutes', '1 hour', '4 hours', '8 hours', 'Never']}
              defaultValue="1 hour"
              onChange={onChange}
            />

            <ToggleField 
              label="Require re-authentication for sensitive actions"
              description="Confirm password before changing billing or inviting admins"
              defaultChecked={true}
              onChange={onChange}
            />
          </div>
        </div>

        {/* Audit Log */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="font-bold">Audit Log</p>
            <button className="text-sm font-bold" style={{ color: BLACK }}>View Full Log</button>
          </div>

          <div className="space-y-2">
            {[
              { action: 'Campaign created', user: 'Sarah Chen', time: '2 hours ago' },
              { action: 'Creator payment approved', user: 'Marcus Williams', time: '5 hours ago' },
              { action: 'Team member invited', user: 'Sarah Chen', time: '1 day ago' },
              { action: 'Integration connected', user: 'Sarah Chen', time: '2 days ago' },
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-zinc-100 last:border-0">
                <div>
                  <p className="font-medium text-sm">{log.action}</p>
                  <p className="text-xs text-zinc-500">by {log.user}</p>
                </div>
                <span className="text-xs text-zinc-400">{log.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

// ============ HELPER COMPONENTS ============

function SettingsSection({ title, description, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-sm text-zinc-500">{description}</p>
      </div>
      {children}
    </motion.div>
  );
}

function InputField({ label, defaultValue, placeholder, prefix, suffix, type = 'text', helperText, onChange }) {
  return (
    <div>
      <label className="block text-sm font-bold text-zinc-700 mb-2">{label}</label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">{prefix}</span>
        )}
        <input
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          className={cn(
            "w-full bg-white border border-zinc-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-all text-sm",
            prefix && "pl-8",
            suffix && "pr-8"
          )}
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">{suffix}</span>
        )}
      </div>
      {helperText && <p className="text-xs text-zinc-500 mt-1">{helperText}</p>}
    </div>
  );
}

function TextAreaField({ label, defaultValue, placeholder, maxLength, onChange }) {
  const [value, setValue] = useState(defaultValue || '');
  
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-bold text-zinc-700">{label}</label>
        {maxLength && (
          <span className="text-xs text-zinc-400">{value.length}/{maxLength}</span>
        )}
      </div>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => { setValue(e.target.value); onChange?.(); }}
        maxLength={maxLength}
        rows={4}
        className="w-full bg-white border border-zinc-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-all text-sm resize-none"
      />
    </div>
  );
}

function SelectField({ label, options, defaultValue, onChange }) {
  return (
    <div>
      <label className="block text-sm font-bold text-zinc-700 mb-2">{label}</label>
      <select
        defaultValue={defaultValue}
        onChange={onChange}
        className="w-full bg-white border border-zinc-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-all text-sm appearance-none cursor-pointer"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function ToggleField({ label, description, icon, defaultChecked, onChange }) {
  const [checked, setChecked] = useState(defaultChecked);
  
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        {icon && <div className="text-zinc-400 mt-0.5">{icon}</div>}
        <div>
          <p className="font-medium text-zinc-900">{label}</p>
          {description && <p className="text-sm text-zinc-500">{description}</p>}
        </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={() => { setChecked(!checked); onChange?.(); }}
          className="sr-only peer" 
        />
        <div className="w-11 h-6 bg-zinc-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-900"></div>
      </label>
    </div>
  );
}
