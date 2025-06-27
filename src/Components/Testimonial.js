import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="Testimonial">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Our clients trust us to deliver learning that works. 
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "Learning Wave completely transformed our onboarding process. 
        The custom eLearning modules were clear, engaging, and cut our training time in half."
        — HR Manager, FinTech Startup
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Davids</h2>
      </div>
    </div>
  );
};

export default Testimonial;