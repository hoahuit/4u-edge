import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Destination, ModalData } from '../types';

interface Cinematic3DCardProps {
  destination: Destination;
  index: number;
  isActive: boolean;
  onSelect: () => void;
  onOpenItemModal: (data: ModalData) => void;
}

export const Cinematic3DCard: React.FC<Cinematic3DCardProps> = ({
  destination,
  index,
  isActive,
  onSelect,
  onOpenItemModal
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  // Tilt coordinates
  const targetTilt = useRef({ x: 0, y: 0 });
  const currentTilt = useRef({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth lerp loop
  const updateTilt = useCallback(() => {
    const ease = 0.12;
    currentTilt.current.x += (targetTilt.current.x - currentTilt.current.x) * ease;
    currentTilt.current.y += (targetTilt.current.y - currentTilt.current.y) * ease;

    if (cardRef.current) {
      const { x, y } = currentTilt.current;
      // Apply 3D rotation to the inner card wrapper
      cardRef.current.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    }

    // Keep animating until close to target
    const diffX = Math.abs(targetTilt.current.x - currentTilt.current.x);
    const diffY = Math.abs(targetTilt.current.y - currentTilt.current.y);

    if (diffX > 0.01 || diffY > 0.01) {
      rafId.current = requestAnimationFrame(updateTilt);
    } else {
      rafId.current = null;
    }
  }, []);

  const requestUpdate = useCallback(() => {
    if (!rafId.current) {
      rafId.current = requestAnimationFrame(updateTilt);
    }
  }, [updateTilt]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only apply 3D tilt for fine pointer (mouse) and when active/hovered
    if (e.pointerType === 'touch' || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    // Normalized from -1 to 1
    const normX = (clientX / rect.width) * 2 - 1;
    const normY = (clientY / rect.height) * 2 - 1;

    // Subtle max tilt (12 degrees)
    const maxTilt = 12;
    targetTilt.current = {
      x: -normY * maxTilt,
      y: normX * maxTilt
    };

    // Glare position
    setGlare({
      x: (clientX / rect.width) * 100,
      y: (clientY / rect.height) * 100,
      opacity: 0.28
    });

    requestUpdate();
  };

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') return;
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    targetTilt.current = { x: 0, y: 0 };
    setGlare((prev) => ({ ...prev, opacity: 0 }));
    requestUpdate();
  };

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const handleExplore = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpenItemModal({
      title: destination.title,
      category: `Curated Destination · ${destination.location}`,
      description: `${destination.description}\n\nPrice: ${destination.price || 'Contact Desk'}\nDuration: ${destination.duration || 'Bespoke Itinerary'}\n\nDossier:\n${destination.dossier}`,
      price: destination.price
    });
  };

  return (
    <div
      className={`cinematic-3d-card-wrapper ${isActive ? 'is-active-card' : 'is-adjacent-card'}`}
      onClick={onSelect}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
        cursor: isActive ? 'default' : 'pointer'
      }}
    >
      <div
        ref={cardRef}
        className="cinematic-3d-card-surface"
        style={{
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'box-shadow 0.3s ease, border-color 0.3s ease' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease'
        }}
      >
        {/* Layer 0: Full-Background Landscape Photography */}
        <div
          className="layer-media"
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            borderRadius: '12px',
            transform: 'translateZ(0px)',
            backgroundColor: '#101418'
          }}
        >
          <img
            src={destination.image}
            alt={destination.title}
            className="card-3d-img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: isHovered
                ? `scale(1.08) translate(${-currentTilt.current.y * 1.5}px, ${currentTilt.current.x * 1.5}px)`
                : 'scale(1.03)',
              transition: isHovered ? 'none' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        </div>

        {/* Layer 1: Gradient Overlays for Text Legibility */}
        <div
          className="layer-scrim"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '12px',
            transform: 'translateZ(20px)',
            background: 'linear-gradient(180deg, rgba(8, 14, 18, 0.35) 0%, rgba(8, 14, 18, 0.1) 35%, rgba(8, 14, 18, 0.72) 70%, rgba(8, 14, 18, 0.96) 100%)',
            pointerEvents: 'none'
          }}
        />

        {/* Layer 2: Dynamic Specular Lighting Glare */}
        <div
          className="layer-glare"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '12px',
            transform: 'translateZ(30px)',
            background: `radial-gradient(circle 380px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}) 0%, rgba(255, 255, 255, 0) 75%)`,
            pointerEvents: 'none',
            transition: 'opacity 0.25s ease'
          }}
        />

        {/* Layer 3: Top Metadata Pills (Category & Duration) */}
        <div
          className="layer-top-badges"
          style={{
            position: 'absolute',
            top: '24px',
            left: '24px',
            right: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transform: 'translateZ(55px)',
            pointerEvents: 'none'
          }}
        >
          <span
            style={{
              backgroundColor: 'rgba(14, 20, 24, 0.82)',
              color: '#ffd700',
              border: '1px solid rgba(255, 215, 0, 0.4)',
              fontSize: '12px',
              fontWeight: 600,
              padding: '6px 14px',
              borderRadius: '999px',
              backdropFilter: 'blur(8px)',
              letterSpacing: '0.06em'
            }}
          >
            0{index + 1} · {destination.category || 'SANCTUARY'}
          </span>

          {destination.duration && (
            <span
              style={{
                backgroundColor: 'rgba(255, 253, 249, 0.15)',
                color: '#fffdf9',
                border: '1px solid rgba(255, 253, 249, 0.35)',
                fontSize: '12px',
                fontWeight: 500,
                padding: '6px 12px',
                borderRadius: '999px',
                backdropFilter: 'blur(8px)'
              }}
            >
              {destination.duration}
            </span>
          )}
        </div>

        {/* Layer 4: Destination Name & Region */}
        <div
          className="layer-content"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: 'clamp(20px, 3.2vw, 36px)',
            transform: 'translateZ(75px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}
        >
          {/* Location / Region */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span style={{ color: '#ffd700', fontSize: '14px', fontWeight: 600, letterSpacing: '0.04em' }}>
              {destination.location}
            </span>
          </div>

          {/* Main Title */}
          <h3
            className="typo-h2"
            style={{
              color: '#ffffff',
              fontSize: 'clamp(24px, 2.6vw, 36px)',
              lineHeight: 1.18,
              margin: '0 0 10px 0',
              fontWeight: 600,
              textShadow: '0 2px 14px rgba(0, 0, 0, 0.8)'
            }}
          >
            {destination.title}
          </h3>

          {/* Emotional Travel Description */}
          <p
            className="typo-body"
            style={{
              color: 'rgba(255, 253, 249, 0.92)',
              fontSize: 'clamp(14px, 1.1vw, 16px)',
              lineHeight: 1.55,
              margin: '0 0 18px 0',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textShadow: '0 1px 6px rgba(0,0,0,0.6)'
            }}
          >
            {destination.description}
          </p>

          {/* Bottom Bar: Price & CTA Button (translateZ for maximum 3D pop) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255, 253, 249, 0.2)',
              transform: 'translateZ(30px)'
            }}
          >
            <div>
              <span style={{ fontSize: '11px', color: 'rgba(255, 253, 249, 0.7)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Starting From
              </span>
              <span style={{ fontSize: '19px', fontWeight: 700, color: '#ffd700' }}>
                {destination.price || 'Inquire'}
              </span>
            </div>

            <button
              type="button"
              onClick={handleExplore}
              className="btn-primary"
              style={{
                padding: '10px 22px',
                fontSize: '15px',
                borderRadius: '8px',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              Explore Tour →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
