import React, { Component } from "react";
import "./Projects.css";
import Card from "./Card";

class Projects extends Component {
  state = {
    projects: [
      {
        projectId: 1,
        projectTitle: "Project 1",
        projectImage: "",
        projectDesc: "",
        techUsed: [],
      },
      {
        projectId: 2,
        projectTitle: "Project 2",
        projectImage: "",
        projectDesc: "",
        techUsed: [],
      },
      {
        projectId: 3,
        projectTitle: "Project 3",
        projectImage: "",
        projectDesc: "",
        techUsed: [],
      },
      {
        projectId: 4,
        projectTitle: "Project 4",
        projectImage: "",
        projectDesc: "",
        techUsed: [],
      },
      {
        projectId: 5,
        projectTitle: "Project 5",
        projectImage: "",
        projectDesc: "",
        techUsed: [],
      },
      {
        projectId: 6,
        projectTitle: "Project 6",
        projectImage: "",
        projectDesc: "",
        techUsed: [],
      },
      {
        projectId: 7,
        projectTitle: "Project 7",
        projectImage: "",
        projectDesc: "",
        techUsed: [],
      },
    ],
  };

  render() {
    const { projects } = this.state;

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
          <div className="pr-right-wrapper">
            <div className="pr-desc">
              <h2 className="pr-desc-title">Project1</h2>
              <p className="pr-desc-desc">
                here goes the article about the project...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

{
  /**/
}
