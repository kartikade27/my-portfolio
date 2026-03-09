import React, { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import kartik from "../assets/img/kartik.png";
import resume from "../assets/resume/kartik-ade-resume-java-developer.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B1120]/90 backdrop-blur-md border-b border-[#1E293B] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={kartik}
            alt="Logo"
            className="w-10 h-auto rounded-full border-2 border-[#14B8A6] shadow-md"
          />
          <span className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] text-transparent bg-clip-text font-extrabold text-lg font-logo">
            Kartik
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-[15px] font-medium text-[#F1F5F9]">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-[#14B8A6] transition-colors"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href={resume}
            download
            className="px-5 py-2 border border-[#14B8A6]/60 text-[#F1F5F9] font-semibold rounded-md hover:bg-gradient-to-r hover:from-[#14B8A6] hover:to-[#38BDF8] hover:text-black transition duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#F1F5F9] focus:outline-none"
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
            className="md:hidden absolute left-0 top-0 h-screen bg-[#0B1120] px-6 pb-6 pt-4 shadow-lg border-r border-[#1E293B] w-64"
          >
            <div className="text-xl font-bold text-[#F1F5F9] flex items-center space-x-2">
              <img
                src={kartik}
                alt="Logo"
                className="w-10 h-auto rounded-full border-2 border-[#14B8A6] shadow-md"
              />
              <span className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] text-transparent bg-clip-text font-extrabold text-lg">
                Kartik
              </span>
            </div>

            <div className="flex flex-col justify-center space-y-6 mt-10">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-[#F1F5F9] text-lg font-medium py-2 hover:text-[#14B8A6] transition"
                >
                  {item}
                </a>
              ))}

              <a
                href={resume}
                download
                className="mt-4 px-5 py-2 border border-[#14B8A6]/60 text-[#F1F5F9] font-semibold rounded-md hover:bg-gradient-to-r hover:from-[#14B8A6] hover:to-[#38BDF8] hover:text-black transition duration-300"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
