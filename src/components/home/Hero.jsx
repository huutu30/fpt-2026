import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Globe, Tv, Camera, Home as HomeIcon } from 'lucide-react';
import { BANNER_DATA, QUICK_LINKS } from '../../data/productData';

// Map icon để hiển thị đúng loại dịch vụ trên thanh Quick Link
const iconMap = {
  internet: <Globe size={24} color="#f57020" />,
  fptplay: <Tv size={24} color="#f57020" />,
  camera: <Camera size={24} color="#f57020" />,
  smarthome: <HomeIcon size={24} color="#f57020" />
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Logic chuyển slide
  const nextSlide = () => setIndex((prev) => (prev === BANNER_DATA.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setIndex((prev) => (prev === 0 ? BANNER_DATA.length - 1 : prev - 1));

  // Tự động chạy slide sau 5 giây
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!BANNER_DATA || BANNER_DATA.length === 0) return null;

  return (
    <section style={styles.heroContainer}>
      {/* 1. SLIDER ẢNH TRÀN VIỀN */}
      <div className="hero-slider" style={styles.slider}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ duration: 0.8 }}
            style={{ 
              ...styles.slide, 
              backgroundImage: `url(${BANNER_DATA[index].image})` 
            }}
          />
        </AnimatePresence>

        {/* Nút điều hướng Arrow */}
        <button onClick={prevSlide} style={{ ...styles.navBtn, left: '20px' }}>
          <ChevronLeft color="#fff" />
        </button>
        <button onClick={nextSlide} style={{ ...styles.navBtn, right: '20px' }}>
          <ChevronRight color="#fff" />
        </button>

        {/* Chỉ số trang 1/4 chuẩn ảnh mẫu */}
        <div style={styles.pagination}>
          {index + 1} / {BANNER_DATA.length}
        </div>
      </div>

      {/* 2. THANH QUICK LINKS ĐÈ LÊN CHÂN BANNER */}
      <div className="container hero-quicklink-wrapper">
        <div className="hero-quicklink-bar">
          {QUICK_LINKS.map((item) => (
            <motion.div 
              key={item.id} 
              whileHover={{ y: -5 }} 
              className="hero-quicklink-item"
            >
              <div className="hero-quicklink-icon">
                {iconMap[item.id] || <Globe size={24} color="#f57020" />}
              </div>
              <span className="hero-quicklink-label">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  heroContainer: { width: '100%', position: 'relative', background: '#fff' },
  slider: { 
    width: '100%', 
    position: 'relative', 
    overflow: 'hidden' 
  },
  slide: { 
    width: '100%', 
    height: '100%', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    transition: 'background-image 0.5s ease-in-out'
  },
  navBtn: {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.2)', border: 'none', width: '45px', height: '45px',
    borderRadius: '50%', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  pagination: {
    position: 'absolute', bottom: '80px', right: '50px',
    background: 'rgba(0,0,0,0.5)', color: '#fff', padding: '5px 15px',
    borderRadius: '20px', fontSize: '14px', zIndex: 10, fontWeight: 'bold'
  }
};