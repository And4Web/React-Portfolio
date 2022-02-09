import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "E-commerce App using React JS",
        img: "",
        desc: "",
        techUsed: [],
      },
      {
        id: 2,
        title: "Contact Manager App using React JS",
        img: "",
        desc: "",
        techUsed: [],
      },
      {
        id: 3,
        title: "Food Ordering App using React Native",
        img: "",
        desc: "",
        techUsed: [],
      },
    ],
  };

  render() {
    return <div></div>;
  }
}

export const Consumer = Context.Consumer;
