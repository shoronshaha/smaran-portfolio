import { X, Github, Linkedin, Briefcase, User as UserIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

type Props = {
  open: boolean;
  onClose: () => void;
};

const MobileNav = ({ open, onClose }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { title: "Projects", href: "/projects", icon: <Briefcase className="w-5 h-5 text-cyan-400" /> },
    { title: "About", href: "/about", icon: <UserIcon className="w-5 h-5 text-purple-400" /> },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    if (pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#contact");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
           initial={{ opacity: 0, x: "100%" }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: "100%" }}
           transition={{ type: "spring", damping: 25, stiffness: 200 }}
           className="fixed inset-0 z-[100] h-screen bg-black/95 backdrop-blur-2xl p-6 overflow-hidden flex flex-col"
        >
          {/* Mesh Background Blur */}
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between mb-16 relative z-10">
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">SMARAN</span>
            <button 
              onClick={onClose}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 relative z-10">
            {menuItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
              >
                <Link 
                  href={item.href} 
                  onClick={onClose}
                  className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-xl font-bold text-white uppercase tracking-wider">{item.title}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={handleContactClick}
                className="w-full flex items-center justify-center gap-3 h-16 bg-cyan-500 text-black font-black text-xl uppercase tracking-widest rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:bg-cyan-400 active:scale-95 transition-all"
              >
                Hire Me Now
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </div>

          {/* Footer Socials */}
          <div className="mt-auto pb-10 flex items-center justify-center gap-8 relative z-10">
              <Link href="https://github.com/shoronshaha" target="_blank" className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-colors">
                <Github className="w-6 h-6 text-white/60" />
              </Link>
              <Link href="https://linkedin.com/in/smaran-shaha/" target="_blank" className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-colors">
                <Linkedin className="w-6 h-6 text-white/60" />
              </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
