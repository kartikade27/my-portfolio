import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import eventImg from "../assets/img/admin-dashboard-img.png";
import libImg from "../assets/img/libImg.png";
import blogImg from "../assets/img/blogImg.png";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Employee Management System",
      description:
        "Role-based full-stack system with Admin, HR & Employee dashboards. Secure authentication, document management, and scalable backend.",
      technologies: ["Spring Boot", "Java", "MySQL", "JWT", "Tailwind"],
      imageUrl: eventImg,
      githubLink: "https://github.com/kartikade27/employee-management-system",
      previewLink:
        "https://kartikade27.github.io/employee-management-frontend/",
    },
    {
      title: "Library Management System",
      description:
        "System for managing books, issuing & returning with role-based access and secure APIs.",
      technologies: ["Spring Boot", "Spring Security", "JWT", "MySQL"],
      imageUrl: libImg,
      githubLink: "https://github.com/kartikade27/Library_Management_system",
    },
    {
      title: "Blog Management System",
      description:
        "Platform to create, manage and publish blogs with authentication and role-based access.",
      technologies: ["Spring Boot", "JWT", "MySQL"],
      imageUrl: blogImg,
      githubLink: "https://github.com/kartikade27/blog-managment-system",
    },
  ];

  return (
    <section id="projects" className="relative bg-[var(--color-bg)] py-20 overflow-hidden">
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[var(--color-primary)]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[var(--color-secondary)]/20 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[var(--color-text-primary)] mb-16">
          My{" "}
          <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-transparent bg-clip-text">
            Projects
          </span>
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group relative bg-[var(--color-card)] backdrop-blur-md border border-[var(--color-border)] rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
                  {project.previewLink && (
                    <a
                      href={project.previewLink}
                      target="_blank"
                      className="px-4 py-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black rounded-md text-sm font-semibold"
                    >
                      Live
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="px-4 py-2 border border-[var(--color-border)] text-[var(--color-text-primary)] rounded-md text-sm"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                  {project.title}
                </h3>

                <p className="text-[var(--color-text-secondary)] mt-2 text-sm">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full text-[var(--color-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-5 text-sm text-[var(--color-secondary)] hover:underline"
                >
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
            >
              <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl max-w-2xl w-full p-6 relative shadow-xl">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-[var(--color-text-primary)] text-xl"
                >
                  ✕
                </button>

                <img
                  src={selectedProject.imageUrl}
                  className="rounded-lg mb-4"
                />

                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                  {selectedProject.title}
                </h3>

                <p className="text-[var(--color-text-secondary)] mt-2">
                  {selectedProject.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[var(--color-card)] rounded-full text-[var(--color-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  {selectedProject.previewLink && (
                    <a
                      href={selectedProject.previewLink}
                      target="_blank"
                      className="px-4 py-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black rounded-md"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    className="px-4 py-2 border border-[var(--color-border)] text-[var(--color-text-primary)] rounded-md"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
