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
        '.kollections-item-editorial',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
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
              Curated Editions
            </span>
            <h2 className="typo-h2" style={{ color: '#967003', margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)' }}>
              Curated Travel & Wellness Editions
            </h2>
          </div>
        </div>

        {/* STRICT 2 ITEMS PER ROW (FULL-SCREEN WIDTH) MATCHING FEATURED TOURS STYLE */}
        <div className="grid-2-fullscreen kollections-grid">
          {KOLLECTIONS_ITEMS.slice(0, 4).map((item: KollectionItem) => (
            <article
              key={item.id}
              className="tour-item-editorial kollections-item-editorial"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '0px',
                padding: '0',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'none'
              }}
            >
              {/* Cinematic Scale Frame */}
              <div
                className="tour-clip-frame"
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 10',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  backgroundColor: '#16181b',
                  marginBottom: '22px'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="tour-inner-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <span className="tour-badge">{item.badge || item.category}</span>
                <span className="tour-price-tag">{item.price}</span>
              </div>

              {/* Text Info */}
              <div style={{ marginBottom: '12px' }}>
                <span style={{ color: '#5b0e5d', fontSize: '14px', fontWeight: 600, display: 'block' }}>
                  {item.category}
                </span>
                <h3 className="typo-h3" style={{ color: '#967003', margin: '4px 0 0 0', fontSize: '24px' }}>
                  {item.title}
                </h3>
              </div>

              <p className="typo-body" style={{ color: '#4a473f', marginBottom: '18px', flexGrow: 1, fontSize: '16px', lineHeight: 1.6 }}>
                {item.description}
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => onOpenItemModal({
                    title: item.title,
                    category: `Kollections 4U · ${item.category}`,
                    description: item.description,
                    price: item.price
                  })}
                  className="btn-primary"
                  style={{ flex: 1, minWidth: '140px', padding: '12px 20px', fontSize: '15px', borderRadius: '8px' }}
                >
                  Xem chi tiết →
                </button>
                <button
                  type="button"
                  onClick={() => onOpenBooking(`Kollection Order: ${item.title}`)}
                  className="btn-outline"
                  style={{ flex: 1, minWidth: '140px', padding: '12px 18px', fontSize: '15px', borderRadius: '8px' }}
                >
                  Acquire Item
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kollections;
