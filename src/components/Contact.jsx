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
          toast.success("Email Sent Successfully!", {
            position: "top-center",
            autoClose: 2000,
          });
          formRef.current.reset();
        },
        (error) => {
          console.error("Error:", error);
          toast.error("Something went wrong!", {
            position: "top-center",
            autoClose: 2000,
          });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="bg-[#0A0F2C] py-20 min-h-screen flex items-center font-body"
    >
      <ToastContainer position="top-center" autoClose={2000} />

      <div className="container mx-auto px-6 text-white">
        <h2 className="text-4xl font-logo font-extrabold text-white mb-12 text-center">
          Contact
          <span className="bg-gradient-to-r ml-2 from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Me
          </span>
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-8 rounded-lg shadow-lg bg-[#0A0F2C] border border-indigo-500/50"
        >
          <div className="form-control mb-4">
            <label className="label font-body">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered input-dark w-full font-body"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label font-body">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered input-dark w-full font-body"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label font-body">
              <span className="label-text text-white">Message</span>
            </label>
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered textarea-dark w-full font-body"
              rows="5"
              required
            ></textarea>
          </div>
 
                    
          <div className="form-control mt-6">
            <button
              type="submit"
              className={`px-6 py-2 border  border-indigo-500/50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-sm transition duration-300 hover:opacity-90 hover:shadow-xl w-full font-body ${loading ? "loading" : ""}`}
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
