import React from "react";

const educationData = [
  {
    title: "Bachelor of Computer Application",
    date: "2019-2022",
    institution: "Sahyog College of IT & Management",
  },
  {
    title: "Higher Secondary Certificate",
    date: "2017-2019",
    institution: "GSS College Majiwada",
  },
  {
    title: "Secondary School Certificate",
    date: "2015-2017",
    institution: "GSS School Majiwada",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-[#0A0F2C] py-20 font-body">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-logo font-extrabold text-white mb-12 relative">
          My
          <span className="bg-gradient-to-r ml-2 from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Education
          </span>

          {/* Top Circle (Desktop & Tablet) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[72px]">
            <span className="h-6 w-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full block"></span>
          </div>
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Center Line */}
          <div className="absolute w-1 bg-gray-700 h-full left-1/2 transform -translate-x-1/2"></div>

          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative w-full md:w-1/2 px-6 py-6 mb-10 ${
                index % 2 === 0 ? "md:self-start text-left" : "md:self-end text-right"
              }`}
            >
              {/* Timeline Dot (Mobile) */}
              <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 h-5 w-5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full block md:hidden"></span>

              {/* Content Card */}
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:bg-opacity-20 transition duration-300">
                <h3 className="text-2xl font-logo font-semibold text-gray-600">
                  {edu.title}
                </h3>
                <p className="text-sm font-body text-gray-600 mt-1">{edu.date}</p>
                <p className="text-md font-body text-gray-600 mt-2">{edu.institution}</p>
              </div>
            </div>
          ))}

          {/* Bottom Circle (Desktop & Tablet) */}
          <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <span className="h-6 w-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full block"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
