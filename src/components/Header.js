import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="brand-logo" href="/">
            And4Web
          </Link>
          <div className="menubar">
            <Link to="/home" className="menu-item">
              Home
            </Link>
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
        </div>
      </nav>
    </div>
  );
}
export default Header;
