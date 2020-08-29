import React, { useEffect } from "react";
import img from "../img/logo192.png";
import LogoWrap from "../Components/UI/LogoImg.style";
import HomeWrap from "./Home.style";
import Nav from "../Components/Nav/Nav";
import git from "../img/git.png";
import ln from "../img/ln.png";
import SocialWrap from "../Components/UI/Social.style";
import { homeTransition } from "../Animation/AnimationConsts";
const Home = ({ vp, page }) => {
  //this is stupid and so am I
  useEffect(() => {
    if (vp.current.scrollTop !== 0) {
      vp.current.scrollTop = 0;
    }
  }, [vp]);
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
      </HomeWrap>
      <SocialWrap>
        <a href="https://github.com/BrandCam">
          <img src={git} />
        </a>
        <a href="https://www.linkedin.com/in/brandon-campbell-65279a123/">
          <img src={ln} />
        </a>
      </SocialWrap>
    </>
  );
};

export default Home;
