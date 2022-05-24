import React from "react";
import Intro from "../pages/intro/Intro";
import About from "../pages/about/About";
import Skills from "../pages/skills/Skills";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
