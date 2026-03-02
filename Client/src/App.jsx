import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Public/Home Page';
import HowItWorks from './Pages/Public/HowItWorks';
import Features from './Pages/Public/Features';
import AboutUs from './Pages/Public/AboutUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
