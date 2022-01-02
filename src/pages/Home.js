import React from "react";
import Header from "../components/Header";
import myfoto from "../assets/myfoto.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../components/style.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="abouthome">
        <div className="foto">
          <img src={myfoto} />
        </div>
        <div className="about">
          <h1>Hello</h1>
          <h2>A Bit About Me</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <div className="linkhome">
            <Link to="/resume">
              <div className="linkbulat link1">Resume</div>
            </Link>
            <Link to="/project">
              <div className="linkbulat link2">Project</div>
            </Link>
            <Link to="/contact">
              <div className="linkbulat link3">Contact</div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
