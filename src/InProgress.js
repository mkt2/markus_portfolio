import React from "react";

import Header from "./Header";
import Footer from "./Footer";

function InProgress(props) {
  return (
    <div>
      <Header />
      <div className="in-progress">
        <h1>{props.title}</h1>
        <p>This page is currently in progress</p>
      </div>

      <Footer />
    </div>
  );
}

export default InProgress;
