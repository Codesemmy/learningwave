import React from "react";
import Logo1 from "../Assets/Logo1.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo1} alt="" />
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
          <h3 style={{ color: "purple" }}>Our Services</h3>
          <span>About us</span>
          <span>Contact Us</span>
          <span>Book Now</span>
          <span>Testimonials</span>
          
        </div>
        <div className="footer-section-columns">
          <h3 style={{ color: "purple" }}>Contact</h3>
          <span>Instagram</span>
          <span>Linkedin</span>
          <span>Twitter</span>
          <span>Facebook</span>
        </div>
        <div className="footer-section-columns">
          <h3 style={{ color: "purple" }}>Terms & Conditions</h3>
          <h3 style={{ color: "purple" }}>Privacy Policy</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;