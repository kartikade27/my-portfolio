import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Bachelor of Computer Application",
    date: "2019 - 2022",
    institution: "Sahyog College of IT & Management",
  },
  {
    title: "Higher Secondary Certificate",
    date: "2017 - 2019",
    institution: "GSS College Majiwada",
  },
  {
    title: "Secondary School Certificate",
    date: "2015 - 2017",
    institution: "GSS School Majiwada",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-[var(--color-bg)] py-20">
      <div className="container mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] mb-16 font-heading">
          My{" "}
          <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-transparent bg-clip-text">
            Education
          </span>
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col items-center">
          
          {/* Center Line */}
          <div className="absolute w-[3px] bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] h-full left-1/2 transform -translate-x-1/2"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative w-full md:w-1/2 px-6 py-6 mb-12 ${
                index % 2 === 0
                  ? "md:self-start text-left"
                  : "md:self-end text-right"
              }`}
            >
              {/* Timeline Dot */}
              <span className="absolute top-6 left-1/2 transform -translate-x-1/2 h-6 w-6 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] border-4 border-[var(--color-bg)] shadow-lg"></span>

              {/* 🔥 Premium Card Wrapper */}
              <div className="relative group p-[1px] rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition duration-300 hover:scale-[1.02]">

                {/* Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative bg-[var(--color-card)] rounded-xl p-6 border border-[var(--color-border)] overflow-hidden"
                >
                  
                  {/* 🔥 Glow Effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-[var(--color-primary)]/20 blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-[-80px] right-[-80px] w-40 h-40 bg-[var(--color-secondary)]/20 blur-2xl animate-pulse"></div>
                  </div>

                  {/* 🔥 Glass Shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] relative z-10">
                    {edu.title}
                  </h3>

                  <p className="text-sm text-[var(--color-secondary)] mt-1 relative z-10">
                    {edu.date}
                  </p>

                  <p className="text-[var(--color-text-secondary)] mt-2 relative z-10">
                    {edu.institution}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Bottom Circle */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <span className="h-6 w-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;