import React from "react";

import Header from "./Header";
import BottomContainer from "./BottomContainer";
import "./ContentPages.css";

function About(props) {
  return (
    <React.Fragment>
      <Header />
      <div className="content-pages">
        <h1 className="content-page-title">About</h1>
        <p>
          This page was created by Markús, an Icelandic developer and is still in process.
        </p>
        
      </div>

      <BottomContainer />
    </React.Fragment>
  );
}

export default About;
