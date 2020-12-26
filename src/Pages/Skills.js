import React, { useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Video from "../Components/Video/Video";
import PageWrap from "./Page.style";
import HighScoreSection from "../Components/HighScoresSection/HighScoresSection";
import styled from "styled-components";
import { pageTransition } from "../Animation/AnimationConsts";
let StickyVid = styled.div`
  position: fixed;
  left: 20%;
  bottom: 30%;
`;
const Skills = ({ vp, page }) => {
  //this is stupid and so am I
  useEffect(() => {
    if (vp.current.scrollTop !== 0) {
      vp.current.scrollTop = 0;
    }
  }, [vp]);
  return (
    <>
      <PageWrap
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 1 }}
      >
        <StickyVid>
          <Video />
        </StickyVid>
        <NavBar page={page} />
        <span className="page">
          <HighScoreSection
            skills={[
              "REACT",
              "NODEJS",
              "PHP",
              "HTML5",
              "CSS3",
              "SQLITE",
              "POSTGRESQL",
              "MySQL",
              "EXPRESS",
              "REDUX",
            ]}
          />
        </span>
      </PageWrap>
    </>
  );
};

export default Skills;
