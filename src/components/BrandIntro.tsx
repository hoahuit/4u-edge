import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CHAPTERS = [
  {
    pillar: '01 · Better',
    title: 'SMART Mentoring, Tourism & Ownership',
    description: 'Transforming how high-net-worth families and enterprise leaders travel. We design private sabbatical itineraries that combine alpine relaxation with private mastermind mentorship sessions, wealth asset protection seminars, and SMART ownership structuring.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85',
    caption: 'Sanctuary Architecture & Alpine Restoration'
  },
  {
    pillar: '02 · Healthier',
    title: 'Natural Healing Yoga & Romance Sabbaticals',
    description: 'Certified therapeutic yoga masters, Ayurvedic nutritionists, and thermal spring balneotherapy in Kyoto, Hakone, and Amalfi. Designed for emotional grounding, cellular longevity, and rekindling intimacy in private cliffside villas.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=85',
    caption: 'Therapeutic Healing & Intimate Sanctuaries'
  },
  {
    pillar: '03 · Richer',
    title: 'Exclusive Networking & Global Business Delegations',
    description: 'Direct high-level access to Swiss precision watch ateliers, Milanese fashion houses, Japanese robotics hubs, and prime Vietnamese real estate concessions. Where peer-to-peer relationships ignite multi-generational growth.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1400&q=85',
    caption: 'Private Executive Masterminds & Factory Delegations'
  }
];

export const BrandIntro: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [counts, setCounts] = useState({ retreats: 0, renewal: 0, destinations: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Editorial Headline line-by-line reveal with subtle blur
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 40, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // 2. Animated Metrics Counter on enter
      ScrollTrigger.create({
        trigger: '.metrics-strip-container',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          const duration = 1500;
          const steps = 30;
          const intervalTime = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = Math.min(step / steps, 1);
            const eased = 1 - (1 - progress) * (1 - progress);

            setCounts({
              retreats: Math.floor(eased * 140),
              renewal: Math.floor(eased * 98),
              destinations: Math.floor(eased * 36)
            });

            if (step >= steps) {
              clearInterval(timer);
            }
          }, intervalTime);
        }
      });

      // 3. Chapter scroll observer to trigger active image crossfade
      const chapterEls = document.querySelectorAll('.story-chapter-card');
      chapterEls.forEach((el, index) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 55%',
          end: 'bottom 55%',
          onEnter: () => setActiveChapter(index),
          onEnterBack: () => setActiveChapter(index)
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="brand-intro" className="fullscreen-section section-white">
      <div className="container-fullbleed">
        {/* Section Header with Editorial Text Reveal */}
        <div style={{ marginBottom: '40px' }}>
          <span style={{ color: '#5b0e5d', fontWeight: 600, fontSize: '16px', display: 'block', marginBottom: '10px' }}>
            Welcome to www.4ueup.com · Philosophy & Architecture
          </span>
          <h2
            ref={headlineRef}
            className="typo-h2"
            style={{ color: '#967003', fontSize: 'clamp(28px, 3.4vw, 44px)', margin: '0 0 16px 0', maxWidth: '1000px' }}
          >
            Where Luxury Travel Meets Natural Healing & Strategic Growth
          </h2>
          <p className="typo-body" style={{ color: '#4a473f', fontSize: '19px', lineHeight: 1.6, maxWidth: '880px', margin: 0 }}>
            At <strong>4U Edge Up</strong>, an extraordinary journey does more than change your scenery — it elevates how you live, heal, and lead.
          </p>
        </div>

        {/* Sticky Storytelling Layout (Strict 2 Columns: Chapters on left, Sticky Visual on right) */}
        <div className="grid-2-fullscreen brand-intro-layout" style={{ alignItems: 'flex-start', position: 'relative' }}>
          {/* Column 1 of 2: Scrolling Storytelling Chapters */}
          <div className="story-chapters-col">
            {CHAPTERS.map((chap, idx) => {
              const isActive = activeChapter === idx;
              return (
                <article
                  key={idx}
                  className="story-chapter-card"
                  onClick={() => setActiveChapter(idx)}
                  style={{
                    padding: '32px',
                    borderRadius: '8px',
                    backgroundColor: isActive ? 'var(--bg-cream)' : '#ffffff',
                    border: `1.5px solid ${isActive ? 'var(--color-gold)' : 'rgba(150, 112, 3, 0.16)'}`,
                    boxShadow: isActive ? '0 12px 30px rgba(150, 112, 3, 0.12)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ color: '#5b0e5d', fontWeight: 700, fontSize: '16px' }}>
                      {chap.pillar}
                    </span>
                    <span style={{ fontSize: '13px', color: isActive ? '#967003' : '#666156', fontWeight: 600 }}>
                      Chapter {idx + 1} of 3
                    </span>
                  </div>

                  <h3 className="typo-h3" style={{ color: '#967003', fontSize: '24px', margin: '0 0 14px 0' }}>
                    {chap.title}
                  </h3>

                  <p className="typo-body" style={{ color: '#4a473f', fontSize: '17px', lineHeight: 1.65, margin: 0 }}>
                    {chap.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Column 2 of 2: Sticky Visual Presentation with Image Crossfade */}
          <div className="story-visual-col">
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/11',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#1a1814',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.18)',
                marginBottom: '24px'
              }}
            >
              {CHAPTERS.map((chap, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: activeChapter === idx ? 1 : 0,
                    transform: activeChapter === idx ? 'scale(1)' : 'scale(1.08)',
                    transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
                    pointerEvents: activeChapter === idx ? 'auto' : 'none'
                  }}
                >
                  <img
                    src={chap.image}
                    alt={chap.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(14,20,24,0) 50%, rgba(14,20,24,0.85) 100%)'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '24px',
                      right: '24px',
                      color: '#ffffff'
                    }}
                  >
                    <span style={{ fontSize: '12px', color: '#ffd700', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {chap.pillar}
                    </span>
                    <p style={{ margin: '4px 0 0 0', fontSize: '16px', fontWeight: 500, color: '#fffdf9' }}>
                      {chap.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Metrics Strip */}
            <div
              className="metrics-strip-container"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '14px',
                padding: '20px',
                backgroundColor: 'var(--bg-cream)',
                borderRadius: '8px',
                border: '1px solid rgba(150, 112, 3, 0.22)',
                boxShadow: '0 4px 20px rgba(68, 51, 0, 0.06)'
              }}
            >
              <div>
                <span className="metric-number" style={{ fontSize: '30px' }}>{counts.retreats}+</span>
                <span style={{ fontSize: '13px', color: '#5b0e5d', fontWeight: 600, display: 'block' }}>Bespoke Retreats</span>
              </div>
              <div>
                <span className="metric-number" style={{ fontSize: '30px' }}>{counts.renewal}%</span>
                <span style={{ fontSize: '13px', color: '#5b0e5d', fontWeight: 600, display: 'block' }}>Patron Renewal</span>
              </div>
              <div>
                <span className="metric-number" style={{ fontSize: '30px' }}>{counts.destinations}</span>
                <span style={{ fontSize: '13px', color: '#5b0e5d', fontWeight: 600, display: 'block' }}>Global Dest.</span>
              </div>
              <div>
                <span className="metric-number" style={{ fontSize: '30px' }}>24/7</span>
                <span style={{ fontSize: '13px', color: '#5b0e5d', fontWeight: 600, display: 'block' }}>Concierge Desk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;
