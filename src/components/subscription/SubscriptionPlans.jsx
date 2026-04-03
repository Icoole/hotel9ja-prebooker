import React from 'react';
import GlassCard from '../common/GlassCard';
import Button from '../common/Button';
import { Crown } from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '../../constants/subscriptionPlans';

const SubscriptionPlans = () => {
  return (
    <div className="space-y-4 animate-slide-in-right">
      <div>
        <h3 className="text-lg font-semibold text-white">Annual Subscription Plans</h3>
        <p className="text-sm text-slate-400">Based on annual booking volume</p>
      </div>

      <div className="space-y-3">
        {SUBSCRIPTION_PLANS.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      <GlassCard className="p-4 bg-amber-500/10 border-amber-500/30">
        <div className="flex items-start gap-3">
          <Crown className="text-amber-400 shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-semibold text-amber-400 mb-1">Subscription Benefits</h4>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• Zero commission on individual bookings</li>
              <li>• Premium placement in search results</li>
              <li>• Dedicated account manager</li>
              <li>• Advanced marketing tools</li>
            </ul>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

const PlanCard = ({ plan }) => (
  <GlassCard 
    className={`p-5 relative overflow-hidden cursor-pointer transition-all ${
      plan.popular ? 'border-2 border-indigo-500/50' : 'border border-white/10'
    }`}
  >
    {plan.popular && (
      <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs px-3 py-1 rounded-bl-xl font-semibold">
        POPULAR
      </div>
    )}
    {plan.best && (
      <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-orange-500 text-white text-xs px-3 py-1 rounded-bl-xl font-semibold">
        BEST VALUE
      </div>
    )}
    
    <div className="flex items-center justify-between mb-3">
      <div>
        <h4 className="text-lg font-bold text-white">Plan {plan.id.toUpperCase()}</h4>
        <p className="text-sm text-slate-400">{plan.range} {plan.bookings}</p>
        <p className="text-xs text-slate-500 mt-1">{plan.description}</p>
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold text-white">₦{(plan.price / 1000000).toFixed(2)}M</p>
        <p className="text-xs text-slate-400">per annum</p>
      </div>
    </div>

    <div className="flex items-center gap-2 mb-4">
      <div className="flex-1 h-2 bg-slate-700/50 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
          style={{ 
            width: plan.id === 'a' ? '25%' : plan.id === 'b' ? '50%' : plan.id === 'c' ? '75%' : '100%' 
          }}
        ></div>
      </div>
    </div>

    <Button variant={plan.popular ? 'primary' : 'secondary'} fullWidth size="sm">
      Select Plan
    </Button>
  </GlassCard>
);

export default SubscriptionPlans;