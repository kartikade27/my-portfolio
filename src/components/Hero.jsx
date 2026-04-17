import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import devImage from "../assets/img/dev.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-[var(--color-bg)] min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🎮 Gaming Background Layer */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="animated-grid"></div>
        <div className="moving-glow"></div>
      </div>

      {/* 🔥 Existing Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[var(--color-primary)]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[var(--color-secondary)]/20 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 z-10">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-text-primary)] leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-transparent bg-clip-text">
              Kartik Ade
            </span>{" "}
            👋
          </h1>

          <p className="mt-4 text-[var(--color-text-secondary)] text-lg max-w-lg mx-auto lg:mx-0">
            Backend Developer specializing in{" "}
            <span className="text-[var(--color-secondary)] font-medium">
              Java, Spring Boot & Secure APIs
            </span>
            . I build scalable and production-ready systems.
          </p>

          <div className="mt-6 text-xl text-[var(--color-text-secondary)]">
            <TypeAnimation
              sequence={[
                "Full Stack Developer 🚀",
                2000,
                "Java Backend Developer ☕",
                2000,
                "Spring Boot Developer ⚡",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black font-semibold shadow-lg hover:shadow-[0_0_20px_var(--color-glow)] transition"
            >
              🚀 Hire Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-3 rounded-lg border border-[var(--color-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-primary)]/10 transition"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] blur-xl opacity-20"></div>

            <img
              src={devImage}
              alt="Developer"
              className="relative rounded-xl border border-[var(--color-border)] shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;