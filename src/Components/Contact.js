
import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="Contact">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <a href="learningwavee@gmail.com" target="_blank" rel="noopener noreferrer"><button className="secondary-button">Submit</button>
</a>
      </div>
    </div>
  );
};

export default Contact;
