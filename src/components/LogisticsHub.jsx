import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Package,
  Truck,
  MapPin,
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Download,
  Camera,
  Barcode,
  Box
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const YELLOW = '#FEFD7F';
const BLACK = '#18181B';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Mock shipment data
const shipments = [
  {
    id: 1,
    creator: 'Sarah Martinez',
    campaign: 'Summer Collection Launch',
    product: 'Nike Air Max 2024 (Size 8)',
    tracking: 'UPS-1Z999AA10123456784',
    carrier: 'UPS',
    status: 'delivered',
    shipped: '2024-01-10',
    delivered: '2024-01-12',
    verified: true,
    location: 'Los Angeles, CA',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    id: 2,
    creator: 'James Chen',
    campaign: 'Holiday Gift Guide',
    product: 'Samsung Galaxy S24 Ultra',
    tracking: 'FDX-771234567890',
    carrier: 'FedEx',
    status: 'in_transit',
    shipped: '2024-01-14',
    eta: '2024-01-16',
    verified: false,
    location: 'Seattle, WA',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James'
  },
  {
    id: 3,
    creator: 'Alex Rivera',
    campaign: 'Product Review Series',
    product: 'Sony WH-1000XM5 Headphones',
    tracking: 'DHL-JJD0123456789',
    carrier: 'DHL',
    status: 'awaiting_verification',
    shipped: '2024-01-11',
    delivered: '2024-01-13',
    verified: false,
    location: 'Miami, FL',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
  },
  {
    id: 4,
    creator: 'Emma Wilson',
    campaign: 'Summer Collection Launch',
    product: 'Adidas Ultraboost 23',
    tracking: 'USPS-9400111899223456789000',
    carrier: 'USPS',
    status: 'pending',
    shipped: null,
    location: 'New York, NY',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
  },
];

const inventoryStats = {
  totalUnits: 145,
  inWild: 38,
  delivered: 32,
  pending: 6,
  totalValue: 28750
};

export default function LogisticsHub() {
  const [filter, setFilter] = useState('all');
  
  const filteredShipments = filter === 'all' 
    ? shipments 
    : shipments.filter(s => s.status === filter);

  return (
    <div className="p-4 md:p-8 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Logistics & Barter Hub</h1>
          <p className="text-sm md:text-base text-zinc-500">Track physical products and shipments</p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-bold shadow-lg transition-colors flex items-center gap-2 text-sm md:text-base w-full sm:w-auto"
          style={{ backgroundColor: YELLOW, color: BLACK }}
        >
          <Plus size={18} className="md:w-5 md:h-5" />
          New Shipment
        </motion.button>
      </div>

      {/* Inventory Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-6">
        <InventoryStat 
          title="Total Units" 
          value={inventoryStats.totalUnits}
          icon={<Box size={20} />}
          color="zinc"
        />
        <InventoryStat 
          title="In the Wild" 
          value={inventoryStats.inWild}
          icon={<Truck size={20} />}
          color="blue"
        />
        <InventoryStat 
          title="Delivered" 
          value={inventoryStats.delivered}
          icon={<CheckCircle size={20} />}
          color="green"
        />
        <InventoryStat 
          title="Pending" 
          value={inventoryStats.pending}
          icon={<Clock size={20} />}
          color="amber"
        />
        <InventoryStat 
          title="Total Value" 
          value={`$${(inventoryStats.totalValue / 1000).toFixed(1)}K`}
          icon={<Package size={20} />}
          color="purple"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} className="md:w-[18px] md:h-[18px]" />
          <input
            type="text"
            placeholder="Search by creator, tracking, or product..."
            className="w-full bg-white border border-zinc-200 rounded-xl py-2.5 pl-9 md:pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 transition-all text-sm"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {['all', 'pending', 'in_transit', 'awaiting_verification', 'delivered'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={cn(
                "px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all capitalize whitespace-nowrap",
                filter === status 
                  ? "bg-zinc-900 text-white" 
                  : "bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300"
              )}
            >
              {status.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Shipments Table */}
      <div className="bg-white rounded-xl md:rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-50 border-b border-zinc-200">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-bold text-zinc-600 uppercase tracking-wider">Creator</th>
                <th className="text-left py-4 px-6 text-sm font-bold text-zinc-600 uppercase tracking-wider">Product</th>
                <th className="text-left py-4 px-6 text-sm font-bold text-zinc-600 uppercase tracking-wider">Tracking</th>
                <th className="text-left py-4 px-6 text-sm font-bold text-zinc-600 uppercase tracking-wider">Status</th>
                <th className="text-left py-4 px-6 text-sm font-bold text-zinc-600 uppercase tracking-wider">Timeline</th>
                <th className="text-right py-4 px-6 text-sm font-bold text-zinc-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {filteredShipments.map((shipment, index) => (
                <ShipmentRow key={shipment.id} shipment={shipment} index={index} />
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Mobile Card View */}
        <div className="md:hidden divide-y divide-zinc-100">
          {filteredShipments.map((shipment, index) => (
            <ShipmentMobileCard key={shipment.id} shipment={shipment} index={index} />
          ))}
        </div>
      </div>

      {/* Verification Queue */}
      {shipments.filter(s => s.status === 'awaiting_verification').length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle size={24} className="text-amber-600" />
            <div>
              <h3 className="font-bold text-lg text-amber-900">Awaiting Proof of Receipt</h3>
              <p className="text-sm text-amber-700">These creators need to verify product receipt before starting</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {shipments.filter(s => s.status === 'awaiting_verification').map((shipment) => (
              <VerificationCard key={shipment.id} shipment={shipment} />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

function InventoryStat({ title, value, icon, color }) {
  const colorConfig = {
    zinc: 'bg-zinc-50 border-zinc-200 text-zinc-600',
    blue: 'bg-blue-50 border-blue-200 text-blue-600',
    green: 'bg-emerald-50 border-emerald-200 text-emerald-600',
    amber: 'bg-amber-50 border-amber-200 text-amber-600',
    purple: 'bg-purple-50 border-purple-200 text-purple-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -2 }}
      className={cn("rounded-2xl border-2 p-6 text-center", colorConfig[color])}
    >
      <div className="flex items-center justify-center mb-3">
        {icon}
      </div>
      <p className="text-3xl font-bold mb-1">{value}</p>
      <p className="text-xs font-bold uppercase tracking-wider">{title}</p>
    </motion.div>
  );
}

function ShipmentRow({ shipment, index }) {
  const statusConfig = {
    pending: { label: 'Pending Shipment', color: 'bg-zinc-100 text-zinc-600 border-zinc-200', icon: <Clock size={14} /> },
    in_transit: { label: 'In Transit', color: 'bg-blue-50 text-blue-600 border-blue-200', icon: <Truck size={14} /> },
    delivered: { label: 'Delivered', color: 'bg-emerald-50 text-emerald-600 border-emerald-200', icon: <CheckCircle size={14} /> },
    awaiting_verification: { label: 'Awaiting Verification', color: 'bg-amber-50 text-amber-600 border-amber-200', icon: <AlertCircle size={14} /> },
  };

  const status = statusConfig[shipment.status];

  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="hover:bg-zinc-50 transition-colors"
    >
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <img src={shipment.avatar} alt={shipment.creator} className="w-10 h-10 rounded-full border-2 border-zinc-200" />
          <div>
            <p className="font-bold text-sm">{shipment.creator}</p>
            <p className="text-xs text-zinc-500">{shipment.location}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-6">
        <p className="font-medium text-sm text-zinc-900">{shipment.product}</p>
        <p className="text-xs text-zinc-500">{shipment.campaign}</p>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-zinc-900">{shipment.tracking}</span>
          {shipment.carrier && (
            <span className="px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded text-[10px] font-bold">{shipment.carrier}</span>
          )}
        </div>
      </td>
      <td className="py-4 px-6">
        <div className={cn("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold", status.color)}>
          {status.icon}
          {status.label}
        </div>
      </td>
      <td className="py-4 px-6">
        <div className="text-xs space-y-1">
          {shipment.shipped && (
            <div className="flex items-center gap-2 text-zinc-500">
              <span>Shipped:</span>
              <span className="font-bold text-zinc-900">{shipment.shipped}</span>
            </div>
          )}
          {shipment.eta && (
            <div className="flex items-center gap-2 text-blue-600">
              <span>ETA:</span>
              <span className="font-bold">{shipment.eta}</span>
            </div>
          )}
          {shipment.delivered && (
            <div className="flex items-center gap-2 text-emerald-600">
              <span>Delivered:</span>
              <span className="font-bold">{shipment.delivered}</span>
            </div>
          )}
        </div>
      </td>
      <td className="py-4 px-6 text-right">
        <button className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-lg text-xs font-bold hover:bg-zinc-200 transition-colors">
          Track
        </button>
      </td>
    </motion.tr>
  );
}

function VerificationCard({ shipment }) {
  return (
    <div className="bg-white rounded-xl border-2 border-amber-200 p-3 md:p-4">
      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
        <img src={shipment.avatar} alt={shipment.creator} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-amber-200 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="font-bold text-xs md:text-sm truncate">{shipment.creator}</p>
          <p className="text-[10px] md:text-xs text-zinc-500 truncate">{shipment.product}</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-2 md:mb-3">
        <div className="flex items-center gap-2 text-[10px] md:text-xs text-zinc-600">
          <Camera size={10} className="md:w-3 md:h-3 flex-shrink-0" />
          <span>Needs to scan barcode or upload unboxing video</span>
        </div>
      </div>
      
      <button className="w-full py-2 bg-amber-500 text-white rounded-lg text-[10px] md:text-xs font-bold hover:bg-amber-600 transition-colors">
        Send Reminder via Lumi
      </button>
    </div>
  );
}

function ShipmentMobileCard({ shipment, index }) {
  const statusConfig = {
    pending: { label: 'Pending Shipment', color: 'bg-zinc-100 text-zinc-600 border-zinc-200', icon: <Clock size={14} /> },
    in_transit: { label: 'In Transit', color: 'bg-blue-50 text-blue-600 border-blue-200', icon: <Truck size={14} /> },
    delivered: { label: 'Delivered', color: 'bg-emerald-50 text-emerald-600 border-emerald-200', icon: <CheckCircle size={14} /> },
    awaiting_verification: { label: 'Awaiting Verification', color: 'bg-amber-50 text-amber-600 border-amber-200', icon: <AlertCircle size={14} /> },
  };

  const status = statusConfig[shipment.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="p-4 space-y-3"
    >
      <div className="flex items-center gap-3">
        <img src={shipment.avatar} alt={shipment.creator} className="w-10 h-10 rounded-full border-2 border-zinc-200 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm text-zinc-900 truncate">{shipment.creator}</p>
          <p className="text-xs text-zinc-500 truncate">{shipment.location}</p>
        </div>
        <div className={cn("inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-[10px] font-bold flex-shrink-0", status.color)}>
          {status.icon}
          <span className="hidden sm:inline">{status.label}</span>
        </div>
      </div>
      
      <div>
        <p className="font-medium text-xs text-zinc-500 mb-1">Product</p>
        <p className="font-medium text-sm text-zinc-900">{shipment.product}</p>
        <p className="text-xs text-zinc-500 mt-0.5">{shipment.campaign}</p>
      </div>
      
      {shipment.tracking && (
        <div>
          <p className="font-medium text-xs text-zinc-500 mb-1">Tracking</p>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-zinc-900">{shipment.tracking}</span>
            {shipment.carrier && (
              <span className="px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded text-[10px] font-bold">{shipment.carrier}</span>
            )}
          </div>
        </div>
      )}
      
      <div>
        <p className="font-medium text-xs text-zinc-500 mb-1">Timeline</p>
        <div className="text-xs space-y-1">
          {shipment.shipped && (
            <div className="flex items-center gap-2 text-zinc-500">
              <span>Shipped:</span>
              <span className="font-bold text-zinc-900">{shipment.shipped}</span>
            </div>
          )}
          {shipment.eta && (
            <div className="flex items-center gap-2 text-blue-600">
              <span>ETA:</span>
              <span className="font-bold">{shipment.eta}</span>
            </div>
          )}
          {shipment.delivered && (
            <div className="flex items-center gap-2 text-emerald-600">
              <span>Delivered:</span>
              <span className="font-bold">{shipment.delivered}</span>
            </div>
          )}
        </div>
      </div>
      
      <button className="w-full px-4 py-2 bg-zinc-100 text-zinc-700 rounded-lg text-xs font-bold hover:bg-zinc-200 transition-colors">
        Track
      </button>
    </motion.div>
  );
}
