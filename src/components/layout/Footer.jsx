import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Video, PhoneCall } from 'lucide-react';
import styles from './Footer.module.css';
import { HOTLINE } from '../../data/menuConfig';

export default function Footer() {
  return (
    <footer className={styles.siteFooter} role="contentinfo">
      <div className="container">
        <div className={styles.footerTop}>
          {/* Column 1: Company Info */}
          <div className={styles.footerCol}>
            <h3>Công ty Cổ phần Viễn thông FPT</h3>
            <div className={styles.companyInfo}>
              <p>Tầng 9, Block A, tòa nhà FPT Cầu Giấy, số 10 Phạm Văn Bạch, quận Cầu Giấy, TP. Hà Nội</p>
              <p><strong>Hotline:</strong> <a href={`tel:${HOTLINE.replace(/\s/g, '')}`} className={styles.contactLink}>{HOTLINE}</a></p>
              <p><strong>Email:</strong> hotrokhachhang@fpt.com</p>
              <p>Giấy chứng nhận ĐKDN số 0101778163 do Sở Kế hoạch Đầu tư Thành phố Hà Nội cấp ngày 28/07/2005</p>
            </div>
            <div className={styles.socialBox}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook"><Globe size={18} /></a>
              <a href="#" className={styles.socialIcon} aria-label="YouTube"><Video size={18} /></a>
              <a href={`tel:${HOTLINE.replace(/\s/g, '')}`} className={styles.socialIcon} aria-label="Zalo/Hotline"><PhoneCall size={18} /></a>
            </div>
          </div>

          {/* Column 2: Về FPT Telecom */}
          <div className={styles.footerCol}>
            <h3>Về FPT Telecom</h3>
            <ul className={styles.footerLinks}>
              <li><Link to="#">Giới thiệu chung</Link></li>
              <li><Link to="#">Liên kết - Thành viên</Link></li>
              <li><Link to="#">Khách hàng - Đối tác</Link></li>
              <li><Link to="#">Quan hệ cổ đông</Link></li>
              <li><Link to="#">Tuyển dụng</Link></li>
              <li><Link to="#">Tin tức</Link></li>
            </ul>
          </div>

          {/* Column 3: Khách hàng FPT */}
          <div className={styles.footerCol}>
            <h3>Khách hàng FPT</h3>
            <ul className={styles.footerLinks}>
              <li><Link to="#">Hướng dẫn sử dụng dịch vụ</Link></li>
              <li><Link to="#">Thanh toán hóa đơn</Link></li>
              <li><Link to="#">Hướng dẫn cài đặt</Link></li>
              <li><Link to="#">Điều khoản sử dụng</Link></li>
              <li><Link to="#">Chính sách & Quy trình</Link></li>
              <li><Link to="#">Góp ý khách hàng</Link></li>
            </ul>
          </div>

          {/* Column 4: Sản phẩm dịch vụ */}
          <div className={styles.footerCol}>
            <h3>Sản phẩm dịch vụ</h3>
            <ul className={styles.footerLinks}>
              <li><Link to="/internet/ca-nhan">Lắp đặt WiFi Internet</Link></li>
              <li><Link to="/internet/combo">Internet - Truyền hình FPT Play</Link></li>
              <li><Link to="/internet/wifi-7">Internet Wi-Fi 7 (SpeedX)</Link></li>
              <li><Link to="/thiet-bi/camera">FPT Camera</Link></li>
              <li><Link to="#">Khuyến mãi mới nhất</Link></li>
              <li><Link to="#">Tìm điểm giao dịch</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} Công ty Cổ phần Viễn thông FPT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
