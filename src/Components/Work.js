import React from "react";
import Consulting from "../Assets/Consulting.png";
import Strategy from "../Assets/Strategy.png";
import Instructional from "../Assets/Instructional.png";
import Workshop from "../Assets/Workshop.png";

const Work = () => {
  const workInfoData = [
    {
      image: Consulting,
      title: "Technology Consulting",
      text: "LMS/ LXP consulting, Authoring tools consulting",
    },
    {
      image: Strategy,
      title: "Learning Strategy",
      text: "Needs analysis, Performance analysis, Learning measurement, program evaluation",
    },
    {
      image: Instructional,
      title: "Instructional Design",
      text: "E-learning development, Curriculum design, Scenario-based learning",
    },
    {
      image: Workshop,
      title: "Workshop",
      text: "Train-the-trainer, DEI training, Leadership development, Learning analytics workshops",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        
        <h1 className="primary-heading">Our Services</h1>
        <p className="primary-text">
        We design data-driven learning experiences that engage teams 
         through smart strategy and digital tools.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;