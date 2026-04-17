import React, { useState, useEffect } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import kartik from "../assets/img/kartik.png";
import resume from "../assets/resume/Kartik_Ade_Java_Developer_Fresher_pdf.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/95 backdrop-blur-lg shadow-lg border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={kartik}
            alt="Logo"
            className="w-10 rounded-full border-2 border-[var(--color-primary)]"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-transparent bg-clip-text">
            Kartik
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-[15px] font-medium text-[var(--color-text-primary)]">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Resume Button */}
        <div className="hidden md:block">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={resume}
            download
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black font-semibold shadow-md hover:shadow-[0_0_20px_var(--color-glow)] transition"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden text-[var(--color-text-primary)]">
          <button onClick={toggleMenu}>
            {isOpen ? <LuX size={26} /> : <LuMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blur Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 80 }}
              className="fixed top-0 left-0 h-full w-72 bg-[var(--color-surface)] p-6 shadow-xl border-r border-[var(--color-border)]"
            >
              <div className="flex items-center space-x-3 mb-10">
                <img
                  src={kartik}
                  alt="logo"
                  className="w-10 rounded-full border-2 border-[var(--color-primary)]"
                />
                <span className="text-lg font-bold text-[var(--color-text-primary)]">
                  Kartik
                </span>
              </div>

              <div className="flex flex-col space-y-6 text-lg text-[var(--color-text-secondary)]">
                {["Home", "About", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[var(--color-primary)] transition"
                  >
                    {item}
                  </a>
                ))}

                <a
                  href={resume}
                  download
                  className="mt-6 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black font-semibold text-center"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;