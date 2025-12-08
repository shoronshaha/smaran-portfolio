"use client";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  "React 19",
  "Next.js 15/16 (App Router + Turbopack)",
  "TypeScript",
  "Redux Toolkit + RTK Query",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Shadcn/ui",
  "tailwind-merge",
  "SSR / ISR / Partial Prerendering",
  "Server Actions / Server Components",
  "Edge Runtime / Middleware",
  "Core Web Vitals / Bundle Analyzer",
  "Code Splitting / Lazy Loading",
  "WebP/AVIF / Image Optimization",
  "Cloudflare CDN / R2 / Images / Polish",
  "Cloudinary signed URLs & transformations",
  "Vercel Analytics / Speed Insights",
  "SSLCommerz / Stripe / PayPal",
  "Steadfast / Pathao / RedX courier APIs",
  "Meta CAPI / Enhanced ecommerce dataLayer",
  "Google Tag Manager (server-side)",
  "Vercel / Vite / Git/GitHub",
  "Storybook / Figma / Postman / Jira / Swagger",
  "Playwright / Vitest / ESLint / Prettier",
  "Zod / React Hook Form / i18next",
  "Redux Persist",
  "Socket.IO / REST APIs",
  "Hybrid POS + online store architecture",
  "High-traffic marketplace platforms",
  "Multi-tenant SaaS architecture",
  "Production deployment with Nginx + PM2",
];

const education = [
  {
    degree: "B.Sc in Computer Science and Engineering",
    institution: "Daffodil International University",
    year: "2017 - 2021",
    cgpa: "CGPA: 3.40/4.00",
  },
];

const certifications = [
  "MERN Stack Development – Programming Hero (2022)",
  "Redux-ToolKit Mastery – Learn with Sumit (2023)",
];

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      suppressHydrationWarning
      className={`py-16 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto rounded-2xl shadow-xl ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
    >
      {/* About Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-extrabold mb-10 text-center tracking-tight"
      >
        About Me
      </motion.h2>

      {/* Profile and Description - Responsive Flex/Grid */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-12">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <Image
            src="https://res.cloudinary.com/dck5iqtu3/image/upload/v1765177549/profile_g3cmjo.png"
            alt="Profile Picture"
            width={220}
            height={220}
            quality={100}
            className="rounded-full border-4 border-cyan-500 shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Description and Type Animation */}
        <div className="flex-grow text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-base sm:text-lg leading-relaxed mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
          >
            Results-driven Frontend Engineer with 1+ years of production experience at ExpressItBD. Delivered 8+ live projects serving thousands of active users, including multi-tenant POS systems (CalQuick & Hisabi), privacy-first server-side platform (PixlyOne), and high-traffic e-commerce platforms. Expert in React 19, Next.js 15&16, TypeScript, and performance engineering — consistently achieving Lighthouse scores and sub-sec load times using SSR/ISR, Cloudflare CDN, and modern optimization techniques. Actively transitioning into a Full-Stack & DevOps role, passionate about backend technologies (Node.js, NestJS, PostgreSQL), cloud infrastructure (AWS, Cloudflare, Vercel), containerization (Docker, Kubernetes), CI/CD pipelines, and Infrastructure-as-Code.
          </motion.p>

          {/* Type Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                "Frontend Engineer",
                2000,
                "React & Next.js Expert",
                2000,
                "Performance Optimizer",
                2000,
                "Building Scalable SaaS",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-xl sm:text-2xl font-bold text-cyan-400 block"
            />
          </motion.div>
        </div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-12"
      >
        <h3
          className={`text-3xl sm:text-4xl font-bold mb-8 text-center ${theme === "dark" ? "text-white" : "text-black"
            }`}
        >
          Technical Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: "#06b6d4" }}
              className={`p-4 rounded-xl shadow-md border-2 border-transparent text-center font-semibold transition-all duration-300 ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
                }`}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education & Certifications - Side by Side on Medium+ Screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3
            className={`text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left ${theme === "dark" ? "text-white" : "text-black"
              }`}
          >
            Education
          </h3>
          <div className="space-y-4">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 * index }}
                className={`p-6 rounded-xl shadow-lg ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
                  }`}
              >
                <h4 className="text-xl font-bold mb-1">{item.degree}</h4>
                <p className="text-lg">{item.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.year}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.cgpa}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3
            className={`text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left ${theme === "dark" ? "text-white" : "text-black"
              }`}
          >
            Certifications & Training
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 * index }}
                className={`p-4 rounded-xl shadow-lg text-center ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
                  }`}
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;