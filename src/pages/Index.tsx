
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import { ThemeProvider } from '../contexts/ThemeContext';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  // Smooth scroll behavior
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (href?.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

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
        
        {/* Add Sonner Toast */}
        <Toaster position="top-right" />
      </div>
    </ThemeProvider>
  );
};

export default Index;
