import React from "react";
import NavBarWrap from "./NavBar.style";
import LogoWrap from "./LogoImg.style";
import logo from "../img/logo192.png";
import Button from "../Components/UI/Button.styles";
import H1 from "../Components/UI/TitleH1";

const NavBar = () => {
  return (
    <NavBarWrap>
      <LogoWrap className="nav">
        <img src={logo} />
      </LogoWrap>
      <div className="content">
        <H1>CONTACT</H1>
        <Button>Menu</Button>
      </div>
    </NavBarWrap>
  );
};

export default NavBar;
