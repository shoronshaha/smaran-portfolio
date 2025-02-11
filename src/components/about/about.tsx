"use client";
import profile from "/public/profile.png";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "next-themes"; // Import for theme switching
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  "Next.JS",
  "React.JS",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Redux",
  "Redux-Toolkit",
  "MongoDB",
  "Mongoose",
  "Express",
  "GSAP",
  "HTML 5",
  "CSS 3",
  "Tailwind CSS",
  "Bootstrap",
  "Shadcn-UI",
  "Framer Motion",
  "Firebase",
  "JWT Token",
  "Socket.IO",
  "Stripe API",
  "PayPal SDK",
];

const education = [
  {
    degree: "B.Sc in Computer Science and Engineering.",
    institution: "Daffodil International University",
    year: "2017 - 2021",
  },
];

const About = () => {
  const { theme } = useTheme(); // Use theme from next-themes

  return (
    <section
      className={`py-16 px-8 max-w-4xl mx-auto text-center rounded-2xl shadow-lg ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* About Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-8"
      >
        About Me
      </motion.h2>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-6"
      >
        <Image
          src={profile} // Replace with your image path
          alt="Profile Picture"
          width={180}
          height={180}
          className="rounded-full border-4 border-gray-700 shadow-xl"
        />
      </motion.div>

      {/* Description */}
      <p
        className={`text-lg font-medium mb-6 max-w-2xl mx-auto ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
      >
        I am a Frontend Developer passionate about building intuitive, scalable,
        and high-performing web applications. With a strong foundation in UI
        development and modern frontend technologies, I focus on creating
        seamless user experiences. While my expertise lies in frontend
        development, I am eager to expand my knowledge in backend technologies
        and transition into full-stack development in the future. I am always
        excited to work on innovative projects, solve challenging problems, and
        collaborate with teams to create impactful digital solutions.
      </p>
      {/* Type Animation */}
      <TypeAnimation
        sequence={[
          "I am a Frontend Developer",
          2000,
          "Done Creative Web Development Project",
          2000,
          "Interactive Experiences see my projects",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-2xl font-bold text-blue-400"
      />

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10"
      >
        <h3
          className={`text-3xl font-bold mb-6 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Skills
        </h3>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1, borderColor: "#38bdf8" }}
              className="p-4 bg-gray-800 text-gray-300 font-semibold rounded-lg shadow-lg border-2 border-transparent transition-all duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <h3
          className={`text-3xl font-bold mb-6 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Education
        </h3>
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-4 bg-gray-800 text-gray-300 font-semibold rounded-lg shadow-lg border-2 border-transparent"
            >
              <h4 className="font-bold">{item.degree}</h4>
              <p>{item.institution}</p>
              <p className="text-sm text-gray-400">{item.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
