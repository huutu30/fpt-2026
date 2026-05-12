import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { NEWS_DATA } from '../../data/newsData';
import { Clock } from 'lucide-react';
import styles from './ArticlePage.module.css';
import SEOHead from '../../components/common/SEOHead';

export default function ArticlePage() {
  const { id } = useParams();
  
  // Find the article by ID
  const article = NEWS_DATA.find(news => news.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  if (!article) {
    return (
      <div className={styles.articlePage}>
        <div className="container">
          <div className={styles.notFound}>
            <h1>Không tìm thấy bài viết</h1>
            <Link to="/tin-tuc" className={styles.btnBack}>Quay lại trang Tin tức</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.articlePage}>
      <SEOHead
        title={article.title}
        description={article.desc}
        canonicalPath={`/tin-tuc/${id}`}
        ogImage={article.image}
        ogType="article"
      />
      <div className="container">
        
        {/* BREADCRUMB */}
        <div className={styles.breadcrumb}>
          <Link to="/">Trang chủ</Link> / <Link to="/tin-tuc">Tin tức</Link> / <span>{article.category || "Bài viết"}</span>
        </div>

        <div className={styles.layoutGrid}>
          
          {/* CỘT TRÁI: NỘI DUNG BÀI BÁO */}
          <main className={styles.mainContent}>
            <header>
              <span className={styles.articleCategory}>{article.category || "Tin tức"}</span>
              <h1 className={styles.articleTitle}>{article.title}</h1>
              <div className={styles.articleMeta}>
                <Clock size={16} /> <span>{article.date}</span>
              </div>
            </header>

            <article>
              {/* Sapo (Mở bài in đậm) */}
              <p className={styles.sapo}>{article.desc}</p>

              {/* Render nội dung chi tiết dựa trên mảng content */}
              {article.content && article.content.length > 0 ? (
                article.content.map((block, index) => {
                  switch (block.type) {
                    case 'paragraph':
                      return <p key={index} className={styles.paragraph}>{block.text}</p>;
                    case 'heading':
                      return <h2 key={index} className={styles.heading}>{block.text}</h2>;
                    case 'image':
                      return (
                        <figure key={index} className={styles.figure}>
                          <img src={block.src} alt={block.caption || 'FPT News'} className={styles.articleImage} />
                          {block.caption && <figcaption className={styles.figcaption}>{block.caption}</figcaption>}
                        </figure>
                      );
                    default:
                      return null;
                  }
                })
              ) : (
                <p className={styles.paragraph}>Nội dung bài viết đang được cập nhật...</p>
              )}
            </article>
          </main>

          {/* CỘT PHẢI: SIDEBAR (Widgets) */}
          <aside className={styles.sidebar}>
            
            {/* Banner Gói Cước (Chốt Sales) */}
            <div className={styles.widget} style={{ padding: '20px', background: '#f8fafc' }}>
              <h3 className={styles.widgetTitle}>Đừng bỏ lỡ ưu đãi</h3>
              
              <Link to="/internet/combo" className={styles.adCard}>
                <span className={styles.adTag}>Siêu Hot</span>
                <div className={styles.adTitle}>FPT Play Ngoại Hạng Anh V.VIP 1</div>
                <div className={styles.adPrice}>200.000đ/tháng</div>
              </Link>

              <Link to="/internet/wifi-7" className={styles.adCard} style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' }}>
                <span className={styles.adTag}>Mới ra mắt</span>
                <div className={styles.adTitle}>Internet Wi-Fi 7 SpeedX2</div>
                <div className={styles.adPrice}>999.000đ/tháng</div>
              </Link>
            </div>

            {/* Tin tức liên quan (Lấy ngẫu nhiên 3 tin) */}
            <div className={styles.widget}>
              <h3 className={styles.widgetTitle}>Bài viết liên quan</h3>
              <ul className={styles.categoryList}>
                {NEWS_DATA.filter(n => n.id !== article.id).slice(0, 3).map(n => (
                  <li key={n.id}>
                    <Link to={`/tin-tuc/${n.id}`}>{n.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
