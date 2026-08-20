import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaGithub,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiSpringsecurity,
} from "react-icons/si";

/* =========================================================
   SKILL ICON
========================================================= */

const SkillIcon = ({ icon, name, className }) => {
  return (
    <div className={`absolute z-30 ${className}`}>
      <div className="group relative">

        {/* =========================
            CIRCULAR ICON
        ========================== */}

        <motion.div
          whileHover={{
            scale: 1.15,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="
            w-14
            h-14
            sm:w-16
            sm:h-16
            rounded-full
            flex
            items-center
            justify-center
            bg-[#0D111A]
            border
            border-white/[0.10]
            text-blue-400
            text-2xl
            sm:text-3xl
            shadow-[0_8px_25px_rgba(0,0,0,0.25)]
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:border-blue-400/40
            group-hover:bg-[#111722]
            group-hover:text-blue-300
            group-hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]
          "
        >
          {icon}
        </motion.div>

        {/* =========================
            SKILL TOOLTIP
        ========================== */}

        <span
          className="
            absolute
            top-full
            left-1/2
            -translate-x-1/2
            mt-2
            whitespace-nowrap
            px-2
            py-1
            rounded-md
            bg-[#111722]
            border
            border-white/[0.08]
            text-xs
            sm:text-sm
            font-medium
            text-slate-300
            opacity-0
            translate-y-1
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-200
            pointer-events-none
            shadow-lg
            z-50
          "
        >
          {name}
        </span>
      </div>
    </div>
  );
};

/* =========================================================
   HERO
========================================================= */

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[var(--color-bg)]
      "
    >

      {/* =====================================================
          SUBTLE BACKGROUND GLOW
          Grid Removed
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="moving-glow" />
      </div>

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          absolute
          top-[-100px]
          left-[-100px]
          w-[300px]
          h-[300px]
          rounded-full
          bg-blue-500/[0.06]
          blur-[120px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-100px]
          right-[-100px]
          w-[300px]
          h-[300px]
          rounded-full
          bg-violet-500/[0.05]
          blur-[120px]
          pointer-events-none
        "
      />

      {/* =====================================================
          CENTERED HERO CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-10
          xl:px-12
          flex
          flex-col-reverse
          lg:flex-row
          items-center
          justify-center
          gap-12
          lg:gap-16
        "
      >

        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            w-full
            lg:w-1/2
            flex
            flex-col
            items-center
            lg:items-start
            text-center
            lg:text-left
          "
        >

          {/* Small Label */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-full
              border
              border-blue-400/15
              bg-blue-500/[0.04]
              text-[11px]
              uppercase
              tracking-[0.16em]
              font-medium
              text-blue-300
            "
          >
            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-emerald-400
                shadow-[0_0_8px_rgba(52,211,153,0.5)]
              "
            />

            Java Developer
          </div>

          {/* Heading */}

          <h1
            className="
              mt-5
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-heading
              font-semibold
              leading-[1.1]
              tracking-[-0.035em]
              text-[var(--color-text-primary)]
            "
          >
            Hi, I'm{" "}

            <span className="text-blue-400">
              Kartik Ade
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-xl
              text-base
              sm:text-lg
              leading-7
              text-[var(--color-text-secondary)]
            "
          >
            Backend Developer specializing in{" "}

            <span
              className="
                font-medium
                text-blue-400
              "
            >
              Java, Spring Boot & Secure APIs
            </span>

            . I build scalable and production-ready systems.
          </p>

          {/* Type Animation */}

          <div
            className="
              mt-6
              min-h-[28px]
              text-lg
              sm:text-xl
              font-medium
              text-slate-300
            "
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,

                "Java Backend Developer",
                2000,

                "Spring Boot Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* CTA BUTTONS */}

          <div
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              items-center
              gap-3
              justify-center
              lg:justify-start
            "
          >

            {/* Primary Button */}

            <motion.a
              href="#projects"
              whileHover={{
                y: -2,
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="
                group
                relative
                overflow-hidden
                inline-flex
                items-center
                justify-center
                min-w-[150px]
                px-6
                py-3
                rounded-xl
                bg-blue-500
                hover:bg-blue-600
                text-white
                text-sm
                font-semibold
                border
                border-blue-400/20
                shadow-[0_6px_20px_rgba(59,130,246,0.15)]
                hover:shadow-[0_10px_28px_rgba(59,130,246,0.22)]
                transition-all
                duration-300
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.12]
                  to-transparent
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform
                  duration-700
                "
              />

              <span className="relative z-10">
                View Projects
              </span>
            </motion.a>

            {/* Secondary Button */}

            <motion.a
              href="#contact"
              whileHover={{
                y: -2,
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="
                inline-flex
                items-center
                justify-center
                min-w-[150px]
                px-6
                py-3
                rounded-xl
                bg-white/[0.03]
                border
                border-white/[0.12]
                text-slate-200
                text-sm
                font-semibold
                backdrop-blur-sm
                hover:bg-white/[0.06]
                hover:border-blue-400/30
                hover:text-white
                shadow-[0_6px_20px_rgba(0,0,0,0.12)]
                transition-all
                duration-300
              "
            >
              Let's Connect
            </motion.a>

          </div>
        </motion.div>

        {/* ===================================================
            RIGHT ORBIT
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            w-full
            lg:w-1/2
            flex
            items-center
            justify-center
            shrink-0
          "
        >

          {/* ORBIT AREA */}

          <div
            className="
              relative
              w-[320px]
              h-[320px]
              sm:w-[430px]
              sm:h-[430px]
            "
          >

            {/* CENTER GLOW */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.18, 0.35, 0.18],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                pointer-events-none
                z-10
              "
            >
              <div
                className="
                  w-44
                  h-44
                  rounded-full
                  bg-blue-500/[0.10]
                  blur-3xl
                "
              />
            </motion.div>

            {/* ROTATING ORBIT */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-0
                z-20
              "
            >

              {/* OUTER ORBIT */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-dashed
                  border-blue-400/[0.20]
                "
              />

              {/* GLOW RING */}

              <motion.div
                animate={{
                  opacity: [0.25, 0.55, 0.25],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-[-3px]
                  rounded-full
                  border
                  border-blue-400/[0.20]
                  blur-[2px]
                "
              />

              {/* MIDDLE ORBIT */}

              <div
                className="
                  absolute
                  inset-[45px]
                  rounded-full
                  border
                  border-dashed
                  border-violet-400/[0.16]
                "
              />

              {/* INNER ORBIT */}

              <div
                className="
                  absolute
                  inset-[90px]
                  rounded-full
                  border
                  border-white/[0.07]
                "
              />

              {/* JAVA */}

              <SkillIcon
                icon={<FaJava />}
                name="Java"
                className="
                  top-[-5px]
                  left-1/2
                  -translate-x-1/2
                "
              />

              {/* SPRING BOOT */}

              <SkillIcon
                icon={<SiSpringboot />}
                name="Spring Boot"
                className="
                  top-[18%]
                  right-[2%]
                "
              />

              {/* HIBERNATE */}

              <SkillIcon
                icon={<SiHibernate />}
                name="Hibernate"
                className="
                  bottom-[18%]
                  right-[2%]
                "
              />

              {/* MYSQL */}

              <SkillIcon
                icon={<SiMysql />}
                name="MySQL"
                className="
                  bottom-[-5px]
                  left-1/2
                  -translate-x-1/2
                "
              />

              {/* REACT */}

              <SkillIcon
                icon={<FaReact />}
                name="React"
                className="
                  bottom-[18%]
                  left-[2%]
                "
              />

              {/* SPRING SECURITY */}

              <SkillIcon
                icon={<SiSpringsecurity />}
                name="Spring Security"
                className="
                  top-[18%]
                  left-[2%]
                "
              />

              {/* GITHUB */}

              <SkillIcon
                icon={<FaGithub />}
                name="GitHub"
                className="
                  top-1/2
                  right-[-25px]
                  -translate-y-1/2
                "
              />

            </motion.div>

            {/* CENTER BACKEND */}

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 20px rgba(59,130,246,0.08)",
                  "0 0 45px rgba(59,130,246,0.18)",
                  "0 0 20px rgba(59,130,246,0.08)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-28
                h-28
                sm:w-32
                sm:h-32
                rounded-full
                border
                border-blue-400/30
                bg-[#0D111A]
                flex
                flex-col
                items-center
                justify-center
                z-50
              "
            >

              <FaJava
                className="
                  text-5xl
                  text-blue-400
                "
              />

              <span
                className="
                  mt-2
                  text-xs
                  font-semibold
                  text-slate-200
                "
              >
                Backend
              </span>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;