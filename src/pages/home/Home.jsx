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

  // Mapping tab → PRODUCT_DATA key (hiện TOÀN BỘ sản phẩm)
  const tabDataMap = {
    ca_nhan: PRODUCT_DATA.ca_nhan || [],
    gia_dinh: PRODUCT_DATA.gia_dinh || [],
    game_thu: PRODUCT_DATA.f_game || [],
    combo_camera: PRODUCT_DATA.camera_combos || [],
    combo_truyen_hinh: PRODUCT_DATA.the_thao || [],
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
        {/* SECTION 1: COMBO THỂ THAO */}
        <ProductCardSlider
          title="Combo Internet – Truyền hình – Ngoại Hạng Anh"
          subtitle="Xem trọn vẹn Ngoại hạng Anh, La Liga, Champions League cùng Internet tốc độ cao"
          data={PRODUCT_DATA.the_thao}
          region={region}
          badgeSub="Internet – Truyền hình – Ngoại hạng Anh"
        />

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
