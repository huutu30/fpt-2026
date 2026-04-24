import React, { useEffect, useState } from 'react';
import { Wifi, Zap, Clock, Gift, MonitorPlay, Home, Camera, Trophy, ChevronRight, ChevronDown, CheckCircle, Monitor } from 'lucide-react';
import { PRODUCT_DATA } from '../../data/productData';
import ProductCardSlider from '../../components/common/ProductCardSlider';
import NewsSection from '../../components/home/NewsSection';
import { Link } from 'react-router-dom';
import styles from './GiaDinh.module.css';

const TABS = [
  { id: 'internet', label: 'Internet Gia Đình', icon: <Home size={18} /> },
  { id: 'combo', label: 'Combo Truyền Hình', icon: <MonitorPlay size={18} /> },
  { id: 'camera', label: 'Internet & Camera', icon: <Camera size={18} /> },
];

const TAB_CONFIG = {
  internet: {
    title: 'Gói cước Internet Gia Đình mở rộng vùng phủ',
    desc: 'Các gói cước được trang bị thêm Access Point / Wi-Fi Mesh, phủ sóng mạnh mẽ cho nhà nhiều tầng, chung cư diện tích rộng.',
    badgeSub: 'INTERNET GIA ĐÌNH',
  },
  combo: {
    title: 'Combo Internet & Truyền hình FPT Play',
    desc: 'Phù hợp mọi nhu cầu cho gia đình giải trí với hàng trăm kênh truyền hình đặc sắc, thể thao độc quyền và kho phim 4K.',
    badgeSub: 'COMBO INTERNET & TRUYỀN HÌNH',
  },
  camera: {
    title: 'Combo Internet Camera thông minh cho gia đình an tâm',
    desc: 'Giải pháp kết nối và giám sát giúp bảo vệ ngôi nhà dù ở bất cứ đâu, tích hợp lưu trữ Cloud và camera AI thông minh.',
    badgeSub: 'INTERNET & CAMERA',
  },
};

const FAQ_DATA = [
  { q: "Tốc độ bao nhiêu là đủ cho gia đình tôi?", a: "Tốc độ cần thiết phụ thuộc vào số lượng người dùng và thói quen sử dụng. Gia đình nhỏ (2-4 người) sử dụng cơ bản (lướt web, xem phim HD) có thể chọn gói 300 Mbps như GIGA, GIGA F1. Gia đình đông người hơn, thường xuyên streaming 4K, chơi game, làm việc online nên cân nhắc các gói từ 300 Mbps đến 1 Gbps." },
  { q: "Nhà tôi rộng/nhiều tầng thì nên chọn gói nào để Wi-Fi phủ sóng tốt?", a: "Với nhà rộng hoặc nhiều tầng, bạn nên ưu tiên các gói cước có tặng kèm thiết bị mở rộng sóng như Access Point. Các gói Internet GIGA F2, SKY F2 hoặc GIGA F3 của FPT là những lựa chọn tốt, giúp tín hiệu Wi-Fi mạnh mẽ khắp nhà." },
  { q: "Gói combo Internet - Truyền hình FPT có thực sự tiết kiệm?", a: "Gói combo giúp gia đình tiết kiệm chi phí đáng kể so với việc đăng ký riêng lẻ hai dịch vụ. Đồng thời, bạn sẽ được tận hưởng cả đường truyền internet tốc độ cao và kho nội dung giải trí đa dạng từ FPT Play trên cùng một hóa đơn." },
  { q: "Thủ tục đăng ký lắp đặt gói cước gia đình có phức tạp không?", a: "FPT Telecom có quy trình đăng ký và lắp đặt rất nhanh chóng, đơn giản. Bạn chỉ cần liên hệ hotline hoặc đăng ký trực tuyến, nhân viên FPT sẽ tư vấn và hỗ trợ hoàn tất thủ tục, triển khai lắp đặt trong khoảng 24 - 48 giờ." },
  { q: "Khi đăng ký gói Combo, tôi có thể xem bóng đá Ngoại Hạng Anh không?", a: "Các gói Combo Thể Thao (Combo Sky, Combo Meta VVIP) đã bao gồm quyền xem trọn vẹn giải Ngoại Hạng Anh, FA Cup, V.League trên nền tảng FPT Play." },
  { q: "Gói cước nào phù hợp cho nhà phố 3 tầng?", a: "Bạn nên chọn các gói có đuôi F2 hoặc F3 (như Sky F2, Giga F3) vì các gói này được trang bị thêm từ 2-3 thiết bị Access Point (Wi-Fi Mesh) giúp phủ sóng xuyên tầng rất tốt, không bị điểm mù." },
];

export default function GiaDinh({ region }) {
  const [activeTab, setActiveTab] = useState('internet');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Gói cước Internet cho hộ gia đình | Khuyến mãi HOT 04/2026 | FPT Telecom";
  }, []);

  const allProducts = Object.values(PRODUCT_DATA).flat();

  const getProductsByIds = (idList) => {
    return idList.map(id => allProducts.find(p => p.id === id)).filter(Boolean);
  };

  const GIA_DINH_DISPLAY_IDS = {
    internet: [
      "giga-f1", "sky-f1", "sky-f2", "combo-giga-f1", "combo-sky-f1", "meta", "meta-f1", "meta-f2", "meta-f3"
    ],
    combo: [
      "c-the-thao-sky", "combo-giga", "c-the-thao-meta", "combo-giga-f1", "combo-sky-f1", "c-the-thao-meta-f1", "combo-fgame"
    ],
    camera: PRODUCT_DATA.camera_gia_dinh.map(p => p.id)
  };

  const currentTab = TAB_CONFIG[activeTab];
  const getSliderData = () => {
    return getProductsByIds(GIA_DINH_DISPLAY_IDS[activeTab] || []);
  };

  return (
    <div className={styles.giaDinhPage}>
      <div className="container">

        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Gói cước Internet <span>Cho Hộ Gia Đình</span>
            </h1>
            <p className={styles.heroDesc}>
              Các gói cước Internet FPT gia đình đảm bảo tốc độ cực cao, kết nối ổn định cho các hoạt động học tập, làm việc và giải trí với vùng phủ sóng rộng khắp ngôi nhà.
            </p>
            <a href="#packages" className={styles.heroBtn}>
              Xem gói cước <ChevronRight size={20} />
            </a>
          </div>
        </section>

        {/* TABS NAVIGATION */}
        <div className={styles.tabsNav} id="packages">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* PRODUCT CARDS - Dynamic based on active tab */}
        <section className={styles.section} style={{ paddingTop: '0' }}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{currentTab.title}</h2>
            <p className={styles.sectionDesc}>{currentTab.desc}</p>
          </div>
          
          <ProductCardSlider 
            data={getSliderData()} 
            region={region} 
            badgeSub={currentTab.badgeSub}
          />
        </section>

        {/* HIGHLIGHTS - 4 điểm nổi bật */}
        <section className={styles.section}>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}><Zap size={32} /></div>
              <h3>Tốc độ băng thông đến 1Gbps</h3>
              <p>Tải phim, học tập và làm việc online không gián đoạn, đáp ứng tốt mọi tác vụ nặng.</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}><Wifi size={32} /></div>
              <h3>Phủ sóng rộng tới 200m²</h3>
              <p>Kết nối mạnh mẽ, ổn định cho mọi không gian nhờ thiết bị Access Point (Wi-Fi Mesh).</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}><Clock size={32} /></div>
              <h3>Độ trễ cực thấp chỉ từ 0.016s</h3>
              <p>Học tập, làm việc online và giải trí không gián đoạn, mượt mà mọi lúc.</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}><Gift size={32} /></div>
              <h3>Ưu đãi & chăm sóc 24/7</h3>
              <p>Đặc biệt tặng thêm 1 tháng khi đăng ký 12 tháng, hỗ trợ kỹ thuật tận nơi.</p>
            </div>
          </div>
        </section>

        {/* THỦ TỤC VÀ QUY TRÌNH ĐĂNG KÝ */}
        <section className={styles.section} style={{ paddingTop: '0' }}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Quy trình & Thủ tục</h2>
            <p className={styles.sectionDesc}>
              Chỉ với vài bước cơ bản, bạn đã có thể hoàn tất đăng ký và được kỹ thuật viên hỗ trợ lắp đặt Internet nhanh chóng tại nhà.
            </p>
          </div>

          <div className="row">
            <div className="col-md-5">
              <div className={styles.procedureBox} style={{ height: '100%', background: '#f0f9ff', borderColor: '#93c5fd' }}>
                <h3 className={styles.benefitTitle} style={{ color: '#1e3a8a', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Monitor size={24} /> Hồ sơ cần chuẩn bị
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start' }}>
                    <CheckCircle color="#2563eb" size={20} style={{ marginRight: '12px', marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '16px', color: '#334155', lineHeight: '1.5' }}><strong>Khách hàng cá nhân:</strong> Bản photo/scan hoặc ảnh chụp CMND/CCCD.</span>
                  </li>
                  <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start' }}>
                    <CheckCircle color="#2563eb" size={20} style={{ marginRight: '12px', marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '16px', color: '#334155', lineHeight: '1.5' }}><strong>Người thuê nhà/Sinh viên:</strong> CMND/CCCD và đóng trước tối thiểu 6 tháng cước.</span>
                  </li>
                  <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start' }}>
                    <CheckCircle color="#2563eb" size={20} style={{ marginRight: '12px', marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '16px', color: '#334155', lineHeight: '1.5' }}><strong>Khách hàng doanh nghiệp:</strong> Bản sao Giấy phép kinh doanh và CMND của người đại diện.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-7">
              <div className={styles.procedureBox}>
                <h3 className={styles.benefitTitle} style={{ color: '#0f172a', marginBottom: '25px' }}>Quy trình lắp đặt trong 24h</h3>
                <div className={styles.procStep}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h4>Liên hệ tư vấn</h4>
                    <p>Chọn gói cước và để lại thông tin trên website hoặc gọi Hotline 1900 6600.</p>
                  </div>
                </div>
                <div className={styles.procStep}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h4>Khảo sát & Ký hợp đồng</h4>
                    <p>Nhân viên FPT liên hệ xác nhận, khảo sát hạ tầng và ký hợp đồng điện tử tiện lợi.</p>
                  </div>
                </div>
                <div className={styles.procStep}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h4>Lắp đặt nghiệm thu</h4>
                    <p>Kỹ thuật viên triển khai lắp đặt tại nhà trong vòng 12-24h và hướng dẫn sử dụng chi tiết.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO CONTENT & PRICING TABLES */}
        <section className={styles.section} style={{ paddingTop: '0' }}>
          <div className={styles.seoContent}>
            <h2 className={styles.seoTitle}>Bảng giá mạng FPT dành cho Gia đình (Có trang bị Mesh)</h2>
            <p className={styles.seoText}>
              Tham khảo bảng giá các gói Internet gia đình FPT với thiết bị Access Point phủ sóng mạnh, phù hợp cho nhà nhiều tầng, chung cư diện tích rộng.
            </p>
            <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
              <table className={styles.priceTable}>
                <thead>
                  <tr>
                    <th>Gói cước</th>
                    <th>Băng thông (DL/UL)</th>
                    <th>Đăng ký</th>
                    <th>Thiết bị đi kèm</th>
                    <th>Giá cước (chỉ từ)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Giga F1</strong> (300Mb)</td>
                    <td>300 Mbps / 300 Mbps</td>
                    <td><Link to="/dang-ky?product=Internet%20Giga%20F1" className={styles.tableCta}>Đăng ký</Link></td>
                    <td>Modem Wi-Fi 6 + 1 Access Point</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>205.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Sky F1</strong> (1Gb)</td>
                    <td>1 Gbps / 300 Mbps</td>
                    <td><Link to="/dang-ky?product=Internet%20Sky%20F1" className={styles.tableCta}>Đăng ký</Link></td>
                    <td>Modem Wi-Fi 6 + 1 Access Point</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>210.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Giga F2</strong> (300Mb)</td>
                    <td>300 Mbps / 300 Mbps</td>
                    <td><Link to="/dang-ky?product=Internet%20Giga%20F2" className={styles.tableCta}>Đăng ký</Link></td>
                    <td>Modem Wi-Fi 6 + 2 Access Point</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>225.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Sky F2</strong> (1Gb)</td>
                    <td>1 Gbps / 300 Mbps</td>
                    <td><Link to="/dang-ky?product=Internet%20Sky%20F2" className={styles.tableCta}>Đăng ký</Link></td>
                    <td>Modem Wi-Fi 6 + 2 Access Point</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>230.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Giga F3</strong> (300Mb)</td>
                    <td>300 Mbps / 300 Mbps</td>
                    <td><Link to="/dang-ky?product=Internet%20Giga%20F3" className={styles.tableCta}>Đăng ký</Link></td>
                    <td>Modem Wi-Fi 6 + 3 Access Point</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>245.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Sky F3</strong> (1Gb)</td>
                    <td>1 Gbps / 300 Mbps</td>
                    <td><Link to="/dang-ky?product=Internet%20Sky%20F3" className={styles.tableCta}>Đăng ký</Link></td>
                    <td>Modem Wi-Fi 6 + 3 Access Point</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>255.000đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '14px', color: '#94a3b8', fontStyle: 'italic', marginBottom: '40px' }}>
              * Lưu ý: giá gói cước Internet gia đình FPT có thể thay đổi theo khu vực, thời điểm đăng ký và chính sách hiện hành. Nhấn Đăng ký hoặc gọi 1900.6600 để được tư vấn chính xác.
            </p>

            <h2 className={styles.seoTitle}>Bảng giá các gói Combo Internet & Truyền hình FPT Play</h2>
            <p className={styles.seoText}>
              Bảng giá các gói combo Internet và truyền hình FPT Play dành cho gia đình cần vừa lắp mạng ổn định vừa xem giải trí, thể thao:
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles.priceTable}>
                <thead>
                  <tr>
                    <th>Gói cước</th>
                    <th>Băng thông (DL/UL)</th>
                    <th>Đăng ký</th>
                    <th>Thiết bị, dịch vụ đi kèm</th>
                    <th>Giá cước (chỉ từ)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Combo Giga F1</strong> (300Mb)</td>
                    <td>300 Mbps / 300 Mbps</td>
                    <td><Link to="/dang-ky?product=Combo%20Giga%20F1" className={styles.tableCta}>Đăng ký</Link></td>
                    <td>Modem Wi-Fi 6 + 1 AP + FPT Play Box (130+ kênh)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>220.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Combo Sky F1</strong> (1Gb)</td>
                    <td>1 Gbps / 300 Mbps</td>
                    <td><Link to="/dang-ky?product=Combo%20Sky%20F1" className={styles.tableCta}>Đăng ký</Link></td>
                    <td>Modem Wi-Fi 6 + 1 AP + FPT Play Box (130+ kênh)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>239.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Combo Giga F2</strong> (300Mb)</td>
                    <td>300 Mbps / 300 Mbps</td>
                    <td><Link to="/dang-ky?product=Combo%20Giga%20F2" className={styles.tableCta}>Đăng ký</Link></td>
                    <td>Modem Wi-Fi 6 + 2 AP + FPT Play Box (130+ kênh)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>240.000đ</td>
                  </tr>
                  <tr>
                    <td><strong>Combo Sky F2</strong> (1Gb)</td>
                    <td>1 Gbps / 300 Mbps</td>
                    <td><Link to="/dang-ky?product=Combo%20Sky%20F2" className={styles.tableCta}>Đăng ký</Link></td>
                    <td>Modem Wi-Fi 6 + 2 AP + FPT Play Box (130+ kênh)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>259.000đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '14px', color: '#94a3b8', fontStyle: 'italic', marginTop: '15px', marginBottom: '40px' }}>
              * Lưu ý: giá gói combo có thể thay đổi theo khu vực và chính sách hiện hành. Nhấn Đăng ký hoặc gọi 1900.6600 để được tư vấn chi tiết.
            </p>

            <h2 className={styles.seoTitle} style={{marginTop: '20px'}}>Vì sao FPT nên là sự lựa chọn Internet cho gia đình bạn?</h2>
            <p className={styles.seoText}>
              FPT tự hào sở hữu hạ tầng cáp quang hiện đại, phủ sóng rộng khắp, đảm bảo tốc độ đường truyền luôn ổn định và nhanh chóng, ngay cả trong giờ cao điểm. Điều này cực kỳ quan trọng đối với các gia đình có nhiều thành viên cùng sử dụng internet cho các mục đích khác nhau như học tập, làm việc trực tuyến, xem video chất lượng cao hay chơi game online.
            </p>
            <p className={styles.seoText}>
              FPT liên tục cập nhật và ứng dụng những công nghệ mới nhất, điển hình là Modem Wi-Fi 6, mang đến khả năng kết nối vượt trội, vùng phủ sóng rộng hơn và giảm thiểu độ trễ. Đặc biệt, các giải pháp mở rộng sóng như Access Point và Wi-Fi Mesh giúp tín hiệu Wi-Fi mạnh mẽ đến từng ngóc ngách trong ngôi nhà.
            </p>
            <p className={styles.seoText}>
              Với các gói cước đa dạng, linh hoạt và nhiều chương trình ưu đãi hấp dẫn, FPT mang đến giải pháp internet chất lượng cao với chi phí hợp lý, phù hợp với mọi nhu cầu và ngân sách của các gia đình Việt. Bạn có thể chọn gói phù hợp ngay trên website, nhấn <strong>ĐĂNG KÝ</strong> hoặc <strong>TƯ VẤN NGAY</strong> để nhận báo giá theo khu vực.
            </p>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className={styles.section} style={{ paddingTop: '0' }}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Câu hỏi thường gặp</h2>
            <p className={styles.sectionDesc}>
              Giải đáp những thắc mắc phổ biến khi chọn dịch vụ Internet cho gia đình.
            </p>
          </div>
          
          <div className={styles.faqSection}>
            {FAQ_DATA.map((faq, index) => (
              <div key={index} className={`${styles.faqItem} ${openFaq === index ? styles.faqOpen : ''}`}>
                <h4 className={styles.faqQuestion} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  {faq.q}
                  <ChevronDown size={20} className={styles.faqChevron} />
                </h4>
                {openFaq === index && (
                  <p className={styles.faqAnswer}>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
      {/* NEWS SECTION */}
      <NewsSection />
    </div>
  );
}
