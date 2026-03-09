import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_4dv4y1m",
        "template_7kqgfap",
        formRef.current,
        "50scnYL_4XP1XGcKG"
      )
      .then(
        () => {
          toast.success("Email Sent Successfully!", { position: "top-center", autoClose: 2000 });
          formRef.current.reset();
        },
        (error) => {
          console.error("Error:", error);
          toast.error("Something went wrong!", { position: "top-center", autoClose: 2000 });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="bg-[#0B1120] py-20 min-h-screen flex items-center font-body">
      <ToastContainer position="top-center" autoClose={2000} />

      <div className="container mx-auto px-6 text-white">
        <h2 className="text-4xl font-logo font-extrabold text-center mb-12">
          Contact
          <span className="bg-gradient-to-r ml-2 from-[#14B8A6] to-[#38BDF8] text-transparent bg-clip-text">
            Me
          </span>
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-8 rounded-2xl border border-transparent 
                     hover:border-gradient-to-r hover:from-[#14B8A6] hover:to-[#38BDF8] 
                     transition-all duration-300 bg-[#111827]"
        >
          <div className="form-control mb-4">
            <label className="label font-body text-left">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input w-full font-body p-3 rounded-md bg-transparent border-[#14B8A6]/60 focus:border-[#14B8A6] focus:ring-1 focus:ring-[#38BDF8] focus:outline-none"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label font-body text-left">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input w-full font-body p-3 rounded-md bg-transparent border-[#14B8A6]/60 focus:border-[#14B8A6] focus:ring-1 focus:ring-[#38BDF8] focus:outline-none"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label font-body text-left">
              <span className="label-text text-white">Message</span>
            </label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="textarea w-full font-body p-3 rounded-md bg-transparent border-[#14B8A6]/60 focus:border-[#14B8A6] focus:ring-1 focus:ring-[#38BDF8] focus:outline-none"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className={`w-full px-6 py-3 rounded-md font-bold text-white 
                         bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] 
                         hover:opacity-90 hover:scale-105 transition-transform duration-300 
                         ${loading ? "cursor-not-allowed opacity-70" : ""}`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
