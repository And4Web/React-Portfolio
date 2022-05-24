import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  let [dropDown, setDropDown] = useState(false);

  function toggleDropDown() {
    setDropDown(!dropDown);
  }

  return (
    <div className="header">
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="brand-logo" href="/">
            <i class="fa-solid fa-laptop"></i>
          </Link>
          <div className="menubar active">
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
    </div>
  );
}
export default Header;
