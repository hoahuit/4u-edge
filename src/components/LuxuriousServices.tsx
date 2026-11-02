import React from 'react';
import { MEGA_MENUS } from '../data/siteData';
import { ModalData } from '../types';

interface LuxuriousServicesProps {
  onOpenItemModal: (data: ModalData) => void;
  onOpenBooking: (purpose: string) => void;
}

export const LuxuriousServices: React.FC<LuxuriousServicesProps> = ({
  onOpenItemModal,
  onOpenBooking
}) => {
  const luxMenu = MEGA_MENUS.find((m) => m.id === 'luxurious-services');
  const specialCombo = luxMenu?.columns.find((c) => c.title === 'Special Combo');
  const transportAndExcursions = [
    ...(luxMenu?.columns.find((c) => c.title === 'Transportations')?.items || []),
    ...(luxMenu?.columns.find((c) => c.title === 'Excursions')?.items || [])
  ];

  return (
    <section id="luxurious-services" className="fullscreen-section section-white">
      <div className="container-fullbleed">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '32px',
          gap: '20px'
        }}>
          <div>
            <span style={{ color: '#5b0e5d', fontWeight: 600, fontSize: '16px', display: 'block', marginBottom: '8px' }}>
              Menu 02 · Bespoke Offerings · Strict 2 Columns
            </span>
            <h2 className="typo-h2" style={{ color: '#967003', margin: 0 }}>
              Luxurious Services & Private Delegations
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onOpenBooking('Custom Bespoke Luxury Service')}
            className="btn-outline"
          >
            Request Custom Service
          </button>
        </div>

        {/* STRICT 2 ITEMS PER ROW (50% / 50% FULL-WIDTH) */}
        <div className="grid-2-fullscreen">
          {/* Item 1 of 2: Special Combo */}
          <div
            style={{
              background: '#fffdf9',
              padding: '32px',
              border: '1px solid rgba(150, 112, 3, 0.22)',
              borderTop: '4px solid #967003',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 className="typo-h3" style={{ color: '#5b0e5d', margin: 0, fontSize: '22px' }}>
                Special Combo Editions
              </h3>
              <span style={{ fontSize: '14px', color: '#c92a2a' }}>* Temp items per spec</span>
            </div>

            <ul className="mega-link-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
              {specialCombo?.items.map((item, sIdx) => (
                <li key={sIdx} style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(150,112,3,0.14)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                    <span className="font-semibold temp-spec-item" style={{ fontSize: '18px', color: '#443300' }}>
                      {item.title}
                    </span>
                  </div>
                  <p style={{ fontSize: '15px', color: '#666156', margin: '0 0 8px 0', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpenItemModal({
                      title: item.title,
                      category: item.category,
                      description: item.description
                    })}
                    className="typo-nav"
                    style={{ fontSize: '15px', background: 'none', border: 'none', padding: 0 }}
                  >
                    View combo details →
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Item 2 of 2: Transportations & VIP Excursions */}
          <div
            style={{
              background: '#fffdf9',
              padding: '32px',
              border: '1px solid rgba(150, 112, 3, 0.22)',
              borderTop: '4px solid #5b0e5d',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 className="typo-h3" style={{ color: '#5b0e5d', margin: 0, fontSize: '22px' }}>
                VIP Transportations & Strategic Excursions
              </h3>
              <span style={{ fontSize: '14px', color: '#c92a2a' }}>* Temp items per spec</span>
            </div>

            <ul className="mega-link-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
              {transportAndExcursions.map((item, sIdx) => (
                <li key={sIdx} style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(150,112,3,0.14)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                    <span className="font-semibold temp-spec-item" style={{ fontSize: '18px', color: '#443300' }}>
                      {item.title}
                    </span>
                  </div>
                  <p style={{ fontSize: '15px', color: '#666156', margin: '0 0 8px 0', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpenItemModal({
                      title: item.title,
                      category: item.category,
                      description: item.description
                    })}
                    className="typo-nav"
                    style={{ fontSize: '15px', background: 'none', border: 'none', padding: 0 }}
                  >
                    View offering dossier →
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuriousServices;
