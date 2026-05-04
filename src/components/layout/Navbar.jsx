import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, Phone, Menu, X, Wifi, Tv, Monitor, Headphones, Home } from 'lucide-react';
import { NAV_MENU, HOTLINE, iconMap } from '../../data/menuConfig';

/**
 * Navbar - Thanh điều hướng chính
 * Layout: TopBar (hotline + vùng miền) | MainNav (logo + menu + search)
 * SEO: semantic HTML5, aria, schema.org, unique IDs
 */
export default function Navbar({ region, setRegion }) {
  const [activeMega, setActiveMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setActiveMega(null);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} ref={navRef} role="banner" id="site-header">

      {/* ===== TOP BAR: Hotline + Vùng miền ===== */}
      <div className="site-topbar" role="complementary" aria-label="Thông tin liên hệ">
        <div className="container topbar-inner">
          <a 
            href={`tel:${HOTLINE.replace(/\s/g, '')}`} 
            className="topbar-hotline" 
            id="topbar-hotline"
            title={`Gọi ngay ${HOTLINE} để được tư vấn miễn phí`}
          >
            <Phone size={14} aria-hidden="true" />
            <span>Hotline: <strong>{HOTLINE}</strong></span>
          </a>
          <button 
            className="topbar-location"
            onClick={() => setRegion(region === 'hcm' ? 'tinh' : 'hcm')}
            aria-label={`Đổi khu vực – Hiện tại: ${region === 'hcm' ? 'Nội thành' : 'Toàn quốc'}`}
            title="Nhấn để đổi khu vực xem giá"
            id="btn-region"
          >
            <span>{region === 'hcm' ? '📍 Nội thành HCM / HN' : '📍 Toàn quốc (Tỉnh)'}</span>
            <ChevronDown size={12} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <nav className="site-navbar" role="navigation" aria-label="Menu chính" itemScope itemType="https://schema.org/SiteNavigationElement">
        <div className="container navbar-inner">

          {/* LOGO */}
          <Link to="/trang-chu" className="site-logo" aria-label="Trang chủ FPT Telecom" title="Về trang chủ" id="site-logo" itemProp="url" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img 
              src="/images/logo-ftel.svg" 
              alt="FPT Telecom Logo" 
              className="logo-img"
              itemProp="logo"
              width="140"
              height="36"
            />
            <span className="sr-only">FPT Telecom - Trang chủ</span>
          </Link>

          {/* HAMBURGER */}
          <button className="hamburger-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={mobileOpen} aria-controls="main-nav-menu" id="btn-hamburger">
            <Menu size={24} aria-hidden="true" />
          </button>

          {/* MOBILE LOCATION PILL */}
          <button
            className="mobile-location-pill"
            onClick={() => setRegion(region === 'hcm' ? 'tinh' : 'hcm')}
            aria-label={`Đổi khu vực – Hiện tại: ${region === 'hcm' ? 'Nội thành' : 'Toàn quốc'}`}
            id="btn-mobile-region"
          >
            <span className="mobile-loc-dot">📍</span>
            <span>{region === 'hcm' ? 'Nội thành' : 'Toàn quốc'}</span>
            <ChevronDown size={12} aria-hidden="true" />
          </button>

          {/* MENU */}
          <div className={`nav-menu ${mobileOpen ? 'mobile-open' : ''}`} id="main-nav-menu">
            <div className="mobile-menu-header mobile-only">
              <span className="mobile-menu-title">Menu</span>
              <button className="close-menu-btn" onClick={() => setMobileOpen(false)} aria-label="Đóng menu">
                <X size={24} aria-hidden="true" />
              </button>
            </div>
            <ul className="nav-links" role="menubar">
              {NAV_MENU.map((menu, i) => (
                <li
                  key={menu.title}
                  className={`nav-li ${menu.hasMega ? 'has-mega' : ''}`}
                  role="none"
                  onMouseEnter={() => { if (window.innerWidth > 768 && menu.hasMega) setActiveMega(i); }}
                  onMouseLeave={() => { if (window.innerWidth > 768) setActiveMega(null); }}
                >
                  {menu.hasMega ? (
                    <button
                      className={`nav-link ${activeMega === i ? 'active' : ''}`}
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={activeMega === i}
                      id={`nav-item-${i}`}
                      title={menu.seoTitle}
                      onClick={() => {
                        if (window.innerWidth <= 768) setActiveMega(activeMega === i ? null : i);
                      }}
                    >
                      {menu.title}
                      <ChevronDown size={13} className={`chevron-icon ${activeMega === i ? 'rotate' : ''}`} aria-hidden="true" />
                    </button>
                  ) : (
                    <Link
                      to={menu.path}
                      className="nav-link"
                      role="menuitem"
                      id={`nav-item-${i}`}
                      title={menu.seoTitle}
                      onClick={() => { setMobileOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                    >
                      {menu.title}
                    </Link>
                  )}

                  {/* MEGA MENU */}
                  {menu.hasMega && (
                    <div className={`mega-menu ${activeMega === i ? 'show' : ''}`} role="menu" aria-label={`Danh mục ${menu.title}`} id={`mega-menu-${i}`}>
                      <div className="container mega-grid">
                        {menu.categories.map((cat, cIdx) => {
                          const Icon = iconMap[cat.icon];
                          return (
                            <div className="mega-col" key={cIdx} role="group" aria-label={cat.label}>
                              <h3 className="mega-col-title">
                                {Icon && <Icon size={18} style={{ color: cat.color }} aria-hidden="true" />}
                                {cat.label}
                              </h3>
                              <ul className="mega-col-list" role="menu">
                                {cat.items.map((sub, sIdx) => (
                                  <li key={sIdx} role="none">
                                    <Link to={sub.path} role="menuitem" title={sub.seoTitle || sub.name} onClick={() => { setMobileOpen(false); setActiveMega(null); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
                                      {sub.name}
                                      {sub.badge && <span className="mega-badge" aria-label={`Nhãn: ${sub.badge}`}>{sub.badge}</span>}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* SEARCH MOBILE */}
            <div className="nav-search mobile-only" role="search" aria-label="Tìm kiếm">
              <Search size={18} aria-hidden="true" />
              <input type="search" placeholder="Tìm gói cước, dịch vụ..." aria-label="Nhập từ khoá tìm kiếm" id="mobile-search" />
            </div>

            {/* HOTLINE MOBILE */}
            <a href={`tel:${HOTLINE.replace(/\s/g, '')}`} className="nav-hotline-mobile mobile-only" id="mobile-hotline">
              <Phone size={16} aria-hidden="true" />
              <span>Gọi ngay: <strong>{HOTLINE}</strong></span>
            </a>
          </div>

          {/* SEARCH DESKTOP */}
          <button className="search-desktop" aria-label="Tìm kiếm" title="Tìm kiếm sản phẩm, dịch vụ" id="btn-search-desktop">
            <Search size={20} aria-hidden="true" />
          </button>

        </div>
      </nav>

      {/* ===== MOBILE BOTTOM NAV ===== */}
      <nav className="bottom-nav" role="navigation" aria-label="Menu nhanh" id="mobile-bottom-nav">
        <Link to="/trang-chu" className="bottom-nav-item" id="bnav-trangchu" title="Trang chủ" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Home size={20} aria-hidden="true" />
          <span>Trang chủ</span>
        </Link>
        <Link to="/internet" className="bottom-nav-item center-item" id="bnav-internet" title="Internet" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Wifi size={22} aria-hidden="true" />
          <span>Internet</span>
        </Link>
        <Link to="/giai-tri/fpt-play" className="bottom-nav-item" id="bnav-tv" title="Truyền hình FPT Play" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Tv size={20} aria-hidden="true" />
          <span>Truyền hình</span>
        </Link>
        <Link to="/thiet-bi/camera" className="bottom-nav-item" id="bnav-device" title="Thiết bị thông minh" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Monitor size={20} aria-hidden="true" />
          <span>Thiết bị</span>
        </Link>
        <Link to="/ho-tro" className="bottom-nav-item" id="bnav-support" title="Liên hệ hỗ trợ" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Headphones size={20} aria-hidden="true" />
          <span>Hỗ trợ</span>
        </Link>
      </nav>

      {/* OVERLAY */}
      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} aria-hidden="true" />}
    </header>
  );
}