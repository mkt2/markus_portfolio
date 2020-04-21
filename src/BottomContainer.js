import React from "react";

import Footer from "./Footer";
import './BottomContainer.css';

function BottomContainer() {
  return (
    <div className="bottom-container">
      <div className="contact-me">
        <h2>Get In Touch</h2>
        <h3>Want to talk about your next project? Hit me up!</h3>
        <p className="contact-message"></p>
        <a href="mailto:mktorfa@gmail.com" class="BUTTON_WPK">
          Contact Me
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default BottomContainer;
