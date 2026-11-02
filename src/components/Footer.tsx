import React from 'react';
import { ModalData } from '../types';

interface FooterProps {
  onOpenBooking: (purpose: string) => void;
  onOpenItemModal: (data: ModalData) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenItemModal }) => {
  return (
    <footer className="site-footer" id="footer" style={{ backgroundColor: 'var(--color-olive)', color: '#fffdf9' }}>
      {/* Container with restrained max-width & balanced luxury padding */}
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '56px 24px 32px 24px' }}>
        {/* Main 2-Column Balanced Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(36px, 5vw, 64px)',
            alignItems: 'flex-start',
            marginBottom: '40px',
            paddingBottom: '40px',
            borderBottom: '1px solid rgba(255, 253, 249, 0.15)'
          }}
        >
          {/* Column 1: Brand Identity & Lifestyle Description */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Brand Relationship (4U Edge Up is a brand of 4U Group) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                marginBottom: '20px'
              }}
            >
              <img
                src="/logo-new.png"
                alt="4U Edge Up"
                style={{ height: '42px', width: 'auto', maxWidth: '145px', objectFit: 'contain' }}
              />
              <span
                style={{
                  fontSize: '13px',
                  color: 'rgba(255, 253, 249, 0.75)',
                  fontWeight: 500,
                  letterSpacing: '0.3px',
                  textTransform: 'uppercase'
                }}
              >
                là một Thương hiệu của
              </span>
              <img
                src="/4u-group.png"
                alt="4U Group"
                style={{ height: '42px', width: 'auto', maxWidth: '145px', objectFit: 'contain' }}
              />
            </div>

            {/* Editorial lifestyle tagline */}
            <p
              style={{
                fontSize: '15px',
                color: 'rgba(255, 253, 249, 0.88)',
                lineHeight: 1.65,
                marginBottom: '20px',
                maxWidth: '520px'
              }}
            >
              Khám phá bản tin phong cách sống thượng lưu, nghiên cứu khoa học phục hồi tự nhiên và bộ sưu tập độc quyền của 4U Edge Up.
            </p>

            {/* Quick Navigation to Hot News & Kollections */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a
                href="#hot-news"
                style={{
                  color: '#ffd700',
                  fontSize: '14px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Hot News 4U →
              </a>
              <span style={{ color: 'rgba(255, 253, 249, 0.3)' }}>|</span>
              <a
                href="#kollections"
                style={{
                  color: '#ffd700',
                  fontSize: '14px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Kollections 4U →
              </a>
            </div>
          </div>

          {/* Column 2: Legal Corporate Details & Official Contacts */}
          <div>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#ffd700',
                margin: '0 0 16px 0',
                lineHeight: 1.35
              }}
            >
              Công ty Cổ phần Thương mại Du lịch Bốn Tối Ưu
            </h3>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: 0, padding: 0, listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: 'rgba(255,253,249,0.92)' }}>
                <span style={{ color: '#ffd700', fontWeight: 600, minWidth: '95px' }}>Mã số thuế:</span>
                <span>030 807 8390</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: 'rgba(255,253,249,0.92)' }}>
                <span style={{ color: '#ffd700', fontWeight: 600, minWidth: '95px' }}>Địa chỉ:</span>
                <span>07 Đặng Dung, P. Tân Định, Tp. HCM</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: 'rgba(255,253,249,0.92)' }}>
                <span style={{ color: '#ffd700', fontWeight: 600, minWidth: '95px' }}>Điện thoại:</span>
                <a
                  href="tel:0848180826"
                  style={{ color: '#fffdf9', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#fffdf9')}
                >
                  084 818 0826
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: 'rgba(255,253,249,0.92)' }}>
                <span style={{ color: '#ffd700', fontWeight: 600, minWidth: '95px' }}>Email:</span>
                <a
                  href="mailto:customercare@4uretreats.com.vn"
                  style={{ color: '#fffdf9', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#fffdf9')}
                >
                  customercare@4uretreats.com.vn
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: 'rgba(255,253,249,0.92)' }}>
                <span style={{ color: '#ffd700', fontWeight: 600, minWidth: '95px' }}>Website:</span>
                <a
                  href="https://www.4ueup.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#e6c56c', textDecoration: 'none' }}
                >
                  www.4ueup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Protocol */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '13px',
            color: 'rgba(255,253,249,0.68)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Công ty Cổ phần Thương mại Du lịch Bốn Tối Ưu (www.4ueup.com). All rights reserved.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <span
              style={{ cursor: 'pointer', transition: 'color 0.2s' }}
              onClick={() =>
                onOpenItemModal({
                  title: 'Privacy & Discretion Protocol',
                  category: 'Legal & Compliance',
                  description:
                    'At 4U Edge Up, guest privacy, diplomatic security, and financial discretion are held to sovereign banking standards.'
                })
              }
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,253,249,0.68)')}
            >
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
