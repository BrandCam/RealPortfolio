import React, { useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Video from "../Components/Video/Video";
import PageWrap from "./Page.style";
import HighScoreSection from "../Components/HighScoresSection/HighScoresSection";
import styled from "styled-components";
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
      <StickyVid>
        <Video />
      </StickyVid>
      <PageWrap>
        <NavBar page={page} />

        <HighScoreSection
          skills={[
            "REACT",
            "NODEJS",
            "HTML5",
            "CSS3",
            "SQLITE",
            "POSTGRESQL",
            "EXPRESS",
            "REDUX",
          ]}
        />
      </PageWrap>
    </>
  );
};

export default Skills;
