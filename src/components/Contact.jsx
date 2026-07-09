import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_tfh7o8o",
        "template_n3x0hme",
        formRef.current,
        "bSZ4ZGfojyuhPTZPN"
      )
      .then(() => {
        toast.success("Message sent successfully 🚀");
        formRef.current.reset();
      })
      .catch(() => {
        toast.error("Something went wrong 😢");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="relative bg-[var(--color-bg)] py-20 overflow-hidden"
    >
      <ToastContainer position="top-center" autoClose={2000} />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[var(--color-primary)]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[var(--color-secondary)]/20 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-transparent bg-clip-text">
              Me
            </span>
          </h2>

          <p className="text-[var(--color-text-secondary)] mb-8 max-w-md">
            I'm open to opportunities and collaborations. Feel free to reach
            out if you have a project or just want to connect.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-[var(--color-card)] p-4 rounded-lg border border-[var(--color-border)]">
              <FaEnvelope className="text-[var(--color-secondary)]" />
              <span className="text-[var(--color-text-primary)]">
                kartikade399@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4 bg-[var(--color-card)] p-4 rounded-lg border border-[var(--color-border)]">
              <FaMapMarkerAlt className="text-[var(--color-secondary)]" />
              <span className="text-[var(--color-text-primary)]">
                Mumbai, India
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--color-card)] backdrop-blur-md border border-[var(--color-border)] p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full mb-4 p-3 rounded-md bg-transparent border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-secondary)] outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full mb-4 p-3 rounded-md bg-transparent border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-secondary)] outline-none"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full mb-4 p-3 rounded-md bg-transparent border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-secondary)] outline-none"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full mb-4 p-3 rounded-md bg-transparent border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-secondary)] outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              loading
                ? "bg-[var(--color-border)] cursor-not-allowed"
                : "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-[var(--color-bg)] hover:scale-105"
            }`}
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;