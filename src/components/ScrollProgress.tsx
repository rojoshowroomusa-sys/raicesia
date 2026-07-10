import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { useAppContext } from '../AppContext';

export default function ScrollProgress() {
  const { currentPage } = useAppContext();
  const { scrollYProgress } = useScroll();
  
  // Use spring for a beautiful, smooth reaction to scrolling
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show progress as soon as the user starts scrolling
      if (window.scrollY > 5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Reset state on page change
    setIsVisible(false);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage]);

  // Don't show progress bar on the dashboard page
  if (currentPage === 'dashboard') return null;

  return (
    <motion.div
      id="scroll-progress-indicator"
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-gradient-to-r from-primary to-secondary origin-left pointer-events-none"
      style={{
        scaleX,
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        height: isVisible ? '3px' : '0px'
      }}
      transition={{ duration: 0.2 }}
    />
  );
}
