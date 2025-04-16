
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import { ThemeProvider } from '../contexts/ThemeContext';

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
      <div className="bg-gradient-to-br from-[#1A1F2C] via-[#403E43] to-[#221F26] dark:from-[#0A0E14] dark:via-[#1C2130] dark:to-[#101320] min-h-screen overflow-hidden">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default Index;
