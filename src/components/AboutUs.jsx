import React from "react";
import { motion } from "framer-motion";
import man from "../assets/img/man.jpg";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative bg-[var(--color-bg)] py-20 overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[var(--color-primary)]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[var(--color-secondary)]/20 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] blur-xl opacity-20 rounded-xl"></div>

            <img
              src={man}
              alt="Kartik"
              className="relative rounded-xl border border-[var(--color-border)] shadow-2xl max-w-sm"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] mb-6 font-heading">
            About{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-transparent bg-clip-text">
              Me
            </span>
          </h2>

          {/* Content */}
          <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
            I'm a passionate{" "}
            <span className="text-[var(--color-secondary)] font-medium">
              Java Backend Developer
            </span>{" "}
            with strong expertise in building secure and scalable applications
            using Spring Boot and modern backend technologies.
          </p>


          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-[var(--color-card)] p-4 rounded-lg border border-[var(--color-border)]">
              <h4 className="text-[var(--color-secondary)] font-semibold">Experience</h4>
              <p className="text-[var(--color-text-secondary)] text-sm">Fresher</p>
            </div>

            <div className="bg-[var(--color-card)] p-4 rounded-lg border border-[var(--color-border)]">
              <h4 className="text-[var(--color-secondary)] font-semibold">Specialization</h4>
              <p className="text-[var(--color-text-secondary)] text-sm">Backend Development</p>
            </div>

            <div className="bg-[var(--color-card)] p-4 rounded-lg border border-[var(--color-border)]">
              <h4 className="text-[var(--color-secondary)] font-semibold">Tech Stack</h4>
              <p className="text-[var(--color-text-secondary)] text-sm">Java, Spring Boot</p>
            </div>

            <div className="bg-[var(--color-card)] p-4 rounded-lg border border-[var(--color-border)]">
              <h4 className="text-[var(--color-secondary)] font-semibold">Goal</h4>
              <p className="text-[var(--color-text-secondary)] text-sm">Software Engineer</p>
            </div>
          </div>

          {/* CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black font-semibold shadow-lg hover:shadow-[0_0_20px_var(--color-glow)] transition"
          >
            Let's Connect 🚀
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;