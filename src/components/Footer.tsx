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
          {/* Column 1 of 2: Brand Story & Official Credentials */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <img
                  src="/logo-official.png"
                  alt="4U Edge Up Logo"
                  style={{ height: '60px', width: 'auto', maxWidth: '210px', objectFit: 'contain' }}
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

              <p style={{ fontSize: '17px', color: 'rgba(255,253,249,0.88)', lineHeight: 1.6, maxWidth: '580px', marginBottom: '20px' }}>
                Bespoke travel architecture, certified yoga and natural healing consultancy, executive mentoring, and global business delegations across Switzerland, Italy, Japan, and Vietnam.
              </p>

              <div style={{ fontSize: '15px', color: '#e6c56c', marginBottom: '24px' }}>
                <strong>Official Portal:</strong> www.4ueup.com
              </div>
            </div>

            <div>
              <span style={{ fontSize: '14px', color: 'rgba(255,253,249,0.7)' }}>
                Private Concierge Desk · Switzerland · Japan · Italy · Vietnam
              </span>
            </div>
          </div>

          {/* Column 2 of 2: Quick Links & Pillar Navigation */}
          <div className="footer-links-grid" style={{ display: 'grid', gap: '32px' }}>
            <div>
              <h3 className="typo-h3" style={{ color: '#fffdf9', marginBottom: '16px', fontSize: '18px' }}>
                Uniquely 4U & Services
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenItemModal({
                      title: 'Mentoring Program',
                      category: 'Uniquely 4U · Better',
                      description: 'Executive 1-on-1 mentoring journeys crafted for founders, next-gen leaders, and hospitality pioneers seeking clarity and elevated mindset.'
                    })}
                    className="footer-link"
                    style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
                  >
                    Mentoring Program
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenItemModal({
                      title: 'Yoga Health Consultancy for Natural Healing',
                      category: 'Uniquely 4U · Healthier',
                      description: 'Bespoke holistic diagnostics, therapeutic breathwork, and restorative yoga sanctuaries in serene natural landscapes.'
                    })}
                    className="footer-link"
                    style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
                  >
                    Yoga & Natural Healing
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenItemModal({
                      title: 'Luxury Wellness & Romance Travels',
                      category: 'Uniquely 4U · Healthier',
                      description: 'Intimate thermal springs, coastal sanctuaries, and private couples retreats designed for deep rejuvenation.'
                    })}
                    className="footer-link"
                    style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
                  >
                    Romance & Wellness Travels
                  </button>
                </li>
                <li>
                  <a href="#featured-tours" className="footer-link">Special Combos (Yacht & Villa)</a>
                </li>
                <li>
                  <a href="#destinations" className="footer-link">Private Helicopter Charters</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="typo-h3" style={{ color: '#fffdf9', marginBottom: '16px', fontSize: '18px' }}>
                Hot News & Kollections
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>
                  <a href="#hot-news" className="footer-link">Culture & Kyoto Courtyards</a>
                </li>
                <li>
                  <a href="#hot-news" className="footer-link">Science of Thermal Longevity</a>
                </li>
                <li>
                  <a href="#hot-news" className="footer-link">The SMART Owner Mindset</a>
                </li>
                <li>
                  <a href="#kollections" className="footer-link">Botanical Silk Kimonos</a>
                </li>
                <li>
                  <a href="#kollections" className="footer-link">Founders Circle Titanium Key</a>
                </li>
              </ul>
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
            © {new Date().getFullYear()} 4U Edge Up (www.4ueup.com). All rights reserved. Better · Healthier · Richer.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
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
