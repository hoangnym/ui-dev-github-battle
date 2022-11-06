import * as React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="split">
      <NavLink
        to="/"
        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
      />
      Github Battle
      <ul className="row">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/battle"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Battle
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
