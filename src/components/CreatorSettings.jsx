import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User,
  Bell,
  CreditCard,
  Shield,
  Link2,
  FileText,
  Package,
  Sparkles,
  Globe,
  Calendar,
  Lock,
  Download,
  Trash2,
  ChevronRight,
  Check,
  AlertCircle,
  RefreshCw,
  Instagram,
  Youtube,
  Clock,
  DollarSign,
  Percent,
  MapPin,
  Upload,
  Eye,
  EyeOff,
  Users,
  Ban,
  Zap,
  MessageCircle,
  Mail,
  Smartphone,
  CheckCircle,
  XCircle,
  Info,
  Plus,
  X,
  Save
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const YELLOW = '#FEFD7F';
const BLACK = '#18181B';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const settingsTabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'social', label: 'Connected Accounts', icon: Link2 },
  { id: 'terms', label: 'Standard Terms', icon: FileText },
  { id: 'payments', label: 'Payments & Tax', icon: CreditCard },
  { id: 'shipping', label: 'Shipping', icon: Package },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'privacy', label: 'Privacy', icon: Eye },
  { id: 'lumi', label: 'Lumi AI', icon: Sparkles },
  { id: 'security', label: 'Security', icon: Shield },
];

export default function CreatorSettings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = () => {
    setHasChanges(true);
  };

  const handleSave = () => {
    setHasChanges(false);
    // Show toast notification
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
          <p className="text-sm md:text-base text-zinc-500">Set the rules of the game</p>
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
            {activeTab === 'profile' && <ProfileSettings onChange={handleChange} />}
            {activeTab === 'social' && <SocialHealthSettings onChange={handleChange} />}
            {activeTab === 'terms' && <StandardTermsSettings onChange={handleChange} />}
            {activeTab === 'payments' && <PaymentsSettings onChange={handleChange} />}
            {activeTab === 'shipping' && <ShippingSettings onChange={handleChange} />}
            {activeTab === 'notifications' && <NotificationSettings onChange={handleChange} />}
            {activeTab === 'privacy' && <PrivacySettings onChange={handleChange} />}
            {activeTab === 'lumi' && <LumiSettings onChange={handleChange} />}
            {activeTab === 'security' && <SecuritySettings onChange={handleChange} />}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

// ============ PROFILE SETTINGS ============
function ProfileSettings({ onChange }) {
  return (
    <SettingsSection title="Profile" description="Your public creator identity">
      <div className="space-y-6">
        {/* Avatar */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
              alt="Avatar"
              className="w-24 h-24 rounded-2xl border-4 border-zinc-200"
            />
            <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors">
              <Upload size={14} />
            </button>
          </div>
          <div>
            <p className="font-bold mb-1">Profile Photo</p>
            <p className="text-sm text-zinc-500 mb-2">JPG, PNG or GIF. Max 5MB.</p>
            <button className="text-sm font-bold text-zinc-900 hover:underline">Remove photo</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Display Name" defaultValue="Totok Michael" onChange={onChange} />
          <InputField label="Handle" defaultValue="@totokmichael" prefix="lumienzo.com/" onChange={onChange} />
        </div>

        <TextAreaField 
          label="Bio" 
          defaultValue="Tech & lifestyle creator sharing authentic experiences with the latest gadgets and travel adventures."
          maxLength={160}
          onChange={onChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField 
            label="Primary Category" 
            options={['Tech', 'Fashion', 'Fitness', 'Beauty', 'Food', 'Travel', 'Gaming', 'Lifestyle']}
            defaultValue="Tech"
            onChange={onChange}
          />
          <SelectField 
            label="Timezone" 
            options={['Pacific Time (PT)', 'Mountain Time (MT)', 'Central Time (CT)', 'Eastern Time (ET)', 'UTC', 'GMT']}
            defaultValue="Pacific Time (PT)"
            onChange={onChange}
          />
        </div>

        <InputField label="Website" defaultValue="https://totokmichael.com" onChange={onChange} />
      </div>
    </SettingsSection>
  );
}

// ============ SOCIAL HEALTH SETTINGS ============
function SocialHealthSettings({ onChange }) {
  const connectedAccounts = [
    { 
      platform: 'Instagram', 
      handle: '@totokmichael', 
      icon: Instagram,
      connected: true, 
      lastSync: '2 hours ago',
      status: 'healthy',
      expiresIn: null
    },
    { 
      platform: 'YouTube', 
      handle: 'TotokMichael', 
      icon: Youtube,
      connected: true, 
      lastSync: '1 day ago',
      status: 'warning',
      expiresIn: '5 days'
    },
    { 
      platform: 'TikTok', 
      handle: '@totokmichael', 
      icon: Zap,
      connected: false, 
      lastSync: null,
      status: 'disconnected',
      expiresIn: null
    },
  ];

  return (
    <SettingsSection 
      title="Connected Accounts" 
      description="Manage your social platform connections and API health"
    >
      <div className="space-y-4">
        {/* Health Overview */}
        <div 
          className="rounded-xl p-4 flex items-center gap-4"
          style={{ backgroundColor: `${YELLOW}20`, border: `2px solid ${YELLOW}50` }}
        >
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: YELLOW }}
          >
            <Shield size={24} style={{ color: BLACK }} />
          </div>
          <div className="flex-1">
            <p className="font-bold">Social Health Score: Good</p>
            <p className="text-sm text-zinc-600">2 of 3 platforms connected and syncing properly</p>
          </div>
        </div>

        {/* Connected Accounts List */}
        <div className="space-y-3">
          {connectedAccounts.map((account) => {
            const Icon = account.icon;
            return (
              <div 
                key={account.platform}
                className="bg-white rounded-xl border border-zinc-200 p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    account.connected ? "bg-zinc-100" : "bg-zinc-50"
                  )}>
                    <Icon size={24} className={account.connected ? "text-zinc-900" : "text-zinc-400"} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold">{account.platform}</p>
                      {account.status === 'healthy' && (
                        <span className="flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          <CheckCircle size={10} /> Healthy
                        </span>
                      )}
                      {account.status === 'warning' && (
                        <span className="flex items-center gap-1 text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                          <AlertCircle size={10} /> Re-auth in {account.expiresIn}
                        </span>
                      )}
                      {account.status === 'disconnected' && (
                        <span className="flex items-center gap-1 text-xs text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full">
                          <XCircle size={10} /> Not connected
                        </span>
                      )}
                    </div>
                    {account.connected ? (
                      <p className="text-sm text-zinc-500">{account.handle} • Last sync: {account.lastSync}</p>
                    ) : (
                      <p className="text-sm text-zinc-400">Connect to verify your reach</p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {account.connected ? (
                    <>
                      <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors">
                        <RefreshCw size={18} className="text-zinc-500" />
                      </button>
                      <button className="px-4 py-2 text-sm font-bold text-zinc-600 hover:text-zinc-900 transition-colors">
                        Disconnect
                      </button>
                    </>
                  ) : (
                    <button 
                      className="px-4 py-2 rounded-lg font-bold text-sm"
                      style={{ backgroundColor: YELLOW, color: BLACK }}
                    >
                      Connect
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Auto-Sync Setting */}
        <ToggleField 
          label="Auto-sync stats daily"
          description="Automatically refresh your follower counts and engagement metrics"
          defaultChecked={true}
          onChange={onChange}
        />
      </div>
    </SettingsSection>
  );
}

// ============ STANDARD TERMS SETTINGS ============
function StandardTermsSettings({ onChange }) {
  const [revisionLimit, setRevisionLimit] = useState(2);
  const [usageMarkup, setUsageMarkup] = useState(25);
  const [turnaroundDays, setTurnaroundDays] = useState(7);

  return (
    <SettingsSection 
      title="Standard Terms" 
      description="Set your default contract terms for brand deals"
    >
      <div className="space-y-6">
        {/* Revision Limit */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="font-bold flex items-center gap-2">
                <RefreshCw size={18} /> Revision Limit
              </p>
              <p className="text-sm text-zinc-500">Number of free revisions included in your rate</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold">{revisionLimit}</p>
              <p className="text-xs text-zinc-500">free revisions</p>
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="5"
            value={revisionLimit}
            onChange={(e) => { setRevisionLimit(e.target.value); onChange(); }}
            className="w-full h-2 bg-zinc-200 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, ${BLACK} 0%, ${BLACK} ${revisionLimit * 20}%, #e4e4e7 ${revisionLimit * 20}%, #e4e4e7 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-zinc-400 mt-2">
            <span>0 (strict)</span>
            <span>5 (generous)</span>
          </div>
        </div>

        {/* Usage Rights Pricing */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="font-bold flex items-center gap-2">
                <Percent size={18} /> Usage Rights Markup
              </p>
              <p className="text-sm text-zinc-500">Extra charge when brands want to use your content in ads</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold" style={{ color: BLACK }}>+{usageMarkup}%</p>
              <p className="text-xs text-zinc-500">of base rate</p>
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={usageMarkup}
            onChange={(e) => { setUsageMarkup(e.target.value); onChange(); }}
            className="w-full h-2 bg-zinc-200 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, ${YELLOW} 0%, ${YELLOW} ${usageMarkup}%, #e4e4e7 ${usageMarkup}%, #e4e4e7 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-zinc-400 mt-2">
            <span>0% (no extra)</span>
            <span>100% (double rate)</span>
          </div>
          <div className="mt-3 p-3 bg-zinc-50 rounded-lg">
            <p className="text-xs text-zinc-600">
              <strong>Example:</strong> If your rate is $1,000 and a brand wants usage rights, they'll pay ${(1000 * (1 + usageMarkup / 100)).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Turnaround Time */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="font-bold flex items-center gap-2">
                <Clock size={18} /> Default Turnaround
              </p>
              <p className="text-sm text-zinc-500">Standard days to deliver first draft</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold">{turnaroundDays}</p>
              <p className="text-xs text-zinc-500">business days</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[3, 5, 7, 14].map((days) => (
              <button
                key={days}
                onClick={() => { setTurnaroundDays(days); onChange(); }}
                className={cn(
                  "py-3 rounded-xl font-bold text-sm transition-all",
                  turnaroundDays === days
                    ? "bg-zinc-900 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                )}
              >
                {days} days
              </button>
            ))}
          </div>
        </div>

        {/* Rush Fee */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <ToggleField 
            label="Enable Rush Fee"
            description="Charge extra for expedited turnaround (under 48 hours)"
            defaultChecked={true}
            onChange={onChange}
          />
          <div className="mt-4 pl-14">
            <InputField 
              label="Rush Fee Amount" 
              defaultValue="250" 
              prefix="$" 
              type="number"
              onChange={onChange}
            />
          </div>
        </div>

        {/* Exclusivity */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-3 flex items-center gap-2">
            <Ban size={18} /> Exclusivity Pricing
          </p>
          <p className="text-sm text-zinc-500 mb-4">How much extra to charge if a brand wants you to avoid competitors</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { period: '30 days', markup: 15 },
              { period: '60 days', markup: 30 },
              { period: '90 days', markup: 50 },
            ].map((option) => (
              <div key={option.period} className="bg-zinc-50 rounded-xl p-4 text-center">
                <p className="text-sm text-zinc-500 mb-1">{option.period}</p>
                <p className="text-xl font-bold">+{option.markup}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

// ============ PAYMENTS SETTINGS ============
function PaymentsSettings({ onChange }) {
  const [payoutReady, setPayoutReady] = useState(false);

  return (
    <SettingsSection 
      title="Payments & Tax" 
      description="Manage how you get paid and stay compliant"
    >
      <div className="space-y-6">
        {/* Payout Status */}
        <div className={cn(
          "rounded-xl p-5 border-2",
          payoutReady 
            ? "bg-emerald-50 border-emerald-200" 
            : "bg-amber-50 border-amber-200"
        )}>
          <div className="flex items-center gap-4">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center",
              payoutReady ? "bg-emerald-500" : "bg-amber-500"
            )}>
              {payoutReady ? (
                <CheckCircle size={24} className="text-white" />
              ) : (
                <AlertCircle size={24} className="text-white" />
              )}
            </div>
            <div className="flex-1">
              <p className="font-bold text-lg">
                {payoutReady ? "Payout Ready ✓" : "Complete Setup to Get Paid"}
              </p>
              <p className="text-sm text-zinc-600">
                {payoutReady 
                  ? "You're all set to receive payments" 
                  : "Add payment method and tax info to enable payouts"
                }
              </p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="font-bold">Payment Methods</p>
            <button className="text-sm font-bold flex items-center gap-1" style={{ color: BLACK }}>
              <Plus size={16} /> Add Method
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  PP
                </div>
                <div>
                  <p className="font-bold">PayPal</p>
                  <p className="text-sm text-zinc-500">michael@lumienzo.com</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Primary</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  🏦
                </div>
                <div>
                  <p className="font-bold">Bank Account</p>
                  <p className="text-sm text-zinc-500">Chase •••• 4242</p>
                </div>
              </div>
              <button className="text-sm font-bold text-zinc-500 hover:text-zinc-900">Set Primary</button>
            </div>
          </div>
        </div>

        {/* Payout Preferences */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Payout Preferences</p>
          
          <div className="space-y-4">
            <SelectField 
              label="Payout Frequency" 
              options={['Instant (per deal)', 'Weekly', 'Bi-weekly', 'Monthly']}
              defaultValue="Weekly"
              onChange={onChange}
            />
            
            <InputField 
              label="Minimum Payout Threshold" 
              defaultValue="100" 
              prefix="$"
              type="number"
              helperText="We'll hold funds until this amount is reached"
              onChange={onChange}
            />

            <SelectField 
              label="Currency" 
              options={['USD ($)', 'EUR (€)', 'GBP (£)', 'CAD ($)', 'AUD ($)']}
              defaultValue="USD ($)"
              onChange={onChange}
            />
          </div>
        </div>

        {/* Tax Documents */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-2">Tax Documents</p>
          <p className="text-sm text-zinc-500 mb-4">Upload required documents for your region</p>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border-2 border-dashed border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center">
                  <FileText size={20} className="text-zinc-500" />
                </div>
                <div>
                  <p className="font-bold">W-9 Form (US)</p>
                  <p className="text-sm text-zinc-500">Required for US creators</p>
                </div>
              </div>
              <span className="text-sm font-bold text-amber-600">Not uploaded</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <CheckCircle size={20} className="text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold">Government ID</p>
                  <p className="text-sm text-zinc-500">Verified on Jan 15, 2026</p>
                </div>
              </div>
              <span className="text-sm font-bold text-emerald-600">Verified</span>
            </div>
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

// ============ SHIPPING SETTINGS ============
function ShippingSettings({ onChange }) {
  const [showAddress, setShowAddress] = useState(false);

  return (
    <SettingsSection 
      title="Shipping & Logistics" 
      description="Manage your address for barter products"
    >
      <div className="space-y-6">
        {/* Security Notice */}
        <div 
          className="rounded-xl p-4 flex items-start gap-3"
          style={{ backgroundColor: `${YELLOW}20`, border: `2px solid ${YELLOW}50` }}
        >
          <Lock size={20} style={{ color: BLACK }} className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold" style={{ color: BLACK }}>Your address is encrypted</p>
            <p className="text-sm text-zinc-600">Brands only see your city until you accept a deal. Full address is shared via secure channel.</p>
          </div>
        </div>

        {/* Primary Address */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="font-bold flex items-center gap-2">
              <MapPin size={18} /> Primary Shipping Address
            </p>
            <button 
              onClick={() => setShowAddress(!showAddress)}
              className="text-sm font-bold flex items-center gap-1 text-zinc-500 hover:text-zinc-900"
            >
              {showAddress ? <EyeOff size={16} /> : <Eye size={16} />}
              {showAddress ? 'Hide' : 'Show'}
            </button>
          </div>

          {showAddress ? (
            <div className="space-y-4">
              <InputField label="Street Address" defaultValue="1234 Creator Lane, Apt 5B" onChange={onChange} />
              <div className="grid grid-cols-2 gap-4">
                <InputField label="City" defaultValue="Los Angeles" onChange={onChange} />
                <InputField label="State" defaultValue="CA" onChange={onChange} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputField label="ZIP Code" defaultValue="90210" onChange={onChange} />
                <SelectField 
                  label="Country" 
                  options={['United States', 'Canada', 'United Kingdom', 'Australia']}
                  defaultValue="United States"
                  onChange={onChange}
                />
              </div>
            </div>
          ) : (
            <div className="p-4 bg-zinc-50 rounded-xl">
              <p className="text-zinc-600">•••• •••• •••• Los Angeles, CA 90210</p>
              <p className="text-sm text-zinc-400 mt-1">Click "Show" to view or edit</p>
            </div>
          )}
        </div>

        {/* Shipping Preferences */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Shipping Preferences</p>
          
          <div className="space-y-4">
            <ToggleField 
              label="Accept international shipments"
              description="Allow brands from other countries to send you products"
              defaultChecked={true}
              onChange={onChange}
            />
            
            <ToggleField 
              label="Require signature on delivery"
              description="Recommended for high-value items"
              defaultChecked={true}
              onChange={onChange}
            />

            <ToggleField 
              label="Allow PO Box delivery"
              description="Some carriers don't deliver to PO Boxes"
              defaultChecked={false}
              onChange={onChange}
            />
          </div>
        </div>

        {/* Size Info */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-2">Size Information (Optional)</p>
          <p className="text-sm text-zinc-500 mb-4">Help brands send the right sizes for clothing/shoes</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <InputField label="Shirt Size" placeholder="e.g., M" onChange={onChange} />
            <InputField label="Pants Size" placeholder="e.g., 32" onChange={onChange} />
            <InputField label="Shoe Size" placeholder="e.g., 10" onChange={onChange} />
            <InputField label="Ring Size" placeholder="e.g., 7" onChange={onChange} />
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

// ============ NOTIFICATION SETTINGS ============
function NotificationSettings({ onChange }) {
  return (
    <SettingsSection 
      title="Notifications" 
      description="Choose how and when we contact you"
    >
      <div className="space-y-6">
        {/* Channels */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Notification Channels</p>
          
          <div className="space-y-4">
            <ToggleField 
              label="Email notifications"
              description="Receive updates at michael@lumienzo.com"
              icon={<Mail size={18} />}
              defaultChecked={true}
              onChange={onChange}
            />
            
            <ToggleField 
              label="Push notifications"
              description="Get alerts on your mobile device"
              icon={<Smartphone size={18} />}
              defaultChecked={true}
              onChange={onChange}
            />

            <ToggleField 
              label="SMS notifications"
              description="Critical alerts via text message"
              icon={<MessageCircle size={18} />}
              defaultChecked={false}
              onChange={onChange}
            />
          </div>
        </div>

        {/* Notification Types */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Notification Types</p>
          
          <div className="space-y-4">
            {[
              { label: 'New brand opportunities', description: 'When brands match your profile', defaultChecked: true },
              { label: 'Campaign updates', description: 'Status changes on active deals', defaultChecked: true },
              { label: 'Payment received', description: 'When funds hit your account', defaultChecked: true },
              { label: 'Contract ready to sign', description: 'New agreements awaiting signature', defaultChecked: true },
              { label: 'Deadline reminders', description: '24 hours before content is due', defaultChecked: true },
              { label: 'Lumi AI suggestions', description: 'Tips to improve your profile', defaultChecked: false },
              { label: 'Weekly performance digest', description: 'Summary of your stats', defaultChecked: true },
              { label: 'Marketing & promotions', description: 'Platform updates and features', defaultChecked: false },
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

        {/* Quiet Hours */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <ToggleField 
            label="Enable Quiet Hours"
            description="Pause non-urgent notifications during set times"
            defaultChecked={true}
            onChange={onChange}
          />
          
          <div className="mt-4 pl-14 grid grid-cols-2 gap-4">
            <InputField label="Start Time" type="time" defaultValue="22:00" onChange={onChange} />
            <InputField label="End Time" type="time" defaultValue="08:00" onChange={onChange} />
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

// ============ PRIVACY SETTINGS ============
function PrivacySettings({ onChange }) {
  return (
    <SettingsSection 
      title="Privacy" 
      description="Control who sees your information"
    >
      <div className="space-y-6">
        {/* Profile Visibility */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Profile Visibility</p>
          
          <div className="space-y-4">
            <SelectField 
              label="Who can view your full profile" 
              options={['Everyone', 'Verified brands only', 'Brands I match with', 'No one (hidden)']}
              defaultValue="Verified brands only"
              onChange={onChange}
            />

            <SelectField 
              label="Media Kit visibility" 
              options={['Public (anyone with link)', 'Unlisted (link only)', 'Private (must request)']}
              defaultValue="Public (anyone with link)"
              onChange={onChange}
            />
          </div>
        </div>

        {/* Data Sharing */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Data Sharing</p>
          
          <div className="space-y-4">
            <ToggleField 
              label="Show engagement rates"
              description="Let brands see your average engagement %"
              defaultChecked={true}
              onChange={onChange}
            />
            
            <ToggleField 
              label="Show audience demographics"
              description="Share age, gender, and location breakdown"
              defaultChecked={true}
              onChange={onChange}
            />

            <ToggleField 
              label="Show past brand collaborations"
              description="Display logos of brands you've worked with"
              defaultChecked={true}
              onChange={onChange}
            />

            <ToggleField 
              label="Allow brands to contact directly"
              description="Receive messages without matching first"
              defaultChecked={false}
              onChange={onChange}
            />
          </div>
        </div>

        {/* Brand Blacklist */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-bold flex items-center gap-2">
                <Ban size={18} /> Brand Blacklist
              </p>
              <p className="text-sm text-zinc-500">Brands that can't contact or see you</p>
            </div>
            <button className="text-sm font-bold flex items-center gap-1" style={{ color: BLACK }}>
              <Plus size={16} /> Add Brand
            </button>
          </div>

          <div className="p-4 bg-zinc-50 rounded-xl text-center text-zinc-500 text-sm">
            No brands blacklisted
          </div>
        </div>

        {/* Category Preferences */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-2">Categories I Won't Work With</p>
          <p className="text-sm text-zinc-500 mb-4">Hide opportunities from these categories</p>
          
          <div className="flex flex-wrap gap-2">
            {['Gambling', 'Alcohol', 'Tobacco', 'Politics', 'Crypto', 'Adult Content', 'Weapons'].map((cat) => (
              <button
                key={cat}
                className="px-3 py-1.5 rounded-lg text-sm font-bold border-2 border-zinc-200 text-zinc-600 hover:border-zinc-900 hover:text-zinc-900 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Data Export */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-2">Your Data</p>
          <p className="text-sm text-zinc-500 mb-4">Download or delete your account data</p>
          
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-700 rounded-lg font-bold text-sm hover:bg-zinc-200 transition-colors">
              <Download size={16} /> Export Data
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-lg font-bold text-sm hover:bg-rose-100 transition-colors">
              <Trash2 size={16} /> Delete Account
            </button>
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

// ============ LUMI SETTINGS ============
function LumiSettings({ onChange }) {
  const [personality, setPersonality] = useState('casual');

  const personalities = [
    { 
      id: 'professional', 
      label: 'Professional', 
      emoji: '💼',
      description: 'Formal and business-like. "Your campaign deadline is approaching."',
      example: '"Good morning. You have 3 pending tasks requiring your attention."'
    },
    { 
      id: 'casual', 
      label: 'Casual', 
      emoji: '😊',
      description: 'Friendly and approachable. "Hey! Don\'t forget about that deadline."',
      example: '"Hey! Quick heads up - you\'ve got a few things to check out today."'
    },
    { 
      id: 'hypeman', 
      label: 'Hype-Man', 
      emoji: '🔥',
      description: 'Energetic and motivating. "LET\'S GO! Time to crush that deadline!"',
      example: '"YOOO!! You\'re absolutely killing it! Let\'s knock out these tasks! 🚀"'
    },
  ];

  return (
    <SettingsSection 
      title="Lumi AI" 
      description="Customize your AI assistant's personality"
    >
      <div className="space-y-6">
        {/* Personality Selection */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Lumi Personality</p>
          <p className="text-sm text-zinc-500 mb-6">Choose how Lumi talks to you</p>
          
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

        {/* Lumi Features */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Lumi Features</p>
          
          <div className="space-y-4">
            <ToggleField 
              label="Auto-negotiate on my behalf"
              description="Let Lumi handle initial rate discussions with brands"
              defaultChecked={false}
              onChange={onChange}
            />
            
            <ToggleField 
              label="Send deadline reminders"
              description="Get nudges 24h and 1h before content is due"
              defaultChecked={true}
              onChange={onChange}
            />

            <ToggleField 
              label="Suggest response templates"
              description="Get AI-written replies to brand messages"
              defaultChecked={true}
              onChange={onChange}
            />

            <ToggleField 
              label="Weekly performance insights"
              description="Receive tips to improve your profile and rates"
              defaultChecked={true}
              onChange={onChange}
            />

            <ToggleField 
              label="Auto-decline low offers"
              description="Automatically pass on deals below your minimum rate"
              defaultChecked={false}
              onChange={onChange}
            />
          </div>
        </div>

        {/* Auto-Decline Threshold */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-2">Auto-Decline Threshold</p>
          <p className="text-sm text-zinc-500 mb-4">Automatically decline offers below this amount</p>
          
          <InputField 
            label="Minimum acceptable offer" 
            defaultValue="500" 
            prefix="$"
            type="number"
            helperText="Lumi will politely decline and suggest your actual rate"
            onChange={onChange}
          />
        </div>
      </div>
    </SettingsSection>
  );
}

// ============ SECURITY SETTINGS ============
function SecuritySettings({ onChange }) {
  return (
    <SettingsSection 
      title="Security" 
      description="Protect your account"
    >
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
                <p className="text-sm text-emerald-600">Enabled via Authenticator App</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-lg font-bold text-sm hover:bg-zinc-200 transition-colors">
              Manage
            </button>
          </div>
        </div>

        {/* Password */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Password</p>
          
          <div className="space-y-4">
            <InputField label="Current Password" type="password" placeholder="••••••••" onChange={onChange} />
            <InputField label="New Password" type="password" placeholder="••••••••" onChange={onChange} />
            <InputField label="Confirm New Password" type="password" placeholder="••••••••" onChange={onChange} />
          </div>

          <button 
            className="mt-4 px-6 py-2.5 rounded-xl font-bold text-sm"
            style={{ backgroundColor: YELLOW, color: BLACK }}
          >
            Update Password
          </button>
        </div>

        {/* Active Sessions */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="font-bold">Active Sessions</p>
            <button className="text-sm font-bold text-rose-600 hover:underline">
              Sign out all devices
            </button>
          </div>

          <div className="space-y-3">
            {[
              { device: 'MacBook Pro', location: 'Los Angeles, CA', current: true, lastActive: 'Now' },
              { device: 'iPhone 15 Pro', location: 'Los Angeles, CA', current: false, lastActive: '2 hours ago' },
              { device: 'Chrome on Windows', location: 'San Francisco, CA', current: false, lastActive: '3 days ago' },
            ].map((session, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-zinc-50 rounded-xl">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold">{session.device}</p>
                    {session.current && (
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-500">{session.location} • {session.lastActive}</p>
                </div>
                {!session.current && (
                  <button className="text-sm font-bold text-zinc-500 hover:text-zinc-900">
                    Revoke
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Login History */}
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <p className="font-bold mb-4">Recent Login Activity</p>
          
          <div className="space-y-2">
            {[
              { date: 'Today, 9:42 AM', location: 'Los Angeles, CA', status: 'success' },
              { date: 'Yesterday, 3:15 PM', location: 'Los Angeles, CA', status: 'success' },
              { date: 'Jan 18, 11:30 AM', location: 'San Francisco, CA', status: 'success' },
              { date: 'Jan 17, 8:00 PM', location: 'Unknown Location', status: 'blocked' },
            ].map((login, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  {login.status === 'success' ? (
                    <CheckCircle size={16} className="text-emerald-500" />
                  ) : (
                    <XCircle size={16} className="text-rose-500" />
                  )}
                  <span className="text-sm">{login.date}</span>
                </div>
                <span className={cn(
                  "text-sm",
                  login.status === 'blocked' ? "text-rose-500" : "text-zinc-500"
                )}>
                  {login.location}
                </span>
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

function InputField({ label, defaultValue, placeholder, prefix, type = 'text', helperText, onChange }) {
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
            prefix && "pl-8"
          )}
        />
      </div>
      {helperText && <p className="text-xs text-zinc-500 mt-1">{helperText}</p>}
    </div>
  );
}

function TextAreaField({ label, defaultValue, maxLength, onChange }) {
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
        onChange={(e) => { setValue(e.target.value); onChange(); }}
        maxLength={maxLength}
        rows={3}
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
          onChange={() => { setChecked(!checked); onChange(); }}
          className="sr-only peer" 
        />
        <div className="w-11 h-6 bg-zinc-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-900"></div>
      </label>
    </div>
  );
}
