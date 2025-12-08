"use client";

import Button from "@/components/Button";
import StrokeBackground from "@/components/StrokeBackground";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Grip } from "lucide-react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const STACK_INFO = [
  "I love programming,",
  "I love solving complex problems",
  "and I'm in love with music",
];

const StackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop (>= 768px)
      mm.add("(min-width: 768px)", () => {
        const leftX = [-800, -900, -400];
        const rightX = [800, 900, 400];
        const rotL = [-30, -20, -35];
        const rotR = [30, 20, 35];
        const yVals = [100, -150, -400];

        gsap.utils.toArray<HTMLElement>(".row").forEach((row, i) => {
          const left = row.querySelector<HTMLElement>(".card-left")!;
          const right = row.querySelector<HTMLElement>(".card-right")!;

          gsap.to(left, {
            x: leftX[i],
            y: yVals[i],
            rotation: rotL[i],
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "+=150%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          gsap.to(right, {
            x: rightX[i],
            y: yVals[i],
            rotation: rotR[i],
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "+=150%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        });
      });

      // Mobile (< 768px)
      mm.add("(max-width: 767px)", () => {
        const leftX = [-180, -220, -140];
        const rightX = [180, 220, 140];
        const rotL = [-15, -12, -18];
        const rotR = [15, 12, 18];
        const yVals = [60, -90, -160];

        gsap.utils.toArray<HTMLElement>(".row").forEach((row, i) => {
          const left = row.querySelector<HTMLElement>(".card-left")!;
          const right = row.querySelector<HTMLElement>(".card-right")!;

          gsap.to(left, {
            x: leftX[i],
            y: yVals[i],
            rotation: rotL[i],
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 30%",
              end: "+=120%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          gsap.to(right, {
            x: rightX[i],
            y: yVals[i],
            rotation: rotR[i],
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 30%",
              end: "+=120%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        });
      });

      // Text reveal (same for all screens)
      gsap.fromTo(
        ".stack-info p",
        { y: 60 },
        {
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Button appear
      gsap.fromTo(
        ".main button",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert(); // সবকিছু ক্লিন করে দেয় (ScrollTrigger সহ)
    };
  }, []);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div
          className="row relative flex justify-center gap-4 md:gap-8 w-full my-4 md:my-8"
          key={i}
        >
          {/* Left Card */}
          <div className="card-left relative rounded-3xl overflow-hidden w-[50%] md:w-[30%] h-[180px] md:h-[360px] shadow-2xl">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(/images/stack/stack-${2 * i - 1}.jpg)`,
              }}
            />
          </div>

          {/* Right Card */}
          <div className="card-right relative rounded-3xl overflow-hidden w-[50%] md:w-[30%] h-[180px] md:h-[360px] shadow-2xl">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(/images/stack/stack-${2 * i}.jpg)`,
              }}
            />
          </div>
        </div>
      );
    }
    return rows;
  };

  return (
    <section
      ref={sectionRef}
      className="main relative max-container py-12 md:py-24 overflow-hidden"
    >
      <StrokeBackground />

      <h2 className="relative z-10 text-center text-4xl md:text-7xl font-bold leading-tight px-4">
        Languages,{" "}
        <span className="bg-gradient-to-tr dark:from-purple-300 dark:via-gray-400 dark:to-indigo-300 from-purple-300 via-green-300 to-indigo-300 bg-clip-text text-transparent">
          Frameworks <br /> & other
        </span>{" "}
        Tools
      </h2>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center space-y-3 md:space-y-5 px-6">
          {STACK_INFO.map((text, i) => (
            <div
              key={i}
              className="stack-info overflow-hidden"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            >
              <p className="text-lg md:text-2xl lg:text-3xl font-medium  text-black dark:text-white ">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 pointer-events-auto">
          <Button type="button" variant="primary" >
            <Grip className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Cards Rows */}
      {generateRows()}
    </section>
  );
};

export default StackSection;