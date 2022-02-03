import React from "react";
import BannerSection from "../../components/sections/BannerSection";
import "./Intro.css";
import banner from "../../img/banner.png";

export default function Home() {
  return (
    <div className="intro">
      <div className="i-left col-md-6">
        <div className="i-left-intro ">
          <h2 className="left-title display-5">Hello, I am</h2>
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

          <button className="btn btn-secondary i-btn">Projects</button>
          <button className="btn btn-secondary i-btn">Contact</button>
        </div>
      </div>
      <div className="i-right col-md-6">
        <div className="banner-bg"></div>
        <img src={banner} alt="image" className="banner"></img>
      </div>
    </div>
  );
}
