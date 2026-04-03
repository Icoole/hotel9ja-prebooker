import { useState, useCallback } from 'react';

const mockBookings = [
  { id: 1, guest: "Chioma Adeleke", room: "Deluxe Suite", checkIn: "2026-04-05", checkOut: "2026-04-08", amount: 450000, status: "confirmed", commission: 18000 },
  { id: 2, guest: "James Okonkwo", room: "Standard Room", checkIn: "2026-04-06", checkOut: "2026-04-07", amount: 85000, status: "pending", commission: 3400 },
  { id: 3, guest: "Amina Ibrahim", room: "Presidential Suite", checkIn: "2026-04-10", checkOut: "2026-04-15", amount: 1250000, status: "confirmed", commission: 50000 },
  { id: 4, guest: "Emmanuel Nwosu", room: "Double Room", checkIn: "2026-04-12", checkOut: "2026-04-14", amount: 120000, status: "cancelled", commission: 0 }
];

export const useBookings = () => {
  const [bookings, setBookings] = useState(mockBookings);
  const [filter, setFilter] = useState('all');

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'all') return true;
    return booking.status === filter;
  });

  const updateBookingStatus = useCallback((id, newStatus) => {
    setBookings(prev => prev.map(booking => 
      booking.id === id ? { ...booking, status: newStatus } : booking
    ));
  }, []);

  const addBooking = useCallback((bookingData) => {
    const newBooking = {
      id: Date.now(),
      ...bookingData,
      status: 'pending'
    };
    setBookings(prev => [newBooking, ...prev]);
  }, []);

  return {
    bookings: filteredBookings,
    allBookings: bookings,
    filter,
    setFilter,
    updateBookingStatus,
    addBooking
  };
};