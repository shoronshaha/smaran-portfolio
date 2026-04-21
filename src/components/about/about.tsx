"use client";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Code2, 
  Database, 
  Cloud, 
  Layers, 
  Terminal, 
  Zap, 
  Briefcase, 
  GraduationCap, 
  Award, 
  ExternalLink,
  ChevronRight,
  Github,
  Linkedin,
  MessageCircle,
  Phone
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Core Stack",
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    skills: ["React 19", "Next.js", "TypeScript", "Redux Toolkit", "RTK Query", "Tailwind CSS", "Framer Motion", "Shadcn/ui", "GSAP", "Zod"]
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-6 h-6 text-purple-400" />,
    skills: ["Node.js", "Nest.js", "Express.js", "Microservices", "PostgreSQL", "MongoDB", "Prisma", "REST APIs", "GraphQL", "WebSockets"]
  },
  {
    title: "Cloud & Media",
    icon: <Cloud className="w-6 h-6 text-blue-400" />,
    skills: ["Cloudflare R2", "CDN & Polish", "Cloudinary", "Vercel Analytics", "Speed Insights"]
  },
  {
    title: "Integrations & Marketing",
    icon: <Layers className="w-6 h-6 text-orange-400" />,
    skills: ["SSLCommerz", "Stripe", "Courier APIs", "Server-side GTM", "GA4", "Meta CAPI", "Cookieless Tracking"]
  },
  {
    title: "Advanced & Performance",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    skills: ["SSR/ISR/PPR", "Server Actions", "Edge Runtime", "Core Web Vitals", "i18next", "Image Optimization"]
  },
  {
    title: "Tools & Workflow",
    icon: <Terminal className="w-6 h-6 text-green-400" />,
    skills: ["Git/GitHub", "Vercel", "Vite", "Postman", "Swagger", "Playwright", "Vitest", "ESLint", "Figma", "Jira"]
  }
];

const workExperience = [
  {
    company: "ExpressItBD, Dhaka",
    role: "Full Stack Developer",
    period: "January 2025 - Present",
    points: [
      "Promoted to architect and deliver end-to-end solutions for 6+ production-grade web apps (SaaS & e-commerce).",
      "Spearheaded backend development using Node.js, Nest.js, Express.js, and PostgreSQL, implementing scalable microservices and WebSockets.",
      "Architected Next.js frontend projects with SSR/ISR, drastically improving SEO and reducing TTFB.",
      "Engineered advanced marketing infrastructure by integrating Server-Side GTM (sGTM), GA4, and multi-platform Pixels."
    ]
  }
];

const projectHighlights = [
  {
    name: "CalQuick (SaaS)",
    url: "https://calquick.app",
    description: "Multi-tenant SaaS platform powering multiple live businesses with store management and e-commerce."
  },
  {
    name: "OmniChat SaaS",
    url: "https://omnichat.expressitbd.com/",
    description: "Scalable SaaS integrating Facebook, WhatsApp, TikTok, Telegram, and Instagram into a single unified inbox."
  },
  {
    name: "PixlyOne (sGTM)",
    url: "https://pixlyone.io",
    description: "Privacy-first server-side tracking platform bypassing ad-blockers and third-party cookie restrictions."
  }
];

const education = [
  {
    degree: "B.Sc in Computer Science and Engineering",
    institution: "Daffodil International University",
    year: "2017 - 2021",
    cgpa: "CGPA: 3.40 / 4.00",
  },
];

const certifications = [
  "MERN Stack Development – Programming Hero (2022)",
  "Redux-ToolKit Mastery – Learn with Sumit (2023)",
];

const About = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      suppressHydrationWarning
      className={`py-20 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto rounded-[3rem] shadow-2xl overflow-hidden transition-all duration-500 border ${
        theme === "dark" 
          ? "bg-black/60 backdrop-blur-2xl border-white/10 text-white" 
          : "bg-white/90 backdrop-blur-2xl border-black/5 text-zinc-900 shadow-xl"
      }`}
    >
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl sm:text-6xl font-black mb-4 tracking-tighter bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full" />
      </motion.div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        {/* Profile Image & Quick Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 flex flex-col items-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <Image
              src="https://res.cloudinary.com/dck5iqtu3/image/upload/v1765177549/profile_g3cmjo.png"
              alt="Profile Picture"
              width={280}
              height={280}
              quality={100}
              className="relative rounded-full border-4 border-white/20 shadow-2xl transition-all duration-500 object-cover"
            />
          </div>
          
          <div className="mt-8 text-center">
             <TypeAnimation
              sequence={[
                "Global Remote Developer",
                2000,
                "Full Stack Architect",
                2000,
                "Next.js Specialist",
                2000,
                "Backend Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl font-bold text-cyan-400"
            />
            <p className={`mt-4 text-sm font-medium uppercase tracking-widest ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
               Available for Global Remote & Relocation
            </p>

            {/* Social Links Highlight */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
               <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/smaran-shaha/"
                target="_blank"
                className={`p-3 rounded-2xl ${theme === 'dark' ? 'bg-[#0077b5]/20 border-[#0077b5]/50' : 'bg-[#0077b5]/10 border-[#0077b5]/30'} border shadow-lg shadow-[#0077b5]/20 group transition-all duration-300`}
                title="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-[#0077b5]" />
              </motion.a>

              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/shoronshaha"
                target="_blank"
                className={`p-3 rounded-2xl ${theme === 'dark' ? 'bg-white/10 border-white/30' : 'bg-black/5 border-black/20'} border shadow-lg group transition-all duration-300`}
                title="Personal GitHub"
              >
                <Github className="w-6 h-6" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Personal Git</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/shaha-expressitbd"
                target="_blank"
                className={`p-3 rounded-2xl ${theme === 'dark' ? 'bg-cyan-500/20 border-cyan-500/50' : 'bg-cyan-500/10 border-cyan-500/30'} border shadow-lg shadow-cyan-500/20 group transition-all duration-300`}
                title="Work GitHub"
              >
                <Github className="w-6 h-6 text-cyan-400" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Work Git</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/8801770889987"
                target="_blank"
                className={`p-3 rounded-2xl ${theme === 'dark' ? 'bg-[#25D366]/20 border-[#25D366]/50' : 'bg-[#25D366]/10 border-[#25D366]/30'} border shadow-lg shadow-[#25D366]/20 group transition-all duration-300`}
                title="WhatsApp Message"
              >
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Bio Description */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8"
        >
          <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter italic">Architecting Solutions for the <span className="text-cyan-500">Global Market</span></h3>
          <p className={`text-xl leading-relaxed mb-8 font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            I am a specialized <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-black underline decoration-cyan-500 decoration-4 underline-offset-4`}>Full Stack Architect</span> dedicated to engineering mission-critical, highly scalable applications for an international audience. I excel in high-trust, **remote-first environments**, delivering elite-level software that bridges the gap between complex backend architectures and seamless user experiences.
          </p>
          
          {/* Elite Backend Core Segment */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
               <span className="h-[2px] w-8 bg-cyan-500" />
               <span className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500">Backend Core Expertise</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
               {[
                 { name: "NestJS", desc: "Enterprise Scalability", color: "text-red-500", glow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]" },
                 { name: "ExpressJS", desc: "High-Performance APIs", color: "text-gray-400", glow: "hover:shadow-[0_0_15px_rgba(156,163,175,0.2)]" },
                 { name: "GraphQL", desc: "Type-Safe Data", color: "text-pink-500", glow: "hover:shadow-[0_0_15px_rgba(236,72,153,0.2)]" },
                 { name: "REST APIs", desc: "Clean & Robust", color: "text-cyan-400", glow: "hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]" },
                 { name: "PostgreSQL", desc: "Relational Prowess", color: "text-blue-400", glow: "hover:shadow-[0_0_15px_rgba(96,165,250,0.2)]" },
                 { name: "MongoDB", desc: "NoSQL Architecting", color: "text-green-500", glow: "hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]" }
               ].map((tech) => (
                 <motion.div 
                    key={tech.name}
                    whileHover={{ y: -5 }}
                    className={`p-4 rounded-2xl bg-white/5 dark:bg-black/40 border border-white/10 transition-all duration-300 ${tech.glow} group cursor-default`}
                 >
                    <p className={`text-lg font-black tracking-tight ${tech.color}`}>{tech.name}</p>
                    <p className="text-[10px] uppercase font-bold text-gray-500 group-hover:text-gray-300 transition-colors">{tech.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`flex-1 min-w-[200px] p-6 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 shadow-[0_4px_20px_rgba(6,182,212,0.1)] relative overflow-hidden group`}
            >
              <div className="relative z-10">
                <p className="text-5xl font-black text-cyan-500 tracking-tighter">1.5+</p>
                <p className="text-xs uppercase tracking-widest font-black text-gray-400 mt-1">Years Experience</p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`flex-1 min-w-[200px] p-6 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 shadow-[0_4px_20px_rgba(99,102,241,0.1)] relative overflow-hidden group`}
            >
              <div className="relative z-10">
                <p className="text-5xl font-black text-indigo-500 tracking-tighter">8+</p>
                <p className="text-xs uppercase tracking-widest font-black text-gray-400 mt-1">Live Projects</p>
              </div>
               <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors" />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`flex-1 min-w-[200px] p-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 shadow-[0_4px_20px_rgba(168,85,247,0.1)] relative overflow-hidden group`}
            >
              <div className="relative z-10">
                <p className="text-5xl font-black text-purple-500 tracking-tighter">4+</p>
                <p className="text-xs uppercase tracking-widest font-black text-gray-400 mt-1">SaaS Applications</p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Work Experience Section */}
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="w-10 h-10 text-cyan-500" />
          <h3 className="text-4xl font-extrabold tracking-tight">Work Experience</h3>
        </div>
        
        <div className="space-y-12">
          {workExperience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative pl-8 border-l-2 border-cyan-500/30 pb-4`}
            >
              <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-cyan-500 border-4 border-background shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
              <div className={`p-8 rounded-3xl ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} border border-white/10 transition-all duration-300`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold">{exp.company}</h4>
                    <p className="text-cyan-400 font-semibold">{exp.role}</p>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}>
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-4">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-3 text-sm leading-relaxed opacity-80">
                      <ChevronRight className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="mb-24">
         <div className="flex items-center gap-4 mb-12">
          <Zap className="w-10 h-10 text-yellow-500" />
          <h3 className="text-4xl font-extrabold tracking-tight">Technical Mastery</h3>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`p-6 rounded-3xl ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} border border-white/5 transition-all duration-500 group overflow-hidden relative`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-2xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
                  {cat.icon}
                </div>
                <h4 className="font-bold text-lg">{cat.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-100 text-cyan-700 border border-cyan-200'} transition-all duration-300 hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

       {/* Project Highlights Section */}
       <div className="mb-24">
        <div className="flex items-center gap-4 mb-12">
          <Code2 className="w-10 h-10 text-purple-500" />
          <h3 className="text-4xl font-extrabold tracking-tight">Project Highlights</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectHighlights.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-3xl ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} group hover:border-cyan-500/50 transition-all duration-300 flex flex-col`}
            >
              <h4 className="text-xl font-bold mb-3">{project.name}</h4>
              <p className="text-sm opacity-70 mb-6 flex-grow">{project.description}</p>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest hover:gap-3 transition-all duration-300"
              >
                Visit Project <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education & Certs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education Section */}
        <div className="space-y-8">
           <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="w-8 h-8 text-indigo-500" />
            <h3 className="text-3xl font-extrabold tracking-tight">Education</h3>
          </div>
          {education.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-3xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'} border border-white/10`}
            >
              <h4 className="text-xl font-bold mb-1">{item.degree}</h4>
              <p className="text-cyan-400 font-semibold">{item.institution}</p>
              <div className="flex items-center justify-between mt-4 text-sm opacity-60">
                <span>{item.year}</span>
                <span className="font-bold">{item.cgpa}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="space-y-8">
           <div className="flex items-center gap-4 mb-8">
            <Award className="w-8 h-8 text-orange-500" />
            <h3 className="text-3xl font-extrabold tracking-tight">Certifications</h3>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`p-4 rounded-2xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'} border border-white/10 flex items-center gap-4`}
              >
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-sm font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
