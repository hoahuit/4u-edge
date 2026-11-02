import React, { useState, useEffect, useRef, useCallback } from 'react';
import { DESTINATIONS } from '../data/siteData';
import { ModalData } from '../types';
import { Cinematic3DCard } from './Cinematic3DCard';

interface DestinationsProps {
  onOpenItemModal: (data: ModalData) => void;
}

export const Destinations: React.FC<DestinationsProps> = ({ onOpenItemModal }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = DESTINATIONS.length;
  const sectionRef = useRef<HTMLElement>(null);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Keyboard navigation when section is in viewport
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Pointer drag/swipe gesture handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 48) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    dragStartX.current = null;
    isDragging.current = false;
  };

  const currentDest = DESTINATIONS[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="fullscreen-section section-white destinations-section"
      style={{ overflow: 'hidden', padding: 'clamp(80px, 10vh, 120px) 0 clamp(40px, 6vh, 60px) 0' }}
    >
      <div className="container-fullbleed">
        {/* Section Header with Editorial Metadata & Controls */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '36px',
            gap: '24px'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span
                style={{
                  color: '#5b0e5d',
                  fontWeight: 600,
                  fontSize: '15px',
                  letterSpacing: '0.04em'
                }}
              >
                Cinematic 3D Gallery · Worldwide Sanctuaries
              </span>
              <span style={{ color: 'rgba(150, 112, 3, 0.4)' }}>•</span>
              <span style={{ color: '#967003', fontWeight: 600, fontSize: '14px' }}>
                Interactive 3D Tilt
              </span>
            </div>

            <h2
              className="typo-h2"
              style={{
                color: '#967003',
                margin: '0 0 10px 0',
                fontSize: 'clamp(28px, 3.4vw, 46px)',
                lineHeight: 1.15
              }}
            >
              Curated Destinations Across the Globe
            </h2>

            <p className="typo-body" style={{ maxWidth: '640px', color: '#4a473f', margin: 0, fontSize: '16px', lineHeight: 1.6 }}>
              Move mouse over cards for true 3D perspective depth, dynamic lighting reflection, and layered landscape views.
            </p>
          </div>

          {/* Navigation Controls: Active Counter & Circular Gold Arrows */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Active Counter */}
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#967003', lineHeight: 1 }}>
                0{activeIndex + 1}{' '}
                <span style={{ fontSize: '15px', color: '#666156', fontWeight: 400 }}>
                  / 0{total}
                </span>
              </div>
              <span style={{ fontSize: '13px', color: '#5b0e5d', fontWeight: 600, display: 'block', marginTop: '4px' }}>
                {currentDest.location}
              </span>
            </div>

            {/* Circular Arrow Buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                onClick={handlePrev}
                className="carousel-nav-btn"
                aria-label="Previous destination"
                title="Previous (Arrow Left)"
              >
                ←
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="carousel-nav-btn"
                aria-label="Next destination"
                title="Next (Arrow Right)"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Quick Destination Navigation Pills */}
        <div
          className="dest-quick-pills"
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            gap: '8px',
            marginBottom: '32px',
            paddingBottom: '8px',
            scrollbarWidth: 'none'
          }}
        >
          {DESTINATIONS.map((d, idx) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`dest-filter-pill ${activeIndex === idx ? 'is-active' : ''}`}
            >
              0{idx + 1} · {d.title.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* =====================================================================
            CINEMATIC 3D CAROUSEL STAGE
        ====================================================================== */}
        <div
          className="cinematic-3d-stage"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          style={{
            position: 'relative',
            width: '100%',
            minHeight: 'clamp(480px, 58vh, 620px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1400px',
            perspectiveOrigin: '50% 50%',
            overflow: 'visible',
            touchAction: 'pan-y'
          }}
        >
          <div className="cinematic-3d-carousel-track">
            {DESTINATIONS.map((dest, i) => {
              let diff = i - activeIndex;
              // Circular wrap so cards on left and right wrap around seamlessly
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              const isActive = i === activeIndex;
              const absDiff = Math.abs(diff);

              return (
                <div
                  key={dest.id}
                  className={`stage-card-slot ${isActive ? 'slot-active' : 'slot-inactive'}`}
                  style={{
                    transform: `translateX(${diff * 72}%) scale(${isActive ? 1.05 : Math.max(0.78, 1 - absDiff * 0.12)}) rotateY(${diff * -9}deg) translateZ(${isActive ? 70 : -absDiff * 35}px)`,
                    opacity: absDiff > 2.5 ? 0 : isActive ? 1 : Math.max(0.3, 0.85 - absDiff * 0.25),
                    zIndex: 30 - absDiff,
                    filter: isActive ? 'none' : `brightness(${Math.max(0.65, 0.9 - absDiff * 0.15)})`,
                    pointerEvents: absDiff > 1 ? 'none' : 'auto'
                  }}
                >
                  <Cinematic3DCard
                    destination={dest}
                    index={i}
                    isActive={isActive}
                    onSelect={() => setActiveIndex(i)}
                    onOpenItemModal={onOpenItemModal}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Bottom Indicator Dots & Instructions */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '28px',
            gap: '16px'
          }}
        >
          {/* Dot Indicators */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {DESTINATIONS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  height: '8px',
                  width: activeIndex === idx ? '32px' : '8px',
                  borderRadius: '999px',
                  backgroundColor: activeIndex === idx ? 'var(--color-gold)' : 'rgba(150, 112, 3, 0.25)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            ))}
          </div>

          {/* Interaction Hint */}
          <div style={{ fontSize: '13px', color: '#666156', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#ffd700' }}>✦</span>
            <span>Hover card to activate 3D tilt & lighting • Drag or use arrows to navigate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
