
import { motion } from "framer-motion";
import {
  Github,
  Link,
  Code,
  Database,
  Globe,
  Layout,
  FileJson,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { useRef, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  initial: { opacity: 0, y: 40, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 38px 0 rgba(93,123,250,0.30)",
    borderColor: "#6D6DFFAA"
  }
};

const techVariants = {
  initial: { scale: 1, opacity: 0.85 },
  hover: { scale: 1.17, opacity: 1, transition: { type: "spring", stiffness: 240, damping: 12 } }
};

const Projects = () => {
  const isMobile = useIsMobile();
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const [carouselApi, setCarouselApi] = useState<any>(null);

  useEffect(() => {
    if (carouselApi) {
      const onSelect = () => {
        // Add custom animations for slide change
        document.querySelectorAll('.project-card').forEach((card) => {
          card.classList.add('transition-transform');
        });
      };

      carouselApi.on('select', onSelect);
      
      return () => {
        carouselApi.off('select', onSelect);
      };
    }
  }, [carouselApi]);

  return (
    <section id="projects" className="relative w-full flex flex-col items-center justify-center py-20 min-h-[80vh] bg-transparent">
      <div className="w-full max-w-7xl px-2 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent tracking-tight drop-shadow-lg">
            Featured Projects
          </h2>
          <div className="relative flex items-center justify-center w-full">
            <Carousel
              className="mx-auto w-full max-w-5xl relative"
              opts={{
                align: "center",
                loop: false, // Disable loop to stop at the end of projects
                dragFree: false, // More controlled dragging
                containScroll: "trimSnaps", // Better containment for mobile
                duration: 250, // Faster animation for smoother feel
              }}
              setApi={setCarouselApi}
            >
              {/* Custom Nav arrows - only show on desktop */}
              {!isMobile && (
                <>
                  <CarouselPrevious className="
                    absolute left-0 z-30
                    -translate-y-1/2 top-1/2
                    bg-gradient-to-r from-[#141826]/80 via-[#232a43]/70 to-transparent
                    backdrop-blur-lg border border-white/20
                    shadow-md hover:shadow-blue-400/40
                    text-blue-300/80 hover:text-purple-400
                    hover:scale-105 transition-all duration-200
                    ring-0 focus:outline-none focus:ring-2 focus:ring-blue-500/40
                  " aria-label="Previous projects"
                  />
                  <CarouselNext className="
                    absolute right-0 z-30
                    -translate-y-1/2 top-1/2
                    bg-gradient-to-l from-[#141826]/80 via-[#232a43]/70 to-transparent
                    backdrop-blur-lg border border-white/20
                    shadow-md hover:shadow-blue-400/40
                    text-blue-300/80 hover:text-purple-400
                    hover:scale-105 transition-all duration-200
                    ring-0 focus:outline-none focus:ring-2 focus:ring-blue-500/40
                  " aria-label="Next projects"
                  />
                </>
              )}
              
              <CarouselContent
                className={`
                  flex justify-center items-center
                  gap-8 py-10
                  transition-all duration-300
                `}
              >
                {projects.map((project, i) => (
                  <CarouselItem
                    key={i}
                    className={`
                      flex items-center justify-center
                      ${isMobile ? "basis-full min-w-full pl-0" : "basis-1/3"}
                      transition-all duration-300 ease-in-out
                    `}
                  >
                    <motion.div
                      className={`
                        w-full ${isMobile ? "max-w-[85%] mx-auto" : ""}
                        group cursor-pointer
                        flex flex-col
                        rounded-3xl glass-morphism border-2 border-white/10
                        shadow-2xl hover:shadow-blue-700/20
                        bg-gradient-to-br from-[#191e2c]/95 via-[#232d62]/85 to-[#0e1121]/90
                        transition-all duration-300
                        relative
                        project-card
                        overflow-hidden
                        animate-card-appear
                      `}
                      variants={cardVariants}
                      initial="initial"
                      whileInView="animate"
                      whileHover="hover"
                      viewport={{ once: true, amount: 0.2 }}
                      ref={i === 0 ? firstCardRef : undefined}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-semibold text-blue-300 group-hover:text-blue-400 transition-colors drop-shadow">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300/90 mt-1">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-3 flex-1">
                        {/* Tech icons row */}
                        <div className="flex flex-wrap gap-3 mb-3 mt-4">
                          {project.tech.map((tech, ti) => (
                            <motion.div
                              key={ti}
                              className={`
                                p-2 rounded-full bg-gradient-to-br from-blue-700/15 to-purple-800/5
                                border border-white/10
                                shadow hover:shadow-blue-700/10
                                cursor-pointer
                                transition-all
                                flex items-center
                                tech-icon group-hover:bg-blue-800/10
                              `}
                              variants={techVariants}
                              whileHover="hover"
                              initial="initial"
                              transition={{ type: "spring", stiffness: 240, damping: 14 }}
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
                              text-blue-400 hover:text-purple-300
                              bg-white/10 hover:bg-purple-800/20
                              transition-colors duration-200
                              font-semibold shadow
                              ring-1 ring-white/10 hover:ring-purple-400/30
                            "
                          >
                            <Github size={18} /> Code
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                              flex items-center gap-2 px-3 py-2 rounded-lg
                              text-blue-400 hover:text-blue-300
                              bg-white/10 hover:bg-blue-800/20
                              transition-colors duration-200
                              font-semibold shadow
                              ring-1 ring-white/10 hover:ring-blue-300/30
                            `}
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
          background: linear-gradient(130deg, #181d2a 77%, #22284544 100%);
          border: 2px solid rgba(255,255,255,0.07);
          box-shadow: 0 10px 38px 0 rgba(31,38,135,0.15);
          backdrop-filter: blur(18px);
        }
        .project-card {
          transition: box-shadow 0.3s, transform 0.30s;
        }
        .project-card:hover {
          z-index: 1;
        }
        .tech-icon {
          transition: transform 0.20s, background 0.2s, box-shadow 0.15s;
        }
        @keyframes cardAppear {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-card-appear {
          animation: cardAppear 0.5s ease-out forwards;
        }
        @media (max-width: 767px) {
          .project-card {
            width: 100%;
            max-width: 85%;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
