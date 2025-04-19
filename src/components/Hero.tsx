import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ArrowDown, ExternalLink, Github, Linkedin, FileText, Globe } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  
  const skills = [
    "Frontend Developer",
    "UI/UX Enthusiast",
    "React Developer",
    "TypeScript Expert"
  ];
  
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const tick = () => {
      const currentSkill = skills[currentSkillIndex];
      
      // Handle text update based on whether we're deleting or typing
      if (isDeleting) {
        setCurrentText(currentText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentSkill.substring(0, currentText.length + 1));
      }
      
      // Set typing speed
      let newDelta = isDeleting ? 100 : 200;
      
      // If we've finished typing current word
      if (!isDeleting && currentText === currentSkill) {
        // Pause at the end
        newDelta = 2000;
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        // Move to next word
        setIsDeleting(false);
        setCurrentSkillIndex((currentSkillIndex + 1) % skills.length);
        newDelta = 500;
      }
      
      setDelta(newDelta);
    };
    
    // Clear any existing timeout
    if (typingRef.current) clearTimeout(typingRef.current);
    
    // Set new timeout
    typingRef.current = setTimeout(tick, delta);
    
    // Cleanup
    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [currentSkillIndex, currentText, isDeleting]);

  // Quick links data with icons
  const quickLinks = [
    { name: "GitHub", icon: <Github size={24} />, url: "https://github.com" },
    { name: "LinkedIn", icon: <Linkedin size={24} />, url: "https://linkedin.com" },
    { name: "Portfolio", icon: <Globe size={24} />, url: "https://portfolio.com" },
    { name: "Resume", icon: <FileText size={24} />, url: "https://resume.com" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              John Doe
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-light mb-8 text-blue-300"
          >
            <span className="typing-animation">{currentText}</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-gray-300 mb-10"
          >
            Passionate about creating beautiful, functional, and user-friendly digital experiences
            with modern web technologies.
          </motion.p>
          
          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-10"
          >
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                aria-label={link.name}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="text-blue-400 group-hover:text-blue-300"
                >
                  {link.icon}
                </motion.div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-blue-300">
                  {link.name}
                </span>
              </a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-transparent border border-white/30 backdrop-blur-sm text-white rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
