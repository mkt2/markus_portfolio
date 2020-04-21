import React from "react";

import Climbing from "./images/climbing.png";
import Skiing from "./images/skiing.png";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h2>Hobbies</h2>
      <div className="skill-row">
        <img
          id="skill-img-1"
          className="skill-img"
          src={Climbing}
          alt="Skill 1"
        ></img>
        <h3>Climbing</h3>
        <p>
          I'm a passionate climber and before the times of Covid you could find
          me at my local climbing gym most afternoons. My favorite type of
          project is slopers quickly followed by dynos.
        </p>
      </div>
      <div className="skill-row">
        <img
          id="skill-img-2"
          className="skill-img"
          src={Skiing}
          alt="Skill 2"
        ></img>
        <h3>Skiing</h3>
        <p>
          I love skiing which is why winter is my favorite season. My favorite place to ski is Hakuba, Japan. I highly
          recommend Yoko's hostel for anyone who finds himself in the area!
        </p>
      </div>
    </div>
  );
}

export default Skills;
