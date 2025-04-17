
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const skills = [
  "Software Developer",
  "TypeScript Enthusiast",
  "React Developer",
  "Frontend Engineer", 
  "UI/UX Designer"
];

const Hero = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentSkill = skills[currentSkillIndex];

    if (!isDeleting && currentText === currentSkill) {
      // Pause at the end of typing
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }
    
    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setCurrentText(prev => 
        isDeleting 
          ? prev.slice(0, -1) 
          : currentSkill.slice(0, prev.length + 1)
      );
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentSkillIndex, currentText, isDeleting]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-20 bg-gradient-to-br from-black via-blue-900 to-black">
      <div className="floating-blob blob-1"></div>
      <div className="floating-blob blob-2"></div>
      <div className="floating-blob blob-3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold text-gray-100 mb-4"
          >
            Hi, I'm <span className="text-blue-400">John Doe</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-300 mb-4 h-8"
          >
            <span className="typing-animation">{currentText}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:john@example.com"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </motion.div>
          
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-2xl max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              About Me
            </h2>
            <p className="text-gray-300">
              I'm a passionate software developer with expertise in modern web technologies.
              I specialize in front-end development with React and TypeScript, 
              constantly exploring new ways to create elegant solutions to complex problems.
              When I'm not coding, you can find me contributing to open-source or attending tech meetups.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
