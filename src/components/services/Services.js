import React from "react";
import { FiCheck } from "react-icons/fi";
import "./services.css";


const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head" id='header1'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <FiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat?
              </p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat?
              </p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat?
              </p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat?
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head" id='header1'>
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <FiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat?
              </p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat?
              </p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat?
              </p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat?
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head" id='header1'>
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <FiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat?
              </p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat?
              </p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  );
};

export default Services;
