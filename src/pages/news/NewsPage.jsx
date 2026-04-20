import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NEWS_DATA } from '../../data/newsData';
import styles from './NewsPage.module.css';

export default function NewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tin tức Công nghệ, Giải trí, Thể thao | FPT Telecom";
  }, []);

  // Giả định tin đầu tiên là Tin Nổi Bật (Featured)
  const featuredNews = NEWS_DATA[0];
  // Các tin còn lại
  const regularNews = NEWS_DATA.slice(1);

  const categories = [
    "Khuyến mại",
    "Viễn thông công nghệ",
    "Giải trí",
    "Thể thao",
    "Game",
    "Đời sống",
    "Tin FPT"
  ];

  return (
    <div className={styles.newsPage}>
      <div className="container">
        <div className={styles.breadcrumb}>
          <Link to="/">Trang chủ</Link> / <span>Tin tức</span>
        </div>

        <div className={styles.layoutGrid}>
          {/* CỘT TRÁI: MAIN CONTENT */}
          <main className={styles.mainContent}>
            
            {/* Tin nổi bật (To nhất) */}
            {featuredNews && (
              <Link to={`/tin-tuc/${featuredNews.id}`} className={styles.featuredNews}>
                <div className={styles.featuredImageWrapper}>
                  <img src={featuredNews.image} alt={featuredNews.title} className={styles.featuredImage} />
                </div>
                <div className={styles.featuredInfo}>
                  <span className={styles.newsCategory}>{featuredNews.category || 'Tin nổi bật'}</span>
                  <h1 className={styles.featuredTitle}>{featuredNews.title}</h1>
                  <span className={styles.newsDate}>{featuredNews.date}</span>
                  <p className={styles.featuredDesc}>{featuredNews.desc}</p>
                </div>
              </Link>
            )}

            {/* Danh sách tin tức */}
            <h2 className={styles.sectionTitle}>Tin mới cập nhật</h2>
            <div className={styles.newsList}>
              {regularNews.map(news => (
                <Link to={`/tin-tuc/${news.id}`} key={news.id} className={styles.newsItem}>
                  <div className={styles.itemImageWrapper}>
                    <img src={news.image} alt={news.title} className={styles.itemImage} />
                  </div>
                  <div className={styles.itemInfo}>
                    <span className={styles.newsCategory}>{news.category || 'Tin tức'}</span>
                    <h3 className={styles.itemTitle}>{news.title}</h3>
                    <span className={styles.newsDate}>{news.date}</span>
                    <p className={styles.itemDesc}>{news.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

          </main>

          {/* CỘT PHẢI: SIDEBAR */}
          <aside className={styles.sidebar}>
            
            {/* Danh mục */}
            <div className={styles.widget}>
              <h3 className={styles.widgetTitle}>Chuyên mục</h3>
              <ul className={styles.categoryList}>
                {categories.map((cat, idx) => (
                  <li key={idx}><Link to="#">{cat}</Link></li>
                ))}
              </ul>
            </div>

            {/* Banner Gói Cước */}
            <div className={styles.widget} style={{ padding: '20px', background: '#f8fafc' }}>
              <h3 className={styles.widgetTitle}>Gói cước HOT</h3>
              
              <Link to="/internet/combo" className={styles.adCard}>
                <span className={styles.adTag}>Bán chạy</span>
                <div className={styles.adTitle}>FPT Play Ngoại Hạng Anh V.VIP 1</div>
                <div className={styles.adPrice}>200.000đ/tháng</div>
              </Link>

              <Link to="/internet/wifi-7" className={styles.adCard} style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' }}>
                <span className={styles.adTag}>Mới ra mắt</span>
                <div className={styles.adTitle}>Internet Wi-Fi 7 SpeedX2</div>
                <div className={styles.adPrice}>999.000đ/tháng</div>
              </Link>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
