import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/home/Home';
import Wifi7 from './pages/internet/Wifi7';
import Combo from './pages/internet/Combo';
import CaNhan from './pages/internet/CaNhan';
import GiaDinh from './pages/internet/GiaDinh';
import GameThu from './pages/internet/GameThu';
import DoanhNghiep from './pages/internet/DoanhNghiep';
import FptPlay from './pages/giai-tri/FptPlay';
import Camera from './pages/smart-device/Camera';
import SmartHome from './pages/smart-device/SmartHome';
import Support from './pages/support/Support';
import NewsPage from './pages/news/NewsPage';
import ArticlePage from './pages/news/ArticlePage';
import { RegisterProvider } from './context/RegisterContext';
import RegisterModal from './components/common/RegisterModal';
import FloatingContact from './components/common/FloatingContact';
import ScrollToTop from './components/common/ScrollToTop';
import SupportCTA from './components/common/SupportCTA';

function App() {
  const [region, setRegion] = useState('hcm');

  return (
    <RegisterProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container">
          <Navbar region={region} setRegion={setRegion} />
          
          <RegisterModal />
          <FloatingContact />

          <Routes>
            <Route path="/" element={<Navigate to="/trang-chu" replace />} />
            <Route path="/trang-chu" element={<Home region={region} />} />
            <Route path="/internet/wifi-7" element={<Wifi7 region={region} />} />
            <Route path="/internet/combo" element={<Combo region={region} />} />
            <Route path="/internet/ca-nhan" element={<CaNhan region={region} />} />
            <Route path="/internet/gia-dinh" element={<GiaDinh region={region} />} />
            <Route path="/internet/game-thu" element={<GameThu region={region} />} />
            <Route path="/internet/doanh-nghiep" element={<DoanhNghiep region={region} />} />
            <Route path="/giai-tri/fpt-play" element={<FptPlay region={region} />} />
            <Route path="/thiet-bi/camera" element={<Camera region={region} />} />
            <Route path="/thiet-bi/smarthome" element={<SmartHome region={region} />} />
            <Route path="/tin-tuc" element={<NewsPage />} />
            <Route path="/tin-tuc/:id" element={<ArticlePage />} />
            <Route path="/ho-tro" element={<Support />} />
          </Routes>
          <SupportCTA />
          <Footer />
        </div>
      </Router>
    </RegisterProvider>
  );
}

export default App;