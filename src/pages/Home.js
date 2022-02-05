import React from "react";
import Intro from "../pages/intro/Intro";
import About from "../pages/about/About";
import Skills from "../pages/skills/Skills";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";

function Home() {
  return (
    <div>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
