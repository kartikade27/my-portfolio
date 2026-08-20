import React from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGithub,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiTailwindcss,
  SiHibernate,
  SiSpringsecurity,
  SiMysql,
} from "react-icons/si";

/* =========================================================
   SKILL DATA
========================================================= */

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive and modern user interfaces.",

    skills: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
      },
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-400",
      },
    ],
  },

  {
    title: "Backend",
    description: "Developing secure and scalable backend systems.",

    skills: [
      {
        name: "Java",
        icon: FaJava,
        color: "text-red-500",
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "text-green-500",
      },
      {
        name: "Spring Security",
        icon: SiSpringsecurity,
        color: "text-green-400",
      },
      {
        name: "Hibernate",
        icon: SiHibernate,
        color: "text-yellow-500",
      },
    ],
  },

  {
    title: "Database & Tools",
    description: "Working with data, version control and development tools.",

    skills: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-400",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-slate-200",
      },
    ],
  },
];

/* =========================================================
   SKILL CARD
========================================================= */

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-white/[0.08]
        bg-[#0D111A]
        p-5
        shadow-[0_15px_40px_rgba(0,0,0,0.18)]
        hover:border-blue-400/25
        hover:shadow-[0_20px_55px_rgba(0,0,0,0.30)]
        transition-all
        duration-300
      "
    >
      {/* Hover Glow */}

      <div
        className="
          absolute
          -right-10
          -top-10
          w-24
          h-24
          rounded-full
          bg-blue-500/[0.08]
          blur-2xl
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />

      {/* Top Content */}

      <div className="relative z-10 flex items-center gap-4">
        {/* Icon */}

        <div
          className="
            flex
            items-center
            justify-center
            w-12
            h-12
            shrink-0
            rounded-xl
            border
            border-white/[0.08]
            bg-white/[0.025]
            group-hover:bg-blue-500/[0.06]
            group-hover:border-blue-400/20
            transition-all
            duration-300
          "
        >
          <Icon
            className={`
              text-2xl
              ${skill.color}
              transition-transform
              duration-300
              group-hover:scale-110
            `}
          />
        </div>

        {/* Skill Name */}

        <div>
          <p
            className="
              text-sm
              font-semibold
              text-[var(--color-text-primary)]
              group-hover:text-blue-400
              transition-colors
              duration-300
            "
          >
            {skill.name}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Technical Skill
          </p>
        </div>
      </div>

      {/* Bottom Line */}

      <div
        className="
          relative
          z-10
          mt-5
          h-px
          w-full
          bg-white/[0.07]
          overflow-hidden
        "
      >
        <div
          className="
            h-full
            w-0
            bg-blue-400
            group-hover:w-full
            transition-all
            duration-700
            ease-out
          "
        />
      </div>
    </motion.div>
  );
};

/* =========================================================
   SKILLS SECTION
========================================================= */

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        bg-[var(--color-bg)]
        py-24
        sm:py-28
        lg:py-32
        overflow-hidden
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-30
        "
      >
        <div className="animated-grid" />
      </div>

      {/* =====================================================
          BACKGROUND GLOW
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
          className="text-center mb-14 sm:mb-16"
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

            Technical Skills
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
              Skills
            </span>
          </h2>

          {/* Description */}

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
            Technologies and tools I use to build modern,
            secure and scalable applications.
          </p>
        </motion.div>

        {/* ===================================================
            SKILL GROUPS
        ==================================================== */}

        <div className="space-y-14">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: groupIndex * 0.1,
              }}
            >
              {/* Group Header */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                  gap-3
                  mb-6
                "
              >
                <div>
                  <h3
                    className="
                      text-xl
                      sm:text-2xl
                      font-heading
                      font-semibold
                      tracking-tight
                      text-[var(--color-text-primary)]
                    "
                  >
                    {group.title}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      text-[var(--color-text-secondary)]
                    "
                  >
                    {group.description}
                  </p>
                </div>

                {/* Skill Count */}

                <span
                  className="
                    w-fit
                    px-3
                    py-1
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-wider
                    text-slate-500
                  "
                >
                  {group.skills.length} Skills
                </span>
              </div>

              {/* Skills Grid */}

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-3
                  gap-4
                "
              >
                {group.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===================================================
            BOTTOM SUMMARY
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-16
            rounded-2xl
            border
            border-white/[0.08]
            bg-[#0D111A]
            p-6
            sm:p-8
            text-center
            shadow-[0_20px_60px_rgba(0,0,0,0.20)]
          "
        >
          <p
            className="
              text-sm
              uppercase
              tracking-[0.15em]
              text-slate-500
            "
          >
            Current Focus
          </p>

          <h3
            className="
              mt-3
              text-xl
              sm:text-2xl
              font-heading
              font-semibold
              text-[var(--color-text-primary)]
            "
          >
            Building secure & scalable{" "}
            <span className="text-blue-400">
              backend systems
            </span>
          </h3>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-3
              text-sm
              sm:text-base
              leading-6
              text-[var(--color-text-secondary)]
            "
          >
            Focused on Java, Spring Boot, REST APIs,
            authentication, database design and clean
            backend architecture.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;