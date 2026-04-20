import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { User, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Register() {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    productName: 'Internet FPT' // Giá trị mặc định nếu ko tìm thấy gói
  });

  // LOGIC VÀNG: Tự động cập nhật tên gói cước mỗi khi URL thay đổi
  useEffect(() => {
    // 1. Lấy query string từ URL hiện tại
    const searchParams = new URLSearchParams(window.location.search);
    const product = searchParams.get('product');

    if (product) {
      // 2. Nếu tìm thấy tham số 'product', cập nhật vào form
      setFormData(prev => ({ 
        ...prev, 
        productName: decodeURIComponent(product) 
      }));
    }
    
    // 3. Quan trọng: Lắng nghe location.search để khi khách bấm gói khác nó nhảy theo
  }, [location.search]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // --- TRANG THÀNH CÔNG ---
  if (submitted) {
    return (
      <div style={styles.successWrapper}>
        <div style={styles.successCard}>
          <CheckCircle size={80} color="#00408f" />
          <h2 style={{color: '#00408f', marginTop: '20px'}}>Đăng ký thành công!</h2>
          <p style={{textAlign: 'center', lineHeight: '1.6'}}>
            Chào <strong>{formData.fullName}</strong>, nhân viên FPT sẽ gọi lại tư vấn gói <br/>
            <span style={{color: '#f57020', fontWeight: 'bold'}}>{formData.productName}</span> cho bạn ngay.
          </p>
          <Link to="/" style={styles.btnBack}>Quay về trang chủ</Link>
        </div>
      </div>
    );
  }

  // --- GIAO DIỆN FORM ---
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.infoSide}>
          <h1 style={styles.title}>Đăng ký FPT ngay</h1>
          <p style={styles.subtitle}>Để lại thông tin, chúng tôi sẽ gọi lại ngay sau 5-10 phút.</p>
          
        </div>

        <div style={styles.formSide}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}><User size={16}/> Họ tên khách hàng</label>
              <input 
                style={styles.input} 
                type="text" 
                placeholder="Ví dụ: Nguyễn Văn A" 
                required 
                onChange={e => setFormData({...formData, fullName: e.target.value})} 
              />
            </div>
            
            <div style={styles.inputGroup}>
              <label style={styles.label}><Phone size={16}/> Số điện thoại</label>
              <input 
                style={styles.input} 
                type="tel" 
                placeholder="090xxxxxxx" 
                required 
                onChange={e => setFormData({...formData, phone: e.target.value})} 
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}><MapPin size={16}/> Địa chỉ lắp đặt</label>
              <input 
                style={styles.input} 
                type="text" 
                placeholder="Số nhà, tên đường, phường..." 
                required 
                onChange={e => setFormData({...formData, address: e.target.value})} 
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Gói cước quan tâm</label>
              <input 
                style={{...styles.input, ...styles.inputReadonly}} 
                type="text" 
                value={formData.productName} 
                readOnly 
              />
            </div>

            <button type="submit" style={styles.btnSubmit}>
              GỬI ĐĂNG KÝ NGAY <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// 5. CSS-IN-JS: Đảm bảo dán vào là đẹp luôn
const styles = {
  page: { background: '#f0f2f5', minHeight: '90vh', display: 'flex', alignItems: 'center', padding: '20px' },
  container: { maxWidth: '900px', margin: '0 auto', display: 'flex', background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' },
  infoSide: { flex: 1, background: '#00408f', padding: '40px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  title: { fontSize: '28px', color: '#f57020', marginBottom: '15px' },
  subtitle: { fontSize: '16px', opacity: 0.9, marginBottom: '30px' },
  benefitBox: { display: 'flex', flexDirection: 'column', gap: '15px' },
  benefitItem: { fontSize: '15px', fontWeight: '500' },
  formSide: { flex: 1.2, padding: '40px' },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
  label: { fontSize: '14px', fontWeight: '600', color: '#444', display: 'flex', alignItems: 'center', gap: '8px' },
  input: { padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', outline: 'none' },
  inputReadonly: { background: '#f9f9f9', color: '#00408f', fontWeight: 'bold', border: '1px dashed #00408f' },
  btnSubmit: { padding: '15px', background: '#f57020', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '10px' },
  successWrapper: { minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' },
  successCard: { background: '#fff', padding: '50px', borderRadius: '20px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' },
  btnBack: { marginTop: '20px', color: '#00408f', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }
};