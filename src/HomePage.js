import React from "react";

import Cloud from "./images/cloud.png";
import Mountain from "./images/mountain.png";
import Markus from "./images/markus-bitmoji.png";
import Chillies from "./images/chillies.png";
import Computer from "./images/computer.png";

import Header from "./Header";
import Footer from "./Footer";

function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <div className="top-container">
        <div id="upper-half">
          <img className="top-cloud" src={Cloud} alt="cloud"></img>
          <h1>I'm Markús</h1>
          <h2>A front end developer based in Iceland</h2>
          <img className="bottom-cloud" src={Cloud} alt="cloud"></img>
          <img className="mountain-img" src={Mountain} alt="mountain"></img>
        </div>
        <div id="lower-half">
          <img className="me" src={Markus} alt="Markús"></img>
        </div>
      </div>

      <div className="middle-container">
        <div className="profile">
          <h2>Hello.</h2>
          <p className="intro">
            My name is Markús and I'm a web developer. My background is in
            engineering and computer science and my passions include climbing
            and board games. I'm also a mountain guide and a teacher.
          </p>
        </div>
        <hr />
        <div className="skills">
          <h2>My Skills.</h2>
          <div className="skill-row">
            <img
              id="skill1"
              className="skill-img"
              src={Computer}
              alt="Skill 1"
            ></img>
            <h3>Lorem & Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, quis in duis, iaculis id felis.
              Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit
              nam, lectus ante, ut lorem eros.
            </p>
          </div>
          <div className="skill-row">
            <img
              id="skill2"
              className="skill-img"
              src={Chillies}
              alt="Skill 2"
            ></img>
            <h3>Lorem Ipsum Dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu,
              bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel
              eu, rutrum nam.
            </p>
          </div>
        </div>
        <hr />
        <div className="contact-me">
          <h2>Get In Touch</h2>
          <h3>If you love climbing as much as I do</h3>
          <p className="contact-message">
            Love climbing as much as I do? Let's talk about why slopers are such
            an endless source of fun vibes!
          </p>
          <a href="mailto:name@email.com" class="BUTTON_WPK">
            Contact Me
          </a>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
