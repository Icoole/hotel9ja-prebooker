import React from 'react';
import Header from '../components/common/Header';
import BookingFilters from '../components/bookings/BookingFilters';
import CommissionCalculator from '../components/bookings/CommissionCalculator';
import BookingCard from '../components/bookings/BookingCard';
import { useBookings } from '../hooks/useBookings';
import { useHotel } from '../context/HotelContext';

const Bookings = () => {
  const { hotelData } = useHotel();
  const { bookings, filter, setFilter } = useBookings();

  return (
    <div className="p-6 pt-8 space-y-6">
      <Header title="Bookings" showBack={false} />
      
      <BookingFilters currentFilter={filter} onFilterChange={setFilter} />
      
      <CommissionCalculator 
        rate={hotelData.commissionRate}
        bookingsCount={bookings.length}
      />

      <div className="space-y-3">
        {bookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default Bookings;