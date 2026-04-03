import React from 'react';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { Shield } from 'lucide-react';

const CommissionStatus = ({ rate, totalProtected }) => {
  return (
    <GlassCard className="p-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30">
              <Shield size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white">Commission Protection</h3>
              <p className="text-sm text-slate-300">Active on all transactions</p>
            </div>
          </div>
          <Badge variant="success">Secure</Badge>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Current Rate</span>
            <span className="text-white font-semibold">{rate}% per booking</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Total Protected</span>
            <span className="text-emerald-400 font-semibold">₦{totalProtected.toLocaleString()}</span>
          </div>
          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default CommissionStatus;