import React from "react";
import BannerSection from "../../components/sections/BannerSection";
import "./Intro.css";
import banner from "../../img/banner.png";

export default function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-left-intro ">
          <h2 className="left-title display-6">Hello, I am</h2>
          <h1 className="name display-1 ">Anand Shukla</h1>
          <div className="skillSet">
            <div className="skillAnime">
              <div className="skill">Javascript Full Stack</div>
              <div className="skill">React JS Frontend</div>
              <div className="skill">Node JS Backend</div>
              <div className="skill">React Native Mobile</div>
              <div className="skill">Electron JS Desktop</div>
              <div className="skill">SQL/NoSQL Database</div>
            </div>
          </div>
          <div className="intro-btns">
            <button className="btn btn-secondary i-btn">Resume</button>
            <button className="btn btn-secondary i-btn">Contact</button>
          </div>
        </div>
        <div className="i-left-bg"></div>
      </div>
      <div className="i-right ">
        <div className="banner-bg"></div>
        <img src={banner} alt="image" className="banner"></img>
      </div>
    </div>
  );
}
