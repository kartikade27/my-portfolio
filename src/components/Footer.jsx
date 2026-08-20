import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  LuArrowUp,
  LuArrowUpRight,
  LuMail,
} from "react-icons/lu";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/kartikade27",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kartik-ade-9971223b7",
      icon: <FaLinkedin />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yourprofile",
      icon: <FaTwitter />,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[var(--color-bg)]
        pt-20
        pb-8
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="animated-grid" />
      </div>

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div
        className="
          absolute
          -top-40
          left-1/4
          w-[350px]
          h-[350px]
          rounded-full
          bg-blue-500/[0.05]
          blur-[130px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          right-1/4
          w-[350px]
          h-[350px]
          rounded-full
          bg-violet-500/[0.05]
          blur-[130px]
          pointer-events-none
        "
      />

      {/* =====================================================
          TOP DIVIDER
      ====================================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-px
          bg-gradient-to-r
          from-transparent
          via-blue-500/50
          to-transparent
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* ===================================================
            MAIN FOOTER CONTENT
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-12
            lg:gap-16
          "
        >
          {/* =================================================
              BRANDING
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            {/* Logo / Name */}

            <a
              href="#home"
              className="
                inline-flex
                items-center
                gap-2
                text-2xl
                font-heading
                font-semibold
                tracking-tight
                text-[var(--color-text-primary)]
              "
            >
              Kartik

              <span className="text-blue-400">
                Ade
              </span>

              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-blue-400
                  shadow-[0_0_10px_rgba(59,130,246,0.7)]
                "
              />
            </a>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-6
                text-[var(--color-text-secondary)]
              "
            >
              Java Backend Developer focused on building
              secure, scalable and maintainable applications
              using modern backend technologies.
            </p>

            {/* Email */}

            <a
              href="mailto:kartikade399@gmail.com"
              className="
                group
                inline-flex
                items-center
                gap-2
                mt-6
                text-sm
                text-slate-400
                hover:text-blue-400
                transition-colors
              "
            >
              <LuMail
                size={16}
                className="
                  text-blue-400
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />

              kartikade399@gmail.com
            </a>
          </motion.div>

          {/* =================================================
              NAVIGATION
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.16em]
                font-medium
                text-slate-500
                mb-5
              "
            >
              Navigation
            </p>

            <div
              className="
                grid
                grid-cols-2
                gap-x-8
                gap-y-3
              "
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-1.5
                    w-fit
                    text-sm
                    text-slate-400
                    hover:text-blue-400
                    transition-colors
                  "
                >
                  <span
                    className="
                      w-0
                      h-px
                      bg-blue-400
                      transition-all
                      duration-300
                      group-hover:w-3
                    "
                  />

                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              CONNECT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.16em]
                font-medium
                text-slate-500
                mb-5
              "
            >
              Connect
            </p>

            <p
              className="
                text-sm
                leading-6
                text-[var(--color-text-secondary)]
                max-w-sm
              "
            >
              Interested in working together or discussing
              a project? Let's connect.
            </p>

            {/* Social Icons */}

            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-lg
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    text-slate-400
                    hover:text-blue-400
                    hover:border-blue-400/25
                    hover:bg-blue-500/[0.06]
                    transition-all
                    duration-300
                  "
                >
                  {React.cloneElement(social.icon, {
                    size: 18,
                  })}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            CTA STRIP
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          className="
            relative
            mt-14
            p-5
            sm:p-6
            rounded-2xl
            border
            border-white/[0.08]
            bg-white/[0.025]
            overflow-hidden
          "
        >
          {/* CTA Glow */}

          <div
            className="
              absolute
              -right-20
              -top-20
              w-40
              h-40
              rounded-full
              bg-blue-500/[0.08]
              blur-3xl
              pointer-events-none
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              sm:flex-row
              items-start
              sm:items-center
              justify-between
              gap-5
            "
          >
            <div>
              <h3
                className="
                  text-base
                  sm:text-lg
                  font-semibold
                  text-[var(--color-text-primary)]
                "
              >
                Let's build something meaningful.
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  text-[var(--color-text-secondary)]
                "
              >
                Have an opportunity or project in mind?
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                inline-flex
                items-center
                gap-2
                shrink-0
                px-5
                py-2.5
                rounded-lg
                bg-blue-500
                hover:bg-blue-600
                text-white
                text-sm
                font-semibold
                shadow-[0_8px_25px_rgba(59,130,246,0.18)]
                transition-all
                duration-300
              "
            >
              Get in Touch

              <LuArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </motion.a>
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM FOOTER
        ==================================================== */}

        <div
          className="
            mt-8
            pt-6
            border-t
            border-white/[0.07]
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          {/* Copyright */}

          <p
            className="
              text-xs
              sm:text-sm
              text-slate-500
              text-center
              sm:text-left
            "
          >
            © {new Date().getFullYear()} Kartik Ade.
            All rights reserved.
          </p>

          {/* Built With */}

          <p
            className="
              text-xs
              text-slate-500
              text-center
            "
          >
            Built with{" "}
            <span className="text-blue-400">
              React
            </span>{" "}
            &{" "}
            <span className="text-blue-400">
              Tailwind CSS
            </span>
          </p>

          {/* Back To Top */}

          <motion.button
            onClick={scrollToTop}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            aria-label="Back to top"
            className="
              flex
              items-center
              justify-center
              w-9
              h-9
              rounded-lg
              border
              border-white/[0.08]
              bg-white/[0.025]
              text-slate-400
              hover:text-blue-400
              hover:border-blue-400/25
              hover:bg-blue-500/[0.06]
              transition-all
              duration-300
            "
          >
            <LuArrowUp size={17} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;