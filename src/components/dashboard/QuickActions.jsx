import React, { useState } from 'react';
import GlassCard from '../common/GlassCard';
import Button from '../common/Button';
import { Plus, Percent, Image as ImageIcon, TrendingUp, X } from 'lucide-react';

const QuickActions = () => {
  const [showModal, setShowModal] = useState(false);

  const actions = [
    { icon: Plus, label: 'Add Room', color: 'indigo', onClick: () => setShowModal(true) },
    { icon: Percent, label: 'Add Discount', color: 'pink', onClick: () => {} },
    { icon: ImageIcon, label: 'Update Photos', color: 'amber', onClick: () => {} },
    { icon: TrendingUp, label: 'Promote', color: 'emerald', onClick: () => {} }
  ];

  return (
    <>
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, idx) => (
            <Button 
              key={idx}
              variant="glass" 
              className="flex-col py-6 gap-2" 
              onClick={action.onClick}
            >
              <action.icon size={24} className={`text-${action.color}-400`} />
              <span className="text-sm">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <GlassCard className="w-full max-w-sm p-6 animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Add New Room</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 rounded-xl bg-slate-800/50 text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Room Type</label>
                <select className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500">
                  <option>Standard Room</option>
                  <option>Deluxe Room</option>
                  <option>Suite</option>
                  <option>Presidential Suite</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Price per Night (₦)</label>
                <input 
                  type="number" 
                  placeholder="0.00"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <Button variant="primary" fullWidth onClick={() => setShowModal(false)}>
                Add Room
              </Button>
            </div>
          </GlassCard>
        </div>
      )}
    </>
  );
};

export default QuickActions;