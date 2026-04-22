import React, { useState } from 'react';
import styles from './NgoaiHangAnh.module.css';

export default function NgoaiHangAnh({ region }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.pageContainer}>

      {/* 0. MAIN BANNER SECTION */}
      <section className={styles.mainBanner}>
        <img className={styles.mainBannerBg} src="/images/ngoai-hang-anh/bg-nha-header.jpg" alt="Vinfast Banner" onError={(e) => { e.target.style.display = 'none'; }} />
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={styles.bannerActions}>
            <button className={styles.btnBannerAction} onClick={openModal}>
              <span>Bạn chưa có Internet FPT</span>
              ĐĂNG KÝ NGAY
            </button>
          </div>
        </div>
      </section>

      {/* 1. COMPARISON TABLE SECTION (SKY vs V.VIP 2) */}
      <section className={styles.compareSection} id="section_item_sub_breadcrumb_73">
        <div className="container">
          <div className={styles.compareHeader}>
            <h1 className={styles.heroTitle}>Tận hưởng không gian giải trí đỉnh cao, sắc nét với gói FPT Play</h1>
            <h2 className={styles.compareTitle}>ĐĂNG KÝ và nhận ngay CƠ HỘI TRÚNG XE ĐIỆN VINFAST, ƯU ĐÃI GIẢM 100.000Đ khi thanh toán qua ZaloPay</h2>
            <div className={styles.topActions}>
              <button className={styles.btnRegisterTop} onClick={openModal}>ĐĂNG KÝ NGAY</button>
              <button className={styles.btnUpgradeTop}>NÂNG CẤP NGAY</button>
            </div>
          </div>
          <div className={styles.tableWrapper}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th className={styles.thLabel}>Thông tin gói cước</th>
                  <th className={styles.thSky}>
                    <div className={styles.bestChoice}>Combo Tiết Kiệm Nhất ✨</div>
                    <div className={styles.skyLogo}>COMBO THỂ THAO<br/><span>SKY</span></div>
                  </th>
                  <th className={styles.thVvip}>
                    <div className={styles.vvipLogo}>V.VIP 2</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tdLabel}>Giá gói/ tháng</td>
                  <td className={styles.tdSkyPrice}>
                    <div className={styles.priceSplit}>
                      <div>
                        <span>Áp dụng tại Hà Nội và TP.HCM</span>
                        <strong>299.000đ</strong>/tháng
                      </div>
                      <div>
                        <span>Áp dụng cho các khu vực khác</span>
                        <strong>269.000đ</strong>/tháng
                      </div>
                    </div>
                  </td>
                  <td className={styles.tdVvipPrice}>
                    <strong>150.000đ</strong>/tháng
                  </td>
                </tr>
                <tr>
                  <td className={styles.tdLabel}>Gói Internet tốc độ cao</td>
                  <td className={styles.tdSkySpeed}>
                    <div className={styles.speedSplit}>
                      <div><small>Tốc độ Download</small><strong>↓ 1000Mbps</strong></div>
                      <div><small>Tốc độ Upload</small><strong>↑ 300Mbps</strong></div>
                    </div>
                  </td>
                  <td className={styles.tdVvipIcon}><span className={styles.xIcon}>✕</span></td>
                </tr>
                <tr>
                  <td className={styles.tdLabel}>Nền tảng hỗ trợ</td>
                  <td className={styles.tdSkyIcon}>TV, Box, Mobile, Web</td>
                  <td className={styles.tdVvipIcon}>TV, Box, Mobile, Web</td>
                </tr>
                <tr>
                  <td className={styles.tdLabel}>
                    Xem Ngoại hạng Anh 
                    <img className={styles.plLogo} src="https://fpt.vn/v2/images/ngoai-hang-anh/logo-premier-league.svg" alt="Premier League" onError={(e) => e.target.style.display='none'} />
                  </td>
                  <td className={styles.tdSkyIcon}><span className={styles.checkIconGreen}>✓</span></td>
                  <td className={styles.tdVvipIcon}><span className={styles.checkIconGreen}>✓</span></td>
                </tr>
                <tr>
                  <td className={styles.tdLabel}>Thể thao không giới hạn</td>
                  <td className={styles.tdSkyIcon}><span className={styles.checkIconGreen}>✓</span></td>
                  <td className={styles.tdVvipIcon}><span className={styles.checkIconGreen}>✓</span></td>
                </tr>
                <tr>
                  <td className={styles.tdLabel}>Kho phim bộ, phim chiếu rạp, anime</td>
                  <td className={styles.tdSkyIcon}><span className={styles.checkIconGreen}>✓</span></td>
                  <td className={styles.tdVvipIcon}><span className={styles.checkIconGreen}>✓</span></td>
                </tr>
                <tr>
                  <td className={styles.tdLabel}>Modem Wi-Fi 6 băng tần kép</td>
                  <td className={styles.tdSkyIcon}><span className={styles.checkIconGreen}>✓</span></td>
                  <td className={styles.tdVvipIcon}><span className={styles.xIcon}>✕</span></td>
                </tr>
                <tr>
                  <td className={styles.tdLabel}>FPT Play Box - Điều khiển giọng nói</td>
                  <td className={styles.tdSkyIcon}><span className={styles.checkIconGreen}>✓</span></td>
                  <td className={styles.tdVvipIcon}><span className={styles.xIcon}>✕</span></td>
                </tr>
                <tr>
                  <td className={styles.tdLabel}>Chất lượng xem<br/><span className={styles.qualityTags}><span>1080p</span><span>4K (Thử nghiệm)</span></span></td>
                  <td className={styles.tdSkyIcon}><span className={styles.checkIconGreen}>✓</span></td>
                  <td className={styles.tdVvipIcon}><span className={styles.checkIconGreen}>✓</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td><button className={styles.btnOutlineTable} onClick={openModal}>Đăng ký ngay</button></td>
                  <td><button className={styles.btnOutlineTable} onClick={openModal}>Đăng ký ngay</button></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* 2. HERO SECTION (V.VIP CARDS) */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <img src="/images/ngoai-hang-anh/bg-nha-header.jpg" alt="Background Sân vận động" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.heroHeader}>
            <h1 className={styles.heroTitle}>Tận hưởng không gian giải trí đỉnh cao, sắc nét với gói FPT Play</h1>
            <p className={styles.heroSubtitle}>Nhận ƯU ĐÃI GIÁ CỰC HOT khi đăng ký gói FPT Play VVIP 3 tháng</p>
          </div>

          <div className={styles.heroCards}>
            {/* Card V.VIP 1 */}
            <div className={styles.vipCard}>
              <div className={styles.vipCardHeader}>
                <div className={styles.vipBadge}>MUA 3 THÁNG CHỈ 299K</div>
                <h3 className={styles.vipName}>GÓI V.VIP 1</h3>
                <div className={styles.vipDeviceBadge}>Xem N.H.A trên 1 thiết bị, các nội dung khác 5 thiết bị</div>
                <img className={styles.vipPlayers} src="/images/ngoai-hang-anh/nha_player_1.png" alt="Cầu thủ" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div className={styles.vipCardBody}>
                <div className={styles.vipPrice}>
                  <span className={styles.vipNameText}>Gói V.VIP 1</span>
                  <div className={styles.vipPriceValue}>
                    <strong>120.000đ</strong><span>/tháng</span>
                    <i className={styles.infoIcon}>i</i>
                  </div>
                </div>
                <ul className={styles.vipFeatures}>
                  <li>
                    <span className={styles.thunderIcon}>⚡</span>
                    <span>Kho giải trí đa dạng, đặc biệt bóng đá Anh & bóng đá Việt</span>
                  </li>
                  <li>
                    <span className={styles.thunderIcon}>⚡</span>
                    <span>Xem Ngoại Hạng Anh & FA Cup trên 1 thiết bị (Nội dung khác 5 thiết bị)</span>
                  </li>
                  <li>
                    <span className={styles.thunderIcon}>⚡</span>
                    <span>Gần 100 kênh truyền hình, phim bộ, phim bom tấn Âu Mỹ</span>
                  </li>
                </ul>
                <button className={styles.btnRegister} onClick={openModal}>Đăng ký ngay</button>
              </div>
            </div>

            {/* Card V.VIP 2 */}
            <div className={styles.vipCard}>
              <div className={styles.vipCardHeader}>
                <div className={styles.vipBadge}>MUA 3 THÁNG CHỈ 399K</div>
                <h3 className={styles.vipName}>GÓI V.VIP 2</h3>
                <div className={styles.vipDeviceBadge}>Xem N.H.A trên 2 thiết bị, các nội dung khác 5 thiết bị</div>
                <img className={styles.vipPlayers} src="/images/ngoai-hang-anh/nha_player_2.png" alt="Cầu thủ" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div className={styles.vipCardBody}>
                <div className={styles.vipPrice}>
                  <span className={styles.vipNameText}>Gói V.VIP 2</span>
                  <div className={styles.vipPriceValue}>
                    <strong>150.000đ</strong><span>/tháng</span>
                    <i className={styles.infoIcon}>i</i>
                  </div>
                </div>
                <ul className={styles.vipFeatures}>
                  <li>
                    <span className={styles.thunderIcon}>⚡</span>
                    <span>Kho giải trí đa dạng, đặc biệt bóng đá Anh & bóng đá Việt</span>
                  </li>
                  <li>
                    <span className={styles.thunderIcon}>⚡</span>
                    <span>Xem Ngoại Hạng Anh & FA Cup trên 2 thiết bị cùng lúc (Nội dung khác 5 thiết bị)</span>
                  </li>
                  <li>
                    <span className={styles.thunderIcon}>⚡</span>
                    <span>Gần 100 kênh truyền hình, phim bộ, phim bom tấn Âu Mỹ</span>
                  </li>
                </ul>
                <button className={styles.btnRegister} onClick={openModal}>Đăng ký ngay</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURE SECTION */}
      <section className={styles.featureSection}>
        <div className="container">
          <div className={styles.featureGrid}>
            <div className={styles.featureList}>
              <div className={styles.featureHeader}>
                <h2>Xem trọn vũ trụ giải trí đỉnh cao - Cơ hội trúng xe điện VinFast, giảm thêm 100K thanh toán qua ZaloPay</h2>
                <p>Nhận trọn ưu đãi giải trí - không phát sinh phí</p>
              </div>
              <div className={styles.featureBoxes}>
                <div className={styles.featureBox}>
                  <div className={styles.fboxIcon}>✈️</div>
                  <div className={styles.fboxContent}>
                    <h4>Đăng ký online Combo Internet - Truyền hình rinh quà ngập tràn</h4>
                    <p>Nhận ngay cơ hội trúng xe điện VinFast</p>
                  </div>
                </div>
                <div className={styles.featureBox}>
                  <div className={styles.fboxIcon}>🎁</div>
                  <div className={styles.fboxContent}>
                    <h4>Khám phá gần 120 kênh truyền hình đặc sắc</h4>
                    <p>Đa dạng nội dung: thể thao, giải trí, chương trình thực tế và gameshow hấp dẫn</p>
                  </div>
                </div>
                <div className={styles.featureBox}>
                  <div className={styles.fboxIcon}>🖥️</div>
                  <div className={styles.fboxContent}>
                    <h4>Hỗ trợ mọi thiết bị, chất lượng vượt trội</h4>
                    <p>Hỗ trợ TV, Box, Mobile, Web, chất lượng Full HD 1080p, hỗ trợ 4K (thử nghiệm)</p>
                  </div>
                </div>
                <div className={styles.featureBox}>
                  <div className={styles.fboxIcon}>⚙️</div>
                  <div className={styles.fboxContent}>
                    <h4>Kích hoạt ngay, lắp đặt sớm trong 24h làm việc</h4>
                    <p>Thanh toán online sẽ được ưu tiên lắp đặt và xem nền tảng giải trí tức thì</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.featureImage}>
              <img src="/images/ngoai-hang-anh/tv_players.png" alt="TV Players" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>✕</button>
            <h2 className={styles.modalTitle}>ĐĂNG KÝ NGAY</h2>
            <div className={styles.modalGrid}>
              <div className={styles.modalCard} onClick={() => { alert('Đang chuyển hướng đến trang thanh toán cho Combo Thể Thao SKY...'); closeModal(); }}>
                <h3 className={styles.modalCardTitle}>COMBO THỂ THAO<br/><span>SKY</span></h3>
                <p>Combo bao gồm gói Internet <strong>1 Gbps</strong> + tất cả quyền lợi gói V.VIP 2 chỉ <strong>59K</strong></p>
              </div>
              <div className={styles.modalCard} onClick={() => { alert('Đang chuyển hướng đến trang thanh toán cho gói V.VIP 2...'); closeModal(); }}>
                <h3 className={styles.modalCardTitle} style={{ color: '#f1c40f' }}>V.VIP 2</h3>
                <p>Trọn bộ <strong>Ngoại hạng Anh, kho phim</strong> và <strong>game show</strong> hấp dẫn, chất lượng Full HD cho cả gia đình trên FPT Play</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
