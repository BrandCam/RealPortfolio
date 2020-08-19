import React, { useEffect } from "react";
import img from "../img/logo192.png";
import LogoWrap from "../Components/UI/LogoImg.style";
import HomeWrap from "./Home.style";
import Nav from "../Components/Nav/Nav";
const Home = ({ vp }) => {
  //this is stupid and so am I
  useEffect(() => {
    if (vp.current.scrollTop !== 0) {
      vp.current.scrollTop = 0;
    }
  }, [vp]);
  return (
    <>
      <HomeWrap>
        <LogoWrap>
          <img src={img} />
        </LogoWrap>
        <Nav />
      </HomeWrap>
      <div>social</div>
    </>
  );
};

export default Home;
