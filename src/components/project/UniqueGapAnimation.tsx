"use client";

import { motion } from "framer-motion";
import { Monitor, Code2, Hash, Braces, Binary, Terminal } from "lucide-react";

const UniqueGapAnimation = () => {
  return (
    <div className="flex items-center justify-center py-8 md:py-16">
      {/* Container - further reduced mobile size to ensure it fits 100% on small screens */}
      <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center scale-95 md:scale-100">
        
        {/* Central Monitor Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-2xl shadow-xl dark:shadow-2xl transition-all duration-500"
        >
          <Monitor className="w-12 h-12 md:w-20 md:h-20 text-gray-600 dark:text-gray-300 opacity-90" />
          <div className="absolute inset-0 bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl rounded-full -z-10" />
        </motion.div>

        {/* Orbit 1 - Outer (Code </>) */}
        <div className="absolute inset-0 border border-gray-200 dark:border-white/5 rounded-full" />
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
            <div className="p-2.5 md:p-3 rounded-xl bg-white dark:bg-black/70 border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-lg">
              <Code2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-blue-500 rounded-full blur-[2px] animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
          </div>
        </motion.div>

        {/* Orbit 2 - Middle (Braces {}) */}
        <div className="absolute inset-8 md:inset-10 border border-gray-200 dark:border-white/5 rounded-full" />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-2">
            <div className="p-2.5 md:p-3 rounded-xl bg-white dark:bg-black/70 border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-lg">
              <Braces className="w-5 h-5 md:w-6 md:h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 rounded-full blur-[2px] animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
          </div>
        </motion.div>

        {/* Orbit 3 - Inner-Outer (Hash #) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute inset-0"
        >
          <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-row items-center gap-2">
             <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-purple-500 rounded-full blur-[2px] animate-pulse shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
            <div className="p-2.5 md:p-3 rounded-xl bg-white dark:bg-black/70 border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-lg">
              <Hash className="w-5 h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </motion.div>

        {/* Orbiting Element: JSON */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 translate-x-1/2 flex flex-row items-center gap-2">
            <div className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg bg-white dark:bg-black/70 border border-gray-200 dark:border-white/10 backdrop-blur-xl font-mono text-[10px] md:text-xs text-orange-600 dark:text-orange-500 font-black tracking-tighter shadow-lg">
              JSON
            </div>
             <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-orange-500 rounded-full blur-[2px] animate-pulse shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
          </div>
        </motion.div>

        {/* Extra Glowing Dots on Orbits */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-[15%] right-8 md:right-10 w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-500/30 dark:bg-white/40 rounded-full blur-[2px]" />
          <div className="absolute bottom-[15%] left-8 md:left-10 w-1.5 md:w-2 h-1.5 md:h-2 bg-purple-500/30 dark:bg-white/20 rounded-full blur-[2px]" />
        </motion.div>

      </div>
    </div>
  );
};

export default UniqueGapAnimation;
