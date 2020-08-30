import React, { useContext } from "react";
import NavBarWrap from "./NavBar.style";
import LogoWrap from "../UI/LogoImg.style";
import logo from "../../img/logo192.png";
import Button from "../UI/Button.styles";
import H1 from "../UI/TitleH1";
import CanvasContext from "../../Context/CanvasContext";

const NavBar = ({ page }) => {
  let { setShowStatic, showStatic } = useContext(CanvasContext);
  return (
    <NavBarWrap>
      <LogoWrap className="nav">
        <img src={logo} />
      </LogoWrap>
      <div className="content">
        <H1>{page}</H1>
        <Button to="/" onClick={() => setShowStatic(true)}>
          Menu
        </Button>
      </div>
    </NavBarWrap>
  );
};

export default NavBar;
