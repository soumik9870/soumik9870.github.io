
import { useEffect, useState } from 'react';
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
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-black via-blue-900 to-black">
        {/* Global floating blobs */}
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
        
        {/* Add Sonner Toast */}
        <Toaster position="top-right" />
      </div>
    </ThemeProvider>
  );
};

export default Index;
