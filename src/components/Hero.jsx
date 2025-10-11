import React from "react";
import { TypeAnimation } from "react-type-animation";
import devImage from "../assets/img/man.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-[#0A0F2C] py-16 font-body flex items-center justify-center min-h-[90vh]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-6 flex flex-col-reverse gap-8 md:gap-10 lg:flex-row items-center justify-center text-center lg:text-left">
        {/* Text Section */}
        <div className="lg:w-1/2 lg:pr-12 mb-8 md:mb-10 lg:mb-0">
          <div className="hero-text flex flex-col items-center lg:items-start">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 font-heading leading-snug md:leading-tight lg:leading-tight">
              I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Kartik Ade
              </span>
              <span className="inline-block animate-wave origin-bottom">👋</span>{" "}
            </h1>

            {/* Typewriting */}
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium mb-6">
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
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed md:leading-relaxed max-w-lg">
              I build scalable backend systems and modern UIs using Java, Spring
              Boot, React, and Tailwind. Passionate about clean architecture,
              secure flows, and pixel-perfect design.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="relative px-6 py-2 text-white font-semibold border border-indigo-500/100 rounded-sm transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:border-transparent"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="relative px-6 py-2 text-white font-semibold border border-indigo-500/100 rounded-sm transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:border-transparent"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
            <img
              src={devImage}
              alt="Kartik coding"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
