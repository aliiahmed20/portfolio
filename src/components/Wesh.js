import React from "react";
import Bwesh from "./Bwesh";
import ME from '../assets/me.png';
import Socials from "./Socials";
import './wesh.css'

const wesh = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ali Ahmed</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <Bwesh />
        <Socials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>

      </div>
    </header>
  )
};

export default wesh;
