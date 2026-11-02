import React, { useState, useEffect } from 'react';
import { MEGA_MENUS } from '../data/siteData';
import { ModalData } from '../types';

interface HeaderProps {
  onOpenBooking: (purpose?: string) => void;
  onOpenItemModal: (data: ModalData) => void;
  onFilterBadge: (badge: string) => void;
}

const DROPBOX_LOGO_URL = "https://uc8151c29f5a0c1e9bba72ebec99.previews.dropboxusercontent.com/p/thumb/ADO_wBOAPKyRMZ1sgkBlXQL0hZ23TwZS7R00swkW_ZWbeMlteuiw2wGzaTcbHe0OFCvqKyc7UySIzBMNYfC_q5cu5qzGEO1onqQNG2HqlxrJdEzToJHfJgdzUaBxkH5KNm7pegjiNPB13q2NhFGP2dDra7y5qOUuWFMOu1SjUV70jwlMCZuxoe5cgjuqYiaASyRR92aA5U8CHJIPc6lMAdrbOpqKKoa4NiG8PgaL_U5XsjdD22zOBMNfeuRCAAQyODxP4_Q4asgy4a3pH7W2I5PWQgJTqPnZP4pBkNFKhWsUmrZ9CA50p8vbldZtfYUSP89TN0W9V_XYfLejiyXzH0cuIuCZieuiNn9ntuyUHhz3AIfdrr5HCuju8mOQgnE1E1o/p.png?is_prewarmed=true";

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenItemModal,
  onFilterBadge
}) => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState<string>(DROPBOX_LOGO_URL);
  const [logoFailed, setLogoFailed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogoError = () => {
    if (logoSrc !== '/logo-official.png') {
      // Graceful instant fallback to the verified local logo-official.png
      setLogoSrc('/logo-official.png');
    } else {
      setLogoFailed(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : 'is-transparent'}`} id="top">
      {/* Main Navigation Bar */}
      <div className="container-editorial main-nav-inner">
        {/* Official Brand Logo */}
        <a href="#top" className="brand-logo-wrap" aria-label="4U Edge Up Home">
          {!logoFailed ? (
            <img
              src={logoSrc}
              alt="4U Edge Up Logo"
              className="brand-logo-img"
              onError={handleLogoError}
            />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="44" height="44" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="60" height="60" rx="4" fill={isScrolled ? "#fffdf9" : "rgba(255,253,249,0.15)"} stroke={isScrolled ? "#967003" : "#fffdf9"} strokeWidth="2.5" />
                <path d="M14 42V22L24 32L34 22V42" stroke={isScrolled ? "#5b0e5d" : "#fffdf9"} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M40 22V35C40 38.866 43.134 42 47 42C50.866 42 54 38.866 54 35V22" stroke={isScrolled ? "#967003" : "#e6c56c"} strokeWidth="3.2" strokeLinecap="round" />
                <circle cx="47" cy="15" r="3" fill={isScrolled ? "#967003" : "#e6c56c"} />
              </svg>
              <div>
                <span style={{ fontSize: '24px', fontWeight: 600, color: isScrolled ? '#967003' : '#fffdf9', display: 'block', lineHeight: 1.1, textShadow: isScrolled ? 'none' : '0 2px 8px rgba(0,0,0,0.5)' }}>
                  4U Edge Up
                </span>
                <span style={{ fontSize: '13px', color: isScrolled ? '#5b0e5d' : 'rgba(255,253,249,0.9)', display: 'block' }}>
                  Better · Healthier · Richer
                </span>
              </div>
            </div>
          )}
        </a>

        {/* 5 Primary Mega-Menu Navigation Items */}
        <nav aria-label="Main Brand Navigation">
          <ul className="desktop-menu-list">
            {MEGA_MENUS.map((menu) => (
              <li
                key={menu.id}
                className="nav-item-has-mega"
                onMouseEnter={() => setActiveMenuId(menu.id)}
                onMouseLeave={() => setActiveMenuId(null)}
              >
                <button
                  type="button"
                  className={`typo-nav mega-trigger ${activeMenuId === menu.id ? 'active' : ''}`}
                >
                  <span>{menu.label}</span>
                  <span style={{ fontSize: '13px', transform: activeMenuId === menu.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▾</span>
                </button>

                {/* Dropdown Mega Panel */}
                <div className={`mega-panel ${activeMenuId === menu.id ? 'force-open' : ''}`}>
                  <div className="container-editorial">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
                      <div>
                        <span style={{ color: '#5b0e5d', fontSize: '15px', fontWeight: 500 }}>
                          {menu.menuNumber} · {menu.subtitle}
                        </span>
                        <h2 className="typo-h2" style={{ color: '#967003', margin: 0 }}>
                          {menu.label}
                        </h2>
                      </div>

                      {/* Quick deals navigation in header mega panel */}
                      <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
                        <a
                          href="#featured-tours"
                          onClick={(e) => {
                            e.preventDefault();
                            onFilterBadge('Best Seller');
                            document.getElementById('featured-tours')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="typo-nav"
                          style={{ fontSize: '16px' }}
                        >
                          Best Seller
                        </a>
                        <a
                          href="#featured-tours"
                          onClick={(e) => {
                            e.preventDefault();
                            onFilterBadge('Just Released');
                            document.getElementById('featured-tours')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="typo-nav"
                          style={{ fontSize: '16px' }}
                        >
                          Just Released
                        </a>
                        <a
                          href="#featured-tours"
                          onClick={(e) => {
                            e.preventDefault();
                            onFilterBadge("Today's Deal");
                            document.getElementById('featured-tours')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="typo-nav"
                          style={{ fontSize: '16px' }}
                        >
                          Today's Deal
                        </a>
                        <a
                          href="#featured-tours"
                          onClick={(e) => {
                            e.preventDefault();
                            onFilterBadge('Last Minute');
                            document.getElementById('featured-tours')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="typo-nav"
                          style={{ fontSize: '16px' }}
                        >
                          Last Minute
                        </a>
                      </div>
                    </div>

                    <div className="mega-grid-3">
                      {menu.columns.map((col, idx) => (
                        <div key={idx} className="mega-col">
                          <h3 className="typo-h3 mega-col-title">{col.title}</h3>
                          <ul className="mega-link-list">
                            {col.items.map((sub, sIdx) => (
                              <li key={sIdx}>
                                <button
                                  type="button"
                                  onClick={() => onOpenItemModal({
                                    title: sub.title,
                                    category: sub.category,
                                    description: sub.description
                                  })}
                                  className={`mega-sublink ${sub.isTemp ? 'temp-spec-item' : ''}`}
                                  style={{ width: '100%' }}
                                >
                                  <span>{sub.title}</span>
                                  <span style={{ opacity: 0.7 }}>→</span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Action CTA & Mobile Drawer Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            type="button"
            onClick={() => onOpenBooking('Private Tour & Lifestyle Consultation')}
            className="btn-primary"
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              boxShadow: isScrolled ? 'none' : '0 4px 15px rgba(0,0,0,0.3)'
            }}
          >
            Book a Tour
          </button>
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-outline mobile-menu-btn"
            style={{
              padding: '10px 16px',
              color: isScrolled ? 'var(--color-gold)' : '#fffdf9',
              borderColor: isScrolled ? 'var(--color-gold)' : '#fffdf9'
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕ Close' : '☰ Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#fffdf9',
          borderTop: '1px solid rgba(150,112,3,0.22)',
          padding: '24px',
          maxHeight: '80vh',
          overflowY: 'auto',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
        }}>
          {MEGA_MENUS.map((menu) => (
            <div key={menu.id} style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '14px', color: '#5b0e5d', fontWeight: 600 }}>{menu.menuNumber}</div>
              <h3 className="typo-h3" style={{ color: '#967003', margin: '4px 0 12px 0' }}>{menu.label}</h3>
              <div style={{ paddingLeft: '12px', borderLeft: '2px solid rgba(150,112,3,0.25)' }}>
                {menu.columns.map((col, idx) => (
                  <div key={idx} style={{ marginBottom: '14px' }}>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: '#443300', marginBottom: '6px' }}>{col.title}</div>
                    {col.items.map((sub, sIdx) => (
                      <button
                        key={sIdx}
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenItemModal({
                            title: sub.title,
                            category: sub.category,
                            description: sub.description
                          });
                        }}
                        className={`mega-sublink ${sub.isTemp ? 'temp-spec-item' : ''}`}
                        style={{ display: 'block', width: '100%', padding: '6px 0', fontSize: '16px' }}
                      >
                        {sub.title} →
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(150,112,3,0.22)' }}>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('Mobile Inquiry');
              }}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              Book a Tour Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
