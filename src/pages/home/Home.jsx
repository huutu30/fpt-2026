import React, { useState } from "react";
import Hero from "../../components/home/Hero";
import DiscoverySection from "../../components/home/DiscoverySection";
import ProductCardSlider from "../../components/common/ProductCardSlider";
import { PRODUCT_DATA } from "../../data/productData";
import Wifi7Section from "../../components/home/Wifi7Section";
import ProductCategorySection from "../../components/home/ProductCategorySection";
import NewsSection from "../../components/home/NewsSection";

export default function Home({ region }) {
  const [activeCategory, setActiveCategory] = useState("ca_nhan");

  // Lấy danh sách toàn bộ sản phẩm từ tất cả các mảng trong PRODUCT_DATA
  const allProducts = Object.values(PRODUCT_DATA).flat();

  // Helper function để lấy product theo ID
  const getProductsByIds = (idList) => {
    return idList.map(id => allProducts.find(p => p.id === id)).filter(Boolean);
  };

  // Định nghĩa danh sách ID hiển thị ngoài trang chủ theo đúng yêu cầu
  const HOME_DISPLAY_IDS = {
    ca_nhan: [
      "giga", "sky", "giga-f1", "sky-f1", "sky-f2", "sky-f3"
    ],
    gia_dinh: [
      "giga-f1", "sky-f1", "sky-f2", "combo-giga-f1", "combo-sky-f1", "meta", "meta-f1", "meta-f2", "meta-f3"
    ],
    game_thu: [
      "f-game", "meta", "combo-fgame", "combo-meta", "f-game-f1", "combo-fgame-f1"
    ],
    combo_camera: PRODUCT_DATA.camera_combos.map(p => p.id),
    combo_truyen_hinh: PRODUCT_DATA.additional_home_packages.map(p => p.id)
  };

  const tabDataMap = {
    ca_nhan: getProductsByIds(HOME_DISPLAY_IDS.ca_nhan),
    gia_dinh: getProductsByIds(HOME_DISPLAY_IDS.gia_dinh),
    game_thu: getProductsByIds(HOME_DISPLAY_IDS.game_thu),
    combo_camera: getProductsByIds(HOME_DISPLAY_IDS.combo_camera),
    combo_truyen_hinh: getProductsByIds(HOME_DISPLAY_IDS.combo_truyen_hinh),
  };

  const categoryNames = {
    ca_nhan: "Cá nhân",
    gia_dinh: "Gia đình",
    game_thu: "Game thủ",
    combo_camera: "Combo Internet Camera",
    combo_truyen_hinh: "Combo Internet Truyền hình",
  };

  return (
    <div className="home-page">
      <Hero />

      <div className="container">

        {/* SECTION 2: KHÁM PHÁ SẢN PHẨM NỔI BẬT */}
        <DiscoverySection
          activeTab={activeCategory}
          onTabChange={(id) => setActiveCategory(id)}
          region={region}
        />

        {/* CARDS THEO TAB – CÙNG DESIGN CARD MỚI */}
        <ProductCardSlider
          key={activeCategory}
          title={`Gói cước cho ${categoryNames[activeCategory] || "bạn"}`}
          data={tabDataMap[activeCategory]}
          region={region}
        />
        {/* SECTION 1: COMBO THỂ THAO */}
        <ProductCardSlider
          title="Combo Internet – Truyền hình – Ngoại Hạng Anh"
          subtitle="Xem trọn vẹn Ngoại hạng Anh, La Liga, Champions League cùng Internet tốc độ cao"
          data={(PRODUCT_DATA.the_thao || []).filter(item => [
            'c-the-thao-sky', 'c-the-thao-sky-f1', 'c-the-thao-sky-f2',
            'c-the-thao-meta', 'c-the-thao-meta-f1', 'c-the-thao-meta-f2',
            'c-the-thao-speedx2', 'c-the-thao-speedx2-pro'
          ].includes(item.id))}
          region={region}
          badgeSub="Internet – Truyền hình – Ngoại hạng Anh"
        />

        {/* SECTION 3: THIẾT BỊ CÔNG NGHỆ */}
        <ProductCardSlider
          title="Thiết bị công nghệ bán chạy nhất"
          data={PRODUCT_DATA.camera_combos}
          region={region}
        />

        {/* SECTION 4: FPT PLAY - GÓI XEM TRUYỀN HÌNH */}
        <ProductCardSlider
          title="FPT Play – Gói xem truyền hình, giải trí, thể thao đa phương tiện"
          subtitle="Xem Ngoại hạng Anh, FA Cup, V.League và hàng ngàn nội dung giải trí hấp dẫn"
          data={PRODUCT_DATA.fpt_play_only}
          region={region}
        />

        {/* SECTION 5: SPEEDX - WIFI 7 */}
        <Wifi7Section region={region} />

        {/* SECTION 6: DANH MỤC SẢN PHẨM ĐA DẠNG */}
        <ProductCategorySection />
      </div>

      {/* SECTION 6: TIN TỨC & KHUYẾN MÃI */}
      <NewsSection />
    </div>
  );
}
