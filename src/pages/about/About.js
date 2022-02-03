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
        <h1>right</h1>
      </div>
    </div>
  );
}

export default About;
