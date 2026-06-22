import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

import CoverPage from './components/CoverPage';
import DetailsPage from './components/DetailsPage';
import PhotoPage1 from './components/PhotoPage1';
import PhotoPage2 from './components/PhotoPage2';
import CalendarPage from './components/CalendarPage';
import MapPage from './components/MapPage';

// Array list tracking our stacked page views
const pages = [CoverPage, DetailsPage, PhotoPage1, PhotoPage2, CalendarPage, MapPage];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);

  const handlePageTransition = (newDirection) => {
    // Lock actions mid-animation to prevent trackpad scroll skips
    if (isAnimating.current) return;

    const targetIndex = currentIndex + newDirection;
    if (targetIndex >= 0 && targetIndex < pages.length) {
      isAnimating.current = true;
      setCurrentIndex(targetIndex);
    }
  };

  // 1. Desktop Wheel Event Handler
  const handleWheel = (e) => {
    if (Math.abs(e.deltaY) < 15) return; // Ignore micro-scroll drifts
    if (e.deltaY > 0) {
      handlePageTransition(1);  // Scroll Down -> Next Page
    } else {
      handlePageTransition(-1); // Scroll Up -> Previous Page
    }
  };

  // 2. Mobile Touch Event Handlers
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    if (Math.abs(deltaY) < 40) return; // Ignore accidental micro-taps
    if (deltaY > 0) {
      handlePageTransition(1);  // Swiped Up -> Next Page
    } else {
      handlePageTransition(-1); // Swiped Down -> Previous Page
    }
  };

  const CurrentPageRender = pages[currentIndex];

  // Pure Fade variants configuration
  const fadeVariants = {
    initial: { 
      opacity: 0 
    },
    animate: { 
      opacity: 1 
    },
    exit: { 
      opacity: 0 
    },
  };

  return (
    <div 
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative mx-auto max-w-md h-screen w-full bg-[#7A0616] text-[#E6C687] overflow-hidden select-none shadow-2xl font-sans antialiased touch-none"
    >
      {/* mode="wait" ensures the current page fades out completely before the next one starts fading in */}
      <AnimatePresence 
        mode="wait"
        onExitComplete={() => { isAnimating.current = false; }}
      >
        <motion.div
          key={currentIndex}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }} 
          className="absolute inset-0 h-full w-full"
        >
          {/* We pass an onNext trigger function so the CoverPage button can jump to the next page */}
          <CurrentPageRender onNext={() => handlePageTransition(1)} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}