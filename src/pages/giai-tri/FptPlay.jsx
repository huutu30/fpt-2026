import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PRODUCT_DATA } from '../../data/productData';
import ProductCardSlider from '../../components/common/ProductCardSlider';
import NewsSection from '../../components/home/NewsSection';
import styles from './FptPlay.module.css';

export default function FptPlay({ region }) {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "FPT Play trực tiếp bóng đá - Combo truyền hình internet | FPT Telecom";
  }, []);

  const comboPackages = PRODUCT_DATA.the_thao || [];
  const standalonePackages = PRODUCT_DATA.fpt_play_only || [];

  return (
    <div className={styles.fptPlayPage}>
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>FPT Play - Combo truyền hình internet - Wifi 6 tốc độ đến 1Gbps</div>
          <h1 className={styles.heroTitle}>
            TRUYỀN HÌNH FPT PLAY
          </h1>
          <p className={styles.heroDesc}>
            FPT tự hào là nhà cung cấp dịch vụ truyền hình hàng đầu hiện nay nhờ sở hữu nhiều ưu điểm vượt trội về cả chất lượng nội dung và dịch vụ. Với công nghệ hiện đại, kho nội dung đa dạng, cùng hàng loạt tính năng nâng cao.
          </p>
          <div className={styles.heroActions}>
            <button className={styles.primaryBtn} onClick={() => {
              const el = document.getElementById('combo-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}>Đăng ký ngay</button>
            <button className={styles.secondaryBtn}>Tư vấn ngay</button>
          </div>
        </div>
      </section>

      {/* GÓI COMBO INTERNET + TRUYỀN HÌNH */}
      <section id="combo-section" className={styles.section} style={{ background: '#fff' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Gói <span>Combo Internet & Truyền hình</span></h2>
            <p className={styles.sectionDesc}>
              Việc kết hợp Internet và truyền hình FPT Play trong một gói cước là lựa chọn tối ưu, giúp khách hàng tiết kiệm chi phí đáng kể.
            </p>
          </div>
          <ProductCardSlider data={comboPackages} region={region} />
        </div>
      </section>

      {/* GÓI FPT PLAY ĐỘC LẬP */}
      <section id="standalone-section" className={styles.section} style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Gói <span>FPT Play</span></h2>
            <p className={styles.sectionDesc}>
              Nếu bạn đã có sẵn đường truyền Internet và muốn sử dụng thêm dịch vụ truyền hình trên các thiết bị di động hay Smart TV.
            </p>
          </div>
          <div className={styles.blueButtonVariant}>
            <ProductCardSlider data={standalonePackages} region={region} />
          </div>
        </div>
      </section>

      {/* SEO CONTENT & DETAILED CONTEXT - FULL VERSION */}
      <section className={styles.section} style={{ background: '#fff' }}>
        <div className="container">
          <div className={`${styles.seoContent} ${showMore ? styles.expanded : styles.collapsed}`}>
            <h2 className={styles.seoTitle}>Truyền hình FPT Play - Giải trí thả ga, không lo về giá</h2>
            <p className={styles.seoText}>
              FPT Play là truyền hình Internet thế hệ mới do FPT cung cấp. Với mục tiêu hướng đến “Giải trí không giới hạn”, FPT Play mang đến cho người dùng một thư viện nội dung khổng lồ, từ phim ảnh, thể thao, show giải trí đến hàng trăm kênh truyền hình đặc sắc. Bạn sẽ được trải nghiệm chất lượng hình ảnh, âm thanh đỉnh cao ngay tại ngôi nhà của mình.
            </p>
            <p className={styles.seoText}>
              Đặc biệt, dịch vụ của FPT mang đến sự khác biệt, vượt trội không chỉ ở chất lượng nội dung, mà còn tiên phong trong công nghệ truyền hình tương tác. Qua đó cho phép người dùng trở thành người xem chủ động, có thể tương tác, bình luận trực tiếp, hay thậm chí là quyết định diễn biến tiếp theo của chương trình theo sở thích. 
            </p>

            <h3 className={styles.seoTitle} style={{ fontSize: '20px', marginTop: '30px' }}>Truyền hình FPT Play có những kênh giải trí nào?</h3>
            <p className={styles.seoText}>FPT Play tự hào mang đến cho người dùng một hệ thống kênh truyền hình đa dạng và phong phú, đáp ứng mọi sở thích và lứa tuổi. Bạn sẽ không bao giờ cảm thấy nhàm chán với kho nội dung hấp dẫn, được cập nhật liên tục trên FPT Play.</p>
            
            <h4 style={{ fontWeight: '700', marginTop: '20px' }}>Các kênh truyền hình trong nước phổ biến</h4>
            <div className={styles.seoText}>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>Kênh thiết yếu:</strong> VTV1 HD, Quốc Phòng VN HD, Quốc hội HD, VTC1 HD, Vnews HD, ANTV HD, Nhân dân HD.</li>
                <li><strong>Kênh VTV:</strong> VTV1, VTV2, VTV3, VTV4, VTV5, VTV7, VTV8, VTV9, VTV Cần Thơ, VTV5 Tây Nam Bộ, VTV5 Tây Nguyên.</li>
                <li><strong>Kênh HTV:</strong> HTV1, HTV2, HTV3, HTV7, HTV9,...</li>
                <li><strong>Kênh giải trí tổng hợp:</strong> Vĩnh Long 1, HaNoiTV 1, HaNoiTV 2, SCTV6, Miền Tây THĐT2, BTV9,...</li>
              </ul>
            </div>

            <h4 style={{ fontWeight: '700', marginTop: '20px' }}>Các kênh địa phương</h4>
            <p className={styles.seoText}>Nhóm kênh địa phương trên FPT Play cung cấp các chương trình đặc trưng của từng tỉnh thành: BGTV, THLC, QTV1, DaNang TV1, HueTV, QTTV, TTV11, THTG, BRT,...</p>

            <h4 style={{ fontWeight: '700', marginTop: '20px' }}>Các kênh truyền hình quốc tế đỉnh cao</h4>
            <p className={styles.seoText}>CNN, Da Vinci, Outdoor, Arirang, KBS World,...</p>

            <h3 className={styles.seoTitle} style={{ fontSize: '20px', marginTop: '40px' }}>Truyền hình FPT Play có các tính năng ưu việt gì?</h3>
            <div className={styles.seoText}>
              <p><strong>Cá nhân hóa nội dung:</strong> Tự động đề xuất nội dung phù hợp nhất.</p>
              <p><strong>Xem lại:</strong> Xem lại các chương trình đã phát sóng lên đến 72 giờ.</p>
              <p><strong>Điều khiển giọng nói:</strong> Nhận diện 100% khẩu lệnh tiếng Việt qua FPT Play Box.</p>
              <p><strong>Giám sát trẻ em:</strong> Thiết lập và quản lý các kênh phù hợp với lứa tuổi.</p>
            </div>

            <h2 className={styles.seoTitle} style={{ marginTop: '40px' }}>Bảng giá đăng ký truyền hình FPT Play</h2>
            
            <h4 style={{ fontWeight: '700', marginBottom: '15px' }}>Bảng giá Combo Internet - Truyền hình FPT Play</h4>
            <div className={styles.tableWrapper}>
              <table className={styles.priceTable}>
                <thead>
                  <tr>
                    <th>Tên gói cước</th>
                    <th>Tốc độ</th>
                    <th>Giá cước</th>
                    <th>Đi kèm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Combo giải trí</td>
                    <td>300Mbps</td>
                    <td>200.000đ/tháng</td>
                    <td>Modem Wifi 6 + FPT Play</td>
                  </tr>
                  <tr>
                    <td>Combo GIGA</td>
                    <td>300Mbps</td>
                    <td>230.000đ/tháng</td>
                    <td>Modem Wifi 6 + FPT Play</td>
                  </tr>
                  <tr>
                    <td>Combo SKY</td>
                    <td>1000Mbps</td>
                    <td>230.000đ/tháng</td>
                    <td>Modem Wifi 6 + FPT Play</td>
                  </tr>
                  <tr>
                    <td>Combo META</td>
                    <td>1000Mbps</td>
                    <td>315.000đ/tháng</td>
                    <td>Modem Wifi 6 + FPT Play</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 style={{ fontWeight: '700', marginTop: '30px', marginBottom: '15px' }}>Bảng giá các gói cước FPT Play (Độc lập)</h4>
            <div className={styles.tableWrapper}>
              <table className={styles.priceTable}>
                <thead>
                  <tr>
                    <th>Tên gói cước</th>
                    <th>Giá cước</th>
                    <th>Quyền lợi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Gói Cine</td>
                    <td>33.000đ/tháng</td>
                    <td>Xem phim bộ mới, Kho phim đặc sắc, Hỗ trợ 2 thiết bị</td>
                  </tr>
                  <tr>
                    <td>Gói Premium</td>
                    <td>66.000đ/tháng</td>
                    <td>100+ kênh, Kho phim Âu-Mỹ, Thể thao độc quyền, 3 thiết bị</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className={styles.seoTitle} style={{ fontSize: '20px', marginTop: '40px' }}>Vì sao nên lắp đặt truyền hình FPT Play?</h3>
            <div className={styles.seoText}>
              <p>FPT Play sở hữu kho nội dung chọn lọc, hình ảnh 4K sắc nét, âm thanh sống động và đặc biệt là độc quyền nhiều giải đấu thể thao hàng đầu thế giới: Ngoại hạng Anh, Champions League, V.League, NBA, MMA...</p>
            </div>

            <h2 className={styles.seoTitle} style={{ marginTop: '40px' }}>Làm sao để mua gói truyền hình FPT đơn giản, nhanh chóng?</h2>
            <div className={styles.seoText}>
              <p>1. Mua trên website <strong>fpt.vn</strong></p>
              <p>2. Mua trên ứng dụng <strong>Hi-FPT</strong></p>
              <p>3. Tại các điểm giao dịch FPT trên toàn quốc.</p>
              <p>4. Qua tổng đài: <strong>1900 6600</strong></p>
            </div>

            <h2 className={styles.seoTitle} style={{ marginTop: '40px' }}>Câu hỏi thường gặp</h2>
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>Có thể xem FPT Play trên các thiết bị nào?</h4>
              <p className={styles.seoText}>FPT Play là dịch vụ đa nền tảng, xem được trên Smart TV, Smartphone, Tablet, PC/Laptop và FPT Play Box.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>Truyền hình FPT có chiếu giải Ngoại hạng Anh không?</h4>
              <p className={styles.seoText}>Có. FPT Play phát sóng trực tiếp và trọn vẹn giải Ngoại hạng Anh cùng nhiều giải đấu quốc tế khác.</p>
            </div>
          </div>
          
          <div className={styles.showMoreWrapper}>
            <button className={styles.showMoreBtn} onClick={() => setShowMore(!showMore)}>
              {showMore ? (
                <>Thu gọn <ChevronUp size={20} /></>
              ) : (
                <>Xem thêm <ChevronDown size={20} /></>
              )}
            </button>
          </div>
        </div>
      </section>

      <NewsSection />
    </div>
  );
}
