import React, { useEffect } from 'react';
import { Network, ShieldCheck, Zap, HeadphonesIcon } from 'lucide-react';
import ProductCardSlider from '../../components/common/ProductCardSlider';
import NewsSection from '../../components/home/NewsSection';
import styles from './DoanhNghiep.module.css';

// MOCK DATA for Enterprise (Since it's not in productData.js yet)
const ENTERPRISE_DATA = [
  {
    id: "lux-500",
    name: "Lux500",
    price: 800000,
    originalPrice: 1000000,
    speed: "500 Mbps",
    features: [
      "Modem Wi-Fi 6 + 01 Access Point",
      "Kết nối lên đến 125 thiết bị",
      "Tích hợp Ultra Fast tối ưu tốc độ"
    ],
    image: "https://fpt.vn/storage/upload/images/thumbs/product/Internet%201/LUX500.png"
  },
  {
    id: "lux-800",
    name: "Lux800",
    price: 1000000,
    originalPrice: 1200000,
    speed: "800 Mbps",
    features: [
      "Modem Wi-Fi 6 + 01 Access Point",
      "Kết nối lên đến 160 thiết bị",
      "Tích hợp Ultra Fast tối ưu tốc độ"
    ],
    image: "https://fpt.vn/storage/upload/images/thumbs/product/Internet%201/LUX800.png"
  },
  {
    id: "super-300-biz",
    name: "Super300 Biz",
    price: 900000,
    originalPrice: null,
    speed: "300 Mbps",
    features: [
      "Trang bị Cân bằng tải",
      "1 thiết bị Access Point",
      "Độ trễ thấp, kết nối ổn định"
    ],
    image: "https://fpt.vn/storage/upload/images/thumbs/product/Internet%201/wifi6-48.png"
  },
  {
    id: "super-300-biz-plus",
    name: "Super300 Biz Plus",
    price: 1100000,
    originalPrice: null,
    speed: "300 Mbps",
    features: [
      "Trang bị Cân bằng tải",
      "1 thiết bị Access Point",
      "Tích hợp sẵn IP Tĩnh"
    ],
    image: "https://fpt.vn/storage/upload/images/thumbs/product/Internet%201/wifi6-48.png"
  },
  {
    id: "super-500-biz",
    name: "Super500 Biz",
    price: 1500000,
    originalPrice: null,
    speed: "500 Mbps",
    features: [
      "Trang bị Cân bằng tải",
      "1 thiết bị Access Point",
      "Băng thông quốc tế lớn"
    ],
    image: "https://fpt.vn/storage/upload/images/thumbs/product/Internet%201/wifi6-48.png"
  }
];

export default function DoanhNghiep({ region }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Đăng ký lắp WiFi doanh nghiệp FPT | IP Tĩnh, bảo mật cao";
  }, []);

  return (
    <div className={styles.doanhNghiepPage}>
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Đăng ký lắp WiFi <span>Doanh nghiệp FPT</span>
          </h1>
          <p className={styles.heroDesc}>
            Giải pháp Internet tốc độ cao, bảo mật, tích hợp IP Tĩnh từ FPT Telecom giúp duy trì kết nối liền mạch, phủ sóng Wi-Fi cho toàn bộ doanh nghiệp.
          </p>
        </div>
      </section>

      {/* TÍNH NĂNG DOANH NGHIỆP */}
      <section className={styles.section} style={{ background: '#fff' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Giải pháp Internet ưu việt cho Doanh nghiệp</h2>
            <p className={styles.sectionDesc}>
              Hạ tầng cáp quang 100%, bảo mật cao và sẵn sàng đáp ứng mọi nhu cầu từ cơ bản đến nâng cao.
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Zap size={32} /></div>
              <h3 className={styles.benefitTitle}>Tốc độ mạnh mẽ</h3>
              <p className={styles.benefitDesc}>Băng thông tốc độ cao giúp tải dữ liệu lớn, họp trực tuyến, truy cập cloud liên tục.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Network size={32} /></div>
              <h3 className={styles.benefitTitle}>Kết nối ổn định</h3>
              <p className={styles.benefitDesc}>Hạ tầng cáp quang và trang bị Cân bằng tải chuyên dụng, giảm thiểu rủi ro rớt mạng.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><ShieldCheck size={32} /></div>
              <h3 className={styles.benefitTitle}>Phủ sóng rộng khắp</h3>
              <p className={styles.benefitDesc}>Trang bị Modem Wi-Fi 6 phủ sóng rộng tới 200m², hỗ trợ từ 100 đến hàng trăm thiết bị cùng lúc.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><HeadphonesIcon size={32} /></div>
              <h3 className={styles.benefitTitle}>Hỗ trợ chuyên biệt</h3>
              <p className={styles.benefitDesc}>Đội ngũ kỹ thuật trực 24/7/365, phản hồi và xử lý nhanh chóng để doanh nghiệp yên tâm vận hành.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GÓI CƯỚC DOANH NGHIỆP */}
      <section className={styles.section} style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Các Gói Cước Doanh Nghiệp</h2>
            <p className={styles.sectionDesc}>
              Tối ưu cho văn phòng, cửa hàng, công ty cần đường truyền ổn định để làm việc, họp online và vận hành hệ thống.
            </p>
          </div>
          <ProductCardSlider data={ENTERPRISE_DATA} region={region} />
        </div>
      </section>

      {/* SEO CONTENT & PRICING TABLES */}
      <section className={styles.section} style={{ background: '#fff' }}>
        <div className="container">
          <div className={styles.seoContent}>
            <h2 className={styles.seoTitle}>Công nghệ tiên phong, giải pháp chuyên biệt – FPT là lựa chọn hàng đầu</h2>
            <p className={styles.seoText}>
              Trong môi trường kinh doanh cạnh tranh khốc liệt ngày nay, một hạ tầng internet mạnh mẽ, ổn định và bảo mật không còn là yếu tố cộng thêm, mà đã trở thành nền tảng cốt lõi quyết định sự sống còn và phát triển của mọi doanh nghiệp.
            </p>
            <p className={styles.seoText}>
              FPT tiên phong ứng dụng các công nghệ mạng tiên tiến nhất như Wi-Fi 6, giải pháp cân bằng tải thông minh, cung cấp IP Tĩnh chuyên biệt để truy cập camera, server nội bộ an toàn. Điều này không chỉ tối ưu hóa hiệu suất mạng nội bộ mà còn tăng cường khả năng bảo mật, giúp doanh nghiệp vận hành trơn tru và an toàn.
            </p>

            <h2 className={styles.seoTitle} style={{ marginTop: '40px' }}>Bảng giá Internet FPT dành cho Doanh nghiệp (Có IP Tĩnh)</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles.priceTable}>
                <thead>
                  <tr>
                    <th>Gói cước</th>
                    <th>Tốc độ</th>
                    <th>IP Tĩnh</th>
                    <th>Thiết bị cung cấp</th>
                    <th>Giá cước (chỉ từ)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Lux500 / Lux800</strong></td>
                    <td>500 Mbps - 800 Mbps</td>
                    <td>Không</td>
                    <td>Modem Wi-Fi 6 + Access Point Wi-Fi 6</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>800.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Super300 Biz</strong></td>
                    <td>300 Mbps</td>
                    <td>Không</td>
                    <td>Thiết bị Cân bằng tải + 1 Access Point</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>900.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Super300 Biz Plus</strong></td>
                    <td>300 Mbps</td>
                    <td>1 IP Tĩnh</td>
                    <td>Thiết bị Cân bằng tải + 1 Access Point</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>1.100.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Super500 Biz / Plus</strong></td>
                    <td>500 Mbps</td>
                    <td>Cân nhắc (Plus)</td>
                    <td>Thiết bị Cân bằng tải + 1 Access Point</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>1.500.000đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={styles.section} style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Các câu hỏi thường gặp (FAQ)</h2>
            <p className={styles.sectionDesc}>
              Doanh nghiệp khi đăng ký dịch vụ thường có những băn khoăn dưới đây.
            </p>
          </div>
          
          <div className={styles.faqSection}>
            {[
              { q: "Doanh nghiệp tôi cần tốc độ Internet FPT bao nhiêu để hoạt động hiệu quả?", a: "Tốc độ cần thiết phụ thuộc vào quy mô, số lượng nhân viên và ứng dụng. FPT cung cấp từ gói Lux500 (500Mbps) cho văn phòng vừa, đến Lux800 (800Mbps) và các dòng Super Biz có thiết bị cân bằng tải chịu tải cực cao." },
              { q: "FPT có hỗ trợ xuất hóa đơn VAT điện tử không?", a: "Có. FPT Telecom hỗ trợ 100% xuất hóa đơn giá trị gia tăng (VAT) điện tử ngay sau khi doanh nghiệp hoàn tất thanh toán cước phí." },
              { q: "FPT hỗ trợ kỹ thuật cho doanh nghiệp như thế nào khi có sự cố mạng?", a: "FPT cung cấp dịch vụ hỗ trợ kỹ thuật ưu tiên cho khách hàng doanh nghiệp 24/7/365. Chúng tôi có đội ngũ chuyên viên kỹ thuật riêng sẵn sàng khắc phục sự cố một cách nhanh chóng." },
              { q: "Thủ tục đăng ký và thời gian triển khai lắp đặt Internet cho doanh nghiệp mất bao lâu?", a: "Doanh nghiệp chỉ cần cung cấp GPKD. Sau khi hoàn tất hợp đồng, đội ngũ kỹ thuật FPT sẽ tiến hành khảo sát và triển khai lắp đặt thường từ 1-3 ngày làm việc." }
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
