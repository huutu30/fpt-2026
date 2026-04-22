import React, { useEffect, useState } from 'react';
import { ShieldCheck, Wifi, Activity, MonitorPlay, CheckCircle, ChevronRight, Download, Upload, Monitor } from 'lucide-react';
import { PRODUCT_DATA } from '../../data/productData';
import ProductCardSlider from '../../components/common/ProductCardSlider';
import NewsSection from '../../components/home/NewsSection';
import { Link } from 'react-router-dom';
import styles from './CaNhan.module.css';

export default function CaNhan({ region }) {
  const [activeTab, setActiveTab] = useState('internet');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Bảng giá gói cước internet FPT cá nhân gia đình | FPT Telecom";
  }, []);

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
              Trải nghiệm Wi-Fi 6 siêu tốc độ, băng thông không giới hạn. Phù hợp mọi nhu cầu học tập, làm việc và giải trí tại nhà với độ trễ thấp nhất.
            </p>
            <a href="#packages" className={styles.heroBtn}>
              Xem gói cước <ChevronRight size={20} />
            </a>
          </div>
        </section>

        {/* TABS NAVIGATION */}
        <div className={styles.tabsNav} id="packages">
          <button 
            className={`${styles.tabBtn} ${activeTab === 'internet' ? styles.active : ''}`}
            onClick={() => setActiveTab('internet')}
          >
            Internet Cá Nhân
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'combo' ? styles.active : ''}`}
            onClick={() => setActiveTab('combo')}
          >
            Combo Truyền Hình
          </button>
        </div>

        {/* GÓI CƯỚC INTERNET ĐƠN LẺ */}
        {activeTab === 'internet' && (
          <section className={styles.section} style={{ paddingTop: '0' }}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Gói cước Internet Tốc độ cao</h2>
              <p className={styles.sectionDesc}>
                Khám phá các gói cước Internet FPT dành cho cá nhân với mức giá rõ ràng, tốc độ cao, dễ chọn theo nhu cầu học tập, làm việc, giải trí và sử dụng nhiều thiết bị.
              </p>
            </div>
            
            <ProductCardSlider 
              data={PRODUCT_DATA.ca_nhan} 
              region={region} 
              badgeSub="INTERNET CÁ NHÂN"
            />
          </section>
        )}

        {/* GÓI CƯỚC COMBO GIA ĐÌNH */}
        {activeTab === 'combo' && (
          <section className={styles.section} style={{ paddingTop: '0' }}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Combo Internet & Truyền hình</h2>
              <p className={styles.sectionDesc}>
                Cập nhật bảng giá gói cước FPT tích hợp Internet và truyền hình với chi phí tiết kiệm, phù hợp gia đình cần vừa lắp mạng ổn định vừa xem giải trí trên FPT Play.
              </p>
            </div>
            
            <ProductCardSlider 
              data={PRODUCT_DATA.gia_dinh} 
              region={region} 
              badgeSub="COMBO INTERNET & TRUYỀN HÌNH"
            />
          </section>
        )}

        {/* LÝ DO CHỌN FPT */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Vì sao nên chọn mạng FPT?</h2>
            <p className={styles.sectionDesc}>
              Mạng FPT là sự lựa chọn hàng đầu nhờ hệ thống hạ tầng cáp quang hiện đại và dịch vụ chăm sóc khách hàng chuyên nghiệp 24/7.
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Wifi size={36} /></div>
              <h3 className={styles.benefitTitle}>Công nghệ Wi-Fi 6</h3>
              <p className={styles.benefitDesc}>Trang bị miễn phí Modem Wi-Fi 6 hiện đại, cho vùng phủ sóng rộng hơn, kết nối mượt mà hơn.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Activity size={36} /></div>
              <h3 className={styles.benefitTitle}>Tốc độ vượt trội</h3>
              <p className={styles.benefitDesc}>Các gói cước Meta, Sky mở khóa băng thông lên đến 1Gbps, giúp học online, chơi game cực kỳ ổn định.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><ShieldCheck size={36} /></div>
              <h3 className={styles.benefitTitle}>Bảo mật an toàn F-Safe</h3>
              <p className={styles.benefitDesc}>Công nghệ bảo mật tự động tích hợp, giúp chặn các trang web độc hại và bảo vệ trẻ em.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><MonitorPlay size={36} /></div>
              <h3 className={styles.benefitTitle}>Giải trí đỉnh cao</h3>
              <p className={styles.benefitDesc}>Kết hợp hoàn hảo với FPT Play, mang đến hàng trăm kênh truyền hình và thể thao độc quyền.</p>
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
            <h2 className={styles.seoTitle}>Vì sao gói cước Internet cá nhân FPT là lựa chọn phù hợp cho bạn</h2>
            <p className={styles.seoText}>
              Đối với nhu cầu sử dụng Internet tại nhà, người dùng thường quan tâm đến tốc độ ổn định, thiết bị đi kèm, khả năng kết nối nhiều thiết bị và mức giá hợp lý. Các gói cước Internet cá nhân FPT đáp ứng khá tốt những tiêu chí này nhờ hạ tầng cáp quang chuẩn quốc tế, modem Wi-Fi 6 hiện đại và nhiều lựa chọn phù hợp theo từng mức độ sử dụng thực tế.
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '40px', color: '#475569', lineHeight: '1.8', fontSize: '16px' }}>
              <li style={{marginBottom: '10px'}}><strong>Phù hợp nhu cầu sử dụng tại nhà:</strong> Thiết kế cho người dùng cá nhân, gia đình nhỏ, căn hộ hoặc nhà phố với mức tốc độ và chi phí dễ lựa chọn.</li>
              <li style={{marginBottom: '10px'}}><strong>Hạ tầng cáp quang ổn định:</strong> Đường truyền cáp quang giúp kết nối Internet ổn định hơn cho học tập, làm việc online, xem video 4K.</li>
              <li style={{marginBottom: '10px'}}><strong>Trang bị modem Wi-Fi 6:</strong> Hỗ trợ kết nối tốt hơn, giảm độ trễ, cực kỳ mượt mà khi trong nhà có nhiều thiết bị thông minh cùng hoạt động.</li>
            </ul>

            <h2 className={styles.seoTitle}>Bảng giá gói cước Internet cá nhân FPT cho nhu cầu sử dụng tại nhà</h2>
            <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
              <table className={styles.priceTable}>
                <thead>
                  <tr>
                    <th>Gói cước</th>
                    <th>Giá cước (chỉ từ)</th>
                    <th>Thiết bị, dịch vụ đi kèm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Giga</strong> (300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>195,000 ₫</td>
                    <td>Modem Wi-Fi 6</td>
                  </tr>
                  <tr>
                    <td><strong>Sky</strong> (1Gb - 300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>195,000 ₫</td>
                    <td>Modem Wi-Fi 6</td>
                  </tr>
                  <tr>
                    <td><strong>Giga F1</strong> (300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>205,000 ₫</td>
                    <td>Modem Wi-Fi 6, Access Point</td>
                  </tr>
                  <tr>
                    <td><strong>Sky F1</strong> (1Gb - 300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>210,000 ₫</td>
                    <td>Modem Wi-Fi 6, Access Point</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className={styles.seoTitle}>Bảng giá các gói combo Internet và truyền hình FPT Play</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles.priceTable}>
                <thead>
                  <tr>
                    <th>Gói cước</th>
                    <th>Giá cước (chỉ từ)</th>
                    <th>Thiết bị, dịch vụ đi kèm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Combo Giải trí</strong> (300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>200,000 ₫</td>
                    <td>Modem Wi-Fi 6, FPT Play Box</td>
                  </tr>
                  <tr>
                    <td><strong>Combo Truyền hình</strong> (1Gbps/300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>210,000 ₫</td>
                    <td>Modem Wi-Fi 6, FPT Play Box</td>
                  </tr>
                  <tr>
                    <td><strong>Combo Giga F1</strong> (300Mb)</td>
                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>220,000 ₫</td>
                    <td>Modem Wi-Fi 6, FPT Play Box, Access Point</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '14px', color: '#94a3b8', fontStyle: 'italic', marginTop: '15px' }}>
              * Lưu ý: giá gói cước Internet cá nhân FPT có thể thay đổi theo khu vực, thời điểm đăng ký.
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
            {[
              { q: "Tôi cần chuẩn bị giấy tờ gì khi đăng ký lắp mạng FPT?", a: "Cá nhân Việt Nam cần CMND/CCCD gốc hoặc bản công chứng. Khách nước ngoài cần hộ chiếu và giấy tạm trú/thường trú hợp lệ. Doanh nghiệp hoặc tổ chức cần Giấy phép kinh doanh, dấu công ty và người đại diện pháp luật." },
              { q: "Lắp wifi FPT mất bao lâu thì có thể sử dụng?", a: "Sau khi hoàn tất thủ tục đăng ký mạng FPT, kỹ thuật viên sẽ liên hệ và triển khai lắp đặt trong vòng 24–48 giờ. Một số khu vực có thể được lắp ngay trong ngày nếu hạ tầng có sẵn." },
              { q: "Có những gói cước wifi FPT nào phù hợp để lắp wifi gia đình?", a: "FPT cung cấp nhiều gói cước phù hợp cho hộ gia đình như Giga (300Mbps), Sky (1Gbps) và các combo internet + truyền hình FPT Play. Tùy vào nhu cầu sử dụng, bạn sẽ được tư vấn gói cước tối ưu nhất." },
              { q: "Chi phí lắp đặt wifi FPT là bao nhiêu?", a: "Phí hòa mạng lắp wifi FPT bao gồm phí cước tháng và phí lắp đặt. Chi phí này sẽ khác nhau tùy theo gói cước, khu vực và chương trình khuyến mãi hiện hành." },
              { q: "Tôi có thể đăng ký wifi FPT online không?", a: "Bạn có thể đăng ký lắp mạng FPT online qua website fpt.vn. Sau khi xác nhận, nhân viên sẽ hỗ trợ tư vấn và sắp xếp kỹ thuật lắp đặt nhanh chóng." },
              { q: "Có thể chuyển địa chỉ lắp wifi FPT được không?", a: "Hoàn toàn được. Bạn chỉ cần liên hệ tổng đài hoặc trung tâm FPT gần nhất để đăng ký chuyển địa chỉ mạng FPT. Thời gian xử lý từ 1–2 ngày làm việc và sẽ được giữ nguyên gói cước nếu địa chỉ mới có hạ tầng." },
              { q: "Khi lắp mạng FPT, tôi được cung cấp thiết bị gì?", a: "Tùy theo gói cước, khách hàng được trang bị modem WiFi 6, WiFi Mesh hoặc thiết bị chuyên dụng như Mikrotik, Aruba... Thiết bị được bảo hành chính hãng, hỗ trợ kỹ thuật 24/7." },
              { q: "Các hình thức thanh toán khi lắp wifi FPT là gì?", a: "Khách hàng có thể thanh toán bằng ứng dụng Hi FPT, Internet Banking, ví điện tử (MoMo, ZaloPay...), chuyển khoản ngân hàng, hoặc trực tiếp tại các điểm giao dịch FPT." },
              { q: "Lắp mạng internet FPT có ổn định không?", a: "FPT sử dụng hạ tầng cáp quang FTTH đồng bộ, trang bị modem WiFi 6 hiện đại, mang lại tốc độ truy cập nhanh, ổn định. Ngoài ra, FPT có đội ngũ kỹ thuật hỗ trợ tận nơi nếu xảy ra sự cố mạng." }
            ].map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>
                  {faq.q}
                  <ChevronRight size={20} color="#94a3b8" />
                </h4>
                <p className={styles.faqAnswer}>{faq.a}</p>
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
