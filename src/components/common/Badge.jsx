import React from 'react';

const Badge = ({ children, variant = 'default', className = '', size = 'md' }) => {
  const variants = {
    default: "bg-slate-700/50 text-slate-300 border-slate-600/30",
    success: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    warning: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    danger: "bg-red-500/20 text-red-400 border-red-500/30",
    primary: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    premium: "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
    secondary: "bg-purple-500/20 text-purple-400 border-purple-500/30"
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
    lg: "px-4 py-1.5 text-sm"
  };

  return (
    <span className={`rounded-full font-medium border backdrop-blur-sm ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;