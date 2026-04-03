import React from 'react';
import GlassCard from '../common/GlassCard';

const CommissionCalculator = ({ rate, bookingsCount }) => {
  const monthlyCommission = bookingsCount * 5000; // Mock calculation

  return (
    <GlassCard className="p-5 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border-indigo-500/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
          <CalculatorIcon />
        </div>
        <div>
          <h3 className="font-bold text-white">Commission Calculator</h3>
          <p className="text-xs text-slate-400">Real-time calculation on every booking</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-3 rounded-xl bg-slate-900/50">
          <p className="text-xs text-slate-400 mb-1">Rate</p>
          <p className="text-lg font-bold text-white">{rate}%</p>
        </div>
        <div className="p-3 rounded-xl bg-slate-900/50">
          <p className="text-xs text-slate-400 mb-1">This Month</p>
          <p className="text-lg font-bold text-emerald-400">₦{(monthlyCommission/1000).toFixed(0)}K</p>
        </div>
        <div className="p-3 rounded-xl bg-slate-900/50">
          <p className="text-xs text-slate-400 mb-1">Protected</p>
          <p className="text-lg font-bold text-indigo-400">100%</p>
        </div>
      </div>
    </GlassCard>
  );
};

const CalculatorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="16" y1="14" x2="16" y2="14" />
    <path d="M8 14h.01" />
    <path d="M8 18h.01" />
    <path d="M12 18h.01" />
    <path d="M16 18h.01" />
  </svg>
);

export default CommissionCalculator;