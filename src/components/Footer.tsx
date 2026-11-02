import React from 'react';
import { ModalData } from '../types';

interface FooterProps {
  onOpenBooking: (purpose: string) => void;
  onOpenItemModal: (data: ModalData) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenItemModal }) => {
  return (
    <footer className="site-footer" id="footer" style={{ backgroundColor: '#05271d', color: '#fffdf9' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '64px 24px 28px 24px' }}>
        
        {/* =====================================================================
            TOP 3 COLUMNS: Brand/Contact, Không Thể Bỏ Lỡ, Khám Phá
        ====================================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(32px, 4.5vw, 64px)',
            alignItems: 'flex-start',
            marginBottom: '48px'
          }}
        >
          {/* Column 1: Brand Logo, Legal Company & Direct Contacts */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <img
                src="/logo-new.png"
                alt="4U Edge Up"
                style={{ height: '54px', width: 'auto', maxWidth: '200px', objectFit: 'contain' }}
              />
            </div>

            <h4
              style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#ffffff',
                margin: '0 0 16px 0',
                lineHeight: 1.45
              }}
            >
              Công ty Cổ phần Thương mại Du lịch Bốn Tối Ưu
            </h4>

            {/* Hotline */}
            <div style={{ marginBottom: '14px' }}>
              <span style={{ color: '#ffd700', fontWeight: 600, fontSize: '13px', display: 'block', marginBottom: '2px' }}>
                Hotline
              </span>
              <a
                href="tel:0848180826"
                style={{ color: '#ffffff', fontSize: '15px', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
              >
                084 818 0826
              </a>
            </div>

            {/* Email */}
            <div style={{ marginBottom: '14px' }}>
              <span style={{ color: '#ffd700', fontWeight: 600, fontSize: '13px', display: 'block', marginBottom: '2px' }}>
                Email
              </span>
              <a
                href="mailto:customercare@4uretreats.com.vn"
                style={{ color: '#ffffff', fontSize: '15px', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
              >
                customercare@4uretreats.com.vn
              </a>
            </div>

            {/* Address */}
            <div style={{ marginBottom: '20px' }}>
              <span style={{ color: '#ffd700', fontWeight: 600, fontSize: '13px', display: 'block', marginBottom: '2px' }}>
                Địa chỉ
              </span>
              <span style={{ color: '#ffffff', fontSize: '15px', lineHeight: 1.5, display: 'block' }}>
                07 Đặng Dung, P. Tân Định, Tp. HCM
              </span>
            </div>

            {/* Social Icons (Facebook, Instagram, YouTube) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(255, 253, 249, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#ffd700';
                  e.currentTarget.style.color = '#ffd700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 253, 249, 0.4)';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(255, 253, 249, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#ffd700';
                  e.currentTarget.style.color = '#ffd700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 253, 249, 0.4)';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(255, 253, 249, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#ffd700';
                  e.currentTarget.style.color = '#ffd700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 253, 249, 0.4)';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Uniquely 4U (No onClick) */}
          <div>
            <h4
              style={{
                color: '#ffd700',
                fontSize: '15px',
                fontWeight: 700,
                margin: '0 0 18px 0'
              }}
            >
              Uniquely 4U
            </h4>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, padding: 0, listStyle: 'none' }}>
              <li>
                <a
                  href="#brand-intro"
                  style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                >
                  Mentoring Program
                </a>
              </li>
              <li>
                <a
                  href="#brand-intro"
                  style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                >
                  Expertise in Travel and Tourism
                </a>
              </li>
              <li>
                <a
                  href="#brand-intro"
                  style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                >
                  Becoming a SMART Onwner
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Khám phá (No onClick) */}
          <div>
            <h4
              style={{
                color: '#ffd700',
                fontSize: '15px',
                fontWeight: 700,
                margin: '0 0 18px 0'
              }}
            >
              Khám phá
            </h4>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, padding: 0, listStyle: 'none' }}>
              <li>
                <a
                  href="#about"
                  style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                >
                  Vì sao chọn 4U?
                </a>
              </li>
              <li>
                <a
                  href="#destinations"
                  style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                >
                  Những Chuyến đi Ấn tượng
                </a>
              </li>
              <li>
                <a
                  href="#hot-news"
                  style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                >
                  Câu hỏi Thường gặp
                </a>
              </li>
              <li>
                <a
                  href="#featured-tours"
                  style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                >
                  Retreat HOT
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* =====================================================================
            MIDDLE SECTION: Brand Relationship (CENTERED) & Credits
        ====================================================================== */}
        <div style={{ textAlign: 'center', marginBottom: '28px', paddingTop: '16px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '10px'
            }}
          >
            <img
              src="/logo-new.png"
              alt="4U Edge Up"
              style={{ height: '36px', width: 'auto', maxWidth: '140px', objectFit: 'contain' }}
            />
            <span style={{ fontSize: '14px', color: '#ffffff', fontWeight: 500 }}>
              là một Thương hiệu của
            </span>
            <img
              src="/4u-group.png"
              alt="4U Group"
              style={{ height: '36px', width: 'auto', maxWidth: '140px', objectFit: 'contain' }}
            />
          </div>

          <div style={{ fontSize: '13px', color: 'rgba(255, 253, 249, 0.72)' }}>
            © 4U Edge Up. Designed by 4U Edge Up
          </div>
        </div>

        {/* =====================================================================
            BOTTOM SECTION: Legal Bar with Separators (CENTERED)
        ====================================================================== */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            fontSize: '12px',
            color: 'rgba(255, 253, 249, 0.7)',
            paddingTop: '16px'
          }}
        >
          <span
            style={{ cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 253, 249, 0.7)')}
            onClick={() => onOpenItemModal({ title: 'Tuyên bố từ chối trách nhiệm', category: 'Pháp lý', description: 'Các dịch vụ và lịch trình được cá nhân hóa theo từng hợp đồng thỏa thuận.' })}
          >
            | Tuyên bố từ chối
          </span>
          <span
            style={{ cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 253, 249, 0.7)')}
            onClick={() => onOpenItemModal({ title: 'Điều kiện & Điều khoản', category: 'Pháp lý', description: 'Điều kiện đặt phòng, giữ chỗ và tiêu chuẩn bảo vệ quyền lợi hội viên.' })}
          >
            | Điều kiện
          </span>
          <span
            style={{ cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 253, 249, 0.7)')}
            onClick={() => onOpenItemModal({ title: 'Chính sách bảo mật', category: 'Bảo mật', description: 'Bảo mật tuyệt đối danh tính, tài chính và hải trình của quý thượng khách.' })}
          >
            | Bảo mật
          </span>
          <span
            style={{ cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 253, 249, 0.7)')}
            onClick={() => onOpenItemModal({ title: 'Khả năng Truy cập', category: 'Tiêu chuẩn Web', description: 'Giao diện tối ưu hóa khả năng tiếp cận và hiển thị mượt mà trên mọi thiết bị.' })}
          >
            | Khả năng Truy cập
          </span>
          <span
            style={{ cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 253, 249, 0.7)')}
            onClick={() => onOpenBooking('Phản hồi chất lượng website & dịch vụ')}
          >
            | Phản hồi cho Website
          </span>
          <span
            style={{ cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 253, 249, 0.7)')}
            onClick={() => onOpenBooking('Tiếp nhận khiếu nại & hỗ trợ đặc biệt')}
          >
            | Khiếu nại
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
