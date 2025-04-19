
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    position: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    duration: "2022 - Present",
    description: "Lead the development of responsive web applications using React, TypeScript, and Tailwind CSS."
  },
  {
    position: "Frontend Developer",
    company: "Digital Innovations",
    duration: "2020 - 2022",
    description: "Developed and maintained multiple client websites and collaborated with designers."
  },
  {
    position: "Web Developer Intern",
    company: "StartUp Ventures",
    duration: "2019 - 2020",
    description: "Assisted in the development of web applications with modern JavaScript frameworks."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center py-20">
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
          
          <div className="relative">
            {/* Timeline connector - visible on all screen sizes */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/30" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot - adjusted for mobile */}
                  <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 top-0">
                    <div className="p-1 bg-blue-400/20 rounded-full">
                      <Briefcase size={16} className="text-blue-400" />
                    </div>
                  </div>
                  
                  <div className={`ml-6 md:ml-0 md:grid md:grid-cols-2 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  } gap-8`}>
                    <div className={`${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                      <div className="glass p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-blue-300">{exp.position}</h3>
                        <p className="text-gray-400">{exp.company}</p>
                        <div className={`flex items-center text-sm text-gray-500 mt-2 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          <Calendar size={14} className="mr-1" />
                          {exp.duration}
                        </div>
                        <p className="text-gray-300 text-sm mt-3">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
