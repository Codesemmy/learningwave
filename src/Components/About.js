import React from "react";

import perfect2 from "../Assets/perfect2.jpg";
import { Link } from "react-scroll"; // make sure this is imported at the top

/*import { BsFillPlayCircleFill } from "react-icons/bs";*/

const About = () => {
  return (
    <div className="about-section-container" id="About">
      
      <div className="about-section-image-container">
        <img src={perfect2} alt="" />
      </div>
      <div className="about-section-text-container">
        
        <h1 className="primary-heading">
        At Learning Wave
        </h1>
        <p className="primary-text">
        We design transformative learning experiences that blend evidence-based strategies, cutting-edge technologies, and learning analytics. 
        Whether you are building a scalable training program, launching a digital course, analysis performance, or reimagining professional development, we partner with you to deliver solutions that engage, empower, and elevate learners’ performance.
        </p>
        <p className="primary-text">
        Looking to transform how your team learns and performs? 
        </p>
        <div className="about-buttons-container">
          <Link
  to="Get" // Match the id of the About section exactly
  smooth={true}
  duration={500}
  offset={-70}
>
  <button className="secondary-button" id="Contactus">Contact Us</button>
</Link>

          
        </div>
      </div>
    </div>
  );
};

export default About;