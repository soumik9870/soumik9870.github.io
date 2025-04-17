
import { motion } from 'framer-motion';
import { Code, Database, Terminal, Layout, Server, Settings, Globe, Cpu, Figma, Git } from 'lucide-react';

const skills = [
  {
    "Frontend": [
      { name: "React", icon: <Code /> },
      { name: "TypeScript", icon: <Code /> },
      { name: "Next.js", icon: <Globe /> },
      { name: "Tailwind CSS", icon: <Layout /> },
      { name: "HTML5", icon: <Layout /> },
      { name: "CSS3", icon: <Layout /> }
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
      { name: "Git", icon: <Git /> },
      { name: "GitHub", icon: <Git /> },
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
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="glass p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillCategory, index) => {
              const [category, items] = Object.entries(skillCategory)[0];
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">{category}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {items.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-center gap-2 group"
                      >
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="text-gray-300 group-hover:text-gray-100 transition-colors">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
