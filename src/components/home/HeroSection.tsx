"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="padding-container max-container flex flex-col md:flex-row gap-4 items-center py-8 md:pt-20">
      <div className="md:w-1/2 flex md:block flex-col items-center md:items-start justify-center text-center md:text-left">
        <div className="flex items-end justify-end">
          <Image
            src="/hand.png"
            alt="Dev"
            width={60}
            className="hover:scale-125 dark:border-gray-900 border-gray-200 border p-2 rounded-full hover:-rotate-12 transition-all duration-500"
            height={60}
            quality={100}
          />
        </div>
        <h4 className="text-2xl  md:text-3xl lg:text-4xl xl:text-5xl dark:text-white text-black font-pacifico">
          An incredible
        </h4>
        <h1 className="ext-2xl  md:text-3xl lg:text-4xl xl:text-5xl bg-clip-text text-transparent bg-gradient-to-r dark:from-orange-300 dark:via-purple-200 dark:to-blue-400 from-orange-900 via-purple-900 to-blue-900 font-semibold animate-gradient">
          Full Stack Software Developer.
        </h1>
        <div className="min-h-20 py-2">
          <TypeAnimation
            sequence={[
              "Hi 👋, my name is Smaran Shaha and I am a Full Stack Software Developer, passionate about solving complex problems and building innovative products that benefit humanity.",
              1000,
            ]}
            wrapper="p"
            speed={80}
            style={{ display: "inline-block" }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          />
        </div>
        <div className="flex gap-10">
          <Link
            href="https://drive.google.com/file/d/1buHPylZwN1l_eJ3YNfVrsT4ODm-Q-zY2/view?usp=sharing"
            target="_blank"
          >
            <Button
              type="button"
              variant="gradient"
              className="my-4 hover:animate-pulse hover:scale-105 transition-all duration-500 text-sm md:text-lg"
            >
              Get My CV
            </Button>

          </Link>
          <Link
            href="https://drive.google.com/file/d/1dxk2_D3inyL6fkZBFVvmkRGEp_rG-D4A/view?usp=sharing"
            target="_blank"
          >
            <Button
              type="button"
              variant="gradient"
              className="my-4 hover:animate-pulse hover:scale-105 transition-all duration-500 text-sm md:text-lg"
            >
              Get My Resume
            </Button>
          </Link>
        </div>

      </div>

      <div className="w-full md:w-1/2 bg-contain bg-no-repeat bg-center aspect-video bg-banner transition-all duration-500" />
    </div>
  );
};

export default HeroSection;
