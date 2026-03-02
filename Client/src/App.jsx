import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Public/Home Page';
import HowItWorks from './Pages/Public/HowItWorks';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
    </Routes>
  );
}

export default App;
