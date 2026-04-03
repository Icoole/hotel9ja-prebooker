import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { ChevronRight } from 'lucide-react';

const RecentBookings = ({ bookings }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">Recent Bookings</h3>
        <button 
          onClick={() => navigate('/bookings')}
          className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
        >
          View All <ChevronRight size={16} />
        </button>
      </div>
      <div className="space-y-3">
        {bookings.map((booking) => (
          <GlassCard key={booking.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 font-semibold">
                {booking.guest.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{booking.guest}</p>
                <p className="text-xs text-slate-400">{booking.room}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-white text-sm">₦{booking.amount.toLocaleString()}</p>
              <Badge 
                variant={booking.status === 'confirmed' ? 'success' : booking.status === 'pending' ? 'warning' : 'danger'}
                size="sm"
              >
                {booking.status}
              </Badge>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default RecentBookings;