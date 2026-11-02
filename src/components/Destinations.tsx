import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DESTINATIONS } from '../data/siteData';
import { ModalData } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface DestinationsProps {
  onOpenItemModal: (data: ModalData) => void;
}

export const Destinations: React.FC<DestinationsProps> = ({ onOpenItemModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current || !trackRef.current) return;

    const mm = gsap.matchMedia();

    // Desktop & Macbook (>= 1024px): Pinned Horizontal Scroll Gallery
    mm.add('(min-width: 1024px)', () => {
      const track = trackRef.current;
      if (!track) return;

      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 120);

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth + 400}`,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.transform = `scaleX(${self.progress})`;
            }
          }
        }
      });

      // Subtle image scale on each card
      gsap.utils.toArray<HTMLElement>('.dest-card-img').forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.12 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              containerAnimation: tween,
              start: 'left right',
              end: 'right left',
              scrub: true,
            }
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="destinations"
      className="fullscreen-section section-white destinations-section"
    >
      <div className="container-fullbleed">
        {/* Section Header */}
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
              Horizontal Scroll Showcase · Global Sanctuaries
            </span>
            <h2 className="typo-h2" style={{ color: '#967003', margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)' }}>
              Curated Destinations Across the Globe
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
            <p className="typo-body" style={{ maxWidth: '580px', color: '#666156', margin: 0, fontSize: '16px' }}>
              Selected for their natural serenity, architectural heritage, and access to private wellness and executive business networks.
            </p>
            {/* Scroll Progress Line for Horizontal Gallery */}
            <div
              style={{
                width: '180px',
                height: '2px',
                backgroundColor: 'rgba(150, 112, 3, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="hidden lg:block"
            >
              <div
                ref={progressBarRef}
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--color-gold)',
                  transformOrigin: 'left',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.1s linear'
                }}
              />
            </div>
          </div>
        </div>

        {/* Horizontal Track Wrapper (touch scroll on mobile/tablet, pinned on macbook/desktop) */}
        <div className="destinations-scroll-wrapper">
          <div
            ref={trackRef}
            className="destinations-horizontal-track"
          >
            {DESTINATIONS.map((dest, i) => (
              <article
                key={dest.id}
                className="dest-article-card hover:border-gold hover:shadow-xl"
              >
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                  borderRadius: '6px',
                  marginBottom: '20px',
                  backgroundColor: '#1a1814'
                }}
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="dest-card-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(14, 20, 24, 0.85)',
                    color: '#ffd700',
                    border: '1px solid rgba(255, 215, 0, 0.35)',
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '5px 12px',
                    borderRadius: '999px',
                    backdropFilter: 'blur(6px)'
                  }}
                >
                  0{i + 1} · {dest.location}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                <h3 className="typo-h3" style={{ color: '#967003', margin: 0, fontSize: '24px' }}>
                  {dest.title}
                </h3>
              </div>

              <p className="typo-body" style={{ color: '#4a473f', marginBottom: '18px', flexGrow: 1, fontSize: '16px', lineHeight: 1.6 }}>
                {dest.description}
              </p>

              <button
                type="button"
                onClick={() => onOpenItemModal({
                  title: dest.title,
                  category: `Destination Dossier · ${dest.location}`,
                  description: dest.dossier
                })}
                className="btn-primary"
                style={{
                  padding: '12px 24px',
                  fontSize: '15px',
                  borderRadius: '8px',
                  alignSelf: 'flex-start'
                }}
              >
                Explore Dossier →
              </button>
            </article>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Destinations;
