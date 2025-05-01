
import { motion } from "framer-motion";
import {
  Github,
  Link,
  Code,
  Database,
  Globe,
  Layout,
  FileJson,
  ChevronLeft,
  ChevronRight
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

const slideHintVariants = {
  initial: { opacity: 0.5 },
  animate: { 
    opacity: [0.5, 0.8, 0.5], 
    transition: { 
      repeat: Infinity, 
      duration: 1.5,
      ease: "easeInOut" 
    }
  }
};

const Projects = () => {
  const isMobile = useIsMobile();
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [slideHintVisible, setSlideHintVisible] = useState(true);

  useEffect(() => {
    if (carouselApi) {
      const onSelect = () => {
        // Add custom animations for slide change
        document.querySelectorAll('.project-card').forEach((card) => {
          card.classList.add('transition-transform');
        });
        
        // Hide slide hint after first interaction
        setSlideHintVisible(false);
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
                containScroll: "trimSnaps",
                dragFree: true, // Allows free-form dragging for smoother feel
                duration: 25, // Set to 25ms for fast, smooth transitions
              }}
              setApi={setCarouselApi}
            >              
              <CarouselContent
                className={`
                  flex justify-center items-center
                  gap-4 py-10
                  transition-all duration-300
                `}
              >
                {projects.map((project, i) => (
                  <CarouselItem
                    key={i}
                    className={`
                      flex items-center justify-center
                      ${isMobile ? "basis-[85%] mx-auto" : "basis-1/3"}
                      transition-all duration-300 ease-in-out
                      carousel-item
                    `}
                  >
                    <motion.div
                      className={`
                        w-full mx-auto
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
              
              {/* Slide hint indicators */}
              {slideHintVisible && (
                <>
                  <motion.div 
                    className="absolute left-2 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center"
                    variants={slideHintVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <ChevronLeft className="w-8 h-8 text-blue-400/70" />
                  </motion.div>
                  <motion.div 
                    className="absolute right-2 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center"
                    variants={slideHintVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <ChevronRight className="w-8 h-8 text-blue-400/70" />
                  </motion.div>
                </>
              )}
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
        
        /* Mobile optimization */
        @media (max-width: 767px) {
          .carousel-item {
            margin: 0 auto !important;
            width: 85% !important;
          }
        }
        
        /* Embla carousel custom styles */
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 auto;
          min-width: 0;
        }
      `}</style>
    </section>
  );
};

export default Projects;
