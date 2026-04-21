"use client";

import {
  AudioLines,
  ListMusic,
  LucideIcon,
  Menu,
  MoonStar,
  Sun,
  ChevronRight
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import SocialToggle from "../SocialToggle";

const NAV_LINKS = [
  { title: "Projects", href: "/projects" },
  { title: "About", href: "/about" },
];

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [audioPlay, setAudioPlay] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    // Initializing with a stable, high-performance lo-fi stream
    const audioObj = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3");
    audioObj.loop = true;
    audioObj.volume = 0.4;
    setAudio(audioObj);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (audioObj) {
        audioObj.pause();
        audioObj.src = ""; // Cleanup source
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audio) {
      if (audioPlay) {
        audio.pause();
      } else {
        audio.play().catch(err => console.log("Autoplay blocked:", err));
      }
      setAudioPlay(!audioPlay);
    }
  };

  const SoundWave = () => (
    <div className="flex items-end gap-[2px] h-3 px-1">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          animate={{
            height: audioPlay ? [4, 12, 4] : 4,
          }}
          transition={{
            repeat: Infinity,
            duration: 0.5 + i * 0.1,
            ease: "easeInOut",
          }}
          className="w-[2px] bg-cyan-400 rounded-full"
        />
      ))}
    </div>
  );

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#contact");
    }
  };

  if (!mounted) return null;

  return (
    <Fragment>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed py-2 top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
          ? `py-1 backdrop-blur-xl border-b shadow-lg ${theme === 'dark' ? 'bg-black/70 border-white/10 text-white' : 'bg-white/70 border-black/5 text-black'}`
          : "py-1 shadow-none bg-transparent"
        }`}
      >
        <nav className="padding-container max-container flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
             <span className="text-2xl font-black tracking-tighter group-hover:text-cyan-400 transition-colors">
               SMARAN
             </span>
             <motion.span 
               animate={{ rotate: [0, 20, 0] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="text-xl"
             >
               ✌️
             </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 font-semibold">
            {NAV_LINKS.map((link) => (
              <li key={link.title} className="relative group">
                <Link href={link.href} className="hover:text-cyan-400 transition-colors duration-300 font-bold uppercase tracking-widest text-[13px]">
                  {link.title}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
            
            {/* Action Group */}
            <div className="flex items-center gap-4 ml-4">
              <motion.button 
                onClick={handleContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden bg-black dark:bg-white text-white dark:text-black py-2.5 px-8 rounded-full font-black uppercase text-[12px] tracking-[0.2em] shadow-2xl transition-all duration-300 hover:shadow-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
              >
                <div className="flex items-center gap-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  Connect Now
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
              </motion.button>

              <div className="flex items-center gap-2 pl-4 border-l border-gray-500/30">
                <button 
                  onClick={toggleAudio} 
                  className="p-2 rounded-full hover:bg-gray-500/10 transition-all duration-300 group flex items-center gap-1"
                >
                  <AnimatePresence mode="wait">
                    {audioPlay ? (
                      <motion.div
                        key="playing"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="flex items-center gap-1"
                      >
                        <AudioLines className="w-5 h-5 text-cyan-400" />
                        <SoundWave />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="paused"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                      >
                        <ListMusic className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
                <button 
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                  className="p-2 rounded-full hover:bg-gray-500/10 transition-colors"
                >
                  {theme === "light" ? <MoonStar className="w-5 h-5" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                </button>
              </div>
            </div>
          </ul>

          {/* Mobile Toggle Icons */}
          <div className="flex md:hidden items-center gap-4">
              <button 
                onClick={toggleAudio}
                className="flex items-center gap-1"
              >
                {audioPlay ? (
                  <>
                    <AudioLines className="w-6 h-6 text-cyan-400" />
                    <SoundWave />
                  </>
                ) : (
                  <ListMusic className="w-6 h-6" />
                )}
              </button>
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "light" ? <MoonStar className="w-6 h-6" /> : <Sun className="w-6 h-6 text-yellow-400" />}
              </button>
              <button onClick={() => setToggle(true)}>
                <Menu className="w-7 h-7" />
              </button>
          </div>
        </nav>
      </motion.header>

      <div className="h-20" /> {/* Spacer to prevent content jump */}

      <SocialToggle />
      <MobileNav open={toggle} onClose={() => setToggle(false)} />
    </Fragment>
  );
};

export default Navbar;
