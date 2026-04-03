import React from 'react';
import { Bell, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ title, showBack = false, showNotification = true, hotelImage }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-xl bg-slate-800/50 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            {title}
          </h1>
        </div>
      </div>
      
      <div className="flex gap-3">
        {showNotification && (
          <button className="p-3 rounded-2xl bg-slate-800/50 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
          </button>
        )}
        {hotelImage && (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 p-[2px]">
            <img 
              src={hotelImage} 
              alt="Hotel" 
              className="w-full h-full rounded-[14px] object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;