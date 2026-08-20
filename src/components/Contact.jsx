import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import {
  LuArrowUpRight,
  LuCheck,
  LuLoaderCircle,
  LuMessageCircle,
} from "react-icons/lu";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* =========================================================
   CONTACT INFORMATION
========================================================= */

const contactInfo = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "kartikade399@gmail.com",
    href: "mailto:kartikade399@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Mumbai, India",
  },
];

/* =========================================================
   CONTACT INFO CARD
========================================================= */

const ContactInfoCard = ({ item, index }) => {
  const Icon = item.icon;

  const content = (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{
        x: 4,
      }}
      className="
        group
        relative
        flex
        items-center
        gap-4
        p-4
        sm:p-5
        rounded-xl
        border
        border-white/[0.08]
        bg-[#0D111A]
        hover:border-blue-400/25
        hover:bg-blue-500/[0.025]
        transition-all
        duration-300
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          items-center
          justify-center
          w-11
          h-11
          shrink-0
          rounded-xl
          border
          border-blue-400/15
          bg-blue-500/[0.06]
          text-blue-400
          group-hover:bg-blue-500/[0.10]
          group-hover:border-blue-400/25
          transition-all
          duration-300
        "
      >
        <Icon className="text-lg" />
      </div>

      {/* Content */}

      <div className="min-w-0">
        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.15em]
            font-medium
            text-slate-500
          "
        >
          {item.title}
        </p>

        <p
          className="
            mt-1
            text-sm
            sm:text-[15px]
            font-medium
            text-[var(--color-text-primary)]
            truncate
          "
        >
          {item.value}
        </p>
      </div>

      {/* Arrow */}

      {item.href && (
        <LuArrowUpRight
          className="
            ml-auto
            shrink-0
            text-slate-600
            group-hover:text-blue-400
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
            transition-all
            duration-300
          "
          size={18}
        />
      )}
    </motion.div>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        aria-label={`Send email to ${item.value}`}
      >
        {content}
      </a>
    );
  }

  return content;
};

/* =========================================================
   CONTACT INPUT
========================================================= */

const inputClasses = `
  w-full
  rounded-lg
  border
  border-white/[0.08]
  bg-white/[0.02]
  px-4
  py-3
  text-sm
  text-[var(--color-text-primary)]
  placeholder:text-slate-600
  outline-none
  transition-all
  duration-300
  focus:border-blue-400/40
  focus:bg-blue-500/[0.025]
  focus:ring-2
  focus:ring-blue-500/10
`;

/* =========================================================
   CONTACT SECTION
========================================================= */

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  /* =======================================================
     HANDLE FORM SUBMIT
  ======================================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_tfh7o8o",
        "template_n3x0hme",
        formRef.current,
        "bSZ4ZGfojyuhPTZPN"
      );

      toast.success("Message sent successfully 🚀");

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast.error(
        "Unable to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        bg-[var(--color-bg)]
        py-24
        sm:py-28
        lg:py-32
        overflow-hidden
      "
    >
      {/* =====================================================
          TOAST
      ====================================================== */}

      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />

      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-30
        "
      >
        <div className="animated-grid" />
      </div>

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          absolute
          -top-32
          -left-32
          w-[350px]
          h-[350px]
          rounded-full
          bg-blue-500/[0.06]
          blur-[130px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -right-32
          w-[350px]
          h-[350px]
          rounded-full
          bg-violet-500/[0.05]
          blur-[130px]
          pointer-events-none
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
            SECTION HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-center mb-14 sm:mb-16"
        >
          {/* Label */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-full
              border
              border-blue-400/15
              bg-blue-500/[0.04]
              text-[11px]
              uppercase
              tracking-[0.16em]
              font-medium
              text-blue-300
            "
          >
            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-emerald-400
                shadow-[0_0_8px_rgba(52,211,153,0.5)]
              "
            />

            Get In Touch
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-heading
              font-semibold
              tracking-[-0.035em]
              text-[var(--color-text-primary)]
            "
          >
            Let's{" "}
            <span className="text-blue-400">
              Connect
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-base
              sm:text-lg
              leading-7
              text-[var(--color-text-secondary)]
            "
          >
            Have an opportunity, project or just want to
            say hello? I'd be happy to hear from you.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN CONTACT GRID
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.85fr_1.15fr]
            gap-8
            lg:gap-12
            items-start
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            {/* Intro Card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0D111A]
                p-6
                sm:p-8
                shadow-[0_20px_60px_rgba(0,0,0,0.20)]
              "
            >
              {/* Decorative Glow */}

              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-40
                  h-40
                  rounded-full
                  bg-blue-500/[0.08]
                  blur-3xl
                  pointer-events-none
                "
              />

              {/* Icon */}

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-xl
                  border
                  border-blue-400/15
                  bg-blue-500/[0.06]
                  text-blue-400
                "
              >
                <LuMessageCircle size={22} />
              </div>

              {/* Heading */}

              <h3
                className="
                  relative
                  mt-6
                  text-2xl
                  sm:text-3xl
                  font-heading
                  font-semibold
                  tracking-tight
                  text-[var(--color-text-primary)]
                "
              >
                Let's build something{" "}
                <span className="text-blue-400">
                  meaningful.
                </span>
              </h3>

              {/* Description */}

              <p
                className="
                  relative
                  mt-4
                  text-sm
                  sm:text-base
                  leading-7
                  text-[var(--color-text-secondary)]
                "
              >
                I'm open to software development
                opportunities, backend projects and
                collaborations. If you have an idea or
                opportunity you'd like to discuss, feel free
                to reach out.
              </p>

              {/* Contact Details */}

              <div className="relative mt-8 space-y-3">
                {contactInfo.map((item, index) => (
                  <ContactInfoCard
                    key={item.title}
                    item={item}
                    index={index}
                  />
                ))}
              </div>

              {/* Availability */}

              <div
                className="
                  relative
                  mt-6
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-400
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

                Open to opportunities & collaborations
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE FORM
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#0D111A]
              p-6
              sm:p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.20)]
            "
          >
            {/* Form Glow */}

            <div
              className="
                absolute
                -top-24
                -right-24
                w-48
                h-48
                rounded-full
                bg-blue-500/[0.06]
                blur-3xl
                pointer-events-none
              "
            />

            {/* Form Header */}

            <div className="relative mb-7">
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  font-medium
                  text-blue-400
                "
              >
                Send a Message
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  sm:text-3xl
                  font-heading
                  font-semibold
                  tracking-tight
                  text-[var(--color-text-primary)]
                "
              >
                Start a conversation
              </h3>
            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative space-y-5"
            >
              {/* Name */}

              <div>
                <label
                  htmlFor="name"
                  className="
                    block
                    mb-2
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-slate-400
                  "
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  className={inputClasses}
                />
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    block
                    mb-2
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-slate-400
                  "
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className={inputClasses}
                />
              </div>

              {/* Subject */}

              <div>
                <label
                  htmlFor="subject"
                  className="
                    block
                    mb-2
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-slate-400
                  "
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  className={inputClasses}
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="
                    block
                    mb-2
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-slate-400
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                  className={`
                    ${inputClasses}
                    resize-none
                  `}
                />
              </div>

              {/* Submit Button */}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={
                  !loading
                    ? {
                        y: -2,
                      }
                    : {}
                }
                whileTap={
                  !loading
                    ? {
                        scale: 0.98,
                      }
                    : {}
                }
                className={`
                  w-full
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-3.5
                  rounded-lg
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    loading
                      ? `
                        bg-white/[0.06]
                        text-slate-500
                        cursor-not-allowed
                        border
                        border-white/[0.06]
                      `
                      : `
                        bg-blue-500
                        hover:bg-blue-600
                        text-white
                        shadow-[0_8px_25px_rgba(59,130,246,0.20)]
                        hover:shadow-[0_10px_30px_rgba(59,130,246,0.30)]
                      `
                  }
                `}
              >
                {loading ? (
                  <>
                    <LuLoaderCircle
                      size={18}
                      className="animate-spin"
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={14} />

                    Send Message

                    <LuArrowUpRight size={17} />
                  </>
                )}
              </motion.button>

              {/* Privacy / Status */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  pt-1
                  text-[11px]
                  text-slate-600
                "
              >
                <LuCheck
                  size={13}
                  className="text-emerald-500"
                />

                Your message will be sent securely.
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;