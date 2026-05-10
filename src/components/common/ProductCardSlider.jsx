import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Download, Upload, Check } from 'lucide-react';
import { useRegisterModal } from '../../context/RegisterContext';
import { useProductDetail } from '../../context/ProductDetailContext';

/**
 * ProductCardSlider - Card slider tái sử dụng cho mọi section
 * Props:
 *  - title: tiêu đề section
 *  - subtitle: phụ đề (optional)
 *  - data: mảng sản phẩm
 *  - region: vùng miền hiện tại
 *  - badgeSub: dòng phụ trên banner overlay (optional, mặc định = tên gói)
 *  - customCardClass: class CSS bổ sung cho từng card
 */
export default function ProductCardSlider({ title, subtitle, data, region, badgeSub, customCardClass }) {
  const scrollRef = useRef(null);
  const { openModal } = useRegisterModal();
  const { openDetail } = useProductDetail();

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const w = el.offsetWidth * 0.75;
    el.scrollBy({ left: dir === 'left' ? -w : w, behavior: 'smooth' });
  };

  if (!data || data.length === 0) return null;

  return (
    <section className="combo-sport-section" aria-label={title}>
      {/* HEADER */}
      <div className="combo-sport-header">
        <div className="combo-sport-title-group">
          {title && <h2 className="combo-sport-title">{title}</h2>}
          {subtitle && <p className="combo-sport-subtitle">{subtitle}</p>}
        </div>
      </div>

      {/* CARD TRACK CONTAINER */}
      <div className="combo-sport-track-container">
        <button className="combo-nav-btn prev" onClick={() => scroll('left')} aria-label="Xem trước">
          <ChevronLeft size={24} />
        </button>

        <div className="combo-sport-track" ref={scrollRef}>
          {data.map((item) => {
            const price = typeof item.price === 'object' ? item.price[region] : item.price;

            return (
              <article className={`combo-card ${customCardClass || ''}`.trim()} key={item.id}>
                {/* BANNER IMAGE + OVERLAY */}
                <div className="combo-card-banner">
                  <img
                    src={item.image}
                    alt={item.alt || `${item.name} FPT Telecom`}
                    loading="lazy"
                    width="300"
                    height="180"
                  />

                  {item.promo && <span className="combo-promo-badge">{item.promo}</span>}
                </div>

                {/* CONTENT */}
                <div className="combo-card-body">
                  <h3 className="combo-card-name">{item.name}</h3>
                  <div className="combo-card-price">
                    <span className="combo-price-value">{(price || 0).toLocaleString('vi-VN')}đ</span>
                    <span className="combo-price-unit">/tháng</span>
                  </div>

                  {/* SPEED BOX */}
                  {item.dl && item.ul && (
                    <div className="combo-speed-box">
                      <span className="combo-speed-label">Tốc độ (Download/Upload)</span>
                      <div className="combo-speed-row">
                        <div className="combo-speed-item">
                          <Download size={14} className="combo-speed-icon dl" aria-hidden="true" />
                          <span>{item.dl}</span>
                        </div>
                        <div className="combo-speed-item">
                          <Upload size={14} className="combo-speed-icon ul" aria-hidden="true" />
                          <span>{item.ul}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FEATURES */}
                  <ul className="combo-features">
                    {(item.features || item.details)?.map((f, i) => (
                      <li key={i}>
                        <Check size={15} className="combo-check-icon" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* BUTTON */}
                  <div className="combo-card-actions" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <button
                      onClick={() => openModal(item.name, item.id)}
                      className="combo-btn-primary"
                      title={`Đăng ký ${item.name} ngay hôm nay`}
                    >
                      Đăng ký ngay
                    </button>
                    <button
                      onClick={() => openDetail(item)}
                      className="combo-btn-link"
                      title={`Xem chi tiết ${item.name}`}
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <button className="combo-nav-btn next" onClick={() => scroll('right')} aria-label="Xem tiếp">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
