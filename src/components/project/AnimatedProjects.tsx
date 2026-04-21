"use client";

import gsap from "gsap";
import { Fragment, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectType } from "@/context/ProjectData";
import { useTheme } from "next-themes";
import Link from "next/link";
import Button from "../Button";
import Image from "next/image";
import { User, Lock, Maximize2 } from "lucide-react";
import { optimizeCloudinary } from "@/utils/cloudinary";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  projects: ProjectType[];
  handleImage: ({
    project_id,
    index,
  }: {
    project_id: string;
    index: number;
  }) => void;
};

const AnimatedProjects = ({ projects, handleImage }: Props) => {
  const { theme } = useTheme();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const leftXValues = [200, -180, 150];
    const rightXValues = [-200, 180, -150];
    const yValues = [-10, -10, -10];

    gsap.utils.toArray(".project-row").forEach((row, index) => {
      const cardLeft = (row as HTMLElement).querySelector(
        ".project-left"
      ) as HTMLElement;
      const cardRight = (row as HTMLElement).querySelector(
        ".project-right"
      ) as HTMLElement;

      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".project",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardLeft.style.transform = `translateX(${progress * leftXValues[index]
              }px) translateY(${progress * yValues[index]}px)`;

            cardRight.style.transform = `translateX(${progress * rightXValues[index]
              }px) translateY(${progress * yValues[index]}px)`;
          },
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Fragment>
      {projects.slice(0, 8).map((project, index) => {
        const currentImgSrc = optimizeCloudinary(project.images[project.default_image_index]);
        
        return (
          <div
            key={project.id}
            className={`project-row group px-4 md:px-0 flex flex-col md:flex-row ${index % 2 && "md:flex-row-reverse"
              } gap-4 md:gap-72 md:justify-between my-10 md:my-32 md:items-center`}
          >
            <div
              className={`hidden md:block w-full md:w-[30%] card-down project-left ${index % 2 ? "text-left" : "text-left md:text-right"
                }`}
            >
              <h2 className="text-6xl font-extrabold">{project.title}</h2>
              <p>{project.description}</p>

              {project.demo_id && (
                <div className={`mt-6 p-4 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/5'} inline-block`}>
                  <div className={`flex items-center gap-3 mb-2 text-sm ${index % 2 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                    <User className="w-4 h-4 text-cyan-400" />
                    <span className="font-semibold opacity-70 italic">ID:</span>
                    <span className="font-mono text-cyan-500">{project.demo_id}</span>
                  </div>
                  <div className={`flex items-center gap-3 text-sm ${index % 2 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                    <Lock className="w-4 h-4 text-purple-400" />
                    <span className="font-semibold opacity-70 italic">Pass:</span>
                    <span className="font-mono text-purple-500">{project.demo_pass}</span>
                  </div>
                </div>
              )}

              <div
                className={`flex items-center ${index % 2 ? "justify-start" : "justify-start md:justify-end"
                  } py-4`}
              >
                <Link href={project.link} target="_blank">
                  <Button
                    type="button"
                    variant="primary"
                    className="hover:text-black bg-black dark:hover:text-white text-white hover:bg-transparent"
                  >
                    View Project
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className={`relative project-right overflow-hidden w-full md:w-[70%] h-[200px] md:h-[250px] lg:h-[450px] rounded-3xl`}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentImgSrc}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Link 
                    href={currentImgSrc} 
                    target="_blank" 
                    className="group/zoom relative block w-full h-full overflow-hidden rounded-3xl"
                  >
                    <Image
                      src={currentImgSrc}
                      alt={project.title}
                      fill
                      quality={100}
                      unoptimized={true}
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover/zoom:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover/zoom:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                       <div className="p-5 rounded-full bg-white/10 border border-white/20 shadow-2xl transform scale-50 group-hover/zoom:scale-100 transition-transform duration-500 ease-out">
                          <Maximize2 className="w-12 h-12 text-white drop-shadow-lg" />
                       </div>
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
              
              <div className="hidden absolute bottom-0 group-hover:grid grid-cols-6 gap-4 bg-gray-700/50 p-4 w-full z-10">
                {project.images.map((img, index) => (
                  <div
                    onClick={() => handleImage({ project_id: project.id, index })}
                    key={index}
                    className="cursor-pointer bg-cover bg-center bg-no-repeat p-4 md:p-6 lg:p-10 rounded-3xl border-[#d9edf9] border hover:border-cyan-400 transition-colors"
                    style={{ backgroundImage: `url(${optimizeCloudinary(img)})` }}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};


export default AnimatedProjects;
