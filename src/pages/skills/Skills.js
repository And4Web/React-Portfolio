import React from "react";
import "./Skills.css";
import skills from "../../img/skills.png";
import mongo from "../../img/mongo.png";
import react from "../../img/react.png";
import node from "../../img/node.png";
import express from "../../img/express.png";
import js from "../../img/js.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import sass from "../../img/sass.png";
import bs from "../../img/bs.png";
import rnative from "../../img/rnative.png";
import postgre from "../../img/postgre.png";
import next from "../../img/next.png";

export default function Home() {
  return (
    <div className="skills">
      <div className="sk-left">
        <div className="sk-left-wrapper">
          <h1 className="display-1">Skills</h1>
          <div className="sk-desc">
            <div className="sk-logos">
              <div className="sk-logos-card">
                <img src={html} alt="" className="sk-logo" />
              </div>
              <div className="sk-logos-card">
                <img src={css} alt="" className="sk-logo" />
              </div>
              <div className="sk-logos-card">
                <img src={js} alt="" className="sk-logo" />
              </div>
              <div className="sk-logos-card">
                <img src={sass} alt="" className="sk-logo" />
              </div>
              <div className="sk-logos-card">
                <img src={bs} alt="" className="sk-logo" />
              </div>
              <div className="sk-logos-card">
                <img src={react} alt="" className="sk-logo" />
              </div>
              <div className="sk-logos-card">
                <img src={next} alt="" className="sk-logo" />
              </div>
              <div className="sk-logos-card">
                <img src={rnative} alt="" className="sk-logo" />
              </div>
              <div className="sk-logos-card">
                <img src={node} alt="" className="sk-logo" />
              </div>
              <div className="sk-logos-card">
                <img src={express} alt="" className="sk-logo" />
              </div>
              <div className="sk-logos-card">
                <img src={mongo} alt="" className="sk-logo" />
              </div>
              <div className="sk-logos-card">
                <img src={postgre} alt="" className="sk-logo" />
              </div>
            </div>
          </div>
          <button className="btn btn-secondary sk-btn">Skills</button>
        </div>
      </div>
      <div className="sk-right">
        <div className="sk-bg"></div>
        <img src={skills} alt="" className="sk-img" />
      </div>
    </div>
  );
}
