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
import {
  imgs as aardvarkPrevs,
  fullDescription as aardvarkDesc,
} from "../img/previews/Aardvark/index";
import { pageTransition } from "../Animation/AnimationConsts";
import useWindow from "../Hooks/useWindowWidth";

const Projects = ({ vp, page }) => {
  const [lodgel, setLodgel] = useState(lodgelPrevs);
  const [buddy, setBuddy] = useState(buddyPrevs);
  const [aardvark, setAardvark] = useState(aardvarkPrevs);
  const [lodgelD, setLodgelDesc] = useState(lodgelDesc);
  const [buddyD, setBuddyDesc] = useState(buddyDesc);
  const [aardvarkD, setAardvarkDesc] = useState(aardvarkDesc);

  const width = useWindow();
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
      <span className="page">
        {/* <Video /> */}
        <ProjectBox
          window={width}
          text={aardvarkD}
          prevs={aardvark}
        ></ProjectBox>
        <ProjectBox window={width} text={lodgelD} prevs={lodgel}></ProjectBox>
        <ProjectBox window={width} text={buddyD} prevs={buddy}></ProjectBox>
      </span>
    </PageWrap>
  );
};

export default Projects;
