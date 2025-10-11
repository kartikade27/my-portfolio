import React, { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import kartik from "../assets/img/kartik.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0F2C] bg-opacity-80 backdrop-blur-md  border-b border-indigo-500/50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={kartik}
            alt="Logo"
            className="w-10 h-auto rounded-full border-2 border-purple-500 shadow-lg"
          />
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text font-extrabold text-lg font-logo">
            Kartik
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-md font-body text-white tracking-wider">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group text-white hover:text-gray-500"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href="path-to-your-resume.pdf"
            download
            className="relative px-6 py-2 text-white font-semibold border border-indigo-500/100  rounded-sm transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:border-transparent"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <LuX className="h-6 w-6" />
            ) : (
              <LuMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute left-0 top-0 h-screen  bg-[#0A0F2C] px-6 pb-6 pt-4  shadow-lg border-r border-indigo-500/50 w-64"
          >
            <div className="text-xl font-bold text-white flex items-center space-x-2">
              <img
                src={kartik}
                alt="Logo"
                className="w-10 h-auto rounded-full border-2 border-purple-500 shadow-lg"
              />
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text font-extrabold text-lg">
                Kartik
              </span>
            </div>

            <div className="flex flex-col justify-center space-y-7">
              <div className="mt-10"></div>

              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white text-lg font-medium py-2 hover:text-gray-300"
                >
                  {item}
                </a>
              ))}

              <a
                href="path-to-your-resume.pdf"
                download
                className="relative px-6 py-2 text-white font-semibold border border-indigo-500/50  rounded-sm transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:border-transparent"
              >
                Resume Download
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
