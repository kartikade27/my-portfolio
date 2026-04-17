import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/kartikade27", icon: <FaGithub size={22} /> },
    { href: "https://www.linkedin.com/in/kartik-ade-9971223b7", icon: <FaLinkedin size={22} /> },
    { href: "https://twitter.com/yourprofile", icon: <FaTwitter size={22} /> },
  ];

  return (
    <footer className="relative bg-[var(--color-bg)] pt-16 pb-8 overflow-hidden">
      
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 text-center lg:text-left">
        
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          
          {/* Branding */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
              Kartik{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-transparent bg-clip-text">
                Ade
              </span>
            </h2>

            <p className="text-[var(--color-text-secondary)] mt-2 text-sm max-w-sm">
              Java Backend Developer focused on building scalable and secure applications.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-6 text-[var(--color-text-secondary)]">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[var(--color-text-primary)] transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex justify-center lg:justify-end space-x-5">
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="p-3 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-primary)] transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-[var(--color-border)] pt-6 text-center text-[var(--color-text-secondary)] text-sm">
          © {new Date().getFullYear()} Kartik Ade. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;