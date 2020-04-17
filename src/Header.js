import React from "react";

import NavigationBar from "./NavigationBar";
import Markus from "./images/markus-bitmoji2.png";

function Header() {
  return (
    <header>
      <div id="avatar-container">
        <a href="/"><img id="header-avatar" src={Markus} alt="Markús"></img></a>
      </div>
      <div id="navbar-container">
        <NavigationBar />
      </div>
    </header>
  );
}

export default Header;
