import React, { useState, useRef } from "react";
import { NavLink, NavList, MenuHover } from "./Nav.style";

const Nav = () => {
  const [hoverPos, setHoverPos] = useState("-500");

  return (
    <NavList>
      {/* needs to jump down 62px per link */}
      <MenuHover
        style={{ transform: `matrix(1, 0, 0, 1,0, ${hoverPos})` }}
      ></MenuHover>
      <NavLink
        onMouseEnter={() => {
          setHoverPos("0");
        }}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        onMouseEnter={() => {
          setHoverPos("62");
        }}
        to="/projects"
      >
        Projects
      </NavLink>
      <NavLink
        onMouseEnter={() => {
          setHoverPos("124");
        }}
        to="/skills"
      >
        Skills
      </NavLink>
      <NavLink
        onMouseEnter={() => {
          setHoverPos("186");
        }}
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        onMouseEnter={() => {
          setHoverPos("248");
        }}
        to="/N7-64"
      >
        Need A BREAK??
      </NavLink>
    </NavList>
  );
};

export default Nav;
