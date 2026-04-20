import React, { useEffect } from 'react';
import { Gamepad2, Wifi, Zap, Award } from 'lucide-react';
import { PRODUCT_DATA } from '../../data/productData';
import ProductCardSlider from '../../components/common/ProductCardSlider';
import NewsSection from '../../components/home/NewsSection';
import styles from './GameThu.module.css';

export default function GameThu({ region }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Gói cước Internet game thủ FPT | Ping thấp, giảm lag | FPT Telecom";
  }, []);

  // Filter Game packages: Looking for "Meta" or "F-Game" in both ca_nhan and gia_dinh
  const allPackages = [...(PRODUCT_DATA.ca_nhan || []), ...(PRODUCT_DATA.gia_dinh || [])];
  
  // Try to find specific gaming packages, fallback to Meta packages
  let gamePackages = allPackages.filter(pkg => 
    pkg.name.toLowerCase().includes('game') || 
    pkg.name.toLowerCase().includes('meta')
  );

  // Fallback if not found
  if (gamePackages.length === 0) {
    gamePackages = allPackages.slice(2, 6); // Just grab some high tier ones
  }

  return (
    <div className={styles.gameThuPage}>
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Không ai phải thua<br /><span>vì Lag</span>
          </h1>
          <p className={styles.heroDesc}>
            Chơi game dùng mạng gì? Đăng ký ngay lắp wifi game thủ FPT cho nhu cầu chơi game online, livestream và giải trí cường độ cao. Công nghệ Ultra Fast tối ưu trải nghiệm kết nối.
          </p>
        </div>
      </section>

      {/* TÍNH NĂNG NỔI BẬT */}
      <section className={styles.section} style={{ background: '#020617' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Vì sao game thủ 'Pro' chọn <span>Internet FPT</span>?</h2>
            <p className={styles.sectionDesc}>
              Internet game thủ FPT tốc độ cao, ping cực thấp đem lại lợi thế cho mọi game thủ trong từng pha giao tranh.
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Zap size={36} /></div>
              <h3 className={styles.benefitTitle}>Tốc độ lên tới 1Gbps</h3>
              <p className={styles.benefitDesc}>Băng thông rộng giúp tải game nặng hàng chục GB chỉ trong tích tắc. Chơi game siêu mượt và ổn định.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Gamepad2 size={36} /></div>
              <h3 className={styles.benefitTitle}>Giờ cao điểm vẫn chiến</h3>
              <p className={styles.benefitDesc}>Công nghệ Ultra Fast giảm độ trễ và giữ ping xuống đến 16ms, game thủ không tụt mood, không mất kết nối.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Wifi size={36} /></div>
              <h3 className={styles.benefitTitle}>Chiến game ở đâu cũng êm</h3>
              <p className={styles.benefitDesc}>Wi-Fi 6 hỗ trợ kết nối đồng thời đến 30 thiết bị như PC, Mobile, PlayStation, Xbox, Nintendo Switch...</p>
            </div>
          </div>
        </div>
      </section>

      {/* GÓI CƯỚC GAME */}
      <section className={styles.section} style={{ background: '#0f172a' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Gói cước dành cho <span>Game Thủ</span></h2>
            <p className={styles.sectionDesc}>
              Gói cước F-Game là lựa chọn phù hợp cho game thủ, streamer hoặc người dùng có nhu cầu kết nối tốc độ cao.
            </p>
          </div>
          {/* Wrapper to style slider text in dark mode context if needed */}
          <div className={styles.sliderWrapper}>
            <ProductCardSlider data={gamePackages} region={region} />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.section} style={{ background: '#020617' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Tốc độ dẫn đầu <span>đã được kiểm chứng</span></h2>
            <p className={styles.sectionDesc}>
              Tận hưởng hiệu năng mạnh mẽ, nâng tầm trải nghiệm cùng các đội tuyển Esports hàng đầu Việt Nam.
            </p>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamName}>GAM Esports</div>
              <p className={styles.teamQuote}>
                "Training, Livestreaming, Upload content đều không có vấn đề. No drop! No ping! No problem! Sự ổn định chính là chìa khóa đi đến chiến thắng. Hãy kiểm soát nó theo cách của bạn với Internet FPT."
              </p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamName}>TEAM FLASH</div>
              <p className={styles.teamQuote}>
                "FPT mang lại công nghệ kết nối giúp luyện tập suôn sẻ, train hard một cách mượt mà. Luyện tập 8 đến 10 tiếng mỗi ngày và Internet FPT đã mang lại sự ổn định, không cần lo ping mà chỉ cần nghĩ đến chuyện win thôi."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT & PRICING TABLES */}
      <section className={styles.section} style={{ background: '#0f172a' }}>
        <div className="container">
          <div className={styles.seoContent}>
            <h2 className={styles.seoTitle}>Hiệu năng vượt trội cho mọi tựa game</h2>
            <p className={styles.seoText}>
              Khác với các gói Internet thông thường, gói F-Game được tích hợp sẵn công nghệ Ultra Fast độc quyền. Công nghệ này tối ưu hóa đường truyền cho hơn 50 tựa game phổ biến (như Liên Minh Huyền Thoại, Valorant, PUBG, CS:GO, Liên Quân Mobile...), giúp giảm độ trễ (ping) xuống mức lý tưởng (chỉ từ 16ms), loại bỏ hoàn toàn tình trạng giật lag hay rớt kết nối (loss) trong những pha giao tranh quyết định.
            </p>
            <p className={styles.seoText}>
              Với băng thông lên đến 1Gbps, việc tải các bản cập nhật game nặng hàng chục GB chỉ diễn ra trong tích tắc. Quan trọng hơn, băng thông lớn giúp duy trì đường truyền ổn định tuyệt đối ngay cả khi trong nhà có nhiều thiết bị cùng truy cập, đảm bảo game thủ không bao giờ phải "thua vì lag".
            </p>

            <h2 className={styles.seoTitle} style={{ marginTop: '40px' }}>Bảng giá lắp đặt WiFi FPT dành riêng cho Gamer & Streamer</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles.priceTable}>
                <thead>
                  <tr>
                    <th>Tên gói</th>
                    <th>Tốc độ (DL/UL)</th>
                    <th>Thiết bị đi kèm</th>
                    <th>Giá cước (Từ)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>F-Game</strong></td>
                    <td>1 Gbps / 300 Mbps</td>
                    <td>Modem Wi-Fi 6 + Ultra Fast</td>
                    <td style={{ color: '#22d3ee', fontWeight: 'bold' }}>225.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>F-Game F1</strong></td>
                    <td>1 Gbps / 300 Mbps</td>
                    <td>Modem Wi-Fi 6 + Access Point + Ultra Fast</td>
                    <td style={{ color: '#22d3ee', fontWeight: 'bold' }}>245.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Combo F-Game</strong></td>
                    <td>1 Gbps / 1 Gbps</td>
                    <td>Modem Wi-Fi 6 + FPT Play Box + Ultra Fast</td>
                    <td style={{ color: '#22d3ee', fontWeight: 'bold' }}>270.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Combo F-Game F1</strong></td>
                    <td>1 Gbps / 1 Gbps</td>
                    <td>Modem Wi-Fi 6 + AP + FPT Play Box + Ultra Fast</td>
                    <td style={{ color: '#22d3ee', fontWeight: 'bold' }}>290.000đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={styles.section} style={{ background: '#020617' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Câu hỏi <span>Thường gặp</span></h2>
            <p className={styles.sectionDesc}>
              Giải đáp thắc mắc về đường truyền, ping và công nghệ Ultra Fast.
            </p>
          </div>
          
          <div className={styles.faqSection}>
            {[
              { q: "FPT có các gói cước Internet được thiết kế riêng cho game thủ không?", a: "Có. FPT cung cấp các gói cước chuyên dành cho game thủ như: F-Game, F-Game F1, Combo F-Game được tích hợp tính năng Ultra Fast, nhằm tối ưu hóa đường truyền và giảm độ trễ cho hơn 50 tựa game phổ biến." },
              { q: "Gói cước Wifi FPT nào phù hợp cho nhu cầu livestream game?", a: "Hoạt động livestream đòi hỏi băng thông upload cao và ổn định. Gói F-Game F1, Combo F-Game hoặc Combo F-Game F1 là những lựa chọn phù hợp, giúp tín hiệu livestream luôn mượt mà (No Drop - No Ping)." },
              { q: "Có cần thiết phải sử dụng router gaming của bên thứ ba không?", a: "Modem WiFi 6 do FPT cung cấp đã tích hợp chức năng router với hiệu năng đáp ứng tốt nhu cầu chơi game. Trong trường hợp không gian sử dụng lớn, bạn nên dùng gói F1 (có thêm Access Point Mesh) để sóng Wi-Fi căng đét mọi ngóc ngách thay vì mua router bên thứ 3." },
              { q: "Công nghệ Ultra Fast là gì?", a: "Ultra Fast là một tính năng được FPT phát triển nhằm cải thiện chất lượng đường truyền dành riêng cho hoạt động chơi game, tối ưu định tuyến đến các máy chủ game để giữ Ping luôn ở mức ổn định nhất." }
            ].map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>{faq.q}</h4>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS SECTION - Needs Dark theme adaptation, but we use the existing one */}
      <NewsSection />

    </div>
  );
}
