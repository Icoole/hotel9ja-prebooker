import React from 'react';

const BookingFilters = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All', color: 'indigo' },
    { id: 'confirmed', label: 'Confirmed', color: 'emerald' },
    { id: 'pending', label: 'Pending', color: 'amber' },
    { id: 'cancelled', label: 'Cancelled', color: 'red' }
  ];

  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
            currentFilter === filter.id 
              ? `bg-${filter.color}-500 text-white shadow-lg` 
              : 'bg-slate-800/50 text-slate-400 hover:text-white'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default BookingFilters;