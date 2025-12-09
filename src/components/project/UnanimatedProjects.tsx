import { ProjectType } from "@/context/ProjectData";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react"; // ← Add useState & useEffect
import Button from "../Button";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

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

const UnanimatedProjects = ({ projects, handleImage }: Props) => {
  // State to track current main image index for each project
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<string, number>>({});

  // Initialize and auto-rotate
  useEffect(() => {
    const initial: Record<string, number> = {};
    projects.forEach((project) => {
      initial[project.id] = project.default_image_index;
    });
    setCurrentImageIndices(initial);

    // Auto-rotate every 4 seconds
    const interval = setInterval(() => {
      setCurrentImageIndices((prev) => {
        const next = { ...prev };
        projects.forEach((project) => {
          const current = next[project.id] ?? project.default_image_index;
          const nextIndex = (current + 1) % project.images.length;
          next[project.id] = nextIndex;
        });
        return next;
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [projects]);

  return (
    <Fragment>
      {projects.map((project, index) => {
        const currentImgIndex = currentImageIndices[project.id] ?? project.default_image_index;
        const currentImgSrc = project.images[currentImgIndex];

        return (
          <div
            key={project.id}
            className={`group flex flex-col md:flex-row ${index % 2 === 1 && "md:flex-row-reverse"
              } gap-4 md:gap-10 my-16 md:my-20 md:items-center`}
          >
            {/* Text Part */}
            <div className={`w-full md:w-1/3 ${index % 2 === 1 ? "text-left" : "text-left md:text-right"}`}>
              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight break-all capitalize">
                {project.title}
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{project.description}</p>
              <div className={`flex mt-6 ${index % 2 === 1 ? "justify-start" : "justify-start md:justify-end"}`}>
                <Link href={project.link} target="_blank" rel="noopener">
                  <Button variant="primary" type="button">View Project</Button>
                </Link>
              </div>
            </div>
            {/* Image Part */}
            <div className="relative w-full md:w-2/3">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[220px] md:h-[340px] lg:h-[520px]">
                {/* AUTO-ROTATING MAIN IMAGE */}
                <Image
                  key={currentImgSrc} // ← Forces re-render + smooth transition
                  src={currentImgSrc}
                  alt={project.title}
                  fill
                  quality={100}
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 70vw"
                />

                {/* Desktop Hover Slider (unchanged) */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="px-6 pb-10 pt-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent md:block hidden">
                    <Swiper
                      modules={[FreeMode, Autoplay, Pagination]}
                      spaceBetween={16}
                      slidesPerView="auto"
                      freeMode={{ enabled: true, momentum: true, sticky: false }}
                      grabCursor={true}
                      loop={true}
                      speed={200}
                      autoplay={{ delay: 2500, disableOnInteraction: false }}
                      pagination={{ clickable: true, dynamicBullets: true }}
                      className="cursor-grab active:cursor-grabbing"
                    >
                      {project.images.map((img, imgIndex) => (
                        <SwiperSlide
                          key={imgIndex}
                          className="!w-44 md:!w-52 lg:!w-64 !h-20 md:!h-20 lg:!h-32 flex-shrink-0"
                        >
                          <div
                            onClick={() => {
                              handleImage({ project_id: project.id, index: imgIndex });
                              // Optional: Sync main image immediately when thumbnail clicked
                              setCurrentImageIndices(prev => ({ ...prev, [project.id]: imgIndex }));
                            }}
                            className={`relative w-full h-full rounded-2xl overflow-hidden border-4 transition-all duration-300 hover:scale-110 hover:border-cyan-400 shadow-2xl cursor-pointer
                              ${imgIndex === currentImgIndex ? "border-cyan-400 ring-4 ring-cyan-400/50" : "border-white/30"}`}
                            style={{
                              backgroundImage: `url(${img})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            {/* <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300" /> */}
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>

              {/* Mobile Thumbnail Slider */}
              <div className="md:hidden mt-8">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={12}
                  slidesPerView={4}
                  autoplay={{ delay: 3000 }}
                  pagination={{ clickable: true }}
                >
                  {project.images.map((img, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <div
                        onClick={() => {
                          handleImage({ project_id: project.id, index: imgIndex });
                          setCurrentImageIndices(prev => ({ ...prev, [project.id]: imgIndex }));
                        }}
                        className={`aspect-square rounded-3xl border-4 overflow-hidden shadow-lg transition-all
                          ${imgIndex === currentImgIndex ? "border-cyan-400 ring-4 ring-cyan-400/50" : "border-cyan-300/50"}`}
                        style={{
                          backgroundImage: `url(${img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default UnanimatedProjects;