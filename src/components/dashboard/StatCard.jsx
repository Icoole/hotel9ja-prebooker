import React from 'react';
import GlassCard from '../common/GlassCard';
import { Wallet, Percent, Calendar, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const iconMap = {
  wallet: Wallet,
  percent: Percent,
  calendar: Calendar,
  users: Users
};

const StatCard = ({ label, value, change, trend, icon }) => {
  const Icon = iconMap[icon] || Wallet;
  const isPositive = trend === 'up';

  return (
    <GlassCard className="p-4 relative overflow-hidden group">
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${isPositive ? 'from-emerald-500/10' : 'from-red-500/10'} to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-xl ${isPositive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
          <Icon size={20} />
        </div>
        <span className={`text-xs font-medium flex items-center gap-1 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
          {isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {change}
        </span>
      </div>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
    </GlassCard>
  );
};

export default StatCard;