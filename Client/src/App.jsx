import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import logger from './utils/logger';
import HomePage from './Pages/Public/Home Page';
import HowItWorks from './Pages/Public/HowItWorks';
import Features from './Pages/Public/Features';
import AboutUs from './Pages/Public/AboutUs';
import ContactUs from './Pages/Public/ContactUs';
import Login from './Pages/Public/Login';
import Registration from './Pages/Public/Registration';
import ForgotPassword from './Pages/Public/ForgotPassword';
import VerifyEmail from './Pages/Public/VerifyEmail';
import RegistrationSuccess from './Pages/Public/RegistrationSuccess';
import ResetPassword from './Pages/Public/ResetPassword';
import ResetPasswordSuccess from './Pages/Public/ResetPasswordSuccess';
import PatientDashboard from './Pages/PatientPortal/Dashboard';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        logger.info('App', 'Checking authentication status');
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/me`, {
          credentials: 'include'
        });

        logger.api('GET', `${import.meta.env.VITE_API_BASE_URL}/auth/me`, response.status);

        if (response.ok) {
          const data = await response.json();
          const user = data.user;
          localStorage.setItem('user', JSON.stringify(user));

          logger.info('App', 'User authenticated', { role: user.role });

          // Auto-redirect if on public pages (login, home, register)
          const publicPaths = ['/', '/login', '/register'];
          if (publicPaths.includes(location.pathname)) {
            logger.user('Auto-redirect', { from: location.pathname, role: user.role });
            if (user.role === 'Patient') navigate('/patient-dashboard');
            else if (user.role === 'Doctor') navigate('/doctor-dashboard');
            else if (user.role === 'Admin') navigate('/admin-dashboard');
            else if (user.role === 'Pharmacy') navigate('/pharmacy-dashboard');
          }
        }
      } catch (err) {
        logger.warn('App', 'Authentication check failed or user not logged in', { error: err.message });
        // Not logged in or error, stay on current page
      }
    };

    checkAuth();
  }, [navigate]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/registration-success" element={<RegistrationSuccess />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/reset-password-success" element={<ResetPasswordSuccess />} />
      <Route path="/patient-dashboard" element={<PatientDashboard />} />
    </Routes>
  );
}

export default App;
