import React, { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const HotelContext = createContext(null);

const defaultHotelData = {
  name: "Grand Continental Lagos",
  rating: 4.8,
  totalBookings: 156,
  monthlyRevenue: 2450000,
  commissionPaid: 98000,
  subscriptionType: "retail",
  commissionRate: 4,
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
  rooms: 45,
  occupancy: 78,
  email: "contact@grandcontinental.com",
  phone: "+234 801 234 5678",
  address: "123 Victoria Island, Lagos"
};

export const HotelProvider = ({ children }) => {
  const [hotelData, setHotelData] = useLocalStorage('hotel9ja_data', defaultHotelData);

  const updateHotelData = (newData) => {
    setHotelData(prev => ({ ...prev, ...newData }));
  };

  return (
    <HotelContext.Provider value={{ hotelData, updateHotelData }}>
      {children}
    </HotelContext.Provider>
  );
};

export const useHotel = () => {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error('useHotel must be used within a HotelProvider');
  }
  return context;
};