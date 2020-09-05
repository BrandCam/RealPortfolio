import React, { useEffect, useContext } from "react";
import img from "../img/logo192.png";
import LogoWrap from "../Components/UI/LogoImg.style";
import HomeWrap from "./Home.style";
import Nav from "../Components/Nav/Nav";
import git from "../img/git.png";
import ln from "../img/ln.png";
import SocialWrap from "../Components/UI/Social.style";
import { homeTransition } from "../Animation/AnimationConsts";
import CanvasContext from "../Context/CanvasContext";
const Home = ({ vp, page }) => {
  let { setShowStatic, showStatic } = useContext(CanvasContext);
  //this is stupid and so am I
  useEffect(() => {
    if (vp.current.scrollTop !== 0) {
      vp.current.scrollTop = 0;
    }
    setShowStatic(false);
  }, [vp, showStatic]);
  return (
    <>
      <HomeWrap
        initial={false}
        animate="in"
        exit="out"
        variants={homeTransition}
      >
        <LogoWrap>
          <img src={img} />
        </LogoWrap>
        <Nav />
        <SocialWrap>
          <a href="https://github.com/BrandCam">
            <img src={git} />
          </a>
          <a href="https://www.linkedin.com/in/brandon-campbell-65279a123/">
            <img src={ln} />
          </a>
        </SocialWrap>
      </HomeWrap>
    </>
  );
};

export default Home;
