import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { RegisterProvider } from './context/RegisterContext';
import RegisterModal from './components/common/RegisterModal';
import FloatingContact from './components/common/FloatingContact';
import ScrollToTop from './components/common/ScrollToTop';
import SupportCTA from './components/common/SupportCTA';

// Lazy-load pages: giảm JS bundle ban đầu, chỉ tải khi user truy cập
const Home = lazy(() => import('./pages/home/Home'));
const Wifi7 = lazy(() => import('./pages/internet/Wifi7'));
const Combo = lazy(() => import('./pages/internet/Combo'));
const CaNhan = lazy(() => import('./pages/internet/CaNhan'));
const GiaDinh = lazy(() => import('./pages/internet/GiaDinh'));
const GameThu = lazy(() => import('./pages/internet/GameThu'));
const DoanhNghiep = lazy(() => import('./pages/internet/DoanhNghiep'));
const FptPlay = lazy(() => import('./pages/giai-tri/FptPlay'));
const Camera = lazy(() => import('./pages/smart-device/Camera'));
const SmartHome = lazy(() => import('./pages/smart-device/SmartHome'));
const Support = lazy(() => import('./pages/support/Support'));
const NewsPage = lazy(() => import('./pages/news/NewsPage'));
const ArticlePage = lazy(() => import('./pages/news/ArticlePage'));

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

          <main id="main-content" role="main" style={{ minHeight: '100vh' }}>
            <Suspense fallback={
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '60vh',
                color: '#999'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: 40, height: 40, 
                    border: '3px solid #f3f3f3', 
                    borderTop: '3px solid #f57020', 
                    borderRadius: '50%', 
                    animation: 'spin 0.8s linear infinite',
                    margin: '0 auto 12px'
                  }} />
                  Đang tải...
                </div>
              </div>
            }>
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
            </Suspense>
          </main>
          <SupportCTA />
          <Footer />
        </div>
      </Router>
    </RegisterProvider>
  );
}

export default App;