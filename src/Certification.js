import React from "react";

import "./Certification.css";

function Certification(props) {
  return (
    <div>
      <div className="certification">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <img src={props.img} alt="Certification"></img>
        <hr />
      </div>

    </div>
  );
}

export default Certification;
