import React from "react";
import BannerSection from "../../components/sections/BannerSection";
import "../home/home.css";

export default function Home() {
  return (
    <div className="intro row justify-content-center">
      <div className="i-left col-md-6">
        <div className="i-left-intro ">
          <h2 className="left-title display-5">Hello, This is</h2>
          <h1 className="name display-2 ">
            <span className="bg-secondary text-light p-1 title-span ">
              Anand Shukla
            </span>
          </h1>
          <div className="SkillSet">
            <div className="skill">React JS Frontend</div>
            <div className="skill">Node JS Backend</div>
            <div className="skill">React Native Mobile</div>
            <div className="skill">Electron JS Desktop</div>
            <div className="skill">SQL/NoSQL Database</div>
            <div className="skill">Javascript Full Stack</div>
          </div>
        </div>
      </div>
      <div className="i-right col-md-6">
        <h1>right</h1>
      </div>
    </div>
  );
}
