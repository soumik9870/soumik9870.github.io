
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    position: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    duration: "2022 - Present",
    description: "Lead the development of responsive web applications using React, TypeScript, and Tailwind CSS. Implemented state management solutions and optimized application performance."
  },
  {
    position: "Frontend Developer",
    company: "Digital Innovations",
    duration: "2020 - 2022",
    description: "Developed and maintained multiple client websites. Collaborated with designers to implement UI/UX improvements and ensure cross-browser compatibility."
  },
  {
    position: "Web Developer Intern",
    company: "StartUp Ventures",
    duration: "2019 - 2020",
    description: "Assisted in the development of web applications. Gained hands-on experience with modern JavaScript frameworks and version control systems."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-black via-blue-900 to-black">
      <div className="floating-blob blob-1"></div>
      <div className="floating-blob blob-2"></div>
      <div className="floating-blob blob-3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="glass p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
            Work Experience
          </h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-4"
              >
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold text-blue-300">{exp.position}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                  <p className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar size={14} className="mr-1" />
                    {exp.duration}
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-start">
                    <Briefcase className="mr-2 flex-shrink-0 mt-1 text-blue-400" size={18} />
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
