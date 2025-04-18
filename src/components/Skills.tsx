import { motion } from 'framer-motion';
import { Code, Database, Terminal, Layout, Server, Settings, Globe, Cpu, Figma, Github, Brackets, FileBadge, FileJson } from 'lucide-react';
import Education from './Education';

const skills = [
  {
    "Frontend": [
      { name: "React", icon: <Code /> },
      { name: "TypeScript", icon: <FileJson /> },
      { name: "Next.js", icon: <Globe /> },
      { name: "Tailwind CSS", icon: <Layout /> },
      { name: "HTML5", icon: <Brackets /> },
      { name: "CSS3", icon: <FileBadge /> }
    ]
  },
  {
    "Backend": [
      { name: "Node.js", icon: <Server /> },
      { name: "Express", icon: <Server /> },
      { name: "MongoDB", icon: <Database /> },
      { name: "PostgreSQL", icon: <Database /> },
      { name: "RESTful APIs", icon: <Globe /> }
    ]
  },
  {
    "Tools": [
      { name: "Git", icon: <Github /> },
      { name: "GitHub", icon: <Github /> },
      { name: "VS Code", icon: <Code /> },
      { name: "Docker", icon: <Cpu /> },
      { name: "Figma", icon: <Figma /> },
      { name: "Postman", icon: <Settings /> }
    ]
  },
  {
    "Other": [
      { name: "Agile Methodology", icon: <Settings /> },
      { name: "Problem Solving", icon: <Terminal /> },
      { name: "Team Collaboration", icon: <Settings /> },
      { name: "Clean Code", icon: <Code /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Education Section */}
        <Education />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Skills & Technologies
          </h2>
          <p className="text-gray-300 mt-4">The tools and technologies I work with</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => {
            const [category, items] = Object.entries(skillCategory)[0];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="skill-category bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 min-h-[300px]"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center text-blue-400">{category}</h3>
                <div className="grid grid-cols-3 gap-6">
                  {items.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex flex-col items-center gap-2 group"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="skill-icon text-3xl">{skill.icon}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
