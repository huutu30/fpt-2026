import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1e293b',
      color: '#94a3b8',
      padding: '24px 16px',
      textAlign: 'center',
      fontSize: '13px',
      borderTop: '1px solid #334155',
      marginTop: 'auto'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', lineHeight: '1.8' }}>
        <p style={{ fontWeight: '600', color: '#f8fafc', marginBottom: '8px' }}>
          Công ty Cổ phần Viễn thông FPT (FPT Telecom)
        </p>
        <p>
          Địa chỉ: Tầng 9, Block A, tòa nhà FPT Cầu Giấy, số 10 Phạm Văn Bạch, quận Cầu Giấy, TP. Hà Nội
        </p>
        <p>
          Giấy chứng nhận ĐKDN số 0101778163 do Sở Kế hoạch Đầu tư Thành phố Hà Nội cấp ngày 28/07/2005
        </p>
        <p style={{ marginTop: '12px', fontSize: '12px', opacity: 0.8 }}>
          © {new Date().getFullYear()} FPT Telecom. Bảo lưu mọi quyền.
        </p>
      </div>
    </footer>
  );
}

