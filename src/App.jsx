import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContact from './components/common/FloatingContact';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/home/Home';

function App() {
  const [activeCity] = useState('toan-quoc');
  const region = 'hcm';

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />

        <FloatingContact />

        <main id="main-content" role="main" style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<Home region={region} activeCity={activeCity} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
