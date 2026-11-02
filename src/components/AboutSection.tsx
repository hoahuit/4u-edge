import React from 'react';
import { ModalData } from '../types';

interface AboutSectionProps {
  onOpenBooking: (purpose: string) => void;
  onOpenItemModal: (data: ModalData) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking, onOpenItemModal }) => {
  return (
    <section id="about-section" className="fullscreen-section section-cream">
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
              Menu 05 · Our Story & Leadership · Strict 2 Columns
            </span>
            <h2 className="typo-h2" style={{ color: '#967003', margin: 0 }}>
              About 4U Edge Up — Our Architecture & Advisory
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onOpenBooking('Personal Discovery Session')}
            className="btn-primary"
          >
            Request Personal Consultation
          </button>
        </div>

        {/* STRICT 2 ITEMS PER ROW (FULL-SCREEN WIDTH) */}
        <div className="grid-2-fullscreen">
          {/* Item 1 of 2: Vision & Mission */}
          <div style={{
            background: '#ffffff',
            padding: '36px',
            border: '1px solid rgba(150, 112, 3, 0.22)',
            borderTop: '4px solid #5b0e5d',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <span style={{ color: '#5b0e5d', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Pillar 01 · Strategic Mission</span>
              <h3 className="typo-h3" style={{ color: '#967003', fontSize: '24px' }}>Vision & Core Mission</h3>
              <p className="typo-body" style={{ color: '#4a473f', fontSize: '17px', lineHeight: 1.6, marginBottom: '14px' }}>
                Empowering discerning individuals, visionary entrepreneurs, and business owners to live <strong>Better, Healthier, and Richer</strong> through transformative travel, certified natural healing, and global business connectivity.
              </p>
              <p className="typo-body" style={{ color: '#666156', fontSize: '16px', lineHeight: 1.6 }}>
                We believe travel is the supreme catalyst for human elevation. By harmonizing mental clarity (Better), cellular regeneration (Healthier), and enterprise value creation (Richer), 4U Edge Up pioneers a new standard for luxury life mastery.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenItemModal({
                title: 'Vision & Mission',
                category: 'About 4U Edge Up · Strategic Vision',
                description: 'We believe travel is the supreme catalyst for human elevation. By harmonizing mental clarity (Better), cellular regeneration (Healthier), and enterprise value creation (Richer), 4U Edge Up pioneers a new standard for luxury life mastery.'
              })}
              className="typo-nav"
              style={{ fontSize: '16px', background: 'none', border: 'none', padding: '16px 0 0 0', textAlign: 'left', cursor: 'pointer' }}
            >
              Explore Vision & Mission Details →
            </button>
          </div>

          {/* Item 2 of 2: Global Collective & Bespoke Advisory */}
          <div style={{
            background: '#ffffff',
            padding: '36px',
            border: '1px solid rgba(150, 112, 3, 0.22)',
            borderTop: '4px solid #967003',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <span style={{ color: '#5b0e5d', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Pillar 02 · Advisory Bureau</span>
              <h3 className="typo-h3" style={{ color: '#967003', fontSize: '24px' }}>4U Global Team & How 4U Helps You</h3>
              <p className="typo-body" style={{ color: '#4a473f', fontSize: '17px', lineHeight: 1.6, marginBottom: '14px' }}>
                An international collective of luxury travel architects, certified yoga & natural healing consultants, private aviation coordinators, and executive business mentors spanning Geneva, Milan, Tokyo, and Da Nang.
              </p>
              <p className="typo-body" style={{ color: '#666156', fontSize: '16px', lineHeight: 1.6 }}>
                Whether designing an intimate couples romantic sabbatical, mentoring you through the SMART Owner transition, or organizing an exclusive behind-the-scenes factory delegation in Asia or Europe.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', paddingTop: '16px' }}>
              <button
                type="button"
                onClick={() => onOpenBooking('How can 4U help You? — Discovery Session')}
                className="btn-primary"
                style={{ flex: 1, padding: '12px 18px', fontSize: '15px' }}
              >
                Book Discovery Session
              </button>
              <button
                type="button"
                onClick={() => onOpenItemModal({
                  title: '4U Leadership Collective',
                  category: 'About 4U Edge Up · Our Team',
                  description: 'Our advisors bring over 25 years of discrete high-net-worth concierge service, international trade delegation design, and clinical Ayurvedic & yogic wellness methodologies.'
                })}
                className="btn-outline"
                style={{ flex: 1, padding: '12px 18px', fontSize: '15px' }}
              >
                Meet the Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
