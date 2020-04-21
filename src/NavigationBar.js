import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <ul className="menu">
      <li className="menu-link">
        <NavLink to="/about" exact>
          About
        </NavLink>
      </li>
      <li className="menu-link">
        <NavLink to="/education" exact>
          Education
        </NavLink>
      </li>
      <li className="menu-link">
        <NavLink to="/projects" exact>
          Projects
        </NavLink>
      </li>
    </ul>
  );
}

export default NavigationBar;
