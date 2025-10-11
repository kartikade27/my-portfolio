// src/components/SkillsSection.jsx
import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaJava, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={28} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={28} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={28} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={28} className="text-sky-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} className="text-teal-400" /> },
  { name: "Java", icon: <FaJava size={28} className="text-red-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot size={28} className="text-green-600" /> },
  { name: "Database", icon: <FaDatabase size={28} className="text-indigo-500" /> },
];

const Skills = () => {
  return (
    <section className="bg-[#0A0F2C]  text-white py-16 font-body">
      <div className="container mx-auto px-4 text-center">
         <h2 className="text-4xl font-logo font-extrabold text-white mb-12">
          My
          <span className="bg-gradient-to-r ml-2 from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Skills
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-[#0A0F2C]  rounded-2xl border border-indigo-500/50 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-3">{skill.icon}</div>
              <p className="text-white font-body font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
