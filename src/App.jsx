import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Register from './pages/register/Register';
import NewsPage from './pages/news/NewsPage';
import ArticlePage from './pages/news/ArticlePage';
function App() {
  // Logic quản lý vùng: 'hcm' đại diện cho Nội thành, 'tinh' đại diện cho Ngoại thành
  const [region, setRegion] = useState('hcm');

  return (
    <Router>
      <div className="app-container">
        {/* Truyền biến region và hàm setRegion xuống Navbar để người dùng có thể click đổi */}
        <Navbar region={region} setRegion={setRegion} />

        <Routes>
          {/* TRANG CHỦ: Nhận region để hiển thị giá các Slider tương ứng */}
          <Route path="/" element={<Home region={region} />} />

          {/* NHÓM INTERNET: Mỗi trang sẽ nhận region để tự cập nhật giá gói cước */}
          <Route path="/internet/wifi-7" element={<Wifi7 region={region} />} />
          <Route path="/internet/combo" element={<Combo region={region} />} />
          <Route path="/internet/ca-nhan" element={<CaNhan region={region} />} />
          <Route path="/internet/gia-dinh" element={<GiaDinh region={region} />} />
          <Route path="/internet/game-thu" element={<GameThu region={region} />} />
          <Route path="/internet/doanh-nghiep" element={<DoanhNghiep region={region} />} />

          {/* NHÓM GIẢI TRÍ */}
          <Route path="/giai-tri/fpt-play" element={<FptPlay region={region} />} />

          {/* NHÓM THIẾT BỊ */}
          <Route path="/thiet-bi/camera" element={<Camera region={region} />} />

          {/* TIN TỨC & HỖ TRỢ */}
          <Route path="/tin-tuc" element={<NewsPage />} />
          <Route path="/tin-tuc/:id" element={<ArticlePage />} />
          <Route path="/ho-tro" element={<div>Trang Hỗ trợ</div>} />
          <Route path="/dang-ky" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;