import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { KOLLECTIONS_ITEMS } from '../data/siteData';
import { ModalData, KollectionItem } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface KollectionsProps {
  onOpenItemModal: (data: ModalData) => void;
  onOpenBooking: (purpose: string) => void;
}

export const Kollections: React.FC<KollectionsProps> = ({
  onOpenItemModal,
  onOpenBooking
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.kollections-reveal-card',
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.kollections-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="kollections" className="fullscreen-section section-white">
      <div className="container-fullbleed">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '36px',
          gap: '20px'
        }}>
          <div>
            <span style={{ color: '#5b0e5d', fontWeight: 600, fontSize: '16px', display: 'block', marginBottom: '8px' }}>
              Menu 04 · Curated Editions · Strict 2 Items Per Row
            </span>
            <h2 className="typo-h2" style={{ color: '#967003', margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)' }}>
              Kollections 4U — Curated Travel & Wellness Editions
            </h2>
          </div>
          <p className="typo-body" style={{ maxWidth: '640px', color: '#666156', margin: 0, fontSize: '16px' }}>
            Physical accoutrements and limited collector items handcrafted exclusively for 4U Edge Up journeys and executive patrons.
          </p>
        </div>

        {/* STRICT 2 ITEMS PER ROW (FULL-SCREEN WIDTH) WITH HOVER REVEAL */}
        <div className="grid-2-fullscreen kollections-grid">
          {KOLLECTIONS_ITEMS.slice(0, 4).map((item: KollectionItem) => (
            <div
              key={item.id}
              className="hover-reveal-card kollections-reveal-card"
              onClick={() => onOpenItemModal({
                title: item.title,
                category: `Kollections 4U · ${item.category}`,
                description: item.description,
                price: item.price
              })}
            >
              {/* Big Full Bleed Image */}
              <img
                src={item.image}
                alt={item.title}
                className="card-bg-img"
              />

              {/* Top Badge */}
              <span className="card-top-tag">
                {item.category} {item.badge ? `· ${item.badge}` : ''}
              </span>

              {/* Default Bottom Caption (fades out on hover) */}
              <div className="card-default-caption">
                <span style={{ fontSize: '18px', color: '#ffd700', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                  {item.price}
                </span>
                <h3 className={`typo-h3 ${item.isTemp ? 'temp-spec-item' : ''}`} style={{ color: '#ffffff', margin: 0, fontSize: '24px', fontWeight: 600, textShadow: '0 2px 12px rgba(0,0,0,0.85)' }}>
                  {item.title}
                </h3>
              </div>

              {/* Hover Reveal Overlay (reveals full details + Xem Chi Tiết and Acquire buttons on hover) */}
              <div className="card-hover-overlay">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '14px', color: '#ffd700', fontWeight: 600 }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: '20px', fontWeight: 700, color: '#ffd700' }}>
                    {item.price}
                  </span>
                </div>

                <h3 className="typo-h3" style={{ color: '#ffffff', margin: '0 0 12px 0', fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>
                  {item.title}
                </h3>

                <p className="typo-body" style={{ color: 'rgba(255, 253, 249, 0.92)', fontSize: '16px', lineHeight: 1.6, margin: '0 0 22px 0' }}>
                  {item.description}
                </p>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenItemModal({
                        title: item.title,
                        category: `Kollections 4U · ${item.category}`,
                        description: item.description,
                        price: item.price
                      });
                    }}
                    className="btn-primary"
                    style={{ flex: 1, padding: '12px 20px', fontSize: '15px', borderRadius: '8px' }}
                  >
                    Xem chi tiết →
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking(`Kollection Order: ${item.title}`);
                    }}
                    className="btn-outline"
                    style={{
                      flex: 1,
                      padding: '12px 20px',
                      fontSize: '15px',
                      borderRadius: '8px',
                      color: '#ffffff',
                      borderColor: 'rgba(255, 253, 249, 0.6)',
                      backgroundColor: 'rgba(255, 253, 249, 0.1)'
                    }}
                  >
                    Acquire Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kollections;
