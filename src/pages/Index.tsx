
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';

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
    <div className="bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <Hero />
      {/* We'll add other sections in the next iterations */}
    </div>
  );
};

export default Index;
