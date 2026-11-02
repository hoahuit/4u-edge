import React from 'react';
import { ModalData } from '../types';

interface FooterProps {
  onOpenBooking: (purpose: string) => void;
  onOpenItemModal: (data: ModalData) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenItemModal }) => {
  return (
    <footer className="site-footer" id="footer" style={{ backgroundColor: 'var(--color-olive)', color: '#fffdf9' }}>
      {/* =====================================================================
          MAIN FOOTER DIRECTORY & BRAND INFO (STRICT 2 COLUMNS)
      ====================================================================== */}
      <div className="container-fullbleed" style={{ padding: '80px clamp(24px, 4vw, 64px) 40px clamp(24px, 4vw, 64px)' }}>
        {/* STRICT 2 COLUMNS (50% / 50%) */}
        <div className="grid-2-fullscreen footer-main-grid" style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid rgba(255, 253, 249, 0.18)' }}>
          {/* Column 1 of 2: Official Company Information & Contact Credentials */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
                <img
                  src="/logo-official.png"
                  alt="4U Edge Up Logo"
                  style={{ height: '62px', width: 'auto', maxWidth: '220px', objectFit: 'contain' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div style={{ display: 'none', alignItems: 'center', gap: '14px' }}>
                  <svg width="44" height="44" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="60" height="60" rx="4" fill="#fffdf9" stroke="#967003" strokeWidth="2.5" />
                    <path d="M14 42V22L24 32L34 22V42" stroke="#5b0e5d" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M40 22V35C40 38.866 43.134 42 47 42C50.866 42 54 38.866 54 35V22" stroke="#967003" strokeWidth="3.2" strokeLinecap="round" />
                    <circle cx="47" cy="15" r="3" fill="#967003" />
                  </svg>
                  <div>
                    <span style={{ fontSize: '26px', fontWeight: 600, color: '#fffdf9', display: 'block', lineHeight: 1.1 }}>4U Edge Up</span>
                    <span style={{ fontSize: '14px', color: '#e6c56c', display: 'block' }}>Better · Healthier · Richer</span>
                  </div>
                </div>
              </div>

              {/* Company Legal Name */}
              <h3
                style={{
                  fontSize: 'clamp(18px, 1.8vw, 22px)',
                  fontWeight: 600,
                  color: '#ffd700',
                  margin: '0 0 16px 0',
                  lineHeight: 1.35
                }}
              >
                Công ty Cổ phần Thương mại Du lịch Bốn Tối Ưu
              </h3>

              {/* Company Details List */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '0 0 24px 0', padding: 0, listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '16px', color: 'rgba(255,253,249,0.92)' }}>
                  <span style={{ color: '#ffd700', fontWeight: 600, minWidth: '95px' }}>Mã số thuế:</span>
                  <span>030 807 8390</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '16px', color: 'rgba(255,253,249,0.92)' }}>
                  <span style={{ color: '#ffd700', fontWeight: 600, minWidth: '95px' }}>Địa chỉ:</span>
                  <span>07 Đặng Dung, P. Tân Định, Tp. HCM</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '16px', color: 'rgba(255,253,249,0.92)' }}>
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
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '16px', color: 'rgba(255,253,249,0.92)' }}>
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
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '16px', color: 'rgba(255,253,249,0.92)' }}>
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

            <div>
              <span style={{ fontSize: '14px', color: 'rgba(255,253,249,0.7)', display: 'block', marginTop: '12px' }}>
                Private Concierge Desk · Switzerland · Japan · Italy · Vietnam
              </span>
            </div>
          </div>

          {/* Column 2 of 2: Hot News & Kollections (Removed Uniquely 4U & Services per request) */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 className="typo-h3" style={{ color: '#fffdf9', marginBottom: '18px', fontSize: '20px' }}>
                Hot News & Kollections 4U
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,253,249,0.85)', lineHeight: 1.6, marginBottom: '20px', maxWidth: '480px' }}>
                Khám phá bản tin phong cách sống thượng lưu, nghiên cứu khoa học phục hồi tự nhiên và bộ sưu tập độc quyền của 4U Edge Up.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '0 0 28px 0', padding: 0, listStyle: 'none' }}>
                <li>
                  <a href="#featured-tours" className="footer-link">Signature Tours & Bespoke Journeys →</a>
                </li>
                <li>
                  <a href="#destinations" className="footer-link">Curated Destinations Across the Globe →</a>
                </li>
                <li>
                  <a href="#hot-news" className="footer-link">Hot News · Culture & Kyoto Courtyards →</a>
                </li>
                <li>
                  <a href="#hot-news" className="footer-link">Hot News · Science of Thermal Longevity →</a>
                </li>
                <li>
                  <a href="#hot-news" className="footer-link">Wealth Wisdom · The SMART Owner Mindset →</a>
                </li>
                <li>
                  <a href="#kollections" className="footer-link">Kollections 4U · Curated Editions & Wellness Craft →</a>
                </li>
              </ul>
            </div>

            {/* Quick Action Concierge Button */}
            <div>
              <button
                type="button"
                onClick={() => onOpenBooking('Private Concierge Contact')}
                className="btn-primary"
                style={{
                  padding: '12px 28px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 18px rgba(212, 175, 55, 0.25)'
                }}
              >
                Book a Tour / Contact Bureau
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          fontSize: '14px',
          color: 'rgba(255,253,249,0.7)'
        }}>
          <div>
            © {new Date().getFullYear()} Công ty Cổ phần Thương mại Du lịch Bốn Tối Ưu (www.4ueup.com). All rights reserved.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => onOpenItemModal({ title: 'Privacy & Discretion Protocol', category: 'Legal & Compliance', description: 'At 4U Edge Up, guest privacy, diplomatic security, and financial discretion are held to sovereign banking standards.' })}>
              Privacy Policy
            </span>
            <span style={{ cursor: 'pointer' }} onClick={() => onOpenItemModal({ title: 'Terms of Bespoke Engagement', category: 'Legal & Compliance', description: 'All private charter, yacht, and thermal sanctuary bookings are governed by Swiss & international hospitality maritime protocols.' })}>
              Terms of Engagement
            </span>
            <span style={{ cursor: 'pointer' }} onClick={() => onOpenItemModal({ title: 'SMART Owner Certification', category: 'Legal & Compliance', description: 'SMART Owner methodology is a proprietary intellectual property framework developed for founder sovereignty and lifestyle balance.' })}>
              SMART Owner IP
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
