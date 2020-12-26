import React, { useEffect, useContext } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Video from "../Components/Video/Video";
import PageWrap from "./Page.style";
import LargeCard from "../Components/UI/LargeCard";
import CanvasContext from "../Context/CanvasContext";
import { pageTransition } from "../Animation/AnimationConsts";
import Headline from "../Components/UI/Headline.stlye";
import AboutCunk from "../Components/AboutChunk/AboutChunk";
import AboutOne from "../Components/AboutChunk/AboutOne";
import AboutTwo from "../Components/AboutChunk/AboutTwo";
import AboutThree from "../Components/AboutChunk/AboutThree";
import TreeCanvas from "../Components/Canvas/TreeCanvas";
import useWindow from "../Hooks/useWindowWidth";
import { useState } from "react";
const About = ({ vp, page }) => {
  // canvas vars from context
  let { canvasVars, setCanvasVars } = useContext(CanvasContext);
  let { center, zModFunc } = canvasVars;
  const headOne = "See in me that which I see in you.";
  const headTwo = `You're gonna carry that weight.`;
  let window = useWindow();
  let [head, setHead] = useState(headOne);
  //Animation states
  const idel = (func) => {
    zModFunc.fastChange(0.01);
  };
  const warpSpeed = (func) => {
    zModFunc.fastChange(2);
  };
  const reverse = (func) => {
    zModFunc.fastChange(-0.13);
  };
  const speedUp = (func) => {
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

  //this is stupid and so am I
  useEffect(() => {
    if (vp.current.scrollTop !== 0) {
      vp.current.scrollTop = 0;
    }
  }, [vp]);

  useEffect(() => {
    if (window <= 1000 && head !== headTwo) {
      setHead(headTwo);
    }
    if (window > 1000 && head !== headOne) {
      setHead(headOne);
    }
  }, [window]);

  return (
    <PageWrap initial="out" animate="in" exit="out" variants={pageTransition}>
      <NavBar page={page} />
      <span className="page">
        <LargeCard size="header" className="header">
          <Headline>{head}</Headline>
        </LargeCard>
        <AboutCunk>
          <AboutTwo />
        </AboutCunk>
        <TreeCanvas></TreeCanvas>
        <AboutCunk mirrored>
          <AboutOne />
        </AboutCunk>
      </span>
    </PageWrap>
  );
};
export default About;
