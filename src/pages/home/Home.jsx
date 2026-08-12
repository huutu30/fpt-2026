import React, { useState, useRef } from 'react';
import SEOHead from '../../components/common/SEOHead';
import { HOTLINE } from '../../data/menuConfig';
import { Shield, Zap, Clock, Wifi, Check, Phone } from 'lucide-react';

export default function Home() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedPack, setSelectedPack] = useState('GIGA - 150Mbps');
  const [statusMsg, setStatusMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const packages = [
    {
      name: 'Gói GIGA',
      speed: '150 Mbps',
      price: '175.000đ',
      period: 'tháng',
      desc: 'Phù hợp học tập, làm việc nhẹ nhàng, lướt web, nghe nhạc cho cá nhân hoặc ít thiết bị.',
      features: ['Tốc độ tải xuống 150Mbps', 'Tải lên 150Mbps', 'Trang bị Modem Wi-Fi 5/6 thế hệ mới', 'Hỗ trợ kỹ thuật 24/7'],
      color: '#3b82f6',
      badge: ''
    },
    {
      name: 'Gói SKY',
      speed: '1 Gbps',
      price: '225.000đ',
      period: 'tháng',
      desc: 'Gói cước bán chạy nhất. Cực nhanh cho gia đình đông người, stream video và chơi game online.',
      features: ['Tốc độ tải xuống 1Gbps', 'Tải lên 150Mbps', 'Trang bị Modem Wi-Fi 6 siêu tốc', 'Ưu tiên băng thông quốc tế'],
      color: '#f97316',
      badge: 'Bán chạy nhất'
    },
    {
      name: 'Gói META',
      speed: '1 Gbps',
      price: '325.000đ',
      period: 'tháng',
      desc: 'Tốc độ không giới hạn cho gamer chuyên nghiệp, streamer và doanh nghiệp vừa/nhỏ.',
      features: ['Tốc độ tải xuống 1Gbps', 'Tải lên 1Gbps', 'Trang bị Modem Wi-Fi 6 chuyên dụng', 'Cam kết băng thông tối đa'],
      color: '#10b981',
      badge: 'Gaming & Stream'
    }
  ];

  const handleRegisterClick = (packageName) => {
    setSelectedPack(packageName);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      setStatusMsg('Vui lòng điền đầy đủ thông tin mẫu đăng ký.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setName('');
      setPhone('');
      setAddress('');
      setStatusMsg('Chúc mừng! Yêu cầu đăng ký lắp đặt của bạn đã được gửi thành công. Đầu số tổng đài FPT sẽ gọi hỗ trợ trong vòng 5 phút.');
    }, 1200);
  };

  return (
    <div style={{
      fontFamily: 'Inter, -apple-system, sans-serif',
      color: '#334155',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      lineHeight: '1.6'
    }}>
      <SEOHead
        title="Đăng Ký Lắp Mạng FPT - Cáp Quang Tốc Độ Cao 2026"
        description="Đăng ký lắp đặt mạng cáp quang FPT giá rẻ. Tốc độ vượt trội đến 1Gbps, tặng Modem Wi-Fi 6 hiện đại. Đăng ký ngay hôm nay tư vấn miễn phí."
        canonicalPath="/"
        keywords="lắp mạng fpt, internet fpt, cap quang fpt, dang ky mang fpt"
      />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
        color: '#ffffff',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Left Text */}
          <div>
            <span style={{
              backgroundColor: 'rgba(249, 115, 22, 0.2)',
              color: '#f97316',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'inline-block',
              marginBottom: '16px'
            }}>
              Khuyến mãi lớn nhất 2026
            </span>
            <h1 style={{
              fontSize: 'clamp(28px, 4.5vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '20px',
              letterSpacing: '-0.5px'
            }}>
              Lắp Mạng FPT <br />
              <span style={{ color: '#f97316' }}>Cáp Quang Siêu Tốc</span>
            </h1>
            <p style={{
              fontSize: '16px',
              opacity: 0.9,
              marginBottom: '32px',
              maxWidth: '500px'
            }}>
              Tận hưởng đường truyền internet ổn định, băng thông không giới hạn cực đỉnh. Trang bị Modem Wi-Fi 6 tiên tiến, giảm lag tuyệt đối. Lắp đặt nhanh chóng trong ngày.
            </p>

            {/* Quick Benefits list */}
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)', padding: '6px', borderRadius: '50%' }}>
                  <Shield size={16} color="#10b981" />
                </div>
                <span style={{ fontSize: '15px' }}>Đường truyền cáp quang bảo mật tối đa</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)', padding: '6px', borderRadius: '50%' }}>
                  <Zap size={16} color="#10b981" />
                </div>
                <span style={{ fontSize: '15px' }}>Trang bị Modem thế hệ mới Wi-Fi 6 miễn phí</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)', padding: '6px', borderRadius: '50%' }}>
                  <Clock size={16} color="#10b981" />
                </div>
                <span style={{ fontSize: '15px' }}>Lắp đặt siêu tốc trong vòng 24 giờ</span>
              </div>
            </div>
          </div>

          {/* Right Lead Register Form */}
          <div ref={formRef} style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
              Đăng Ký Tư Vấn Miễn Phí
            </h3>
            <p style={{ fontSize: '13px', opacity: 0.8, marginBottom: '24px' }}>
              Quý khách vui lòng cung cấp thông tin bên dưới, nhân viên hỗ trợ sẽ gọi điện hướng dẫn vị trí lắp ngay.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px', opacity: 0.9 }}>
                  Họ và tên *
                </label>
                <input
                  type="text"
                  placeholder="Nhập họ và tên..."
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px', opacity: 0.9 }}>
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  placeholder="Nhập số điện thoại..."
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px', opacity: 0.9 }}>
                  Địa chỉ lắp đặt dự kiến *
                </label>
                <input
                  type="text"
                  placeholder="Nhập số nhà, tên đường, xã phường..."
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px', opacity: 0.9 }}>
                  Gói cước quan tâm *
                </label>
                <select
                  value={selectedPack}
                  onChange={(e) => setSelectedPack(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backgroundColor: '#1e293b',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                >
                  <option value="GIGA - 150Mbps">Gói GIGA - 150 Mbps (175.000đ/tháng)</option>
                  <option value="SKY - 1Gbps">Gói SKY - 1 Gbps (225.000đ/tháng)</option>
                  <option value="META - 1Gbps">Gói META - 1 Gbps (325.000đ/tháng)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  backgroundColor: '#f97316',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px',
                  fontSize: '15px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  marginTop: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
              >
                {loading ? 'Đang gửi...' : 'GỬI ĐĂNG KÝ BÁO GIÁ'}
              </button>

              {statusMsg && (
                <p style={{
                  fontSize: '13px',
                  color: statusMsg.includes('Chúc mừng') ? '#10b981' : '#ef4444',
                  backgroundColor: statusMsg.includes('Chúc mừng') ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                  fontWeight: '600'
                }}>
                  {statusMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Package comparison Section */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            Xem Báo Giá Các Gói Cước Internet FPT
          </h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            Lựa chọn gói cước băng thông tương thích với nhu cầu sử dụng của bạn và gia đình.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          alignItems: 'start'
        }}>
          {packages.map((pack, idx) => (
            <div key={idx} style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: `1px solid ${pack.badge ? pack.color : '#e2e8f0'}`,
              boxShadow: pack.badge ? `0 10px 30px -10px ${pack.color}40` : '0 4px 6px -1px rgba(0,0,0,0.05)',
              padding: '32px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              transition: 'transform 0.3s ease',
            }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {pack.badge && (
                <span style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: pack.color,
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {pack.badge}
                </span>
              )}

              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                {pack.name}
              </h3>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '16px' }}>
                <span style={{ fontSize: '13px', color: '#64748b' }}>Tốc độ: </span>
                <span style={{ fontSize: '24px', fontWeight: 800, color: pack.color }}>{pack.speed}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', borderBottom: '1px solid #f1f5f9', paddingBottom: '24px', marginBottom: '24px' }}>
                <span style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a' }}>{pack.price}</span>
                <span style={{ color: '#64748b', fontSize: '14px' }}>/{pack.period}</span>
              </div>

              <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>
                {pack.desc}
              </p>

              <div style={{ display: 'grid', gap: '12px', marginBottom: '32px' }}>
                {pack.features.map((feat, fIdx) => (
                  <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
                    <Check size={16} color={pack.color} style={{ flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleRegisterClick(`${pack.name} - ${pack.speed}`)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: pack.badge ? pack.color : '#f1f5f9',
                  color: pack.badge ? '#ffffff' : '#0f172a',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: 'pointer',
                  marginTop: 'auto',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => {
                  if (pack.badge) {
                    e.currentTarget.style.opacity = '0.9';
                  } else {
                    e.currentTarget.style.backgroundColor = '#e2e8f0';
                  }
                }}
                onMouseOut={(e) => {
                  if (pack.badge) {
                    e.currentTarget.style.opacity = '1';
                  } else {
                    e.currentTarget.style.backgroundColor = '#f1f5f9';
                  }
                }}
              >
                Đăng ký gói này
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Info strip Section */}
      <section style={{ backgroundColor: '#ffffff', padding: '60px 24px', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          textAlign: 'center'
        }}>
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
              Quy Trình Lắp Đặt ⚡
            </h4>
            <p style={{ fontSize: '14px', color: '#64748b' }}>
              Đăng ký online hoặc gọi Hotline. Nhân viên FPT khảo sát hạ tầng & hoàn thiện hồ sơ điện tử trong 15 phút.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
              Thủ Tục Đơn Giản 📄
            </h4>
            <p style={{ fontSize: '14px', color: '#64748b' }}>
              Chỉ cần chụp ảnh thẻ căn cước công dân gắn chíp (chụp 2 mặt). Không mất tiền đặt cọc kỳ hạn.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
              Thời Gian Triển Khai ⏱️
            </h4>
            <p style={{ fontSize: '14px', color: '#64748b' }}>
              Trong vòng 24 giờ sau khi ký hợp đồng dịch vụ. Lắp đặt cả vào các ngày nghỉ thứ 7 và Chủ nhật.
            </p>
          </div>
        </div>
      </section>

      {/* Hotline CTA Banner Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        color: '#ffffff',
        padding: '50px 24px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px' }}>
            Bạn muốn lắp đặt nhanh trong 2h hoặc cần tư vấn trực tiếp?
          </h2>
          <p style={{ opacity: 0.9, marginBottom: '24px' }}>
            Kết nối trực tiếp ngay với tư vấn viên phòng kinh doanh FPT Telecom.
          </p>
          <a
            href={`tel:${HOTLINE.replace(/\s/g, '')}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#ffffff',
              color: '#f97316',
              padding: '14px 28px',
              borderRadius: '30px',
              fontSize: '18px',
              fontWeight: '800',
              textDecoration: 'none',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }}
          >
            <Phone size={20} fill="currentColor" strokeWidth={0} />
            HỖ TRỢ NHANH: {HOTLINE}
          </a>
        </div>
      </section>
    </div>
  );
}
