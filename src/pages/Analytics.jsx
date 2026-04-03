import React from 'react';
import Header from '../components/common/Header';
import GlassCard from '../components/common/GlassCard';
import { BarChart3, Users, Clock, Star, Percent } from 'lucide-react';

const Analytics = () => {
  const metrics = [
    { label: "Avg. Guests", value: "2.4", change: "+0.3", icon: Users, color: "indigo" },
    { label: "Avg. Stay", value: "3.2 days", change: "+0.5", icon: Clock, color: "pink" },
    { label: "Rating", value: "4.8", change: "234 reviews", icon: Star, color: "amber" },
    { label: "Conversion", value: "68%", change: "+5%", icon: Percent, color: "emerald" }
  ];

  return (
    <div className="p-6 pt-8 space-y-6">
      <Header title="Analytics" />
      
      {/* Chart Placeholder */}
      <GlassCard className="p-5 h-64 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent"></div>
        <div className="text-center relative z-10">
          <BarChart3 size={48} className="text-indigo-400 mx-auto mb-3 opacity-50" />
          <p className="text-slate-400">Revenue visualization</p>
          <p className="text-2xl font-bold text-white mt-2">₦24.5M</p>
          <p className="text-sm text-emerald-400">+12.5% vs last month</p>
        </div>
        <svg className="absolute bottom-0 left-0 right-0 h-32 w-full opacity-20" preserveAspectRatio="none">
          <path d="M0,100 Q100,50 200,80 T400,40 T600,90 T800,20 V150 H0 Z" fill="url(#gradient)" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </GlassCard>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, idx) => (
          <GlassCard key={idx} className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <metric.icon size={16} className={`text-${metric.color}-400`} />
              <span className="text-sm text-slate-400">{metric.label}</span>
            </div>
            <p className="text-2xl font-bold text-white">{metric.value}</p>
            <p className="text-xs text-emerald-400">{metric.change}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Analytics;