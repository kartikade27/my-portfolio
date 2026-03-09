import React from "react";
import man from "../assets/img/man.jpg";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-[#0B1120] py-16 font-body flex items-center justify-center min-h-[80vh]"
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <div className="border border-[#14B8A6]/50 rounded-xl shadow-md overflow-hidden">
            <img
              src={man}
              alt="Kartik coding"
              className="w-full h-auto object-cover mx-auto rounded-xl lg:mx-0"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <h1 className="text-4xl font-extrabold text-[#F1F5F9] mb-6 font-heading">
            About{" "}
            <span className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] text-transparent bg-clip-text">
              Me
            </span>
          </h1>

          {/* Paragraph styled like project description */}
          <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
            <p className="text-[#94A3B8] text-lg text-start font-body">
              Seeking an opportunity in a challenging environment to prove my
              skills and utilize my knowledge and intelligence for the growth of
              the organization. Passionate Java Developer with a strong
              understanding of Core Java, Spring Boot, and backend development.
              Eager to apply my technical skills to real-world projects and grow
              as a software professional.
            </p>
          </div>

          {/* Button */}
          <a
            href="#contact"
            className="inline-block mt-8 bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] text-[#0B1120] font-semibold py-3 px-6 rounded-md shadow-lg hover:opacity-90 transition duration-300 tracking-wider"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
