import React from "react";
import { motion } from "framer-motion";

import {
  LuArrowUpRight,
  LuBriefcaseBusiness,
  LuCode,
  LuDatabase,
  LuTarget,
} from "react-icons/lu";

import man from "../assets/img/man.jpg";

/* =========================================================
   HIGHLIGHT DATA
========================================================= */

const highlights = [
  {
    icon: <LuBriefcaseBusiness />,
    title: "Experience",
    value: "Java Development",
  },
  {
    icon: <LuCode />,
    title: "Specialization",
    value: "Backend Development",
  },
  {
    icon: <LuDatabase />,
    title: "Tech Stack",
    value: "Java · Spring Boot",
  },
  {
    icon: <LuTarget />,
    title: "Career Goal",
    value: "Software Engineer",
  },
];

/* =========================================================
   ABOUT US
========================================================= */

const AboutUs = () => {
  return (
    <section
      id="about"
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
          max-w-7xl
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
          className="text-center mb-14 lg:mb-16"
        >
          {/* Label */}

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

            About Me
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
            Building With{" "}
            <span className="text-blue-400">
              Purpose
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
            A developer focused on building reliable, secure and
            scalable backend applications.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN CONTENT
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-20
            items-center
          "
        >
          {/* =================================================
              IMAGE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              flex
              justify-center
              lg:justify-start
            "
          >
            <div
              className="
                relative
                w-full
                max-w-md
              "
            >
              {/* Image Glow */}

              <div
                className="
                  absolute
                  -inset-4
                  rounded-3xl
                  bg-blue-500/[0.07]
                  blur-2xl
                "
              />

              {/* Image */}

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
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.10]
                  bg-[#0D111A]
                  shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                "
              >
                <img
                  src={man}
                  alt="Kartik Ade - Java Backend Developer"
                  className="
                    w-full
                    h-[400px]
                    sm:h-[460px]
                    lg:h-[480px]
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                />

                {/* Dark Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#080B12]/90
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                />

                {/* Profile Card */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5

                    flex
                    items-center
                    justify-between
                    gap-4

                    px-4
                    py-3

                    rounded-xl

                    border
                    border-white/[0.10]

                    bg-[#0D111A]/80

                    backdrop-blur-md
                  "
                >
                  <div>
                    <p
                      className="
                        text-sm
                        font-semibold
                        text-white
                      "
                    >
                      Kartik Ade
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        text-slate-400
                      "
                    >
                      Java Backend Developer
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-xs
                      text-emerald-400
                    "
                  >
                    <span
                      className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-emerald-400
                        shadow-[0_0_8px_rgba(52,211,153,0.6)]
                      "
                    />

                    Available
                  </div>
                </div>
              </motion.div>

              {/* Decorative Corners */}

              <div
                className="
                  absolute
                  -top-3
                  -right-3
                  w-16
                  h-16
                  rounded-xl
                  border
                  border-blue-400/20
                  pointer-events-none
                "
              />

              <div
                className="
                  absolute
                  -bottom-3
                  -left-3
                  w-16
                  h-16
                  rounded-xl
                  border
                  border-violet-400/15
                  pointer-events-none
                "
              />
            </div>
          </motion.div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            {/* Label */}

            <p
              className="
                text-sm
                font-medium
                text-blue-400
                uppercase
                tracking-[0.14em]
              "
            >
              Who I Am
            </p>

            {/* Heading */}

            <h3
              className="
                mt-3
                text-3xl
                sm:text-4xl
                font-heading
                font-semibold
                leading-tight
                tracking-[-0.025em]
                text-[var(--color-text-primary)]
              "
            >
              Passionate about{" "}
              <span className="text-blue-400">
                backend engineering
              </span>
            </h3>

            {/* Description */}

            <div
              className="
                mt-6
                space-y-4
                text-[var(--color-text-secondary)]
                text-base
                sm:text-lg
                leading-7
              "
            >
              <p>
                I'm a{" "}
                <span className="text-slate-200 font-medium">
                  Java Backend Developer
                </span>{" "}
                focused on developing secure, scalable and
                maintainable applications using modern backend
                technologies.
              </p>

              <p>
                My core expertise includes{" "}
                <span className="text-blue-400 font-medium">
                  Java, Spring Boot, Spring Security and Hibernate
                </span>{" "}
                along with{" "}
                <span className="text-blue-400 font-medium">
                  MySQL
                </span>
                . I enjoy designing REST APIs, implementing
                authentication and building reliable server-side
                systems.
              </p>

              <p>
                I'm continuously improving my problem-solving and
                development skills while working toward becoming a
                strong{" "}
                <span className="text-slate-200 font-medium">
                  Software Engineer
                </span>
                .
              </p>
            </div>

            {/* =================================================
                HIGHLIGHTS
            ================================================== */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-3
                mt-8
              "
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    p-4
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]

                    hover:bg-blue-500/[0.04]
                    hover:border-blue-400/20

                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    {/* Icon */}

                    <div
                      className="
                        flex
                        items-center
                        justify-center

                        w-10
                        h-10
                        shrink-0

                        rounded-lg

                        border
                        border-blue-400/15

                        bg-blue-500/[0.06]

                        text-blue-400
                        text-lg

                        group-hover:bg-blue-500/[0.10]

                        transition
                      "
                    >
                      {item.icon}
                    </div>

                    {/* Text */}

                    <div>
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-wider
                          text-slate-500
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-medium
                          text-slate-200
                        "
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                CTA BUTTON
            ================================================== */}

            <div className="mt-9">
              <motion.a
                href="#contact"
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group

                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  px-6
                  py-3

                  rounded-lg

                  bg-blue-500
                  hover:bg-blue-600

                  text-white

                  text-sm
                  font-semibold

                  shadow-[0_8px_25px_rgba(59,130,246,0.18)]

                  hover:shadow-[0_10px_30px_rgba(59,130,246,0.28)]

                  transition-all
                  duration-300
                "
              >
                Let's Connect

                <LuArrowUpRight
                  className="
                    text-base

                    transition-transform
                    duration-300

                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;