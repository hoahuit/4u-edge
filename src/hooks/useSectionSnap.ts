import { useEffect, useRef } from 'react';

const SECTION_IDS = [
  'hero',
  'brand-intro',
  'destinations',
  'featured-tours',
  'hot-news',
  'kollections',
  'footer'
];

export const useSectionSnap = () => {
  const isSnappingRef = useRef(false);
  const snapTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let lastTime = 0;

    const handleWheel = (e: WheelEvent) => {
      // Don't intercept if inside a modal or drawer
      const target = e.target as HTMLElement;
      if (
        target.closest('.modal-backdrop') ||
        target.closest('.side-drawer') ||
        target.closest('.mega-panel')
      ) {
        return;
      }

      const now = Date.now();
      if (now - lastTime < 750 || isSnappingRef.current) {
        return;
      }

      const threshold = 35;
      if (Math.abs(e.deltaY) < threshold) return;

      const direction = e.deltaY > 0 ? 1 : -1;

      // Find current active section
      let currentIndex = 0;
      for (let i = 0; i < SECTION_IDS.length; i++) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.35) {
            currentIndex = i;
            break;
          }
        }
      }

      const nextIndex = Math.max(0, Math.min(SECTION_IDS.length - 1, currentIndex + direction));
      if (nextIndex !== currentIndex) {
        const nextEl = document.getElementById(SECTION_IDS[nextIndex]);
        if (nextEl) {
          isSnappingRef.current = true;
          lastTime = now;
          nextEl.scrollIntoView({ behavior: 'smooth' });

          if (snapTimeoutRef.current) {
            window.clearTimeout(snapTimeoutRef.current);
          }
          snapTimeoutRef.current = window.setTimeout(() => {
            isSnappingRef.current = false;
          }, 800);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (snapTimeoutRef.current) {
        window.clearTimeout(snapTimeoutRef.current);
      }
    };
  }, []);
};

export default useSectionSnap;
