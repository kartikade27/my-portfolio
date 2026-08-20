import React, { useEffect, useState } from "react";
import {
  LuMenu,
  LuX,
  LuDownload,
  LuArrowUpRight,
} from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

import kartik from "../assets/img/kartik.png";
import resume from "../assets/resume/Kartik_Ade_Java_Developer_Fresher_pdf.pdf";

const NAV_LINKS = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =====================================================
     SCROLL DETECTION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ===================================================== */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =====================================================
     ESCAPE KEY
  ===================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =====================================================
     CLOSE MENU
  ===================================================== */

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-200
          ${
            scrolled
              ? `
                bg-[#080B12]/95
                backdrop-blur-lg
                border-b
                border-white/[0.07]
                shadow-[0_8px_30px_rgba(0,0,0,0.20)]
              `
              : `
                bg-transparent
                border-b
                border-transparent
              `
          }
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            h-[76px]
            px-5
            sm:px-6
            lg:px-8
            flex
            items-center
            justify-between
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <a
            href="#home"
            aria-label="Kartik Ade - Home"
            className="flex items-center gap-3 group"
          >
            {/* Profile Image */}

            <div
              className="
                relative
                w-10
                h-10
                rounded-full
                overflow-hidden
                bg-[#111722]
                border
                border-white/10
                group-hover:border-blue-400/40
                transition-colors
                duration-200
              "
            >
              <img
                src={kartik}
                alt="Kartik Ade"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              {/* Online Indicator */}

              <span
                className="
                  absolute
                  bottom-0.5
                  right-0.5
                  w-2.5
                  h-2.5
                  rounded-full
                  bg-emerald-400
                  border-2
                  border-[#080B12]
                "
              />
            </div>

            {/* Name */}

            <div className="flex flex-col leading-none">
              <span
                className="
                  font-heading
                  text-[15px]
                  sm:text-base
                  font-semibold
                  tracking-tight
                  text-white
                  group-hover:text-blue-400
                  transition-colors
                  duration-200
                "
              >
                Kartik Ade
              </span>

              <span
                className="
                  mt-1.5
                  text-[9px]
                  sm:text-[10px]
                  uppercase
                  tracking-[0.2em]
                  font-medium
                  text-slate-500
                "
              >
                Java Developer
              </span>
            </div>
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="
              hidden
              md:flex
              items-center
              gap-1
              p-1
              rounded-full
              border
              border-white/[0.06]
              bg-white/[0.025]
            "
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  relative
                  px-4
                  py-2
                  rounded-full
                  text-[13px]
                  font-medium
                  text-slate-400
                  hover:text-white
                  hover:bg-white/[0.05]
                  transition-all
                  duration-200
                "
              >
                {item}
              </a>
            ))}
          </nav>

          {/* =================================================
              DESKTOP RESUME
          ================================================= */}

          <div className="hidden md:flex items-center">
            <motion.a
              href={resume}
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="
                group
                inline-flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-lg
                border
                border-blue-400/20
                bg-blue-500
                text-white
                text-[13px]
                font-semibold
                shadow-[0_8px_25px_rgba(59,130,246,0.18)]
                hover:bg-blue-600
                hover:border-blue-400/30
                transition-all
                duration-200
              "
            >
              <LuDownload
                size={15}
                className="
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                "
              />

              Resume
            </motion.a>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="
              md:hidden
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-lg
              border
              border-white/10
              bg-white/[0.035]
              text-slate-200
              hover:border-blue-400/30
              hover:bg-blue-500/10
              active:scale-95
              transition-all
              duration-150
            "
          >
            {isOpen ? <LuX size={21} /> : <LuMenu size={21} />}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence mode="sync">
        {isOpen && (
          <>
            {/* =================================================
                MOBILE OVERLAY
            ================================================= */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.15,
                ease: "linear",
              }}
              onClick={closeMenu}
              className="
                fixed
                inset-0
                z-[60]
                bg-black/60
                md:hidden
              "
            />

            {/* =================================================
                MOBILE DRAWER
            ================================================= */}

            <motion.aside
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                willChange: "transform",
              }}
              className="
                fixed
                top-0
                right-0
                z-[70]
                h-dvh
                w-[88%]
                max-w-[380px]
                p-6
                flex
                flex-col
                bg-[#0B0F17]
                border-l
                border-white/[0.08]
                shadow-[-20px_0_60px_rgba(0,0,0,0.35)]
                md:hidden
              "
            >
              {/* =================================================
                  DRAWER HEADER
              ================================================= */}

              <div className="flex items-center justify-between">
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="flex items-center gap-3"
                >
                  {/* Profile */}

                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      overflow-hidden
                      border
                      border-white/10
                    "
                  >
                    <img
                      src={kartik}
                      alt="Kartik Ade"
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />
                  </div>

                  {/* Name */}

                  <div className="leading-none">
                    <p
                      className="
                        font-heading
                        text-sm
                        font-semibold
                        text-white
                      "
                    >
                      Kartik Ade
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-slate-500
                      "
                    >
                      Java Developer
                    </p>
                  </div>
                </a>

                {/* Close Button */}

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="
                    w-10
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-slate-300
                    hover:text-white
                    hover:border-blue-400/30
                    hover:bg-blue-500/10
                    active:scale-95
                    transition-all
                    duration-150
                  "
                >
                  <LuX size={20} />
                </button>
              </div>

              {/* =================================================
                  DIVIDER
              ================================================= */}

              <div className="my-7 h-px bg-white/[0.07]" />

              {/* =================================================
                  NAVIGATION LABEL
              ================================================= */}

              <div
                className="
                  mb-3
                  px-3
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  font-semibold
                  text-slate-600
                "
              >
                Navigation
              </div>

              {/* =================================================
                  MOBILE NAVIGATION
              ================================================= */}

              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={closeMenu}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      px-4
                      py-3.5
                      rounded-lg
                      text-[15px]
                      font-medium
                      text-slate-400
                      hover:text-white
                      hover:bg-white/[0.04]
                      transition-all
                      duration-150
                    "
                  >
                    <span>{item}</span>

                    <LuArrowUpRight
                      size={17}
                      className="
                        opacity-0
                        -translate-x-1
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        text-blue-400
                        transition-all
                        duration-150
                      "
                    />
                  </a>
                ))}
              </nav>

              {/* =================================================
                  BOTTOM SECTION
              ================================================= */}

              <div className="mt-auto">
                {/* Availability */}

                <div
                  className="
                    mb-5
                    flex
                    items-center
                    gap-2
                    px-3
                    py-2
                    rounded-lg
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                  "
                >
                  <span
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-emerald-400
                      shadow-[0_0_10px_rgba(52,211,153,0.5)]
                    "
                  />

                  <span
                    className="
                      text-xs
                      text-slate-500
                    "
                  >
                    Available for opportunities
                  </span>
                </div>

                {/* Resume */}

                <a
                  href={resume}
                  download
                  onClick={closeMenu}
                  className="
                    w-full
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-5
                    py-3
                    rounded-lg
                    bg-blue-500
                    hover:bg-blue-600
                    active:scale-[0.98]
                    text-white
                    text-sm
                    font-semibold
                    shadow-[0_8px_25px_rgba(59,130,246,0.18)]
                    transition-all
                    duration-150
                  "
                >
                  <LuDownload size={17} />

                  Download Resume
                </a>

                {/* Tech Stack */}

                <p
                  className="
                    text-center
                    text-[11px]
                    mt-4
                    text-slate-600
                  "
                >
                  Java · Spring Boot · React
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;