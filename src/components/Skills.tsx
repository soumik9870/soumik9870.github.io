
import { motion } from 'framer-motion';

const skills = {
  "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  "Backend": ["Node.js", "Express", "MongoDB", "PostgreSQL", "RESTful APIs"],
  "Tools": ["Git", "GitHub", "VS Code", "Docker", "Figma", "Postman"],
  "Other": ["Agile Methodology", "Problem Solving", "Team Collaboration", "Clean Code"]
};

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
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map((skill, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
