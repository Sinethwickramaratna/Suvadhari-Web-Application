import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
