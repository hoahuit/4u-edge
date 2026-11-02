import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ModalData } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface EditorialStep {
  step: string;
  number: string;
  title: string;
  description: string;
  ctaText: string;
  image: string;
  alt: string;
  tag: string;
  consultationTopic: string;
}

const EDITORIAL_STEPS: EditorialStep[] = [
  {
    step: 'STEP 01',
    number: '01',
    title: 'Begin the Journey',
    description: "We begin with a personal touch—ideally in person, or via video/phone call. This allows us to truly understand your vision, preferences, and travel style. It's the quickest way to turn your ideas into an extraordinary journey designed just for you.",
    ctaText: 'GET STARTED',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
    alt: 'Luxury hospitality sanctuary architecture surrounded by lush natural greenery',
    tag: 'Initial Consultation · Vision Alignment',
    consultationTopic: 'Step 01 — Begin the Journey Consultation'
  },
  {
    step: 'STEP 02',
    number: '02',
    title: 'Bespoke Planning',
    description: "Once we've gathered everything we need, we'll carefully curate an itinerary tailored to your desires. We'll walk you through every detail—again, ideally face-to-face or over video—so you understand the thought and intention behind each hotel, experience, and destination we recommend.",
    ctaText: 'EXPLORE OUR APPROACH',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85',
    alt: 'Panoramic luxury hotel suite overlooking tranquil destination views',
    tag: 'Curated Itineraries · Precision Architecture',
    consultationTopic: 'Step 02 — Bespoke Planning Inquiry'
  },
  {
    step: 'STEP 03',
    number: '03',
    title: 'Exceptional Experiences',
    description: "Every element of your journey is thoughtfully arranged to deliver exceptional experiences. From private wellness retreats to exclusive cultural encounters, every detail is designed around your preferences.",
    ctaText: 'DISCOVER EXPERIENCES',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
    alt: 'Private wellness sanctuary infinity pool immersed in nature',
    tag: 'Private Sanctuaries · Natural Healing',
    consultationTopic: 'Step 03 — Exceptional Experiences Discovery'
  },
  {
    step: 'STEP 04',
    number: '04',
    title: 'Your Journey Begins',
    description: "From the first moment to your return home, our concierge team provides thoughtful support throughout your journey. Travel with confidence, knowing every detail has been carefully considered.",
    ctaText: 'PLAN YOUR JOURNEY',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=85',
    alt: 'Cinematic coastal villa overlooking dramatic azure seas',
    tag: 'Sovereign Concierge · 24/7 Diplomatic Support',
    consultationTopic: 'Step 04 — Plan Your Journey'
  }
];

interface BrandIntroProps {
  onOpenBooking?: (purpose: string) => void;
  onOpenItemModal?: (data: ModalData) => void;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ onOpenBooking, onOpenItemModal }) => {
  const [counts, setCounts] = useState({ retreats: 0, renewal: 0, destinations: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const handleCtaClick = (step: EditorialStep) => {
    if (onOpenBooking) {
      onOpenBooking(step.consultationTopic);
    } else if (onOpenItemModal) {
      onOpenItemModal({
        title: `${step.step} — ${step.title}`,
        category: 'Editorial Journey Step',
        description: step.description
      });
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header Reveal
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // 2. Animate each Editorial Step with Reveal & Parallax
      const stepItems = document.querySelectorAll('.editorial-step-item');
      stepItems.forEach((item, index) => {
        const isReversed = index % 2 === 1;
        const imgWrap = item.querySelector('.editorial-step-frame-wrap');
        const img = item.querySelector('.editorial-step-img');
        const content = item.querySelector('.editorial-step-content-col');

        if (imgWrap && img) {
          // Clip-path reveal alternating direction
          gsap.fromTo(
            imgWrap,
            {
              clipPath: isReversed
                ? 'inset(0% 0% 0% 100%)'
                : 'inset(0% 100% 0% 0%)',
              opacity: 0.2
            },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              opacity: 1,
              duration: 1.25,
              ease: 'power3.inOut',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          );

          // Subtle parallax on image
          gsap.fromTo(
            img,
            { scale: 1.08, yPercent: -4 },
            {
              scale: 1.0,
              yPercent: 4,
              ease: 'none',
              scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2
              }
            }
          );
        }

        // Staggered text content reveal
        if (content) {
          gsap.fromTo(
            content.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.14,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      });

      // 3. Animated Metrics Counter on enter
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="brand-intro" className="fullscreen-section section-white">
      <div className="container-fullbleed">
        
        {/* =====================================================================
            SECTION HEADER: Philosophy & Architecture
        ====================================================================== */}
        <div style={{ marginBottom: '60px' }}>
          <span
            style={{
              color: '#5b0e5d',
              fontWeight: 600,
              fontSize: '15px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '10px'
            }}
          >
            Welcome to www.4ueup.com · Philosophy & Architecture
          </span>
          <h2
            ref={headlineRef}
            className="typo-h2"
            style={{
              color: '#967003',
              fontSize: 'clamp(28px, 3.4vw, 44px)',
              margin: '0 0 16px 0',
              maxWidth: '1000px',
              lineHeight: 1.2
            }}
          >
            Where Luxury Travel Meets Natural Healing & Strategic Growth
          </h2>
          <p
            className="typo-body"
            style={{
              color: '#4a473f',
              fontSize: '18px',
              lineHeight: 1.65,
              maxWidth: '860px',
              margin: 0
            }}
          >
            At <strong>4U Edge Up</strong>, an extraordinary journey does more than change your scenery — it elevates how you live, heal, and lead.
          </p>
        </div>

        {/* =====================================================================
            VERTICAL STORYTELLING: 4 ALTERNATING EDITORIAL STEPS
        ====================================================================== */}
        <div className="editorial-steps-container">
          {EDITORIAL_STEPS.map((item, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={item.number}
                className={`editorial-step-item ${isReversed ? 'is-reversed' : 'is-normal'}`}
              >
                {/* 1. Large Photography Column (~53% width) */}
                <div className="editorial-step-media-col">
                  <div className="editorial-step-frame-wrap">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="editorial-step-img"
                      loading="lazy"
                    />
                    <span className="editorial-step-badge">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* 2. Text Storytelling Column (~47% width) */}
                <div className="editorial-step-content-col">
                  {/* Step Indicator */}
                  <span
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: '#5b0e5d',
                      marginBottom: '10px'
                    }}
                  >
                    {item.step}
                  </span>

                  {/* Elegant Serif Heading */}
                  <h3
                    className="typo-h2"
                    style={{
                      color: '#967003',
                      fontSize: 'clamp(30px, 3.2vw, 46px)',
                      lineHeight: 1.18,
                      margin: '0 0 18px 0'
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description Body */}
                  <p
                    className="typo-body"
                    style={{
                      color: '#4a473f',
                      fontSize: '17px',
                      lineHeight: 1.75,
                      marginBottom: '26px'
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Editorial CTA */}
                  <div>
                    <button
                      type="button"
                      onClick={() => handleCtaClick(item)}
                      className="editorial-step-cta"
                    >
                      <span>{item.ctaText}</span>
                      <span className="cta-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================================
            METRICS STRIP: Track Record & Global Footprint
        ====================================================================== */}
        <div style={{ marginTop: '70px' }}>
          <div
            className="metrics-strip-container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              padding: '24px 28px',
              backgroundColor: 'var(--bg-cream)',
              borderRadius: '8px',
              border: '1px solid rgba(150, 112, 3, 0.22)',
              boxShadow: '0 6px 24px rgba(68, 51, 0, 0.06)'
            }}
          >
            <div>
              <span className="metric-number" style={{ fontSize: '32px' }}>{counts.retreats}+</span>
              <span style={{ fontSize: '14px', color: '#5b0e5d', fontWeight: 600, display: 'block', marginTop: '2px' }}>
                Bespoke Retreats
              </span>
            </div>
            <div>
              <span className="metric-number" style={{ fontSize: '32px' }}>{counts.renewal}%</span>
              <span style={{ fontSize: '14px', color: '#5b0e5d', fontWeight: 600, display: 'block', marginTop: '2px' }}>
                Patron Renewal
              </span>
            </div>
            <div>
              <span className="metric-number" style={{ fontSize: '32px' }}>{counts.destinations}</span>
              <span style={{ fontSize: '14px', color: '#5b0e5d', fontWeight: 600, display: 'block', marginTop: '2px' }}>
                Global Dest.
              </span>
            </div>
            <div>
              <span className="metric-number" style={{ fontSize: '32px' }}>24/7</span>
              <span style={{ fontSize: '14px', color: '#5b0e5d', fontWeight: 600, display: 'block', marginTop: '2px' }}>
                Concierge Desk
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandIntro;
