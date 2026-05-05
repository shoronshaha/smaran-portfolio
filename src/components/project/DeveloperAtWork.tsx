"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Cpu, Loader2 } from "lucide-react";

const DeveloperAtWork = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl mb-24 overflow-hidden relative group">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 group-hover:bg-cyan-500/20 transition-colors duration-700" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 group-hover:bg-purple-500/20 transition-colors duration-700" />

      <div className="relative flex flex-col items-center gap-8">
        {/* Animated Icons Container */}
        <div className="flex items-center gap-4 md:gap-8">
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 shadow-lg"
          >
            <Code className="w-8 h-8 md:w-12 md:h-12 text-cyan-400" />
          </motion.div>

          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-6 rounded-full bg-white/5 border border-white/10 shadow-inner"
          >
            <Terminal className="w-10 h-10 md:w-16 md:h-16 text-white" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 shadow-lg"
          >
            <Cpu className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />
          </motion.div>
        </div>

        {/* Text and Loading Indicator */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
            <h3 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent tracking-tight">
              Readying More Projects...
            </h3>
          </div>
          <p className="text-gray-400 text-sm md:text-lg font-light max-w-md mx-auto leading-relaxed">
            I'm currently polishing some amazing new works to share with the world. Stay tuned for high-performance experiences and sleek designs.
          </p>
        </div>

        {/* Code Snippet Animation */}
        <div className="mt-4 px-4 py-2 rounded-lg bg-black/40 border border-white/5 font-mono text-xs md:text-sm text-cyan-500/70">
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            &gt; git commit -m "feature: add premium dashboard"
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default DeveloperAtWork;
