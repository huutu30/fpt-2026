import React, { useEffect, useState } from 'react';
import { useRegisterModal } from '../../context/RegisterContext';
import { ShieldCheck, Wifi, Activity, MonitorPlay, CheckCircle, ChevronRight, ChevronDown, Download, Upload, Monitor, Gamepad2, Trophy } from 'lucide-react';
import { PRODUCT_DATA } from '../../data/productData';
import ProductCardSlider from '../../components/common/ProductCardSlider';
import NewsSection from '../../components/home/NewsSection';
import { Link } from 'react-router-dom';
import styles from './CaNhan.module.css';

const TABS = [
  { id: 'internet', label: 'Internet Cá Nhân', icon: <Wifi size={18} /> },
  { id: 'combo', label: 'Combo Truyền Hình', icon: <MonitorPlay size={18} /> },
];

const TAB_CONFIG = {
  internet: {
    title: 'Gói cước Internet Tốc độ cao',
    desc: 'Khám phá các gói cước Internet FPT dành cho cá nhân với mức giá rõ ràng, tốc độ cao, dễ chọn theo nhu cầu học tập, làm việc, giải trí và sử dụng nhiều thiết bị.',
    badgeSub: 'INTERNET CÁ NHÂN',
  },
  combo: {
    title: 'Combo Internet & Truyền hình',
    desc: 'Cập nhật bảng giá gói cước FPT tích hợp Internet và truyền hình với chi phí tiết kiệm, phù hợp gia đình cần vừa lắp mạng ổn định vừa xem giải trí trên FPT Play.',
    badgeSub: 'COMBO INTERNET & TRUYỀN HÌNH',
  },
};

const FAQ_DATA = [
  { q: "Tôi cần chuẩn bị giấy tờ gì khi đăng ký lắp mạng FPT?", a: "Cá nhân Việt Nam cần CMND/CCCD gốc hoặc bản công chứng. Khách nước ngoài cần hộ chiếu và giấy tạm trú/thường trú hợp lệ. Doanh nghiệp hoặc tổ chức cần Giấy phép kinh doanh, dấu công ty và người đại diện pháp luật." },
  { q: "Lắp wifi FPT mất bao lâu thì có thể sử dụng?", a: "Sau khi hoàn tất thủ tục đăng ký mạng FPT, kỹ thuật viên sẽ liên hệ và triển khai lắp đặt trong vòng 24–48 giờ. Một số khu vực có thể được lắp ngay trong ngày nếu hạ tầng có sẵn." },
  { q: "Có những gói cước wifi FPT nào phù hợp để lắp wifi gia đình?", a: "FPT cung cấp nhiều gói cước phù hợp cho hộ gia đình như Giga (300Mbps), Sky (1Gbps) và các combo internet + truyền hình FPT Play. Tùy vào nhu cầu sử dụng, bạn sẽ được tư vấn gói cước tối ưu nhất." },
  { q: "Chi phí lắp đặt wifi FPT là bao nhiêu?", a: "Phí hòa mạng lắp wifi FPT bao gồm phí cước tháng và phí lắp đặt. Chi phí này sẽ khác nhau tùy theo gói cước, khu vực và chương trình khuyến mãi hiện hành." },
  { q: "Tôi có thể đăng ký wifi FPT online không?", a: "Bạn có thể đăng ký lắp mạng FPT online qua website fpt.vn. Sau khi xác nhận, nhân viên sẽ hỗ trợ tư vấn và sắp xếp kỹ thuật lắp đặt nhanh chóng." },
  { q: "Có thể chuyển địa chỉ lắp wifi FPT được không?", a: "Hoàn toàn được. Bạn chỉ cần liên hệ tổng đài hoặc trung tâm FPT gần nhất để đăng ký chuyển địa chỉ mạng FPT. Thời gian xử lý từ 1–2 ngày làm việc và sẽ được giữ nguyên gói cước nếu địa chỉ mới có hạ tầng." },
  { q: "Khi lắp mạng FPT, tôi được cung cấp thiết bị gì?", a: "Tùy theo gói cước, khách hàng được trang bị modem WiFi 6, WiFi Mesh hoặc thiết bị chuyên dụng như Mikrotik, Aruba... Thiết bị được bảo hành chính hãng, hỗ trợ kỹ thuật 24/7." },
  { q: "Các hình thức thanh toán khi lắp wifi FPT là gì?", a: "Khách hàng có thể thanh toán bằng ứng dụng Hi FPT, Internet Banking, ví điện tử (MoMo, ZaloPay...), chuyển khoản ngân hàng, hoặc trực tiếp tại các điểm giao dịch FPT." },
  { q: "Lắp mạng internet FPT có ổn định không?", a: "FPT sử dụng hạ tầng cáp quang FTTH đồng bộ, trang bị modem WiFi 6 hiện đại, mang lại tốc độ truy cập nhanh, ổn định. Ngoài ra, FPT có đội ngũ kỹ thuật hỗ trợ tận nơi nếu xảy ra sự cố mạng." }
];

export default function CaNhan({ region }) {
  const { openModal } = useRegisterModal();
  const [activeTab, setActiveTab] = useState('internet');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Bảng giá gói cước internet FPT cá nhân gia đình | FPT Telecom";
  }, []);

  // Lấy sản phẩm theo ID từ một danh sách cụ thể
  const getProductsByIds = (sourceArrays, idList) => {
    const pool = sourceArrays.flat();
    return idList.map(id => pool.find(p => p.id === id)).filter(Boolean);
  };

  const CA_NHAN_DISPLAY_IDS = {
    internet: [
      "giga", "sky", "giga-f1", "sky-f1", "meta-f1", "fpt-an-tam", "sky-f2", "sky-f3", "meta-f2", "meta-f3"
    ],
    combo: [
      "combo-sky", "combo-giga", "combo-meta", "combo-giga-f1", "combo-sky-f1", "combo-meta-f1", 
      "combo-meta-f2", "combo-meta-f3", "combo-an-tam", "combo-giga-lite", "combo-giga-f1-lite", 
      "combo-giga-f2-lite", "combo-giga-f3-lite", "combo-sky-lite", "combo-sky-f1-lite", "combo-sky-f2-lite", "combo-sky-f3-lite", 
      "combo-meta-lite", "combo-meta-f1-lite", "combo-meta-f2-lite", "combo-meta-f3-lite", "combo-fgame-lite", 
      "combo-fgame-f1-lite", "combo-fgame-f2-lite", "combo-fgame-f3-lite", "fpt-speedx2-pro-lite", "fpt-speedx10-pro-lite"
    ]
  };

  // Tab internet: chỉ lấy từ ca_nhan (gói Internet thuần)
  // Tab combo: chỉ lấy từ additional_home_packages + f_game (gói Combo truyền hình, KHÔNG phải thể thao)
  const DATA_SOURCES = {
    internet: [PRODUCT_DATA.ca_nhan || []],
    combo: [PRODUCT_DATA.additional_home_packages || [], PRODUCT_DATA.f_game || []],
  };

  const currentTab = TAB_CONFIG[activeTab];
  const currentData = getProductsByIds(DATA_SOURCES[activeTab] || [], CA_NHAN_DISPLAY_IDS[activeTab] || []);

  return (
    <div className={styles.caNhanPage}>
      <div className="container">
        
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Internet FPT <span>Cá nhân & Gia đình</span>
            </h1>
            <p className={styles.heroDesc}>
              Khám phá các gói cước Internet FPT dành cho cá nhân và hộ gia đình với mức giá rõ ràng, tốc độ cao, dễ chọn theo nhu cầu học tập, làm việc, giải trí và sử dụng nhiều thiết bị mỗi ngày.
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
            data={currentData} 
            region={region} 
            badgeSub={currentTab.badgeSub}
          />
        </section>

        {/* HIGHLIGHTS - 4 điểm nổi bật */}
        <section className={styles.section}>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}><Activity size={32} /></div>
              <h3>Gói cước FPT tốc độ đến 1Gbps</h3>
              <p>Xem bảng giá mạng FPT với nhiều lựa chọn băng thông mạnh, phù hợp học tập, làm việc và giải trí tại nhà.</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}><Wifi size={32} /></div>
              <h3>Phủ sóng tốt, kết nối ổn định hơn</h3>
              <p>Bảng giá mạng FPT đi kèm nhiều lựa chọn thiết bị và giải pháp phủ sóng, phù hợp không gian sống hiện đại.</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}><MonitorPlay size={32} /></div>
              <h3>Trải nghiệm online mượt hơn mỗi ngày</h3>
              <p>Các gói cước FPT hỗ trợ học online, làm việc từ xa, xem phim, chơi game và kết nối nhiều thiết bị cùng lúc.</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}><ShieldCheck size={32} /></div>
              <h3>Nhiều ưu đãi khi đăng ký gói cước FPT</h3>
              <p>Cập nhật bảng giá mạng FPT cùng các chương trình khuyến mãi giúp người dùng dễ chọn gói cước phù hợp ngân sách.</p>
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
              <div className={styles.procedureBox} style={{ height: '100%', background: '#fff9f5', borderColor: '#fdba74' }}>
                <h3 className={styles.benefitTitle} style={{ color: '#ea580c', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Monitor size={24} /> Hồ sơ cần chuẩn bị
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start' }}>
                    <CheckCircle color="#f57020" size={20} style={{ marginRight: '12px', marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '16px', color: '#334155', lineHeight: '1.5' }}><strong>Khách hàng cá nhân:</strong> Bản photo/scan hoặc ảnh chụp CMND/CCCD.</span>
                  </li>
                  <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start' }}>
                    <CheckCircle color="#f57020" size={20} style={{ marginRight: '12px', marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '16px', color: '#334155', lineHeight: '1.5' }}><strong>Người thuê nhà/Sinh viên:</strong> CMND/CCCD và đóng trước tối thiểu 6 tháng cước.</span>
                  </li>
                  <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start' }}>
                    <CheckCircle color="#f57020" size={20} style={{ marginRight: '12px', marginTop: '3px', flexShrink: 0 }} />
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
            <h2 className={styles.seoTitle}>Các gói cước Internet cá nhân FPT - Linh hoạt nhu cầu, dễ chọn theo mức sử dụng</h2>
            <p className={styles.seoText}>
              FPT hiện cung cấp nhiều gói cước Internet cá nhân dành cho người dùng tại nhà, từ nhu cầu cơ bản như lướt web, học online, xem phim đến nhu cầu cao hơn như kết nối nhiều thiết bị hoặc cần vùng phủ sóng rộng hơn trong căn hộ, nhà phố.
            </p>

            <h2 className={styles.seoTitle}>Bảng giá gói cước Internet cá nhân FPT cho nhu cầu sử dụng tại nhà</h2>
            <p className={styles.seoText}>
              Tham khảo bảng giá các gói Internet cá nhân FPT phù hợp cho người ở một mình, gia đình nhỏ, căn hộ chung cư hoặc nhu cầu sử dụng Internet hằng ngày tại nhà.
            </p>
            <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
              <table className={styles.priceTable}>
                <thead>
                  <tr>
                    <th>Gói cước</th>
                    <th>Giá cước (chỉ từ)</th>
                    <th>Đăng ký</th>
                    <th>Thiết bị, dịch vụ đi kèm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Giga</strong> (300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>195,000 ₫</td>
                    <td><button onClick={() => openModal(decodeURIComponent('Internet%20Giga'))} className={styles.tableCta}>Đăng ký</button></td>
                    <td>Modem Wi-Fi 6</td>
                  </tr>
                  <tr>
                    <td><strong>Sky</strong> (1Gb - 300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>195,000 ₫</td>
                    <td><button onClick={() => openModal(decodeURIComponent('Internet%20Sky'))} className={styles.tableCta}>Đăng ký</button></td>
                    <td>Modem Wi-Fi 6</td>
                  </tr>
                  <tr>
                    <td><strong>Giga F1</strong> (300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>205,000 ₫</td>
                    <td><button onClick={() => openModal(decodeURIComponent('Internet%20Giga%20F1'))} className={styles.tableCta}>Đăng ký</button></td>
                    <td>Modem Wi-Fi 6, Access Point</td>
                  </tr>
                  <tr>
                    <td><strong>Sky F1</strong> (1Gb - 300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>210,000 ₫</td>
                    <td><button onClick={() => openModal(decodeURIComponent('Internet%20Sky%20F1'))} className={styles.tableCta}>Đăng ký</button></td>
                    <td>Modem Wi-Fi 6, Access Point</td>
                  </tr>
                  <tr>
                    <td><strong>Giga F2</strong> (300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>225,000 ₫</td>
                    <td><button onClick={() => openModal(decodeURIComponent('Internet%20Giga%20F2'))} className={styles.tableCta}>Đăng ký</button></td>
                    <td>Modem Wi-Fi 6, 2 Access Point</td>
                  </tr>
                  <tr>
                    <td><strong>Sky F2</strong> (1Gb - 300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>230,000 ₫</td>
                    <td><button onClick={() => openModal(decodeURIComponent('Internet%20Sky%20F2'))} className={styles.tableCta}>Đăng ký</button></td>
                    <td>Modem Wi-Fi 6, 2 Access Point</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '14px', color: '#94a3b8', fontStyle: 'italic', marginBottom: '40px' }}>
              * Lưu ý: giá gói cước Internet cá nhân FPT có thể thay đổi theo khu vực, thời điểm đăng ký và chính sách hiện hành. Để nhận báo giá chính xác nhất, bạn có thể nhấn Đăng ký hoặc gọi 1900.6600 để được tư vấn nhanh.
            </p>

            <h2 className={styles.seoTitle}>Bảng giá các gói combo Internet và truyền hình FPT Play</h2>
            <p className={styles.seoText}>
              Bảng giá các gói combo Internet và truyền hình FPT Play dành cho nhu cầu giải trí tại nhà:
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles.priceTable}>
                <thead>
                  <tr>
                    <th>Gói cước</th>
                    <th>Giá cước (chỉ từ)</th>
                    <th>Đăng ký</th>
                    <th>Thiết bị, dịch vụ đi kèm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Combo Giải trí</strong> (300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>200,000 ₫</td>
                    <td><button onClick={() => openModal(decodeURIComponent('Combo%20Giai%20Tri'))} className={styles.tableCta}>Đăng ký</button></td>
                    <td>Modem Wi-Fi 6, FPT Play Box</td>
                  </tr>
                  <tr>
                    <td><strong>Combo Truyền hình</strong> (1Gbps)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>210,000 ₫</td>
                    <td><button onClick={() => openModal(decodeURIComponent('Combo%20Truyen%20Hinh'))} className={styles.tableCta}>Đăng ký</button></td>
                    <td>Modem Wi-Fi 6, FPT Play Box</td>
                  </tr>
                  <tr>
                    <td><strong>Combo Giga F1</strong> (300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>220,000 ₫</td>
                    <td><button onClick={() => openModal(decodeURIComponent('Combo%20Giga%20F1'))} className={styles.tableCta}>Đăng ký</button></td>
                    <td>Modem Wi-Fi 6, FPT Play Box</td>
                  </tr>
                  <tr>
                    <td><strong>Combo Sky F1</strong> (1Gb - 300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>239,000 ₫</td>
                    <td><button onClick={() => openModal(decodeURIComponent('Combo%20Sky%20F1'))} className={styles.tableCta}>Đăng ký</button></td>
                    <td>Modem Wi-Fi 6, FPT Play Box</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '14px', color: '#94a3b8', fontStyle: 'italic', marginTop: '15px' }}>
              * Lưu ý: giá gói combo Internet và truyền hình có thể thay đổi theo khu vực, thời điểm đăng ký và chính sách hiện hành. Nhấn ngay vào Đăng ký hoặc gọi 1900.6600 để được tư vấn chi tiết.
            </p>

            <h2 className={styles.seoTitle} style={{marginTop: '40px'}}>Đăng ký gói cước Internet cá nhân FPT phù hợp với nhu cầu của bạn</h2>
            <p className={styles.seoText}>
              Nếu bạn đang cần lắp mạng tại nhà cho nhu cầu cá nhân, căn hộ nhỏ hoặc gia đình ít người, các gói cước Internet cá nhân FPT là lựa chọn đáng tham khảo nhờ tốc độ cao, thiết bị Wi-Fi 6 đi kèm và mức giá linh hoạt theo từng nhu cầu sử dụng. Bạn có thể chọn gói phù hợp ngay trên website, nhấn <strong>ĐĂNG KÝ</strong> hoặc <strong>TƯ VẤN NGAY</strong> để nhận báo giá theo khu vực, thông tin ưu đãi hiện hành và hỗ trợ lắp đặt nhanh.
            </p>
            <p className={styles.seoText}>
              Ngoài các gói Internet cá nhân, FPT còn cung cấp thêm gói combo truyền hình, gói dành cho game thủ và giải pháp Internet cho doanh nghiệp.
            </p>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className={styles.section} style={{ paddingTop: '0' }}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Câu hỏi thường gặp</h2>
            <p className={styles.sectionDesc}>
              Giải đáp những thắc mắc phổ biến khi đăng ký và sử dụng dịch vụ Internet FPT.
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
