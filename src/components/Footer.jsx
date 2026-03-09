import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/kartikade27", icon: <FaGithub size={24} /> },
    { href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedin size={24} /> },
    { href: "https://twitter.com/yourprofile", icon: <FaTwitter size={24} /> },
  ];

  return (
    <footer className="bg-[#0B1120] py-10 font-roboto">
      <div className="container mx-auto px-6 text-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <nav className="mb-6 md:mb-0 space-x-6 text-gray-300">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="font-medium transition duration-300 hover:text-transparent 
                           hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#14B8A6] hover:to-[#38BDF8]"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition duration-300 hover:text-white 
                           hover:scale-110 hover:shadow-lg hover:shadow-[#14B8A6]/50 p-2 rounded-full"
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
