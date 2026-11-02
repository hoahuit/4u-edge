import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', label: '01. Hero' },
  { id: 'brand-intro', label: '02. Philosophy' },
  { id: 'destinations', label: '03. Destinations' },
  { id: 'featured-tours', label: '04. Featured Tours' },
  { id: 'hot-news', label: '05. Hot News' },
  { id: 'kollections', label: '06. Kollections 4U' },
  { id: 'signature-experiences', label: '07. Signature Experiences' },
  { id: 'footer', label: '08. Private Concierge' },
];

export const SectionDots: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (window.__lenis) {
      window.__lenis.scrollTo('#' + id);
    } else {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      aria-label="Section Navigation"
      style={{
        position: 'fixed',
        right: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
      className="hidden lg:flex"
    >
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            type="button"
            onClick={() => scrollToSection(sec.id)}
            title={sec.label}
            style={{
              position: 'relative',
              width: isActive ? '12px' : '8px',
              height: isActive ? '12px' : '8px',
              borderRadius: '50%',
              backgroundColor: isActive ? 'var(--color-gold)' : 'rgba(150, 112, 3, 0.4)',
              border: isActive ? '2px solid #ffffff' : 'none',
              boxShadow: isActive ? '0 0 10px rgba(150, 112, 3, 0.6)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              padding: 0
            }}
            aria-label={`Jump to ${sec.label}`}
          />
        );
      })}
    </nav>
  );
};

export default SectionDots;
