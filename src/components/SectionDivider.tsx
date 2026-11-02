import React from 'react';

export const SectionDivider: React.FC = () => {
  return (
    <div className="section-interstitial-divider section-scroll-reveal" aria-hidden="true">
      <div className="divider-glow-line">
        <span className="divider-emblem-gem" />
      </div>
    </div>
  );
};

export default SectionDivider;
