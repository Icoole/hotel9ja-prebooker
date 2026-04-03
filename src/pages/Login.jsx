import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login
    login({ email: formData.email, name: 'Hotel Manager' });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shadow-glow">
            <HotelIcon />
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Hotel 9ja</h1>
          <p className="text-slate-400">PreBooker Management</p>
        </div>

        <GlassCard className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-2">Email</label>
              <input 
                type="email"
                required
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                placeholder="hotel@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Password</label>
              <input 
                type="password"
                required
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
            <Button variant="primary" fullWidth type="submit">
              Sign In
            </Button>
          </form>
          
          <p className="text-center text-sm text-slate-400 mt-4">
            Don't have an account?{' '}
            <button onClick={() => navigate('/register')} className="text-indigo-400 hover:text-indigo-300">
              Register
            </button>
          </p>
        </GlassCard>
      </div>
    </div>
  );
};

const HotelIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
    <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"></path>
    <path d="M8 7h.01"></path>
    <path d="M16 7h.01"></path>
    <path d="M12 7h.01"></path>
    <path d="M12 11h.01"></path>
    <path d="M8 11h.01"></path>
    <path d="M16 11h.01"></path>
  </svg>
);

export default Login;