import React from "react";

import Cloud from "./images/cloud.png";
import Mountain from "./images/mountain.png";
import Markus from "./images/markus-bitmoji.png";

import Header from "./Header";
import BottomContainer from "./BottomContainer";
import Skills from "./Skills";

function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <div className="top-container">
        <div id="upper-half">
          <img className="cloud top-cloud" src={Cloud} alt="cloud"></img>
          <h1>I'm Markús</h1>
          <h2>A web developer based in Iceland</h2>
          <img className="cloud bottom-cloud" src={Cloud} alt="cloud"></img>
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
        <Skills />
        <hr />
      </div>
      <BottomContainer />
    </React.Fragment>
  );
}

export default HomePage;
