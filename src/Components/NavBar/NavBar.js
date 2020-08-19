import React from "react";
import NavBarWrap from "./NavBar.style";
import LogoWrap from "../UI/LogoImg.style";
import logo from "../../img/logo192.png";
import Button from "../UI/Button.styles";
import H1 from "../UI/TitleH1";

const NavBar = ({ page }) => {
  return (
    <NavBarWrap>
      <LogoWrap className="nav">
        <img src={logo} />
      </LogoWrap>
      <div className="content">
        <H1>{page}</H1>
        <Button to="/">Menu</Button>
      </div>
    </NavBarWrap>
  );
};

export default NavBar;
