import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { HotelProvider } from './context/HotelContext';
import { CommissionProvider } from './context/CommissionContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import BottomNav from './components/common/BottomNav';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Subscription from './pages/Subscription';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

function App() {
  return (
    <AuthProvider>
      <HotelProvider>
        <CommissionProvider>
          <Router>
            <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
              <div className="max-w-md mx-auto min-h-screen relative overflow-hidden bg-slate-950">
                {/* Background Gradients */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]"></div>
                  <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px]"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px]"></div>
                </div>

                {/* Main Content */}
                <main className="relative z-10 pb-24">
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    } />
                    <Route path="/bookings" element={
                      <ProtectedRoute>
                        <Bookings />
                      </ProtectedRoute>
                    } />
                    <Route path="/subscription" element={
                      <ProtectedRoute>
                        <Subscription />
                      </ProtectedRoute>
                    } />
                    <Route path="/analytics" element={
                      <ProtectedRoute>
                        <Analytics />
                      </ProtectedRoute>
                    } />
                    <Route path="/settings" element={
                      <ProtectedRoute>
                        <Settings />
                      </ProtectedRoute>
                    } />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </main>

                {/* Bottom Navigation - Only show on protected routes */}
                <ProtectedRoute>
                  <BottomNav />
                </ProtectedRoute>
              </div>
            </div>
          </Router>
        </CommissionProvider>
      </HotelProvider>
    </AuthProvider>
  );
}

export default App;