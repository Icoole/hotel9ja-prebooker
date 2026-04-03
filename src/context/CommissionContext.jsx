import React, { createContext, useContext, useState, useCallback } from 'react';
import { COMMISSION_RATES } from '../constants/commissionRates';

const CommissionContext = createContext(null);

export const CommissionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [totalCommission, setTotalCommission] = useState(0);

  const calculateCommission = useCallback((amount, type = 'retail', hasRatingBooster = false) => {
    let rate = COMMISSION_RATES.RETAIL_STANDARD;
    
    if (type === 'retail' && hasRatingBooster) {
      rate = COMMISSION_RATES.RETAIL_BOOSTER;
    } else if (type === 'subscription') {
      rate = 0; // No commission on subscription model
    }
    
    return (amount * rate) / 100;
  }, []);

  const recordTransaction = useCallback((bookingData) => {
    const commission = calculateCommission(
      bookingData.amount, 
      bookingData.type, 
      bookingData.hasRatingBooster
    );
    
    const transaction = {
      id: Date.now(),
      ...bookingData,
      commission,
      timestamp: new Date().toISOString(),
      status: 'protected'
    };
    
    setTransactions(prev => [transaction, ...prev]);
    setTotalCommission(prev => prev + commission);
    
    return transaction;
  }, [calculateCommission]);

  return (
    <CommissionContext.Provider value={{
      transactions,
      totalCommission,
      calculateCommission,
      recordTransaction
    }}>
      {children}
    </CommissionContext.Provider>
  );
};

export const useCommission = () => {
  const context = useContext(CommissionContext);
  if (!context) {
    throw new Error('useCommission must be used within a CommissionProvider');
  }
  return context;
};