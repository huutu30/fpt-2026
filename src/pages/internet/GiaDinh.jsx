import React, { useEffect } from 'react';
import { Shield, Zap, Wifi, Clock, MonitorPlay, Gift } from 'lucide-react';
import { PRODUCT_DATA } from '../../data/productData';
import ProductCardSlider from '../../components/common/ProductCardSlider';
import NewsSection from '../../components/home/NewsSection';
import styles from './GiaDinh.module.css';

export default function GiaDinh({ region }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Gói cước Internet cho hộ gia đình | Khuyến mãi HOT 04/2026 | FPT Telecom";
  }, []);

  return (
    <div className={styles.giaDinhPage}>
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Gói cước Internet <span>Cho Hộ Gia Đình</span>
          </h1>
          <p className={styles.heroDesc}>
            Các gói cước Internet FPT gia đình đảm bảo tốc độ cực cao, kết nối ổn định cho các hoạt động học tập, làm việc và giải trí với vùng phủ sóng rộng khắp.
          </p>
        </div>
      </section>

      {/* GÓI CƯỚC GIA ĐÌNH - INTERNET */}
      <section className={styles.section} style={{ background: '#fff' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Gói cước Internet Mở rộng vùng phủ</h2>
            <p className={styles.sectionDesc}>
              Các gói cước được trang bị thêm Access Point / Wi-Fi Mesh, phủ sóng mạnh mẽ cho nhà nhiều tầng, chung cư diện tích rộng.
            </p>
          </div>
          {/* Lọc tạm để hiển thị trên Slider */}
          <ProductCardSlider data={PRODUCT_DATA.gia_dinh.slice(0, 4)} region={region} />
        </div>
      </section>

      {/* GÓI COMBO - TRUYỀN HÌNH & CAMERA (Giả lập bằng dữ liệu còn lại) */}
      <section className={styles.section} style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Gói cước Internet & Truyền hình FPT Play</h2>
            <p className={styles.sectionDesc}>
              Phù hợp mọi nhu cầu cho gia đình giải trí với hàng trăm kênh truyền hình đặc sắc, thể thao độc quyền.
            </p>
          </div>
          {/* Dùng data gia_dinh hoặc mảng the_thao nếu có, ở đây dùng tạm nửa sau của gia_dinh */}
          <ProductCardSlider data={PRODUCT_DATA.gia_dinh} region={region} />
        </div>
      </section>

      {/* BENEFITS / TÍNH NĂNG NỔI BẬT */}
      <section className={styles.section} style={{ background: '#fff' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Trải nghiệm vượt trội cùng FPT</h2>
            <p className={styles.sectionDesc}>
              Mạng FPT mang đến các ưu điểm vượt trội giúp mọi thành viên trong gia đình tận hưởng không gian mạng tuyệt vời nhất.
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Zap size={32} /></div>
              <h3 className={styles.benefitTitle}>Tốc độ đến 1Gbps</h3>
              <p className={styles.benefitDesc}>Tải phim, học tập và làm việc online không gián đoạn, đáp ứng tốt các tác vụ nặng.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Wifi size={32} /></div>
              <h3 className={styles.benefitTitle}>Phủ sóng tới 200m²</h3>
              <p className={styles.benefitDesc}>Kết nối mạnh mẽ nhờ thiết bị Access Point (Wi-Fi Mesh) trang bị kèm theo gói cước.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Clock size={32} /></div>
              <h3 className={styles.benefitTitle}>Độ trễ thấp 0.016s</h3>
              <p className={styles.benefitDesc}>Trải nghiệm chơi game cực mượt, không giật lag ngay cả vào giờ cao điểm.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Gift size={32} /></div>
              <h3 className={styles.benefitTitle}>Ưu đãi ngập tràn</h3>
              <p className={styles.benefitDesc}>Đặc biệt tặng thêm từ 1 đến 2 tháng cước khi khách hàng đăng ký trả trước 12 tháng.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT & PRICING TABLES */}
      <section className={styles.section} style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className={styles.seoContent}>
            <h2 className={styles.seoTitle}>Từ những giờ học trực tuyến đến giải trí cùng gia đình</h2>
            <p className={styles.seoText}>
              Từ những giờ học trực tuyến bổ ích của con trẻ, những phút giây thư giãn xem phim cùng cả nhà, đến việc ông bà kết nối với con cháu phương xa, một đường truyền internet tốc độ cao, ổn định và phủ sóng rộng khắp là điều mà mọi gia đình đều mong muốn. FPT thấu hiểu sâu sắc những nhu cầu đó và mang đến các gói cước internet gia đình tốc độ vượt trội cho gia đình đông người, nhà nhiều tầng.
            </p>

            <h2 className={styles.seoTitle} style={{ marginTop: '30px' }}>Bảng giá mạng FPT dành cho Gia đình (Có trang bị Mesh)</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles.priceTable}>
                <thead>
                  <tr>
                    <th>Gói cước</th>
                    <th>Băng thông (DL/UL)</th>
                    <th>Thiết bị đi kèm</th>
                    <th>Phù hợp</th>
                    <th>Giá cước (chỉ từ)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Internet Giga F1</strong></td>
                    <td>300 Mbps / 300 Mbps</td>
                    <td>Modem Wi-Fi 6 + 1 Access Point</td>
                    <td>Gia đình nhà nhiều tầng, smart home</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>205.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Internet Sky F1</strong></td>
                    <td>1 Gbps / 300 Mbps</td>
                    <td>Modem Wi-Fi 6 + 1 Access Point</td>
                    <td>Kết nối 8+ thiết bị, stream 4K, tác vụ nặng</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>210.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Internet Giga F2</strong></td>
                    <td>300 Mbps / 300 Mbps</td>
                    <td>Modem Wi-Fi 6 + 2 Access Point</td>
                    <td>Gia đình có nhiều thiết bị, môi trường nhiều vách</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>225.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Internet Sky F2</strong></td>
                    <td>1 Gbps / 300 Mbps</td>
                    <td>Modem Wi-Fi 6 + 2 Access Point</td>
                    <td>Gia đình lớn, smart home, nhu cầu tối đa</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>230.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Internet Giga F3</strong></td>
                    <td>300 Mbps / 300 Mbps</td>
                    <td>Modem Wi-Fi 6 + 3 Access Point</td>
                    <td>Stream mượt, phủ khắp nhà, Wi-Fi ổn định</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>245.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Internet Sky F3</strong></td>
                    <td>1 Gbps / 300 Mbps</td>
                    <td>Modem Wi-Fi 6 + 3 Access Point</td>
                    <td>Biệt thự, nhà cực rộng, đòi hỏi băng thông cao nhất</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>250.000đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '14px', color: '#64748b', fontStyle: 'italic' }}>
              Lưu ý: Bảng giá mang tính chất tham khảo. Khách hàng vui lòng chọn khu vực hoặc liên hệ Hotline để có giá chính xác theo từng Quận/Huyện.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={styles.section} style={{ background: '#fff' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Câu hỏi thường gặp</h2>
            <p className={styles.sectionDesc}>
              Khách hàng lắp mạng gia đình thường quan tâm đến các vấn đề sau.
            </p>
          </div>
          
          <div className={styles.faqSection}>
            {[
              { q: "Tôi cần chuẩn bị giấy tờ gì khi đăng ký lắp mạng gia đình FPT?", a: "Với cá nhân hộ gia đình, bạn chỉ cần chuẩn bị bản photo hoặc ảnh chụp gốc CMND/CCCD/Hộ chiếu." },
              { q: "Gói cước nào phù hợp cho nhà phố 3 tầng?", a: "Bạn nên chọn các gói có đuôi F2 hoặc F3 (như Sky F2, Giga F3) vì các gói này được trang bị thêm từ 2-3 thiết bị Access Point (Wi-Fi Mesh) giúp phủ sóng xuyên tầng rất tốt, không bị điểm mù." },
              { q: "Tôi có thể chuyển địa chỉ lắp wifi FPT được không?", a: "Hoàn toàn được. Bạn chỉ cần liên hệ tổng đài hoặc trung tâm FPT gần nhất để đăng ký chuyển địa điểm. Phí chuyển địa điểm và thời gian xử lý sẽ được thông báo cụ thể (thường từ 1-2 ngày)." },
              { q: "Khi đăng ký gói Combo, tôi có thể xem bóng đá Ngoại Hạng Anh không?", a: "Các gói Combo Thể Thao (Combo Sky, Combo Meta V.VIP) đã bao gồm quyền xem trọn vẹn giải Ngoại Hạng Anh trên nền tảng FPT Play." }
            ].map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>{faq.q}</h4>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <NewsSection />

    </div>
  );
}
