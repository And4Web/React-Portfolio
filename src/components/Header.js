import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  let [dropDown, setDropDown] = useState(true);
  let [dynamicClass, setDynamicClass] = useState("");
  let [scrollPos, setScrollPos] = useState(0);

  function toggleDropDown() {
    // console.log("clicked!");
    setDropDown(!dropDown);
    // console.log("dropDown: ", dropDown);
    if (dropDown === false) {
      setDynamicClass("active");
    } else {
      setDynamicClass(null);
    }
    // console.log("dynamicClass: ", dynamicClass);
    console.log(window.pageYOffset);
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="brand-logo" href="/">
            <i class="fa-solid fa-laptop"></i>
          </Link>
          <div className={`menubar ${dynamicClass}`}>
            {/* <Link to="/home" className="menu-item">
              Home
            </Link> */}
            <Link to="/skills" className="menu-item">
              Skills
            </Link>
            <Link to="/projects" className="menu-item">
              Projects
            </Link>
            <Link to="/contact" className="menu-item">
              Contact
            </Link>
          </div>

          <i
            class="fa-solid fa-bars"
            id="dropdown-icon"
            onClick={toggleDropDown}
          ></i>
        </div>
      </nav>
    </header>
  );
}
export default Header;
