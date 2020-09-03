import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Video from "../Components/Video/Video";
import PageWrap from "./Page.style";
import LargeCard from "../Components/UI/LargeCard";
import ProjectBox from "../Components/ProjectBox/ProjectBox";
import {
  imgs as lodgelPrevs,
  fullDescription as lodgelDesc,
} from "../img/previews/lodgel/index";
import {
  imgs as buddyPrevs,
  fullDescription as buddyDesc,
} from "../img/previews/burger-buddy/index";
import { pageTransition } from "../Animation/AnimationConsts";
const Projects = ({ vp, page }) => {
  const [lodgel, setLodgel] = useState(lodgelPrevs);
  const [buddy, setBuddy] = useState(buddyPrevs);
  const [lodgelD, setLodgelDesc] = useState(lodgelDesc);
  const [buddyD, setBuddyDesc] = useState(buddyDesc);
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
      <ProjectBox text={lodgelD} prevs={lodgel}></ProjectBox>
      <ProjectBox text={buddyD} prevs={buddy}></ProjectBox>
    </PageWrap>
  );
};

export default Projects;
