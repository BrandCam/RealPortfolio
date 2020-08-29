import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Video from "../Components/Video/Video";
import PageWrap from "./Page.style";
import LargeCard from "../Components/UI/LargeCard";
import ProjectBox from "../Components/ProjectBox/ProjectBox";
import lodgelPrevs from "../img/previews/lodgel/index";
import { pageTransition } from "../Animation/AnimationConsts";
const Projects = ({ vp, page }) => {
  const [lodgel, setLodgel] = useState(lodgelPrevs);
  //this is stupid and so am I
  useEffect(() => {
    if (vp.current.scrollTop !== 0) {
      vp.current.scrollTop = 0;
    }
  }, [vp]);
  return (
    <PageWrap
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={{ duration: 1 }}
    >
      <NavBar page={page} />
      {/* <Video /> */}
      <ProjectBox prevs={lodgel}></ProjectBox>
      <ProjectBox prevs={lodgel}></ProjectBox>
      <ProjectBox prevs={lodgel}></ProjectBox>
    </PageWrap>
  );
};

export default Projects;
