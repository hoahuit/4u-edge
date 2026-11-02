import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ModalData } from '../types';

gsap.registerPlugin(ScrollTrigger);

export interface SignatureExperienceItem {
  id: string;
  domId: string;
  number: string;
  index: number;
  pillar: string;
  eyebrow: string;
  headline: string;
  headlinePrefix?: string;
  headlineAccent?: string;
  headlineSuffix?: string;
  description: string;
  trustMetrics: string[];
  ctaText: string;
  image: string;
  alt: string;
  consultationTopic: string;
}

export const SIGNATURE_EXPERIENCES: SignatureExperienceItem[] = [
  {
    id: 'better',
    domId: 'experience-better',
    number: '01 / 03',
    index: 0,
    pillar: 'HERITAGE & TRUST',
    eyebrow: 'ESTABLISHED GOVERNANCE · 15+ YEARS OF HERITAGE',
    headline: 'Forged in Absolute Discretion & Proven Integrity.',
    headlinePrefix: 'Forged in ',
    headlineAccent: 'Absolute Discretion',
    headlineSuffix: ' & Proven Integrity.',
    description: 'For more than 15 years, 4U Edge Up has served as the quiet, steadfast cornerstone for enterprise leaders, visionary founders, and multigenerational family offices. Every bespoke mission is anchored in institutional-grade confidentiality, flawless execution, and a proven track record that transcends borders.',
    trustMetrics: ['15+ Years Track Record', '100% Absolute Discretion', '500+ Curated Missions'],
    ctaText: 'EXPLORE OUR HERITAGE',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85',
    alt: 'Luxury architectural sanctuary pontoon over pristine azure waters symbolizing steadfast trust',
    consultationTopic: '4U Credibility & Experience · Heritage of Trust & Governance'
  },
  {
    id: 'healthier',
    domId: 'experience-healthier',
    number: '02 / 03',
    index: 1,
    pillar: 'MASTERY & WELLBEING',
    eyebrow: 'DEEP DOMAIN MASTERY · CLINICAL WELLNESS SANCTUARIES',
    headline: 'Decades of Refined Expertise, Flawlessly Executed.',
    headlinePrefix: 'Decades of ',
    headlineAccent: 'Refined Expertise',
    headlineSuffix: ', Flawlessly Executed.',
    description: 'Credibility is earned through deep, uncompromising domain mastery. Our advisory council brings together certified Swiss longevity clinicians, European balneotherapy directors, and seasoned retreat architects. From thermal recovery sanctuaries to cellular reconnection, every journey is calibrated with peerless scientific rigor.',
    trustMetrics: ['Swiss & Alpine Clinical Sanctuaries', 'Certified Longevity Council', 'Bespoke Medical Protocols'],
    ctaText: 'DISCOVER OUR EXPERTISE',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Artisanal ceramic vase and panoramic infinity pool overlooking tranquil turquoise sea',
    consultationTopic: '4U Credibility & Experience · Curated Mastery & Longevity'
  },
  {
    id: 'richer',
    domId: 'experience-richer',
    number: '03 / 03',
    index: 2,
    pillar: 'GLOBAL INFLUENCE & LEGACY',
    eyebrow: 'STRATEGIC ALLIANCES · PRIVATE DIPLOMACY & FAMILY OFFICES',
    headline: 'An Unrivaled Global Network You Can Truly Rely On.',
    headlinePrefix: 'An ',
    headlineAccent: 'Unrivaled Global Network',
    headlineSuffix: ' You Can Truly Rely On.',
    description: 'True experience opens doors that cannot be bought. Through decades of reciprocal respect and diplomatic prestige, 4U Edge Up unlocks direct access to private cliffside estates, off-market European chalets, and closed-door summits across Switzerland, Italy, and Monaco. We empower leaders to forge enduring prosperity and multigenerational impact.',
    trustMetrics: ['45+ Diplomatic & Capital Hubs', 'C-Suite Strategic Alliances', 'Generational Wealth Legacy'],
    ctaText: 'CONNECT WITH OUR NETWORK',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    alt: 'Spectacular architectural private villa overlooking dramatic azure coastal horizon',
    consultationTopic: '4U Credibility & Experience · Global Network & Legacy'
  }
];

interface SignatureExperiencesProps {
  onOpenBooking: (purpose: string) => void;
  onOpenItemModal?: (data: ModalData) => void;
}

export const SignatureExperiences: React.FC<SignatureExperiencesProps> = ({
  onOpenBooking,
  onOpenItemModal
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToChapter = (index: number) => {
    const target = document.getElementById(SIGNATURE_EXPERIENCES[index].domId);
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -60 });
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleCtaClick = (item: SignatureExperienceItem) => {
    if (onOpenBooking) {
      onOpenBooking(item.consultationTopic);
    } else if (onOpenItemModal) {
      onOpenItemModal({
        title: `${item.pillar} · ${item.headline}`,
        category: item.eyebrow,
        description: item.description
      });
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Subtle parallax on images inside the stacked layout
      const images = sectionRef.current?.querySelectorAll('.sig-editorial-img');
      images?.forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -4, scale: 1.05 },
          {
            yPercent: 4,
            scale: 1.0,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="signature-experiences"
      className="sig-experiences-section"
      aria-label="4U Credibility and Signature Experiences"
    >
      <div className="container-fullbleed">
        {/* Editorial Section Header: Focused on Credibility, Heritage & Experience */}
        <div style={{ marginBottom: '48px', maxWidth: '960px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '28px',
                height: '1px',
                backgroundColor: '#967003'
              }}
            />
            <span
              style={{
                color: '#5b0e5d',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase'
              }}
            >
              PILLARS OF CREDIBILITY · 4U HERITAGE & EXPERIENCE
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
              color: '#1f1d19',
              fontSize: 'clamp(32px, 3.8vw, 52px)',
              fontWeight: 500,
              margin: '0 0 16px 0',
              lineHeight: 1.18,
              letterSpacing: '-0.015em'
            }}
          >
            The Art of{' '}
            <em
              style={{
                fontStyle: 'italic',
                color: '#967003',
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontWeight: 500
              }}
            >
              Enduring Trust
            </em>
            , Proven by Decades of{' '}
            <em
              style={{
                fontStyle: 'italic',
                color: '#967003',
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontWeight: 500
              }}
            >
              Experience
            </em>
            .
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#555148',
              fontSize: 'clamp(16px, 1.15vw, 18px)',
              lineHeight: 1.8,
              margin: 0,
              maxWidth: '760px'
            }}
          >
            True distinction is not proclaimed—it is demonstrated through steadfast discretion, clinical mastery,
            and generational alliances trusted by prominent family offices and leaders worldwide.
          </p>
        </div>

        {/* =====================================================================
            INTERLOCKING STACKED EDITORIAL SPREAD (Compact Visuals, Dominant Typography)
        ====================================================================== */}
        <div className="sig-interlocking-stack">
          {SIGNATURE_EXPERIENCES.map((item, idx) => {
            const isReversed = idx % 2 === 1; // Alternating layout

            return (
              <div
                key={item.id}
                id={item.domId}
                className={`sig-editorial-row ${isReversed ? 'is-reversed' : 'is-normal'}`}
              >
                {/* 1. TEXT STORYTELLING & CREDIBILITY PANEL (60% width - Dominant Artistic Typography) */}
                <div className="sig-editorial-text-col">
                  {/* Top Chapter Index & Artistic Numeral */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid rgba(150, 112, 3, 0.12)',
                      paddingBottom: '18px'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '6px'
                        }}
                      >
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: '#ffffff',
                            backgroundColor: '#5b0e5d',
                            padding: '3px 8px',
                            borderRadius: '2px'
                          }}
                        >
                          {item.pillar}
                        </span>
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '0.16em',
                            color: '#967003'
                          }}
                        >
                          {item.number}
                        </span>
                      </div>

                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: '#736d61',
                          display: 'block'
                        }}
                      >
                        {item.eyebrow}
                      </span>
                    </div>

                    {/* Artistic Roman/Numeral Watermark */}
                    <span className="sig-artistic-num" aria-hidden="true">
                      {item.number.split('/')[0].trim()}
                    </span>
                  </div>

                  {/* Middle Narrative & Trust Badges */}
                  <div style={{ margin: '32px 0 28px 0' }}>
                    <h3 className="sig-editorial-heading">
                      {item.headlinePrefix}
                      <em>{item.headlineAccent}</em>
                      {item.headlineSuffix}
                    </h3>

                    <p className="sig-editorial-lead">
                      {item.description}
                    </p>

                    {/* Trust & Experience Proof Badges */}
                    <div className="sig-trust-pills" aria-label="Key Credibility Proof Points">
                      {item.trustMetrics.map((metric, metricIdx) => (
                        <span key={metricIdx} className="sig-trust-pill">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ flexShrink: 0 }}
                          >
                            <path
                              d="M13.3334 4L6.00008 11.3333L2.66675 8"
                              stroke="#967003"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action CTA & Chapter Navigation Arrows */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '20px',
                      borderTop: '1px solid rgba(150, 112, 3, 0.12)'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleCtaClick(item)}
                      className="sig-cta-link"
                    >
                      <span>{item.ctaText}</span>
                      <span style={{ fontSize: '16px', transition: 'transform 0.2s' }}>→</span>
                    </button>

                    {/* Directional Chapter Arrows */}
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      {idx > 0 && (
                        <button
                          type="button"
                          onClick={() => scrollToChapter(idx - 1)}
                          className="sig-arrow-nav-btn"
                          aria-label={`Scroll up to chapter ${idx}`}
                          title={`Go to chapter 0${idx}`}
                        >
                          ↑
                        </button>
                      )}
                      {idx < SIGNATURE_EXPERIENCES.length - 1 && (
                        <button
                          type="button"
                          onClick={() => scrollToChapter(idx + 1)}
                          className="sig-arrow-nav-btn"
                          aria-label={`Scroll down to chapter ${idx + 2}`}
                          title={`Go to chapter 0${idx + 2}`}
                        >
                          ↓
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. REFINED COMPACT PHOTOGRAPHY COLUMN (40% width - Elegant Visual Counterpoint) */}
                <div className="sig-editorial-img-col">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="sig-editorial-img"
                    loading="lazy"
                  />

                  {/* FLOATING DARK NAVIGATION PILL */}
                  <div className={`sig-floating-pill ${isReversed ? 'pos-left' : 'pos-right'}`}>
                    {/* Prev Arrow */}
                    <button
                      type="button"
                      onClick={() =>
                        scrollToChapter((idx - 1 + SIGNATURE_EXPERIENCES.length) % SIGNATURE_EXPERIENCES.length)
                      }
                      className="sig-floating-pill-btn"
                      aria-label="Previous experience"
                      title="Previous Chapter"
                    >
                      &lt;
                    </button>

                    {/* Pagination Dots */}
                    <div className="sig-floating-dots" role="tablist" aria-label="Chapter indicator">
                      {SIGNATURE_EXPERIENCES.map((slide, dotIdx) => (
                        <button
                          key={slide.id}
                          type="button"
                          onClick={() => scrollToChapter(dotIdx)}
                          className={`sig-floating-dot ${idx === dotIdx ? 'active' : ''}`}
                          aria-label={`Scroll to chapter ${dotIdx + 1}: ${slide.pillar}`}
                          title={`Chapter 0${dotIdx + 1} · ${slide.pillar}`}
                        />
                      ))}
                    </div>

                    {/* Next Arrow */}
                    <button
                      type="button"
                      onClick={() => scrollToChapter((idx + 1) % SIGNATURE_EXPERIENCES.length)}
                      className="sig-floating-pill-btn"
                      aria-label="Next experience"
                      title="Next Chapter"
                    >
                      &gt;
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SignatureExperiences;
