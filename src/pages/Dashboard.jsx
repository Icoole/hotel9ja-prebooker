import React from 'react';
import { useHotel } from '../context/HotelContext';
import Header from '../components/common/Header';
import StatCard from '../components/dashboard/StatCard';
import CommissionStatus from '../components/dashboard/CommissionStatus';
import QuickActions from '../components/dashboard/QuickActions';
import RecentBookings from '../components/dashboard/RecentBookings';
import { useBookings } from '../hooks/useBookings';

const Dashboard = () => {
  const { hotelData } = useHotel();
  const { allBookings } = useBookings();

  const stats = [
    { label: "Total Revenue", value: `₦${(hotelData.monthlyRevenue / 1000000).toFixed(1)}M`, change: "+12.5%", trend: "up", icon: "wallet" },
    { label: "Commission Paid", value: `₦${(hotelData.commissionPaid / 1000).toFixed(0)}K`, change: "+8.2%", trend: "up", icon: "percent" },
    { label: "Active Bookings", value: hotelData.totalBookings.toString(), change: "+23", trend: "up", icon: "calendar" },
    { label: "Occupancy Rate", value: `${hotelData.occupancy}%`, change: "+5%", trend: "up", icon: "users" }
  ];

  return (
    <div className="p-6 pt-8 space-y-6">
      <Header 
        title="Dashboard" 
        hotelImage={hotelData.image}
        showNotification={true}
      />
      
      <div className="space-y-2">
        <p className="text-slate-400">Welcome back,</p>
        <h2 className="text-xl font-semibold text-white truncate">{hotelData.name}</h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Commission Status */}
      <CommissionStatus 
        rate={hotelData.commissionRate}
        totalProtected={hotelData.commissionPaid}
      />

      {/* Quick Actions */}
      <QuickActions />

      {/* Recent Bookings */}
      <RecentBookings bookings={allBookings.slice(0, 3)} />
    </div>
  );
};

export default Dashboard;