import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FEATURED_TOURS } from '../data/siteData';
import { TourItem, ModalData } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface FeaturedToursProps {
  activeBadgeFilter: string;
  onFilterBadge: (badge: string) => void;
  onOpenBooking: (purpose: string) => void;
  onOpenItemModal: (data: ModalData) => void;
}

export const FeaturedTours: React.FC<FeaturedToursProps> = ({
  activeBadgeFilter,
  onFilterBadge,
  onOpenBooking,
  onOpenItemModal
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  const filteredTours = activeBadgeFilter === 'All'
    ? FEATURED_TOURS
    : FEATURED_TOURS.filter((t) => t.badge.toLowerCase() === activeBadgeFilter.toLowerCase());

  const filterOptions = [];
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Cinematic image scale & clip-path reveal for each tour item
      gsap.utils.toArray<HTMLElement>('.tour-clip-frame').forEach((frame) => {
        const innerImg = frame.querySelector<HTMLImageElement>('.tour-inner-img');

        gsap.fromTo(
          frame,
          { clipPath: 'inset(8% 4% 8% 4% round 8px)' },
          {
            clipPath: 'inset(0% 0% 0% 0% round 8px)',
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: frame,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        if (innerImg) {
          gsap.fromTo(
            innerImg,
            { scale: 1.15, yPercent: -6 },
            {
              scale: 1,
              yPercent: 6,
              ease: 'none',
              scrollTrigger: {
                trigger: frame,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredTours]);

  return (
    <section ref={sectionRef} id="featured-tours" className="fullscreen-section section-cream">
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

            <h2 className="typo-h2" style={{ color: '#967003', margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)' }}>
              Featured Signature Tours & Bespoke Journeys
            </h2>
          </div>

          {/* Quick Filter Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {filterOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => onFilterBadge(opt)}
                className={`btn-outline ${activeBadgeFilter.toLowerCase() === opt.toLowerCase() ? 'active' : ''}`}
                style={{ padding: '8px 18px', fontSize: '15px', borderRadius: '8px' }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* STRICT REQUIREMENT: FULL-SCREEN TOURS EXACTLY 2 ITEMS PER ROW */}
        <div className="grid-2-fullscreen">
          {filteredTours.map((tour: TourItem) => (
            <article
              key={tour.id}
              className="tour-item-editorial"
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
              {/* Cinematic Scale & Clip-Path Frame */}
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
                  src={tour.image}
                  alt={tour.title}
                  className="tour-inner-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <span className="tour-badge">{tour.badge}</span>
                <span className="tour-price-tag">{tour.price} / guest</span>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <span style={{ color: '#5b0e5d', fontSize: '14px', fontWeight: 600, display: 'block' }}>
                  {tour.destination} · {tour.duration}
                </span>
                <h3 className="typo-h3" style={{ color: '#967003', margin: '4px 0 0 0', fontSize: '24px' }}>
                  {tour.title}
                </h3>
              </div>

              <p className="typo-body" style={{ color: '#4a473f', marginBottom: '18px', flexGrow: 1, fontSize: '16px', lineHeight: 1.6 }}>
                {tour.overview}
              </p>

              {/* Inclusions tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px' }}>
                {tour.inclusions.map((inc, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '13px',
                      background: 'rgba(150, 112, 3, 0.08)',
                      color: '#443300',
                      padding: '4px 10px',
                      border: '1px solid rgba(150, 112, 3, 0.2)',
                      borderRadius: '4px'
                    }}
                  >
                    ✓ {inc}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => onOpenBooking(tour.title)}
                  className="btn-primary"
                  style={{ flex: 1, minWidth: '160px', padding: '12px 20px', fontSize: '16px', borderRadius: '8px' }}
                >
                  Reserve Journey
                </button>
                <button
                  type="button"
                  onClick={() => onOpenItemModal({
                    title: tour.title,
                    category: `Signature Itinerary · ${tour.destination}`,
                    description: `${tour.overview}\n\nPrice: ${tour.price} per guest\nDuration: ${tour.duration}\n`,
                    price: tour.price,
                    inclusions: tour.inclusions
                  })}
                  className="btn-outline"
                  style={{ flex: 1, minWidth: '140px', padding: '12px 18px', fontSize: '15px', borderRadius: '8px' }}
                >
                  View Itinerary
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
