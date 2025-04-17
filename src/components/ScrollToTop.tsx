
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down a bit
      setShowButton(window.scrollY > 300);
      
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Calculate the stroke dash offset for the circle based on progress
  const circleRadius = 18;
  const circumference = 2 * Math.PI * circleRadius;
  const dashOffset = circumference * (1 - scrollProgress);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-lg hover:bg-white/20 rounded-full shadow-lg transition-all duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg width="46" height="46" viewBox="0 0 46 46" className="absolute">
            <circle
              cx="23"
              cy="23"
              r={circleRadius}
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="23"
              cy="23"
              r={circleRadius}
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              transform="rotate(-90 23 23)"
              strokeLinecap="round"
            />
          </svg>
          <ArrowUp size={20} className="text-blue-400" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
