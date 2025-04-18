
import { motion } from 'framer-motion';
import { Code, Database, Terminal, Layout, Server, Settings, Globe, Cpu, Figma, Github, Brackets, FileBadge, FileJson } from 'lucide-react';
import Education from './Education';

const skills = [
  {
    "Frontend": [
      { name: "React", icon: <Code />, description: "Component-based UI" },
      { name: "TypeScript", icon: <FileJson />, description: "Type-safe JavaScript" },
      { name: "Next.js", icon: <Globe />, description: "React Framework" },
      { name: "Tailwind CSS", icon: <Layout />, description: "Utility-first CSS" },
      { name: "HTML5", icon: <Brackets />, description: "Semantic Markup" },
      { name: "CSS3", icon: <FileBadge />, description: "Styling" }
    ]
  },
  {
    "Backend": [
      { name: "Node.js", icon: <Server />, description: "Runtime Environment" },
      { name: "Express", icon: <Server />, description: "Web Framework" },
      { name: "MongoDB", icon: <Database />, description: "NoSQL Database" },
      { name: "PostgreSQL", icon: <Database />, description: "SQL Database" },
      { name: "RESTful APIs", icon: <Globe />, description: "API Design" }
    ]
  },
  {
    "Tools": [
      { name: "Git", icon: <Github />, description: "Version Control" },
      { name: "GitHub", icon: <Github />, description: "Code Hosting" },
      { name: "VS Code", icon: <Code />, description: "IDE" },
      { name: "Docker", icon: <Cpu />, description: "Containerization" },
      { name: "Figma", icon: <Figma />, description: "Design Tool" },
      { name: "Postman", icon: <Settings />, description: "API Testing" }
    ]
  },
  {
    "Other": [
      { name: "Agile", icon: <Settings />, description: "Development Method" },
      { name: "Problem Solving", icon: <Terminal />, description: "Analytical Skills" },
      { name: "Collaboration", icon: <Settings />, description: "Team Work" },
      { name: "Clean Code", icon: <Code />, description: "Best Practices" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                className="skill-category glass p-8 rounded-xl shadow-lg min-h-[400px]"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
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
                      <span className="skill-icon text-3xl p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {skill.description}
                      </span>
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
