import React, { useEffect, useState } from 'react';
import { Shield, Zap, Cpu, Activity, ChevronDown, ChevronUp } from 'lucide-react';
import Wifi7Section from '../../components/home/Wifi7Section';
import NewsSection from '../../components/home/NewsSection';
import styles from './Wifi7.module.css';

export default function Wifi7({ region }) {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Đăng ký lắp Wi-Fi 7, công nghệ XGS-PON | FPT Telecom";
  }, []);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      q: "Công nghệ Wi-Fi 7 khác gì so với Wi-Fi 6?",
      a: "Wi-Fi 7 (802.11be) là thế hệ Wi-Fi mới nhất, hỗ trợ tốc độ cao hơn gấp 4 lần, băng thông kênh truyền rộng hơn (lên đến 320MHz), giúp giảm tối đa độ trễ và tăng khả năng chịu tải lên rất nhiều thiết bị cùng lúc."
    },
    {
      q: "Gói cước SpeedX của FPT sử dụng công nghệ gì?",
      a: "Gói cước SpeedX hoạt động trên hạ tầng công nghệ XGS-PON tân tiến nhất, hỗ trợ truyền dẫn quang đối xứng với tốc độ lên đến 10Gbps, kết hợp thiết bị đầu cuối chuẩn Wi-Fi 7 để tối đa hóa hiệu năng."
    },
    {
      q: "Thiết bị đời cũ có kết nối được với modem Wi-Fi 7 không?",
      a: "Hoàn toàn được. Wi-Fi 7 có tính tương thích ngược (backward compatible), nghĩa là các thiết bị điện thoại, máy tính dùng Wi-Fi 6, 5 hoặc cũ hơn vẫn kết nối và sử dụng bình thường với mạng Wi-Fi 7 của FPT."
    },
    {
      q: "Tôi cần làm gì để đăng ký gói SpeedX?",
      a: "Bạn chỉ cần để lại số điện thoại trên Form đăng ký hoặc chọn gói cước phù hợp ở phần bảng giá bên dưới và click 'Đăng ký'. Nhân viên FPT sẽ liên hệ hỗ trợ triển khai nhanh chóng trong 24h."
    }
  ];

  return (
    <div className={styles.wifi7Page}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>SpeedX XGS-PON</div>
            <h1 className={styles.heroTitle}>FPT Wi-Fi 7<br/><span>Thế hệ mới nhất</span></h1>
            <p className={styles.heroDesc}>
              Đăng ký lắp Wi-Fi 7 hạ tầng công nghệ XGS-PON với gói cước SpeedX FPT. 
              Tốc độ đến 10 Gbps, xử lý đa tác vụ, 3 băng tần kết nối, chịu tải gấp 4 lần công nghệ cũ.
            </p>
          </div>
          
          <div className={styles.heroFormBox}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Đăng ký thông tin</h2>
              <p className={styles.formSubtitle}>Quý khách vui lòng nhập số điện thoại để thực hiện đăng ký lắp đặt Wi-Fi 7</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert("Đăng ký thành công!"); }}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  placeholder="Nhập số điện thoại của bạn" 
                  className={styles.inputField}
                  required 
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Tiếp tục
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ưu điểm vượt trội của Wi-Fi 7</h2>
            <p className={styles.sectionSubtitle}>Trải nghiệm đỉnh cao với công nghệ mạng viễn thông dẫn đầu</p>
          </div>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}><Zap size={32} /></div>
              <h3 className={styles.benefitTitle}>Tốc độ cực đỉnh</h3>
              <p className={styles.benefitDesc}>Đạt tốc độ tải xuống/tải lên đến 10 Gbps, loại bỏ hoàn toàn giật lag khi chơi game hay stream 4K/8K.</p>
            </div>
            
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}><Activity size={32} /></div>
              <h3 className={styles.benefitTitle}>Độ trễ siêu thấp</h3>
              <p className={styles.benefitDesc}>Công nghệ MLO (Multi-Link Operation) giúp truyền dữ liệu đồng thời trên nhiều băng tần, giảm độ trễ tối đa.</p>
            </div>
            
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}><Cpu size={32} /></div>
              <h3 className={styles.benefitTitle}>Chịu tải gấp 4 lần</h3>
              <p className={styles.benefitDesc}>Với băng thông 320MHz và 4K QAM, thiết bị có khả năng kết nối đồng thời số lượng cực lớn thiết bị thông minh.</p>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}><Shield size={32} /></div>
              <h3 className={styles.benefitTitle}>Bảo mật an toàn</h3>
              <p className={styles.benefitDesc}>Tích hợp chuẩn mã hóa WPA3 và F-Safe bảo vệ các thiết bị khỏi rủi ro xâm nhập từ mạng lưới bên ngoài.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION (Reusing existing component) */}
      <section className={styles.packagesSection}>
        <div className="container">
          <Wifi7Section region={region} />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Câu hỏi thường gặp</h2>
            <p className={styles.sectionSubtitle}>Giải đáp thắc mắc về công nghệ Wi-Fi 7 và gói cước SpeedX</p>
          </div>
          
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                  {faq.q}
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <div className={`${styles.faqAnswer} ${openFaq === index ? styles.open : ''}`}>
                  {faq.a}
                </div>
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