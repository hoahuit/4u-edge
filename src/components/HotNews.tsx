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
        '.hotnews-item-editorial',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
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
              Editorial Journal
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

        {/* STRICT 2 ITEMS PER ROW (FULL SCREEN WIDTH) MATCHING FEATURED TOURS STYLE */}
        <div className="grid-2-fullscreen hotnews-grid">
          {filteredArticles.slice(0, 4).map((article: HotNewsItem) => (
            <article
              key={article.id}
              className="tour-item-editorial hotnews-item-editorial"
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
                  src={article.image}
                  alt={article.title}
                  className="tour-inner-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <span className="tour-badge">{article.category}</span>
                <span className="tour-price-tag" style={{ backgroundColor: 'rgba(22, 24, 27, 0.78)', backdropFilter: 'blur(8px)' }}>
                  {article.readTime}
                </span>
              </div>

              {/* Text Info */}
              <div style={{ marginBottom: '12px' }}>
                <span style={{ color: '#5b0e5d', fontSize: '14px', fontWeight: 600, display: 'block' }}>
                  {article.category} · {article.date}
                </span>
                <h3 className="typo-h3" style={{ color: '#967003', margin: '4px 0 0 0', fontSize: '24px' }}>
                  {article.title}
                </h3>
              </div>

              <p className="typo-body" style={{ color: '#4a473f', marginBottom: '18px', flexGrow: 1, fontSize: '16px', lineHeight: 1.6 }}>
                {article.excerpt}
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => onOpenItemModal({
                    title: article.title,
                    category: `Editorial · ${article.category}`,
                    description: `${article.excerpt}\n\nOur editorial specialists investigate the intersection of physical vitality, natural healing traditions, and sustainable capital stewardship.`
                  })}
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '15px', borderRadius: '8px' }}
                >
                  Xem chi tiết →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotNews;
