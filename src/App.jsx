import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Education from "./components/Education";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Education />
      <Project />
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
