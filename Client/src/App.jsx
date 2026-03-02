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
    </Routes>
  );
}

export default App;
