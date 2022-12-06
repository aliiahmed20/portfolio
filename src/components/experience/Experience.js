import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_fronend">
          <h3>FrontEnd Development</h3>
          <div className="experience_content">
            <div>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
            <div>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
            <div>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <h4>JS</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
            <div>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <h4>BS</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
            <div>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <h4>REACT</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
            <div>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <h4>TCSS</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
            <div>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
          <div>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <h4>PostegreSQL</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
            <div>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <h4>MySql</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
            <div>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
            <div>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <h4>ETL</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
            <div>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
