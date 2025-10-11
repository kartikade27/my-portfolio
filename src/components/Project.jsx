import React, { useState } from "react";
import { motion } from "framer-motion";
import eventImg from "../assets/img/event-managment-system.webp";
import libImg from "../assets/img/libImg.png";
import blogImg from "../assets/img/blogImg.png";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "personal-finance-backend",
      description:
        "A robust backend system for managing personal finances, including income, expenses, and budgeting. Built with Spring Boot and Java, it provides secure REST APIs for CRUD operations and supports user authentication. Designed to help users track and analyze their financial data efficiently.",
      technologies: ["Spring Boot", "Java", "MySQL", "Swagger"],
      imageUrl: eventImg,
      githubLink: "https://github.com/kartikade27/personal-finance-backend",
    },
    {
      title: "Library Management System ",
      description:
        "A web-based system for managing library operations, including book cataloging, issuing, and returning. Built with Java and Spring Boot, it offers secure user authentication and CRUD operations for books and members. Designed to streamline library workflows and improve efficiency.",
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
            "Cannot delete books — ensuring audit integrity and traceability.",
          ],
        },
        {
          role: "User Role",
          details: [
            "Can browse available books.",
            "Can borrow books and view return dates.",
            "Can track their own borrowing history and due dates.",
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
      imageUrl: `${libImg}`,
      githubLink: "https://github.com/kartikade27/Library_Management_system",
    },
    {
      title: "Blog Management System (BMS)",
      description:
        "A full-featured platform for creating, managing, and publishing blog posts. Built with Spring Boot and Java, it supports user authentication, role-based access, and CRUD operations for posts and comments. Designed to help users maintain and share content efficiently with a clean, organized backend.",
      roles: [
        {
          role: "Admin Role",
          details: [
            "Full control over platform content and users.",
            "Can manage posts, comments, users, and system settings.",
            "Has access to dashboards for analytics and moderation tools.",
          ],
        },
        {
          role: "User Role",
          details: [
            "Can register, log in, and manage their own profile.",
            "Can create, edit, and delete their own blog posts.",
            "Can interact with other users via comments, likes, follows, and unfollows.",
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
      imageUrl: `${blogImg}`,
      githubLink: "https://github.com/kartikade27/blog-managment-system",
    },
  ];

  return (
    <section id="projects" className=" bg-[#0A0F2C] py-20 font-body">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-logo font-extrabold text-white mb-12">
          My
          <span className="bg-gradient-to-r ml-2 from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="card bg-white shadow-xl rounded-lg overflow-hidden border border-white/20 transition-all duration-300"
            >
              <figure className="w-full h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="card-body p-6 text-start">
                <h3 className="text-2xl font-logo font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 font-body">
                  {project.description}
                </p>

                <div className="card-actions mt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-button py-3 px-6 rounded-sm shadow-xl hover:opacity-80 transition duration-300 tracking-wider"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal modal-open fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="modal-box relative w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%] bg-gray-900 border border-white/20 shadow-2xl rounded-xl max-h-[90vh] overflow-y-auto font-body">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="btn btn-sm btn-circle absolute right-4 top-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-80 font-button"
            >
              ✕
            </button>

            {/* Modal Image */}
            <figure className="w-full h-64 overflow-hidden rounded-lg mt-6">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Title & Description */}
            <h3 className="text-3xl font-logo font-bold text-white mt-6">
              {selectedProject.title}
            </h3>
            <p className="text-gray-300 mt-2 font-body">
              {selectedProject.description}
            </p>

            {/* Roles Section */}
            {selectedProject.roles && (
              <div className="mt-6 text-left">
                {selectedProject.roles.map((roleItem, idx) => (
                  <div key={idx} className="mb-4">
                    <h4 className="text-xl font-logo font-semibold text-white mb-2">
                      {roleItem.role}
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 font-body">
                      {roleItem.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Technologies */}
            <h4 className="text-lg font-logo font-semibold text-white mt-4">
              Technologies Used:
            </h4>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2 font-body">
              {selectedProject.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>

            {/* GitHub Link */}
            <div className="mt-6 flex justify-end space-x-4">
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-button py-2 px-4 rounded-sm shadow-lg hover:opacity-80"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
