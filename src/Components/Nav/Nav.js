import React, { useState, useRef, useContext } from "react";
import { NavLink, NavList, MenuHover } from "./Nav.style";
import CanvasContext from "../../Context/CanvasContext";
const Nav = () => {
  const [hoverPos, setHoverPos] = useState("-10000");
  // canvas vars from context
  let { canvasVars, setCanvasVars } = useContext(CanvasContext);
  let { center, zModFunc } = canvasVars;
  //Animation states
  const idel = () => {
    zModFunc.fastChange(0.01);
  };
  const warpSpeed = () => {
    zModFunc.fastChange(2);
  };
  const reverse = () => {
    zModFunc.fastChange(-0.13);
  };
  const speedUp = () => {
    zModFunc.warp(0.01);
  };

  const onPageChange = () => {
    idel();
    setTimeout(reverse, 1000);
    setTimeout(warpSpeed, 4000);
    setTimeout(idel, 6000);
    setTimeout(speedUp, 7000);
    setTimeout(speedUp, 7500);
    setTimeout(speedUp, 7600);
    setTimeout(speedUp, 7700);
    setTimeout(speedUp, 7800);
  };

  return (
    <NavList>
      {/* needs to jump down 62px per link */}
      <MenuHover
        style={{ transform: `matrix(1, 0, 0, 1,0, ${hoverPos})` }}
      ></MenuHover>
      <NavLink
        onClick={onPageChange}
        onMouseEnter={() => {
          setHoverPos("0");
        }}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        onClick={onPageChange}
        onMouseEnter={() => {
          setHoverPos("62");
        }}
        to="/projects"
      >
        Projects
      </NavLink>
      <NavLink
        onClick={onPageChange}
        onMouseEnter={() => {
          setHoverPos("124");
        }}
        to="/skills"
      >
        Skills
      </NavLink>
      <NavLink
        onClick={onPageChange}
        onMouseEnter={() => {
          setHoverPos("186");
        }}
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        onClick={onPageChange}
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
