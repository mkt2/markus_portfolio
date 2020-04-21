import React from "react";

import Header from "./Header";
import BottomContainer from "./BottomContainer";
import "./ContentPages.css";

function InProgress(props) {
  return (
    <React.Fragment>
      <Header />
      <div className="content-pages in-progress">
        <h1 className="content-page-title">{props.title}</h1>
        <p>This page is currently in progress</p>
      </div>

      <BottomContainer />
    </React.Fragment>
  );
}

export default InProgress;
