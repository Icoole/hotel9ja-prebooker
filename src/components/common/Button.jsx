import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  icon: Icon,
  fullWidth = false,
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = "relative overflow-hidden font-semibold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02]",
    secondary: "bg-slate-700/50 text-white border border-white/10 hover:bg-slate-700/70 backdrop-blur-sm",
    success: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30",
    danger: "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/30",
    ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
    glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10",
    outline: "bg-transparent border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-xl",
    md: "px-6 py-3 text-base rounded-2xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
    icon: "p-3 rounded-xl"
  };

  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />}
      {children}
    </button>
  );
};

export default Button;