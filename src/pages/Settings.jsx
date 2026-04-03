import React, { useState } from 'react';
import Header from '../components/common/Header';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';
import { useHotel } from '../context/HotelContext';
import { useAuth } from '../context/AuthContext';
import { Mail, Phone, MapPin, CreditCard, Shield, LogOut } from 'lucide-react';

const Settings = () => {
  const { hotelData, updateHotelData } = useHotel();
  const { logout } = useAuth();
  const [formData, setFormData] = useState(hotelData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateHotelData(formData);
  };

  return (
    <div className="p-6 pt-8 space-y-6 pb-32">
      <Header title="Settings" />
      
      {/* Profile Section */}
      <GlassCard className="p-5">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img 
              src={hotelData.image} 
              alt="Hotel" 
              className="w-20 h-20 rounded-2xl object-cover"
            />
            <button className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-indigo-500 text-white shadow-lg">
              <PlusIcon />
            </button>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg">{hotelData.name}</h3>
            <div className="flex items-center gap-1 text-amber-400">
              <StarIcon />
              <span className="font-semibold">{hotelData.rating}</span>
              <span className="text-slate-400 text-sm">(234 reviews)</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <InputField 
            label="Hotel Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField 
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            icon={<Mail size={18} className="text-slate-500" />}
          />
          <InputField 
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            icon={<Phone size={18} className="text-slate-500" />}
          />
          <InputField 
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            icon={<MapPin size={18} className="text-slate-500" />}
          />
        </div>

        <Button variant="primary" fullWidth className="mt-6" onClick={handleSave}>
          Save Changes
        </Button>
      </GlassCard>

      {/* Payment Settings */}
      <GlassCard className="p-5">
        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
          <CreditCard size={20} className="text-indigo-400" />
          Payment Settings
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Shield size={20} className="text-emerald-400" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Commission Auto-Deduct</p>
                <p className="text-xs text-slate-400">Automatically deduct commission</p>
              </div>
            </div>
            <ToggleSwitch enabled={true} />
          </div>
        </div>
      </GlassCard>

      <Button variant="danger" fullWidth onClick={logout} icon={LogOut}>
        Log Out
      </Button>
    </div>
  );
};

const InputField = ({ label, icon, ...props }) => (
  <div className="space-y-2">
    <label className="text-sm text-slate-400">{label}</label>
    <div className="flex items-center gap-3 bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus-within:border-indigo-500 transition-colors">
      {icon && icon}
      <input 
        className="flex-1 bg-transparent text-white focus:outline-none text-sm"
        {...props}
      />
    </div>
  </div>
);

const ToggleSwitch = ({ enabled }) => (
  <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${enabled ? 'bg-emerald-500' : 'bg-slate-600'}`}>
    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-md transition-all ${enabled ? 'right-1' : 'left-1'}`}></div>
  </div>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default Settings;