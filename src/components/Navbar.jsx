import React, { useState, useEffect } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import kartik from "../assets/img/kartik.png";
import resume from "../assets/resume/Kartik_Ade_Java_Developer_Fresher_pdf.pdf";

const NAV_LINKS = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Scroll state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)] border-b border-[var(--color-border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <motion.img
            whileHover={{ scale: 1.08 }}
            src={kartik}
            alt="Logo"
            className="w-9 h-9 rounded-full border border-[var(--color-primary)] object-cover"
          />
          <span className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            Kartik
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-text-primary)]">
          {NAV_LINKS.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <motion.a
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.04 }}
            href={resume}
            download
            className="px-4 py-2 text-sm rounded-md bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black font-medium"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[var(--color-text-primary)]"
          onClick={toggleMenu}
        >
          {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25 }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-50 md:hidden p-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-10">
                <img
                  src={kartik}
                  alt="logo"
                  className="w-9 h-9 rounded-full border border-[var(--color-primary)]"
                />
                <span className="font-semibold text-lg text-[var(--color-text-primary)]">
                  Kartik
                </span>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-5 text-base text-[var(--color-text-secondary)]">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[var(--color-primary)] transition"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* CTA */}
              <a
                href={resume}
                download
                className="mt-auto px-4 py-2 rounded-md text-center bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black font-medium"
              >
                Resume
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;