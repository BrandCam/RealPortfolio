import React from "react";
import img from "../img/logo192.png";
import LogoWrap from "../Components/LogoImg.style";
import HomeWrap from "./Home.style";
import Nav from "../Components/Nav";
const Home = () => {
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