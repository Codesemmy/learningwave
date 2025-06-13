import React from "react";

import AboutBackgroundImage1 from "../Assets/about-background-image1.png";
/*import { BsFillPlayCircleFill } from "react-icons/bs";*/

const About = () => {
  return (
    <div className="about-section-container">
      
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage1} alt="" />
      </div>
      <div className="about-section-text-container">
        
        <h1 className="primary-heading">
        At Learning Wave
        </h1>
        <p className="primary-text">
         We craft smarter, evidence-based learning experiences that drive real impact. <b/>Whether you're onboarding new employees, building leadership pipelines, or transforming digital training, 
        we blend instructional design, learning analytics, and technology consulting to help your people perform at their best.
        </p>
        <p className="primary-text">
        Looking to transform how your team learns and performs? 
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Contact Us</button>
          
        </div>
      </div>
    </div>
  );
};

export default About;