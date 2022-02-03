import React from "react";
import BannerSection from "../../components/sections/BannerSection";
import "../home/home.css";
import banner from "../../img/banner.png";

export default function Home() {
  return (
    <div className="intro">
      <div className="i-left col-md-6">
        <div className="i-left-intro ">
          <h2 className="left-title display-5">Hello, I am</h2>
          <h1 className="name display-2 ">
            <span className="bg-secondary text-light p-1 title-span ">
              Anand Shukla
            </span>
          </h1>
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
          <div className="title-disc">
            <p>
              I am a Full Stack Javascript Developer. I create awesome{" "}
              <span className="title-span-p">Websites</span> using MERN stack,
              awesome cross-platform{" "}
              <span className="title-span-p">Mobile Apps</span> using React
              Native, as well as{" "}
              <span className="title-span-p">Desktop Apps</span> using Electron
              JS. Explore my portfolio to know more about my work and skillset.
            </p>
          </div>
        </div>
      </div>
      <div className="i-right col-md-6">
        <div className="banner-bg"></div>
        <img src={banner} alt="image" className="banner"></img>
      </div>
    </div>
  );
}
