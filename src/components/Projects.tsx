
import { motion } from "framer-motion";
import {
  Github,
  Link,
  Code,
  Database,
  Globe,
  Layout,
  FileJson
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

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

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.96 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.13,
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  }),
  hover: {
    scale: 1.04,
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.17)",
    borderColor: "#6D6DFFa0"
  }
};

const techVariants = {
  initial: { scale: 1, opacity: 0.75 },
  hover: { scale: 1.12, opacity: 1, transition: { type: "spring", stiffness: 250, damping: 10 } }
};

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div
            className="
              flex
              gap-8
              overflow-x-auto
              scrollbar-none
              md:grid md:grid-cols-3 md:gap-8 md:overflow-x-visible
            "
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="
                  flex-shrink-0 w-full max-w-[90vw] 
                  md:max-w-none md:w-auto
                "
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <Card
                  className="
                    h-full
                    flex flex-col
                    glass
                    bg-gradient-to-br from-[#191e2c]/90 via-[#212b4a]/80 to-[#080f23]/90
                    border border-white/10
                    shadow-xl
                    hover:shadow-blue-800/20
                    transition-all duration-300
                    backdrop-blur-xl
                    group
                  "
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-blue-300 mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 mb-1">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tech.map((tech, ti) => (
                        <motion.div
                          key={ti}
                          className="
                            p-2 rounded-full bg-white/5 border border-white/10
                            backdrop-blur-sm text-blue-300 hover:text-blue-400
                            cursor-pointer transition-all hover:scale-110
                            flex items-center
                          "
                          variants={techVariants}
                          whileHover="hover"
                          initial="initial"
                          transition={{ type: "spring", stiffness: 260, damping: 15 }}
                        >
                          {techIcons[tech as keyof typeof techIcons]}
                          <span className="ml-1 text-xs font-semibold">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center gap-2 px-3 py-2 rounded-lg
                          text-blue-400 hover:text-purple-400
                          bg-white/5 hover:bg-purple-600/10
                          transition-colors duration-200
                          font-semibold
                        "
                      >
                        <Github size={18} /> Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center gap-2 px-3 py-2 rounded-lg
                          text-blue-400 hover:text-blue-500
                          bg-white/5 hover:bg-blue-600/10
                          transition-colors duration-200
                          font-semibold
                        "
                      >
                        <Link size={18} /> Live Demo
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

