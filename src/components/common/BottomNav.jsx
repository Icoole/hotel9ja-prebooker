import React from 'react';
import { NavLink } from 'react-router-dom';
import { PieChart, Calendar, Crown, BarChart3, Settings } from 'lucide-react';
import GlassCard from './GlassCard';

const navItems = [
  { path: '/', label: 'Dashboard', icon: PieChart },
  { path: '/bookings', label: 'Bookings', icon: Calendar },
  { path: '/subscription', label: 'Plans', icon: Crown },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/settings', label: 'Settings', icon: Settings }
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-4 safe-area-bottom">
      <div className="max-w-md mx-auto">
        <GlassCard padding="small" className="flex items-center justify-around">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${isActive ? 'text-indigo-400 scale-110' : 'text-slate-500 hover:text-slate-300'}`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-indigo-500/20 shadow-lg shadow-indigo-500/20' : ''}`}>
                    <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  <span className={`text-[10px] font-medium transition-all ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </GlassCard>
      </div>
    </nav>
  );
};

export default BottomNav;