import React from "react";
import "./Skills.css";
import skills from "../../img/skills.png";

export default function Home() {
  return (
    <div className="skills">
      <div className="sk-left">
        <div className="sk-left-wrapper">
          <h1 className="display-1">Skills</h1>
          <div className="sk-desc">
            <p>these are my skills.... work going on...</p>
            <p>something here...</p>
          </div>
        </div>
        <button className="btn btn-secondary sk-btn">Skills</button>
      </div>
      <div className="sk-right">
        <div className="sk-bg"></div>
        <img src={skills} alt="" className="sk-img" />
      </div>
    </div>
  );
}
