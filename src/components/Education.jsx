import React from "react";
import { motion } from "framer-motion";

import {
  LuGraduationCap,
  LuCalendarDays,
  LuBuilding2,
} from "react-icons/lu";

/* =========================================================
   EDUCATION DATA
========================================================= */

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

/* =========================================================
   EDUCATION
========================================================= */

const Education = () => {
  return (
    <section
      id="education"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-[var(--color-bg)]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="animated-grid" />
      </div>

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div
        className="
          absolute
          -top-32
          -left-32
          w-[350px]
          h-[350px]
          rounded-full
          bg-blue-500/[0.06]
          blur-[130px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -right-32
          w-[350px]
          h-[350px]
          rounded-full
          bg-violet-500/[0.05]
          blur-[130px]
          pointer-events-none
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          mx-auto
          px-6
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-center mb-16"
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

            Education
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-heading
              font-semibold
              tracking-[-0.035em]
              text-[var(--color-text-primary)]
            "
          >
            My{" "}
            <span className="text-blue-400">
              Education
            </span>
          </h2>

          {/* Subtitle */}

          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-base
              sm:text-lg
              leading-7
              text-[var(--color-text-secondary)]
            "
          >
            My academic journey and the foundation that shaped
            my technical career.
          </p>
        </motion.div>

        {/* ===================================================
            TIMELINE
        ==================================================== */}

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Center Line */}

          <div
            className="
              hidden
              md:block
              absolute
              top-0
              bottom-0
              left-1/2
              -translate-x-1/2
              w-px
              bg-gradient-to-b
              from-transparent
              via-blue-400/40
              to-transparent
            "
          />

          {/* Mobile Line */}

          <div
            className="
              md:hidden
              absolute
              top-0
              bottom-0
              left-[18px]
              w-px
              bg-gradient-to-b
              from-transparent
              via-blue-400/40
              to-transparent
            "
          />

          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={edu.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className={`
                  relative
                  flex
                  items-center
                  mb-12
                  last:mb-0
                  md:w-full
                  ${
                    isLeft
                      ? "md:justify-start"
                      : "md:justify-end"
                  }
                `}
              >
                {/* =================================================
                    TIMELINE DOT
                ================================================== */}

                <div
                  className="
                    absolute
                    left-[18px]
                    md:left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    z-20
                  "
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                    }}
                    className="
                      relative
                      w-10
                      h-10
                      rounded-full
                      flex
                      items-center
                      justify-center
                      bg-[#0D111A]
                      border
                      border-blue-400/40
                      text-blue-400
                      shadow-[0_0_20px_rgba(59,130,246,0.15)]
                    "
                  >
                    <LuGraduationCap className="text-lg" />

                    {/* Pulse */}

                    <span
                      className="
                        absolute
                        inset-[-5px]
                        rounded-full
                        border
                        border-blue-400/10
                      "
                    />
                  </motion.div>
                </div>

                {/* =================================================
                    CARD
                ================================================== */}

                <div
                  className={`
                    w-full
                    md:w-[calc(50%-45px)]
                    ml-12
                    md:ml-0
                  `}
                >
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 20,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      backdrop-blur-md
                      p-6
                      shadow-[0_15px_45px_rgba(0,0,0,0.18)]
                      hover:border-blue-400/25
                      hover:bg-white/[0.04]
                      transition-all
                      duration-300
                    "
                  >
                    {/* Card Glow */}

                    <div
                      className="
                        absolute
                        -top-20
                        -right-20
                        w-40
                        h-40
                        rounded-full
                        bg-blue-500/[0.08]
                        blur-3xl
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                        pointer-events-none
                      "
                    />

                    {/* Top Row */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >
                      {/* Icon */}

                      <div
                        className="
                          flex
                          items-center
                          justify-center
                          w-11
                          h-11
                          shrink-0
                          rounded-xl
                          border
                          border-blue-400/15
                          bg-blue-500/[0.06]
                          text-blue-400
                          text-xl
                          group-hover:bg-blue-500/[0.10]
                          transition-all
                          duration-300
                        "
                      >
                        <LuGraduationCap />
                      </div>

                      {/* Date */}

                      <div
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          px-2.5
                          py-1
                          rounded-full
                          border
                          border-white/[0.08]
                          bg-white/[0.025]
                          text-xs
                          font-medium
                          text-slate-400
                          whitespace-nowrap
                        "
                      >
                        <LuCalendarDays className="text-blue-400" />

                        {edu.date}
                      </div>
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        relative
                        z-10
                        mt-5
                        text-lg
                        sm:text-xl
                        font-semibold
                        leading-snug
                        text-[var(--color-text-primary)]
                        group-hover:text-blue-300
                        transition-colors
                        duration-300
                      "
                    >
                      {edu.title}
                    </h3>

                    {/* Institution */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        items-center
                        gap-2
                        mt-3
                        text-sm
                        text-[var(--color-text-secondary)]
                      "
                    >
                      <LuBuilding2
                        className="
                          shrink-0
                          text-blue-400
                        "
                      />

                      <span>
                        {edu.institution}
                      </span>
                    </div>

                    {/* Bottom Accent */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-0
                        bg-gradient-to-r
                        from-blue-400
                        to-violet-400
                        group-hover:w-full
                        transition-all
                        duration-500
                      "
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===================================================
            BOTTOM INDICATOR
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
          className="
            mt-14
            flex
            justify-center
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.025]
              text-xs
              text-slate-500
            "
          >
            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-blue-400
                shadow-[0_0_8px_rgba(59,130,246,0.5)]
              "
            />

            Academic Foundation
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;