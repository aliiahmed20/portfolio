import React from "react";
import cv from "../assets/cv.pdf";

const Bwesh = () => {
  return (
    <div className="bwesh">
      <a href={cv} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Bwesh;
