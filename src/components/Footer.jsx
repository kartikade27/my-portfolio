import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A0F2C] py-10 font-roboto">
      <div className="container mx-auto px-6 text-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <nav className="mb-6 md:mb-0 space-x-6 text-gray-300">
            <a
              href="#home"
              className="hover:text-white transition duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-white transition duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-white transition duration-300 font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-white transition duration-300 font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            {[
              { href: "https://github.com/yourprofile", icon: <FaGithub size={24} /> },
              { href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedin size={24} /> },
              { href: "https://twitter.com/yourprofile", icon: <FaTwitter size={24} /> },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
