
import { motion } from "framer-motion";
import {
  Github,
  Link,
  Code,
  Database,
  Globe,
  Layout,
  FileJson,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { useRef } from "react";

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
    boxShadow: "0 8px 32px 0 rgba(93, 123, 250, 0.22)",
    borderColor: "#6D6DFFa0"
  }
};

const techVariants = {
  initial: { scale: 1, opacity: 0.85 },
  hover: { scale: 1.22, opacity: 1, transition: { type: "spring", stiffness: 250, damping: 10 } }
};

const Projects = () => {
  // Prevent flicker on animation in initial load.
  const firstCardRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="projects" className="relative w-full flex flex-col items-center justify-center py-20 min-h-[80vh] bg-transparent">
      <div className="w-full max-w-7xl px-2 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent tracking-tight">
            Featured Projects
          </h2>
          <div className="relative flex items-center justify-center w-full">
            {/* Conditionally show nav arrows and carousel */}
            <Carousel
              className="mx-auto w-full max-w-5xl relative"
              opts={{
                align: "start",
                loop: true
              }}
            >
              <CarouselPrevious className="left-0 md:-left-16 z-20 shadow-lg" aria-label="Previous projects" />
              <CarouselNext className="right-0 md:-right-16 z-20 shadow-lg" aria-label="Next projects" />
              <CarouselContent className="
                  flex 
                  md:grid md:grid-cols-3
                  gap-8
                  items-stretch
                  md:gap-8
                  py-8
                  ">
                {projects.map((project, i) => (
                  <CarouselItem
                    key={i}
                    className="
                      max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md
                      flex !items-stretch
                      md:w-auto
                    "
                  >
                    <motion.div
                      className="
                        w-full h-full
                        flex flex-col
                        rounded-2xl
                        glass-morphism
                        bg-gradient-to-br from-[#141826]/95 via-[#181f37]/85 to-[#080f23]/90
                        border border-white/10
                        shadow-2xl
                        hover:shadow-blue-800/20
                        transition-all duration-300
                        backdrop-blur-xl
                        group cursor-pointer
                        project-card
                        overflow-hidden
                      "
                      variants={cardVariants}
                      initial="initial"
                      whileInView="animate"
                      whileHover="hover"
                      viewport={{ once: true, amount: 0.2 }}
                      custom={i}
                      ref={i === 0 ? firstCardRef : undefined}
                    >
                      <CardHeader className="pb-0">
                        <CardTitle className="text-lg font-semibold text-blue-300 mb-2 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300/90 mb-1">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-3 flex-1">
                        <div className="flex flex-wrap gap-2 mb-2 mt-2">
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
                              title={tech}
                            >
                              {techIcons[tech as keyof typeof techIcons]}
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
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </motion.div>
      </div>
      <style>{`
        .glass-morphism {
          background: linear-gradient(120deg, #191e2c 80%, #212b4a44 100%);
          border: 1.5px solid rgba(255,255,255,0.08);
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.13);
          backdrop-filter: blur(10px);
        }
        @media (max-width: 767px) {
          .md\\:grid {
            display: flex !important;
          }
          .CarouselItem {
            min-width: 80vw;
            max-width: 90vw;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

