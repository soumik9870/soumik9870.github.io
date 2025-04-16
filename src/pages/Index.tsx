
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
      <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-900 min-h-screen">
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
