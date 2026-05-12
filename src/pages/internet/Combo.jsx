import React, { useEffect } from 'react';
import { PRODUCT_DATA } from '../../data/productData';
import ProductCardSlider from '../../components/common/ProductCardSlider';
import { Check, Gift, Tv, Smartphone, Zap } from 'lucide-react';
import styles from './Combo.module.css';
import SEOHead from '../../components/common/SEOHead';

export default function Combo({ region }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter specific data
  const playPackages = PRODUCT_DATA.fpt_play_only?.slice(0, 2) || [];
  const comboPackages = PRODUCT_DATA.the_thao || [];

  return (
    <div className={styles.comboPage}>
      <SEOHead
        title="Combo Internet Thể thao & Giải trí | Xem Ngoại hạng Anh"
        description="Đăng ký Combo Internet + Truyền hình FPT. Xem trực tiếp Ngoại hạng Anh, La Liga, Champions League. Kích hoạt ngay, nét 4K. Giá từ 200.000đ/tháng."
        canonicalPath="/internet/combo"
        keywords="Combo Internet FPT, xem Ngoại hạng Anh, truyền hình FPT Play, combo thể thao FPT"
      />
      {/* HERO BANNER */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Xem Ngoại hạng Anh trực tiếp trên FPT Play</h1>
          <p className={styles.heroSubtitle}>
            Kích hoạt ngay sau khi đăng ký, xem trọn vẹn cả mùa giải, nét 4K. 
            Đăng ký online nhận ƯU ĐÃI HOT trúng ngay Xe Điện VinFast.
          </p>
          <button className={styles.heroBtn}>Đăng ký nhận ưu đãi ngay</button>
        </div>
      </section>

      {/* FPT PLAY V.VIP CARDS */}
      <section className={styles.vipSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Các Gói FPT Play Thể Thao Đỉnh Cao</h2>
          <p className={styles.sectionSubtitle}>
            Dành cho khách hàng đã có Internet. Khám phá kho giải trí đa dạng, đặc biệt là bóng đá Anh & bóng đá Việt.
          </p>
        </div>
        <div className={styles.vipGrid}>
          {playPackages.map((pkg) => (
            <div key={pkg.id} className={styles.vipCard}>
              <img src={pkg.image} alt={pkg.name} className={styles.vipImage} />
              <div className={styles.vipContent}>
                <h3 className={styles.vipName}>{pkg.name}</h3>
                <div className={styles.vipPrice}>
                  {pkg.price ? pkg.price.toLocaleString('vi-VN') : 'Liên hệ'} <span>đ/tháng</span>
                </div>
                <ul className={styles.vipFeatures}>
                  {pkg.features?.map((f, i) => (
                    <li key={i}>
                      <Check size={18} className={styles.vipCheck} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={styles.vipBtn}>Đăng ký {pkg.name}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMBO INTERNET THỂ THAO (Sử dụng Slider dùng chung) */}
      <section className={styles.comboSection}>
        <ProductCardSlider
          title="Combo Internet Ngoại Hạng Anh Mới Nhất"
          subtitle="Gộp chung chi phí Internet & Truyền hình FPT Play vào một gói duy nhất để dễ quản lý và tiết kiệm hơn."
          data={comboPackages}
          region={region}
          badgeSub="Internet & T.Hình"
        />
      </section>

      {/* BENEFITS / FEATURES */}
      <section className={styles.benefitsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Xem Trọn Vũ Trụ Giải Trí Đỉnh Cao</h2>
          <p className={styles.sectionSubtitle}>
            Cơ hội trúng xe điện, giảm thêm 100K khi thanh toán qua ZaloPay
          </p>
        </div>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}><Gift size={28} /></div>
            <h3 className={styles.benefitTitle}>Cơ hội trúng xe điện</h3>
            <p className={styles.benefitDesc}>Đăng ký online Combo Internet - Truyền hình rinh ngay quà ngập tràn, cơ hội trúng xe điện VinFast Evo.</p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}><Tv size={28} /></div>
            <h3 className={styles.benefitTitle}>Khám phá 120+ kênh đặc sắc</h3>
            <p className={styles.benefitDesc}>Đa dạng nội dung: thể thao, giải trí, phim truyền hình, chương trình thực tế và gameshow hấp dẫn nhất.</p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}><Smartphone size={28} /></div>
            <h3 className={styles.benefitTitle}>Mọi thiết bị, mọi lúc mọi nơi</h3>
            <p className={styles.benefitDesc}>Hỗ trợ xem trên Smart TV, Box, Mobile, Web với chất lượng Full HD 1080p, hỗ trợ 4K cực kỳ sắc nét.</p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}><Zap size={28} /></div>
            <h3 className={styles.benefitTitle}>Lắp đặt nhanh trong 24h</h3>
            <p className={styles.benefitDesc}>Thanh toán online sẽ được ưu tiên xuất phiếu thi công nhanh chóng và kích hoạt xem giải trí ngay lập tức.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
