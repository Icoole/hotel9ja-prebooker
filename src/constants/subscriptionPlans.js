export const SUBSCRIPTION_PLANS = [
  { 
    id: 'a', 
    range: '1 - 100', 
    price: 120000, 
    bookings: 'bookings per annum', 
    popular: false,
    description: 'Perfect for small boutique hotels'
  },
  { 
    id: 'b', 
    range: '100 - 1,000', 
    price: 1250000, 
    bookings: 'bookings per annum', 
    popular: true,
    description: 'Ideal for growing establishments'
  },
  { 
    id: 'c', 
    range: '1,000 - 10,000', 
    price: 10250000, 
    bookings: 'bookings per annum', 
    popular: false,
    description: 'For large hotels and chains'
  },
  { 
    id: 'd', 
    range: 'Unlimited', 
    price: 25250000, 
    bookings: 'bookings per annum', 
    popular: false, 
    best: true,
    description: 'Enterprise solution with full features'
  }
];

export const RETAIL_OPTIONS = [
  {
    id: 'retail-standard',
    name: 'Standard Retail',
    rate: 4,
    description: 'Basic commission structure',
    features: [
      'Standard listing visibility',
      'Basic analytics',
      '24/7 support',
      'Commission protection'
    ],
    hasRatingBooster: false
  },
  {
    id: 'retail-plus',
    name: 'Retail Plus',
    rate: 5,
    description: 'With Rating Booster',
    features: [
      'Priority search ranking',
      'Rating booster algorithm',
      'Featured placement',
      'Advanced analytics',
      'Commission protection'
    ],
    hasRatingBooster: true,
    recommended: true
  }
];