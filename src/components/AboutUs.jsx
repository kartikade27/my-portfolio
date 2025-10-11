import React from "react";
import man from "../assets/img/man.png";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-[#0A0F2C] py-16 font-body flex items-center justify-center min-h-[80vh]"
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
        {/* Image Section */}
        
        <div className=" lg:w-1/2">
          <div>
            <img
              src={man}
              alt="Kartik coding"
              className="ww-full h-auto object-cover mx-auto rounded-xl lg:mx-0"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <h1 className="text-4xl font-extrabold text-white mb-4 font-heading">
            About{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Me
            </span>
          </h1>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
            <p className="text-gray-500 text-lg leading-relaxed">
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
            className="inline-block mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-sm shadow-lg hover:opacity-80 transition duration-300 tracking-wider"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
