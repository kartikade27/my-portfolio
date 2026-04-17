import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import { SiSpringboot, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-[var(--color-primary)]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[var(--color-secondary)]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[var(--color-accent)]" /> },
  { name: "React", icon: <FaReact className="text-[var(--color-primary)]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[var(--color-secondary)]" /> },
  { name: "Java", icon: <FaJava className="text-[var(--color-accent)]" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-[var(--color-primary)]" /> },
  { name: "Database", icon: <FaDatabase className="text-[var(--color-secondary)]" /> },
];

const Skills = () => {
  return (
    <section className="relative bg-[var(--color-bg)] py-20 overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[var(--color-primary)]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[var(--color-secondary)]/20 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[var(--color-text-primary)] mb-16">
          My{" "}
          <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-transparent bg-clip-text">
            Skills
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative bg-[var(--color-card)] backdrop-blur-md border border-[var(--color-border)] rounded-xl p-6 flex flex-col items-center justify-center shadow-lg transition duration-300"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-0 group-hover:opacity-10 blur-xl transition"></div>

              {/* Icon */}
              <div className="text-3xl mb-3 z-10">
                {skill.icon}
              </div>

              {/* Name */}
              <p className="text-[var(--color-text-primary)] font-medium z-10">
                {skill.name}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-[var(--color-border)] h-1 mt-3 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] w-[80%]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;