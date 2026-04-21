"use client";

import HeroSection from "../components/home/HeroSection";
import ProjectSection from "../components/home/ProjectSection";
import StackSection from "../components/home/StackSection";
import ContactSection from "../components/home/ContactSection";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root >
        <HeroSection />
        <StackSection/>
        <ProjectSection/>
        <ContactSection />
    </ReactLenis>
  );
}
