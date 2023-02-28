import React from "react";
// import "./Header.css";
// import {Link} from "react-router-dom"
import { NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    color: "tomato",
  };

  return (
    <nav>
      <NavLink
        to='/'
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        end>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink
        to='sobre'
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Sobre
      </NavLink>{" "}
      |{" "}
      <NavLink
        to='login'
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Login
      </NavLink>
    </nav>
  );
};

export default Header;
