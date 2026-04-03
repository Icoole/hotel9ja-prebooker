import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    hotelName: '',
    email: '',
    password: '',
    address: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ email: formData.email, name: formData.hotelName });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold gradient-text mb-2">Get Started</h1>
          <p className="text-slate-400">Set up your hotel profile</p>
        </div>

        <GlassCard className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 ? (
              <>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Hotel Name</label>
                  <input 
                    type="text"
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                    placeholder="Grand Hotel"
                    value={formData.hotelName}
                    onChange={(e) => setFormData({...formData, hotelName: e.target.value})}
                  />
                </div>
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
                <Button variant="primary" fullWidth onClick={() => setStep(2)} type="button">
                  Continue
                </Button>
              </>
            ) : (
              <>
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
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Phone</label>
                  <input 
                    type="tel"
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                    placeholder="+234 801 234 5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" fullWidth onClick={() => setStep(1)} type="button">
                    Back
                  </Button>
                  <Button variant="primary" fullWidth type="submit">
                    Create Account
                  </Button>
                </div>
              </>
            )}
          </form>
          
          <p className="text-center text-sm text-slate-400 mt-4">
            Already have an account?{' '}
            <button onClick={() => navigate('/login')} className="text-indigo-400 hover:text-indigo-300">
              Sign In
            </button>
          </p>
        </GlassCard>
      </div>
    </div>
  );
};

export default Register;