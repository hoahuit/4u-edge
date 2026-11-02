import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const scrollLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Initial wordmark & tagline reveal with subtle blur & stagger
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-reveal-word',
        { y: 50, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.3, stagger: 0.15, delay: 0.25 }
      );

      tl.fromTo(
        scrollLinkRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.5'
      );

      // 2. Scroll-driven parallax & scale of the background image
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          yPercent: 22,
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // 3. Scroll-driven exit of the title + tagline (moves up and fades away)
      if (centerRef.current) {
        gsap.to(centerRef.current, {
          yPercent: -45,
          opacity: 0,
          scale: 0.95,
          filter: 'blur(6px)',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '65% top',
            scrub: true,
          },
        });
      }

      // 4. Fade out scroll-to-explore link early on scroll
      if (scrollLinkRef.current) {
        gsap.to(scrollLinkRef.current, {
          opacity: 0,
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '25% top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScrollExplore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.__lenis) {
      window.__lenis.scrollTo('#brand-intro');
    } else {
      document.getElementById('brand-intro')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="hx-hero" id="hero" aria-label="4U Edge Up">
      <div className="hx-media">
        {/* Full-bleed background image with settle animation & parallax */}
        <img
          ref={imgRef}
          className="hx-media-img"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85"
          alt="Vịnh biển xanh ngọc nhìn từ trên cao với du thuyền neo đậu"
        />
      </div>
      <div className="hx-shade"></div>

      {/* Large luxury wordmark + tagline */}
      <div ref={centerRef} className="hx-center">
        <div className="hx-wordmark" role="heading" aria-level={1}>
          <span className="hero-reveal-word">Edge</span>{' '}
          <span className="hero-reveal-word">Up</span>
        </div>
        <div className="hx-tagline hero-reveal-word">Your journey awaits</div>
      </div>

      {/* Scroll to explore link with animated vertical line */}
      <a ref={scrollLinkRef} className="hx-scroll" href="#brand-intro" onClick={handleScrollExplore}>
        Scroll to explore
      </a>
    </section>
  );
};

export default Hero;
