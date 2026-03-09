import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaJava, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={28} className="text-[#F97316]" /> },
  { name: "CSS", icon: <FaCss3Alt size={28} className="text-[#3B82F6]" /> },
  { name: "JavaScript", icon: <FaJs size={28} className="text-[#FACC15]" /> },
  { name: "React", icon: <FaReact size={28} className="text-[#0EA5E9]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} className="text-[#14B8A6]" /> },
  { name: "Java", icon: <FaJava size={28} className="text-[#EF4444]" /> },
  { name: "Spring Boot", icon: <SiSpringboot size={28} className="text-[#22C55E]" /> },
  { name: "Database", icon: <FaDatabase size={28} className="text-[#6366F1]" /> },
];

const Skills = () => {
  return (
    <section className="bg-[#0B1120] text-white py-16 font-body">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-logo font-extrabold mb-12">
          My
          <span className="bg-gradient-to-r ml-2 from-[#14B8A6] to-[#38BDF8] text-transparent bg-clip-text">
            Skills
          </span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-[#111827] rounded-2xl 
                border   border-[#14B8A6]/30 hover:border-gradient-to-r hover:from-[#14B8A6] hover:to-[#38BDF8] 
                transition-all duration-300 transform hover:scale-105 cursor-pointer "
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
