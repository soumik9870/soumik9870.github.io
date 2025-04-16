
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                I'm a passionate entry-level software developer with a strong foundation in modern web technologies. 
                My journey in software development started with a curiosity about how things work on the web, 
                and it has evolved into a dedicated pursuit of creating elegant solutions to complex problems.
              </p>
              <p className="text-lg">
                I specialize in front-end development with React and TypeScript, and I'm constantly learning 
                new technologies to expand my skill set. When I'm not coding, you can find me contributing 
                to open-source projects or attending tech meetups.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="space-y-2">
                <p>🎓 B.S. in Computer Science</p>
                <p>📚 Full Stack Web Development Bootcamp</p>
                <p>🏆 Various Online Certifications</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
