import React from "react";
import "./About.css";
import about from "../../img/about.png";

function About() {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-banner-bg"></div>
        <img src={about} alt="about" className="a-banner"></img>
      </div>
      <div className="a-right">
        <div className="a-right-wrapper">
          <h1 className="display-2 a-title">About Me</h1>
          <div className="a-disc">
            <p>
              I am a Full Stack Javascript Developer. I create awesome
              <strong> Websites </strong>
              using MERN stack, awesome cross-platform
              <strong> Mobile Apps </strong>using React Native, as well as
              <strong> Desktop Apps </strong>using Electron JS.
            </p>
            <p>
              I graduated in Electronics and Communication Engineering and was
              always enthusiastic about <strong>Computer programming</strong>. C
              was my first ever language I coded in, after that I learned
              <strong> Python and Javascript</strong>.
            </p>
            <p>
              I have learned and practiced all the current technologies around
              and always willing to learn more. Currently I am exploring
              opportunties in <strong>WEB3.0 and blockchain technology</strong>{" "}
              too.
            </p>
            <p>
              Explore my <strong>portfolio</strong> to know more about my work
              and skillset.
            </p>
          </div>
          <button className="btn btn-secondary a-btn">Portfolio</button>
        </div>
      </div>
    </div>
  );
}

export default About;
