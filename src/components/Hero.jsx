import React from "react";
import { TypeAnimation } from "react-type-animation";
import devImage from "../assets/img/man.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-[#0B1120] py-16 font-body flex items-center justify-center min-h-[90vh]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-6 flex flex-col-reverse gap-8 md:gap-10 lg:flex-row items-center justify-center text-center lg:text-left">
        {/* Text Section */}
        <div className="lg:w-1/2 lg:pr-12 mb-8 md:mb-10 lg:mb-0">
          <div className="hero-text flex flex-col items-center lg:items-start">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F1F5F9] mb-4 font-heading leading-snug md:leading-tight lg:leading-tight">
              I'm{" "}
              <span className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] text-transparent bg-clip-text">
                Kartik Ade
              </span>
              <span className="inline-block animate-wave origin-bottom">👋</span>
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] leading-relaxed md:leading-relaxed max-w-lg">
              Backend developer specializing in Java, Spring Boot, Spring Security, and JWT. Skilled in building secure, scalable, and maintainable APIs.
            </p>
          </div>

          {/* Typewriting */}
          <h3 className="text-lg sm:text-xl md:text-2xl text-[#94A3B8] font-medium mt-6">
            <TypeAnimation
              sequence={[
                "Full Stack Development",
                2000,
                "Frontend Development",
                2000,
                "Backend Development",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h3>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="relative px-6 py-2 text-[#F1F5F9] font-semibold border border-[#14B8A6] rounded-md transition duration-300 hover:bg-gradient-to-r hover:from-[#14B8A6] hover:to-[#38BDF8] hover:text-black"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="relative px-6 py-2 text-[#F1F5F9] font-semibold border border-[#14B8A6] rounded-md transition duration-300 hover:bg-gradient-to-r hover:from-[#14B8A6] hover:to-[#38BDF8] hover:text-black"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl border border-[#14B8A6]/50 rounded-xl overflow-hidden shadow-lg">
            <img
              src={devImage}
              alt="Kartik coding"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
