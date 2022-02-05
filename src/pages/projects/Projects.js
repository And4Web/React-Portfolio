import React from "react";
import "./Projects.css";

export default function Home() {
  return (
    <div className="projects">
      <div className="pr-left">
        <div className="pr-left-wrapper">
          <h1 className="display-1 pr-title">Projects</h1>
          <div className="pr-cards">
            <div className="pr-card">
              <h3>Project1</h3>
            </div>
            <div className="pr-card">
              <h3>Project2</h3>
            </div>
            <div className="pr-card">
              <h3>Project3</h3>
            </div>
            <div className="pr-card">
              <h3>Project4</h3>
            </div>
            <div className="pr-card">
              <h3>Project5</h3>
            </div>
            <div className="pr-card">
              <h3>Project6</h3>
            </div>
            <div className="pr-card">
              <h3>Project7</h3>
            </div>
            <div className="pr-card">
              <h3>Project8</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="pr-right">
        <div className="pr-bg"></div>
        <button className="btn btn-secondary pr-btn">Explore Projects</button>
      </div>
    </div>
  );
}
