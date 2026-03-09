import React, { useState } from "react";
import { motion } from "framer-motion";
import eventImg from "../assets/img/admin-dashboard-img.png";
import libImg from "../assets/img/libImg.png";
import blogImg from "../assets/img/blogImg.png";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Employee-Management-System",
      description:
        "A role-based Employee Management System built with React.js, TailwindCSS, DaisyUI, and Spring Boot. This project demonstrates a full-stack application with Admin, HR, and Employee dashboards, secure authentication, document management, and theme toggling.",
      technologies: [
        "Spring Boot",
        "Java",
        "MySQL",
        "Swagger",
        "Tailwind css",
        "Daisy UI",
        "JWT",
        "Spring Security",
        "Cloudinary",
      ],
      imageUrl: eventImg,
      githubLink: "https://github.com/kartikade27/personal-finance-backend",
      previewLink:
        "https://kartikade27.github.io/employee-management-frontend/",
    },
    {
      title: "Library Management System",
      description:
        "A web-based system for managing library operations, including book cataloging, issuing, and returning. Built with Java and Spring Boot, it offers secure user authentication and CRUD operations for books and members.",
      roles: [
        {
          role: "Admin Role",
          details: [
            "Full control over the system.",
            "Can manage users, librarians, and system-wide settings.",
            "Has access to all book records and activity logs.",
            "Can delete any book or user record if needed.",
          ],
        },
        {
          role: "Librarian Role",
          details: [
            "Can create, update, and view book records.",
            "Can issue books to users and manage borrow/return workflows.",
            "Cannot delete books — ensuring audit integrity.",
          ],
        },
        {
          role: "User Role",
          details: [
            "Can browse available books.",
            "Can borrow books and view return dates.",
            "Can track borrowing history and due dates.",
          ],
        },
      ],
      technologies: [
        "Spring Boot",
        "Spring Security",
        "JWT",
        "MySQL",
        "Swagger/OpenAPI",
      ],
      imageUrl: libImg,
      githubLink: "https://github.com/kartikade27/Library_Management_system",
    },
    {
      title: "Blog Management System (BMS)",
      description:
        "A platform for creating, managing, and publishing blog posts with role-based access and CRUD operations for posts and comments.",
      roles: [
        {
          role: "Admin Role",
          details: [
            "Full control over platform content and users.",
            "Can manage posts, comments, users, and settings.",
          ],
        },
        {
          role: "User Role",
          details: [
            "Can create, edit, and delete their own blog posts.",
            "Can comment and interact with other users.",
          ],
        },
      ],
      technologies: [
        "Spring Boot",
        "Spring Security",
        "JWT",
        "MySQL",
        "Swagger/OpenAPI",
      ],
      imageUrl: blogImg,
      githubLink: "https://github.com/kartikade27/blog-managment-system",
    },
  ];

  return (
    <section id="projects" className="bg-[#0B1120] py-20 font-body">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-logo font-extrabold text-[#F1F5F9] mb-12">
          My
          <span className="bg-gradient-to-r ml-2 from-[#14B8A6] to-[#38BDF8] text-transparent bg-clip-text">
            Projects
          </span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="card bg-[#111827] shadow-xl rounded-lg overflow-hidden border border-[#14B8A6]/30 transition-all duration-300"
            >
              <figure className="w-full h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="card-body p-6 text-start">
                <h3 className="text-2xl font-logo font-bold text-[#F1F5F9]">
                  {project.title}
                </h3>
                <p className="text-[#94A3B8] mt-2 font-body">
                  {project.description}
                </p>

                <div className="card-actions mt-4">
                  <label
                    htmlFor={`project-modal-${index}`}
                    className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] text-[#0B1120] font-button py-3 px-6 rounded-md shadow-lg hover:opacity-90 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Project
                  </label>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DaisyUI Modal */}
      {selectedProject && (
        <input
          type="checkbox"
          id="project-modal"
          className="modal-toggle"
          checked={!!selectedProject}
          readOnly
        />
      )}
      {/* Modal */}
      <div className="modal">
        <div className="modal-box relative max-w-3xl w-11/12 md:w-3/4 lg:w-1/2 bg-[#111827] border border-[#14B8A6]/30 rounded-xl max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => setSelectedProject(null)}
            className="btn btn-sm btn-circle absolute right-4 top-4 bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] text-[#0B1120]"
          >
            ✕
          </button>

          {selectedProject && (
            <>
              {/* Properly sized image */}
              <figure className="w-full h-64 sm:h-80 md:h-96 lg:h-96 overflow-hidden rounded-lg mt-6">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center"
                />
              </figure>

              <h3 className="text-3xl font-bold text-[#F1F5F9] mt-6">
                {selectedProject.title}
              </h3>
              <p className="text-[#94A3B8] mt-2">
                {selectedProject.description}
              </p>

              {selectedProject.roles && (
                <div className="mt-6 text-left">
                  {selectedProject.roles.map((roleItem, idx) => (
                    <div key={idx} className="mb-4">
                      <h4 className="text-xl font-semibold text-[#F1F5F9] mb-2">
                        {roleItem.role}
                      </h4>
                      <ul className="list-disc list-inside text-[#94A3B8] space-y-1">
                        {roleItem.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              <h4 className="text-lg font-semibold text-[#F1F5F9] mt-4">
                Technologies Used:
              </h4>
              <ul className="list-disc list-inside text-[#94A3B8] mt-2 space-y-2">
                {selectedProject.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>

              <div className="mt-6 flex justify-end space-x-4">
                {selectedProject.previewLink && (
                  <a
                    href={selectedProject.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  >
                    Live Preview
                  </a>
                )}

                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] text-[#0B1120]"
                >
                  View on GitHub
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
