import React from 'react';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { CheckCircle2, XCircle } from 'lucide-react';

const BookingCard = ({ booking }) => {
  return (
    <GlassCard className="p-4 space-y-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
            {booking.guest.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-white">{booking.guest}</h4>
            <p className="text-sm text-slate-400">{booking.room}</p>
          </div>
        </div>
        <Badge 
          variant={booking.status === 'confirmed' ? 'success' : booking.status === 'pending' ? 'warning' : 'danger'}
        >
          {booking.status}
        </Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/5">
        <div>
          <p className="text-xs text-slate-500 mb-1">Check In - Out</p>
          <p className="text-sm text-slate-300">{booking.checkIn} → {booking.checkOut}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500 mb-1">Total / Commission</p>
          <p className="text-sm text-white font-semibold">₦{booking.amount.toLocaleString()}</p>
          <p className="text-xs text-indigo-400">Commission: ₦{booking.commission.toLocaleString()}</p>
        </div>
      </div>

      {booking.status === 'pending' && (
        <div className="flex gap-2 pt-2">
          <Button variant="success" size="sm" fullWidth icon={CheckCircle2}>
            Confirm
          </Button>
          <Button variant="danger" size="sm" fullWidth icon={XCircle}>
            Decline
          </Button>
        </div>
      )}
    </GlassCard>
  );
};

export default BookingCard;