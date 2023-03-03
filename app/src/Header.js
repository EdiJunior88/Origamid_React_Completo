import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    color: "tomato",
  };

  const location = useLocation();

  useEffect(() => {
    console.log("Mudou a rota");
  }, [location]);

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
      </NavLink>
    </nav>
  );
};

export default Header;
