import { motion } from 'framer-motion';
import { Github, Link, Code, Database, Globe, Layout, FileJson } from 'lucide-react';

const techIcons = {
  "React": <Code className="h-5 w-5" />,
  "Node.js": <Code className="h-5 w-5" />,
  "MongoDB": <Database className="h-5 w-5" />,
  "Express": <Globe className="h-5 w-5" />,
  "TypeScript": <FileJson className="h-5 w-5" />,
  "Firebase": <Database className="h-5 w-5" />,
  "Tailwind CSS": <Layout className="h-5 w-5" />,
  "Chart.js": <Layout className="h-5 w-5" />,
  "OpenWeather API": <Globe className="h-5 w-5" />
} as const;

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React and Node.js",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "A responsive task management application with real-time updates",
    tech: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    github: "#",
    live: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A weather forecast application using modern APIs",
    tech: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-xl project-card group"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-blue-300 hover:text-blue-400 transition-colors"
                    >
                      {techIcons[tech as keyof typeof techIcons]}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <Link size={18} /> Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
