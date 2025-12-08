import { ProjectType } from "@/context/ProjectData";
import Link from "next/link";
import { Fragment } from "react";
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
  return (
    <Fragment>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`group px-4 flex flex-col md:flex-row ${index % 2 === 1 && "md:flex-row-reverse"
            } gap-4 md:gap-10 my-16 md:my-20 md:items-center`}
        >
          {/* Text Part */}
          <div className={`w-full md:w-1/3 ${index % 2 === 1 ? "text-left" : "text-left md:text-right"}`}>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight break-all">
              {project.title}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">{project.description}</p>
            <div className={`flex mt-6 ${index % 2 === 1 ? "justify-start" : "justify-start md:justify-end"}`}>
              <Link href={project.link} target="_blank" rel="noopener">
                <Button variant="primary">
                  View Project
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Part */}
          <div className="relative w-full md:w-2/3">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[220px] md:h-[340px] lg:h-[520px]">
              {/* Main Image */}
              <Image
                src={project.images[project.default_image_index]}
                alt={project.title}
                fill
                quality={100}
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 70vw"
              />

              {/* Desktop Hover Slider – Next.js 16 এর জন্য ১০০% কাজ করে */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="px-6 pb-10 pt-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent md:block hidden">
                  <Swiper
                    modules={[FreeMode, Autoplay, Pagination]}
                    spaceBetween={16}
                    slidesPerView="auto"
                    freeMode={{
                      enabled: true,
                      momentum: true,
                      sticky: false,
                    }}
                    grabCursor={true}
                    loop={true}
                    speed={200}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    className="cursor-grab active:cursor-grabbing"
                  >
                    {project.images.map((img, imgIndex) => (
                      <SwiperSlide
                        key={imgIndex}
                        className="!w-44 md:!w-52 lg:!w-64 !h-20 md:!h-20 lg:!h-32 flex-shrink-0"
                      >
                        <div
                          onClick={() => handleImage({ project_id: project.id, index: imgIndex })}
                          className={`relative w-full h-full rounded-2xl overflow-hidden border-4 border-white/30 transition-all duration-300 hover:scale-110 hover:border-cyan-400 shadow-2xl cursor-pointer
                            ${imgIndex === project.default_image_index ? "border-cyan-400 ring-4 ring-cyan-400/50" : ""}`}
                          style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>

            {/* Mobile Slider */}
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
                      onClick={() => handleImage({ project_id: project.id, index: imgIndex })}
                      className="aspect-square rounded-3xl border-4 border-cyan-300/50 overflow-hidden shadow-lg"
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
      ))}
    </Fragment>
  );
};

export default UnanimatedProjects;