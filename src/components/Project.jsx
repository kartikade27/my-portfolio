import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  LuArrowUpRight,
  LuGithub,
  LuExternalLink,
  LuX,
  LuCode,
} from "react-icons/lu";

import eventImg from "../assets/img/admin-dashboard-img.png";
import libImg from "../assets/img/libImg.png";
import blogImg from "../assets/img/blogImg.png";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    title: "Employee Management System",
    category: "Full Stack Application",

    description:
      "A role-based employee management platform with dedicated Admin, HR and Employee dashboards. Includes secure authentication, document management and scalable REST APIs.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "JWT",
      "React",
      "Tailwind",
    ],

    imageUrl: eventImg,

    githubLink:
      "https://github.com/kartikade27/employee-management-system",

    previewLink:
      "https://kartikade27.github.io/employee-management-frontend/",
  },

  {
    title: "Library Management System",
    category: "Backend Application",

    description:
      "A secure library management system designed to manage books, issuing, returning and role-based access through protected REST APIs.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
    ],

    imageUrl: libImg,

    githubLink:
      "https://github.com/kartikade27/Library_Management_system",
  },

  {
    title: "Blog Management System",
    category: "Backend Application",

    description:
      "A blog management platform that allows users to create, manage and publish content with authentication and role-based authorization.",

    technologies: [
      "Java",
      "Spring Boot",
      "JWT",
      "MySQL",
    ],

    imageUrl: blogImg,

    githubLink:
      "https://github.com/kartikade27/blog-managment-system",
  },
];

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project, index, onViewDetails }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
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
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-[#0D111A]
        shadow-[0_20px_50px_rgba(0,0,0,0.20)]
        hover:border-blue-400/25
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]
        transition-all
        duration-500
      "
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative h-[230px] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={`${project.title} project preview`}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Image Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#080B12]
            via-[#080B12]/20
            to-transparent
          "
        />

        {/* Category Badge */}

        <div
          className="
            absolute
            top-4
            left-4
            px-3
            py-1.5
            rounded-full
            border
            border-white/[0.10]
            bg-[#0D111A]/75
            backdrop-blur-md
            text-[11px]
            font-medium
            tracking-wide
            text-blue-300
          "
        >
          {project.category}
        </div>

        {/* Project Number */}

        <div
          className="
            absolute
            top-4
            right-4
            w-9
            h-9
            flex
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.10]
            bg-black/40
            backdrop-blur-md
            text-xs
            font-semibold
            text-white/70
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Hover Actions */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            gap-3
            bg-[#05070B]/65
            backdrop-blur-[2px]
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
          "
        >
          {/* Live Demo */}

          {project.previewLink && (
            <motion.a
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-lg
                bg-blue-500
                hover:bg-blue-600
                text-white
                text-sm
                font-semibold
                shadow-[0_8px_25px_rgba(59,130,246,0.25)]
                transition-all
              "
            >
              <LuExternalLink size={16} />
              Live Demo
            </motion.a>
          )}

          {/* GitHub */}

          <motion.a
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2.5
              rounded-lg
              border
              border-white/[0.15]
              bg-[#0D111A]/80
              text-white
              text-sm
              font-semibold
              hover:bg-white/[0.08]
              transition-all
            "
          >
            <LuGithub size={16} />
            GitHub
          </motion.a>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="p-6">
        {/* Top Row */}

        <div
          className="
            flex
            items-center
            justify-between
            mb-3
          "
        >
          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.15em]
              text-slate-500
            "
          >
            {project.category}
          </span>

          {/* FIX:
              LuCode2 removed
              LuCode used instead
          */}

          <LuCode
            className="
              text-blue-400/70
              text-lg
            "
          />
        </div>

        {/* Title */}

        <h3
          className="
            text-xl
            sm:text-2xl
            font-semibold
            tracking-tight
            text-[var(--color-text-primary)]
            group-hover:text-blue-400
            transition-colors
            duration-300
          "
        >
          {project.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-3
            text-sm
            sm:text-[15px]
            leading-6
            text-[var(--color-text-secondary)]
          "
        >
          {project.description}
        </p>

        {/* =================================================
            TECHNOLOGIES
        ================================================== */}

        <div className="flex flex-wrap gap-2 mt-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-2.5
                py-1
                rounded-md
                border
                border-white/[0.07]
                bg-white/[0.025]
                text-[11px]
                sm:text-xs
                font-medium
                text-slate-400
                hover:text-blue-300
                hover:border-blue-400/20
                transition-colors
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* =================================================
            FOOTER
        ================================================== */}

        <div
          className="
            mt-6
            pt-5
            border-t
            border-white/[0.07]
            flex
            items-center
            justify-between
            gap-3
          "
        >
          {/* View Details */}

          <button
            onClick={() => onViewDetails(project)}
            className="
              group/details
              inline-flex
              items-center
              gap-1.5
              text-sm
              font-medium
              text-blue-400
              hover:text-blue-300
              transition-colors
            "
          >
            View Details

            <LuArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover/details:-translate-y-0.5
                group-hover/details:translate-x-0.5
              "
            />
          </button>

          {/* GitHub Icon */}

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              w-9
              h-9
              rounded-lg
              border
              border-white/[0.08]
              bg-white/[0.025]
              text-slate-400
              hover:text-white
              hover:border-blue-400/25
              hover:bg-blue-500/[0.06]
              transition-all
            "
            aria-label={`View ${project.title} on GitHub`}
          >
            <LuGithub size={17} />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

/* =========================================================
   PROJECT MODAL
========================================================= */

const ProjectModal = ({ project, onClose }) => {
  /* =======================================================
     ESC KEY SUPPORT
  ======================================================== */

  useEffect(() => {
    if (!project) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  /* Prevent rendering */

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className="
          fixed
          inset-0
          z-[100]
          flex
          items-center
          justify-center
          p-4
          sm:p-6
        "
      >
        {/* =================================================
            BACKDROP
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={onClose}
          className="
            absolute
            inset-0
            bg-black/75
            backdrop-blur-md
          "
        />

        {/* =================================================
            MODAL
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.96,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          onClick={(event) => event.stopPropagation()}
          className="
            relative
            z-10
            w-full
            max-w-3xl
            max-h-[90vh]
            overflow-y-auto
            rounded-2xl
            border
            border-white/[0.10]
            bg-[#0D111A]
            shadow-[0_30px_100px_rgba(0,0,0,0.55)]
          "
        >
          {/* =================================================
              MODAL IMAGE
          ================================================== */}

          <div className="relative h-[220px] sm:h-[320px]">
            <img
              src={project.imageUrl}
              alt={`${project.title} project`}
              className="
                w-full
                h-full
                object-cover
              "
            />

            {/* Gradient */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#0D111A]
                via-transparent
                to-black/20
              "
            />

            {/* Close Button */}

            <button
              onClick={onClose}
              className="
                absolute
                top-4
                right-4
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-full
                border
                border-white/[0.12]
                bg-black/50
                backdrop-blur-md
                text-white
                hover:bg-red-500/80
                hover:border-red-400/30
                transition-all
              "
              aria-label="Close project details"
            >
              <LuX size={19} />
            </button>

            {/* Category */}

            <div
              className="
                absolute
                bottom-5
                left-6
                px-3
                py-1.5
                rounded-full
                border
                border-blue-400/20
                bg-blue-500/[0.08]
                backdrop-blur-md
                text-xs
                font-medium
                text-blue-300
              "
            >
              {project.category}
            </div>
          </div>

          {/* =================================================
              MODAL CONTENT
          ================================================== */}

          <div className="p-6 sm:p-8">
            {/* Title */}

            <h3
              className="
                text-2xl
                sm:text-3xl
                font-heading
                font-semibold
                tracking-tight
                text-[var(--color-text-primary)]
              "
            >
              {project.title}
            </h3>

            {/* Description */}

            <p
              className="
                mt-4
                text-sm
                sm:text-base
                leading-7
                text-[var(--color-text-secondary)]
              "
            >
              {project.description}
            </p>

            {/* =================================================
                TECHNOLOGY STACK
            ================================================== */}

            <div className="mt-6">
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  font-medium
                  text-slate-500
                  mb-3
                "
              >
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-1.5
                      rounded-lg
                      border
                      border-blue-400/10
                      bg-blue-500/[0.05]
                      text-xs
                      font-medium
                      text-blue-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* =================================================
                ACTION BUTTONS
            ================================================== */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-3
                mt-8
              "
            >
              {/* Live Demo */}

              {project.previewLink && (
                <motion.a
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-5
                    py-3
                    rounded-lg
                    bg-blue-500
                    hover:bg-blue-600
                    text-white
                    text-sm
                    font-semibold
                    shadow-[0_8px_25px_rgba(59,130,246,0.20)]
                    transition-all
                  "
                >
                  <LuExternalLink size={17} />

                  Live Demo
                </motion.a>
              )}

              {/* GitHub */}

              <motion.a
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-3
                  rounded-lg
                  border
                  border-white/[0.10]
                  bg-white/[0.025]
                  text-[var(--color-text-primary)]
                  text-sm
                  font-semibold
                  hover:bg-white/[0.06]
                  hover:border-blue-400/25
                  transition-all
                "
              >
                <LuGithub size={17} />

                View Source
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* =========================================================
   PROJECT SECTION
========================================================= */

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
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

            My Work
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
            Featured{" "}
            <span className="text-blue-400">
              Projects
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
            A selection of applications I've built using modern
            backend technologies, secure APIs and scalable
            architectures.
          </p>
        </motion.div>

        {/* ===================================================
            PROJECT GRID
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            lg:gap-7
          "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          PROJECT MODAL
      ====================================================== */}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Project;