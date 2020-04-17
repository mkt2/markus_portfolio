import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <ul>
                <li>
                  <NavLink to="/about" exact>
                    About
                  </NavLink>
                </li>
                <li>
                <NavLink to="/travels" exact>
                    Travels
                  </NavLink>
                </li>
                <li>
                <NavLink to="/album" exact>
                    Photo Album
                  </NavLink>
                </li>
              </ul>
  );
}

export default NavigationBar;
