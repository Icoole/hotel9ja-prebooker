import React from 'react';

const GlassCard = ({ children, className = '', style = {}, onClick, padding = 'normal' }) => {
  const paddingClasses = {
    none: '',
    small: 'p-3',
    normal: 'p-4',
    large: 'p-6',
  };

  return (
    <div 
      onClick={onClick}
      className={`backdrop-blur-xl bg-slate-800/40 border border-white/10 rounded-3xl shadow-glass ${paddingClasses[padding]} ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 0 rgba(255,255,255,0.1)',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;