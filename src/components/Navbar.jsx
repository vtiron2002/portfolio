import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <ul>
        <NavLink exact to="/about" activeClassName="active">
          About me
        </NavLink>
        <NavLink exact to="/" activeClassName="active">
          Projects
        </NavLink>
        <NavLink exact to="/contact" activeClassName="active">
          Contact Me
        </NavLink>
      </ul>
    </header>
  );
}

export default Navbar;
