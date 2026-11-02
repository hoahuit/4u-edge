import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HOT_NEWS_ARTICLES } from '../data/siteData';
import { ModalData, HotNewsItem } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface HotNewsProps {
  onOpenItemModal: (data: ModalData) => void;
}

export const HotNews: React.FC<HotNewsProps> = ({ onOpenItemModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const sectionRef = useRef<HTMLElement>(null);
  const categories = ['All', 'Culture & Discovery', 'Retreat & Wellness', 'Financial Wisdom'];

  const filteredArticles = selectedCategory === 'All'
    ? HOT_NEWS_ARTICLES
    : HOT_NEWS_ARTICLES.filter((a) => a.category === selectedCategory);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hotnews-reveal-card',
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.hotnews-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredArticles]);

  return (
    <section ref={sectionRef} id="hot-news" className="fullscreen-section section-cream">
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
              Menu 03 · Editorial Journal · Strict 2 Items Per Row
            </span>
            <h2 className="typo-h2" style={{ color: '#967003', margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)' }}>
              Hot News, Wellness Insights & Wealth Wisdom
            </h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`btn-outline ${selectedCategory === cat ? 'active' : ''}`}
                style={{ padding: '8px 18px', fontSize: '15px', borderRadius: '8px' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* STRICT 2 ITEMS PER ROW (FULL SCREEN WIDTH) WITH HOVER REVEAL */}
        <div className="grid-2-fullscreen hotnews-grid">
          {filteredArticles.slice(0, 4).map((article: HotNewsItem) => (
            <article
              key={article.id}
              className="hover-reveal-card hotnews-reveal-card"
              onClick={() => onOpenItemModal({
                title: article.title,
                category: `Editorial · ${article.category}`,
                description: `${article.excerpt}\n\nOur editorial specialists investigate the intersection of physical vitality, natural healing traditions, and sustainable capital stewardship.`
              })}
            >
              {/* Big Full Bleed Image */}
              <img
                src={article.image}
                alt={article.title}
                className="card-bg-img"
              />

              {/* Top Category Badge */}
              <span className="card-top-tag">
                {article.category} · {article.readTime}
              </span>

              {/* Default Bottom Caption (fades out on hover) */}
              <div className="card-default-caption">
                <span style={{ fontSize: '13px', color: '#ffd700', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                  {article.date}
                </span>
                <h3 className={`typo-h3 ${article.isTemp ? 'temp-spec-item' : ''}`} style={{ color: '#ffffff', margin: 0, fontSize: '24px', fontWeight: 600, textShadow: '0 2px 12px rgba(0,0,0,0.85)' }}>
                  {article.title}
                </h3>
              </div>

              {/* Hover Reveal Overlay (reveals full details + Xem Chi Tiết button on hover) */}
              <div className="card-hover-overlay">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '14px', color: '#ffd700', fontWeight: 600 }}>
                    {article.category} · {article.readTime}
                  </span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,253,249,0.85)' }}>
                    {article.date}
                  </span>
                </div>

                <h3 className="typo-h3" style={{ color: '#ffffff', margin: '0 0 12px 0', fontSize: '24px', fontWeight: 600, lineHeight: 1.25 }}>
                  {article.title}
                </h3>

                <p className="typo-body" style={{ color: 'rgba(255, 253, 249, 0.92)', fontSize: '16px', lineHeight: 1.6, margin: '0 0 22px 0' }}>
                  {article.excerpt}
                </p>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenItemModal({
                        title: article.title,
                        category: `Editorial · ${article.category}`,
                        description: `${article.excerpt}\n\nOur editorial specialists investigate the intersection of physical vitality, natural healing traditions, and sustainable capital stewardship.`
                      });
                    }}
                    className="btn-primary"
                    style={{ padding: '12px 26px', fontSize: '16px', borderRadius: '8px' }}
                  >
                    Xem chi tiết →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotNews;
