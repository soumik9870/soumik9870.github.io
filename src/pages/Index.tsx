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
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
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
            
            <Toaster position="top-right" />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Index;
