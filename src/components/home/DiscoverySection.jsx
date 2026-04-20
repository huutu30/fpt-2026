import React from 'react';

/**
 * DiscoverySection - Thanh tab chọn loại sản phẩm
 * Giống FPT.vn: tabs ngang, active có underline cam, centered
 */
export default function DiscoverySection({ activeTab, onTabChange, region }) {
  const tabs = [
    { id: 'ca_nhan', label: 'Internet cá nhân' },
    { id: 'gia_dinh', label: 'Internet gia đình' },
    { id: 'game_thu', label: 'Internet game thủ' },
    { id: 'combo_camera', label: 'Combo Internet Camera' },
    { id: 'combo_truyen_hinh', label: 'Combo Internet Truyền hình' },
  ];

  const regionLabel = (() => {
    if (!region) return '...';
    const r = region.toLowerCase();
    if (r === 'hcm' || r === 'hanoi' || r === 'hn') return 'Nội thành (HCM & Hà Nội)';
    return 'Ngoại thành (Tỉnh)';
  })();

  return (
    <section className="discovery-section" aria-label="Khám phá sản phẩm nổi bật">
      <h2 className="discovery-title">
        Khám phá sản phẩm nổi bật tại{' '}
        <span className="discovery-region">{regionLabel}</span>
      </h2>

      <nav className="discovery-tabs" role="tablist" aria-label="Danh mục sản phẩm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`discovery-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            id={`tab-${tab.id}`}
            title={`Xem gói cước ${tab.label}`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </section>
  );
}