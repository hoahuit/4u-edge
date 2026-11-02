import React, { useState } from 'react';
import { MEGA_MENUS } from '../data/siteData';
import { ModalData } from '../types';

interface MenuDirectoryProps {
  onOpenItemModal: (data: ModalData) => void;
  onFilterBadge: (badge: string) => void;
}

export const MenuDirectory: React.FC<MenuDirectoryProps> = ({
  onOpenItemModal,
  onFilterBadge
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const currentMenu = MEGA_MENUS[activeTab];

  // Flatten all sub-items of the current menu to render in a strict 2 items per row layout
  const allSubItems = currentMenu.columns.flatMap((col) =>
    col.items.map((item) => ({ ...item, pillarTitle: col.title }))
  );

  return (
    <section className="fullscreen-section section-cream" id="menu-directory">
      <div className="container-fullbleed">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '20px',
          marginBottom: '28px'
        }}>
          <div>
            <span style={{ color: '#5b0e5d', fontWeight: 600, fontSize: '16px', display: 'block', marginBottom: '6px' }}>
              Complete Architecture · www.4ueup.com
            </span>
            <h2 className="typo-h2" style={{ color: '#967003', margin: 0 }}>
              Explore All 5 Pillars & Sub-Menus of 4U Edge Up
            </h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Best Seller', 'Just Released', "Today's Deal", 'Last Minute'].map((badge) => (
              <button
                key={badge}
                type="button"
                onClick={() => {
                  onFilterBadge(badge);
                  document.getElementById('featured-tours')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline"
                style={{ padding: '8px 16px', fontSize: '15px' }}
              >
                {badge}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Buttons for the 5 Menus */}
        <div className="sitemap-tabs" role="tablist" style={{ marginBottom: '24px' }}>
          {MEGA_MENUS.map((menu, idx) => (
            <button
              key={menu.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`sitemap-tab-btn ${activeTab === idx ? 'active' : ''}`}
            >
              {idx + 1}) {menu.label}
            </button>
          ))}
        </div>

        {/* Dynamic Tab Content Panel — STRICT 2 ITEMS PER ROW */}
        <div style={{
          background: '#ffffff',
          padding: '32px clamp(20px, 3vw, 40px)',
          border: '1px solid rgba(150,112,3,0.22)',
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            paddingBottom: '14px',
            borderBottom: '1px solid rgba(150,112,3,0.22)'
          }}>
            <div>
              <span style={{ color: '#5b0e5d', fontSize: '15px', fontWeight: 500 }}>
                {currentMenu.menuNumber} · {currentMenu.subtitle}
              </span>
              <h3 className="typo-h3" style={{ color: '#967003', margin: 0, fontSize: '24px' }}>
                {currentMenu.label}
              </h3>
            </div>
            {currentMenu.id === 'luxurious-services' && (
              <span style={{ fontSize: '14px', color: '#c92a2a' }}>
                * Red items indicate temporary placeholders per specification
              </span>
            )}
          </div>

          {/* Strict 2 items per row grid */}
          <div className="grid-2-fullscreen">
            {allSubItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '20px 24px',
                  background: '#fffdf9',
                  border: '1px solid rgba(150, 112, 3, 0.2)',
                  borderLeft: '4px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#5b0e5d' }}>
                      {item.pillarTitle}
                    </span>
                    {item.isTemp && (
                      <span style={{ fontSize: '12px', color: '#c92a2a', fontWeight: 600 }}>Temp Spec</span>
                    )}
                  </div>
                  <h4 className={`font-semibold ${item.isTemp ? 'temp-spec-item' : ''}`} style={{ fontSize: '18px', color: '#252725', margin: '0 0 8px 0' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '15px', color: '#666156', margin: 0, lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenItemModal({
                    title: item.title,
                    category: item.category,
                    description: item.description
                  })}
                  className="typo-nav"
                  style={{ fontSize: '15px', background: 'none', border: 'none', padding: '12px 0 0 0', textAlign: 'left', cursor: 'pointer' }}
                >
                  View full dossier →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuDirectory;
