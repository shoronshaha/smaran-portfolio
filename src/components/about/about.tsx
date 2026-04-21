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
    name: "Omnichannel Customer Engagement",
    url: "#",
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
      className={`py-20 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto rounded-3xl shadow-2xl overflow-hidden transition-colors duration-500 ${
        theme === "dark" 
          ? "bg-black/40 backdrop-blur-md border border-white/10 text-white" 
          : "bg-white/80 backdrop-blur-md border border-black/5 text-black"
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
                "Full Stack Developer",
                2000,
                "Next.js Architect",
                2000,
                "Backend Specialist",
                2000,
                "Performance Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl font-bold text-cyan-400"
            />
            <p className={`mt-4 text-sm font-medium uppercase tracking-widest ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
               Dhaka, Bangladesh
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
          <h3 className="text-3xl font-bold mb-6">Results-driven Full Stack Developer</h3>
          <p className={`text-lg leading-relaxed mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            I am a specialized developer with production-level expertise in architecting scalable applications within modern JavaScript/TypeScript ecosystems. With over a year of experience at <span className="text-cyan-400 font-bold">ExpressItBD</span>, I have successfully delivered high-impact platforms including multi-tenant SaaS architectures, complex e-commerce systems, and advanced data-tracking infrastructures.
          </p>
          <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            My approach focuses on achieving sub-second load times and integrating robust analytics for data-driven growth. I specialize in <span className="font-semibold underline decoration-cyan-500/50">Next.js (App Router)</span>, <span className="font-semibold underline decoration-purple-500/50">Node.js/NestJS</span>, and <span className="font-semibold underline decoration-orange-500/50">Cloud Native architectures</span>.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
            <div className={`p-4 rounded-2xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'} border border-white/10`}>
              <p className="text-3xl font-black text-cyan-400">1.5+</p>
              <p className="text-xs uppercase tracking-tighter opacity-60 font-bold">Years Experience</p>
            </div>
            <div className={`p-4 rounded-2xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'} border border-white/10`}>
              <p className="text-3xl font-black text-indigo-400">8+</p>
              <p className="text-xs uppercase tracking-tighter opacity-60 font-bold">Live Projects</p>
            </div>
            <div className={`p-4 rounded-2xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'} border border-white/10`}>
              <p className="text-3xl font-black text-purple-400">4+</p>
              <p className="text-xs uppercase tracking-tighter opacity-60 font-bold">SaaS Applications</p>
            </div>
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
              className={`p-6 rounded-3xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'} border border-white/10 group hover:border-cyan-500/50 transition-all duration-300 flex flex-col`}
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
