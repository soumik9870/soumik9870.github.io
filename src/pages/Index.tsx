
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import LoadingSpinner from '../components/LoadingSpinner';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import { ThemeProvider } from '../contexts/ThemeContext';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LoadingSpinner />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen overflow-hidden relative bg-gradient-to-br from-black via-blue-900 to-black"
          >
            <div className="floating-blob blob-1"></div>
            <div className="floating-blob blob-2"></div>
            <div className="floating-blob blob-3"></div>
            
            <Navigation />
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Index;
