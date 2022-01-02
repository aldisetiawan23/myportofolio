import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_container">
      <div className="home">
        <div className="lingkaran"></div>
        <Link to="/">
          <h3>Aldi Setiawan</h3>
        </Link>
        <p>Frontend Web Developer</p>
      </div>
      <div className="navlink">
        <Link to="/resume">Resume</Link> |<Link to="/project">Project</Link> |
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
