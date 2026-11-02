import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { Destinations } from './components/Destinations';
import { FeaturedTours } from './components/FeaturedTours';
import { HotNews } from './components/HotNews';
import { Kollections } from './components/Kollections';
import { Footer } from './components/Footer';
import { BookingDrawer } from './components/BookingDrawer';
import { ItemModal } from './components/ItemModal';
import { SectionDots } from './components/SectionDots';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useSectionSnap } from './hooks/useSectionSnap';
import { ModalData } from './types';

export const App: React.FC = () => {
  const [activeBadgeFilter, setActiveBadgeFilter] = useState('All');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPurpose, setBookingPurpose] = useState('');
  const [modalData, setModalData] = useState<ModalData | null>(null);

  // Initialize scroll reveal animations & 1-scroll-per-section snapping
  useScrollReveal();
  useSectionSnap();

  const handleOpenBooking = (purpose: string = 'Private Consultation') => {
    setBookingPurpose(purpose);
    setIsBookingOpen(true);
  };

  const handleOpenItemModal = (data: ModalData) => {
    setModalData(data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Scroll Progress Bar at the very top */}
      <ScrollProgressBar />

      {/* Floating Vertical Section Navigation Dots */}
      <SectionDots />

      {/* Header: Transparent at top, frosted cream on scroll */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenItemModal={handleOpenItemModal}
        onFilterBadge={setActiveBadgeFilter}
      />

      <main className="flex-grow">
        {/* Section 1: Full-screen Hero */}
        <Hero />

        {/* Section 2: Brand Intro & Philosophy (Full-screen, strict 2 items/columns) */}
        <div className="section-scroll-reveal">
          <BrandIntro />
        </div>

        {/* Section 3: Curated Destinations (Full-screen, strict 2 items/row) */}
        <div className="section-scroll-reveal">
          <Destinations onOpenItemModal={handleOpenItemModal} />
        </div>

        {/* Section 4: Featured Tours (Full-screen, strict 2 items/row) */}
        <div className="section-scroll-reveal">
          <FeaturedTours
            activeBadgeFilter={activeBadgeFilter}
            onFilterBadge={setActiveBadgeFilter}
            onOpenBooking={handleOpenBooking}
            onOpenItemModal={handleOpenItemModal}
          />
        </div>

        {/* Section 5: Hot News & Editorial Journal (Full-screen, strict 2 items/row) */}
        <div className="section-scroll-reveal">
          <HotNews onOpenItemModal={handleOpenItemModal} />
        </div>

        {/* Section 6: Kollections 4U Curated Editions (Full-screen, strict 2 items/row) */}
        <div className="section-scroll-reveal">
          <Kollections
            onOpenItemModal={handleOpenItemModal}
            onOpenBooking={handleOpenBooking}
          />
        </div>
      </main>

      {/* Section 7: Olive Brown Footer (Full-screen width, strict 2 items/columns) */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenItemModal={handleOpenItemModal}
      />

      {/* Interactive Booking Lead Drawer */}
      <BookingDrawer
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultPurpose={bookingPurpose}
      />

      {/* Interactive Item Dossier Modal */}
      <ItemModal
        data={modalData}
        onClose={() => setModalData(null)}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
};

export default App;
