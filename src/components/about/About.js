import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GrCertificate } from "react-icons/gr";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>5+ Years </small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>100+ WorldWide</small>
            </article>
            <article className="about_card">
              <GrCertificate className="about_icon" />
              <h5>Certifications</h5>
              <small>10+ Globally Recognized </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            amet, id laudantium optio mollitia eligendi ad quisquam dolores at,
            cupiditate dolorum beatae cumque ab aliquid repudiandae quaerat
            repellendus natus debitis.
          </p>
          <a href="#contact" className="btn btn-primary">
            Want to know more ?
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
