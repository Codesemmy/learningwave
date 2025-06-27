import React from "react";
import logowf from "../Assets/logowf.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={logowf} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <h3 style={{ color: "white" }}>Our Services</h3>
          <a href="#About"><span>About us</span></a>
          <a href="#Contactus"><span>Contact Us</span></a>
          <a href="#Book"><span>Book Now</span></a>
          <a href="#Testimonial"><span>Testimonials</span></a>



          
        </div>
        <div className="footer-section-columns">
          <h3 style={{ color: "white" }}>Contact</h3>
          <span>Instagram</span>
          <span>Linkedin</span>
          <span>Twitter</span>
          <span>Facebook</span>
        </div>
        <div className="footer-section-columns">
          <h3 style={{ color: "white" }}>Terms & Conditions</h3>
          <h3 style={{ color: "white" }}>Privacy Policy</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;