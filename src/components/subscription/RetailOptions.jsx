import React from 'react';
import GlassCard from '../common/GlassCard';
import Button from '../common/Button';
import { CheckCircle2 } from 'lucide-react';
import { RETAIL_OPTIONS } from '../../constants/subscriptionPlans';

const RetailOptions = () => {
  return (
    <div className="space-y-4 animate-slide-in-right">
      <h3 className="text-lg font-semibold text-white">Retail Commission Options</h3>
      
      {RETAIL_OPTIONS.map((option) => (
        <GlassCard 
          key={option.id} 
          className={`p-5 relative group cursor-pointer border-2 transition-all ${
            option.recommended 
              ? 'border-pink-500/50 hover:border-pink-500' 
              : 'border-transparent hover:border-indigo-500/50'
          }`}
        >
          {option.recommended && (
            <div className="absolute top-0 right-0 bg-gradient-to-l from-pink-500 to-purple-500 text-white text-xs px-3 py-1 rounded-bl-xl font-semibold">
              RECOMMENDED
            </div>
          )}
          
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-xl font-bold text-white mb-1">{option.name}</h4>
              <p className="text-slate-400 text-sm">{option.description}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-white">{option.rate}%</p>
              <p className="text-xs text-slate-400">per booking</p>
            </div>
          </div>
          
          <ul className="space-y-2 mb-4">
            {option.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-400" />
                {feature}
              </li>
            ))}
          </ul>
          
          <Button 
            variant={option.recommended ? 'primary' : 'secondary'} 
            fullWidth
          >
            {option.recommended ? 'Upgrade to Plus' : 'Current Plan'}
          </Button>
        </GlassCard>
      ))}
    </div>
  );
};

export default RetailOptions;