import React, { useState } from 'react';
import Header from '../components/common/Header';
import RetailOptions from '../components/subscription/RetailOptions';
import SubscriptionPlans from '../components/subscription/SubscriptionPlans';
import { useHotel } from '../context/HotelContext';

const Subscription = () => {
  const { hotelData } = useHotel();
  const [selectedOption, setSelectedOption] = useState(hotelData.subscriptionType === 'retail' ? 'retail' : 'subscription');

  return (
    <div className="p-6 pt-8 space-y-6">
      <Header title="Subscription" />
      
      <p className="text-slate-400">Choose your operational model</p>

      {/* Current Plan Status */}
      <div className="glass-card p-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400 mb-1">Current Plan</p>
            <h3 className="text-2xl font-bold text-white mb-1">
              {hotelData.subscriptionType === 'retail' ? 'Retail Option' : 'Annual Subscription'}
            </h3>
            <p className="text-amber-400 font-medium">
              {hotelData.subscriptionType === 'retail' 
                ? `${hotelData.commissionRate}% per booking commission` 
                : 'Plan B - 100-1,000 bookings'}
            </p>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
            <ZapIcon />
          </div>
        </div>
      </div>

      {/* Toggle */}
      <div className="flex p-1 rounded-2xl bg-slate-800/50 border border-white/10">
        <button 
          className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${selectedOption === 'retail' ? 'bg-indigo-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          onClick={() => setSelectedOption('retail')}
        >
          Retail (Pay-as-you-go)
        </button>
        <button 
          className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${selectedOption === 'subscription' ? 'bg-indigo-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          onClick={() => setSelectedOption('subscription')}
        >
          Annual Subscription
        </button>
      </div>

      {selectedOption === 'retail' ? <RetailOptions /> : <SubscriptionPlans />}
    </div>
  );
};

// Simple icon component
const ZapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

export default Subscription;