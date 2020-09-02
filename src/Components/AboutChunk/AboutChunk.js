import React from "react";
import Video from "../Video/Video";
import AboutChunkWrap from "./AboutChunk.styles";
import AboutContent from "./AboutContent";
const AboutChunk = (props) => {
  return (
    <AboutChunkWrap className={props.mirrored ? "mirrored" : ""}>
      {!props.mirrored ? (
        <>
          <Video></Video>
          <AboutContent>{props.children}</AboutContent>
        </>
      ) : (
        <>
          <AboutContent mirrored>{props.children}</AboutContent>

          <Video />
        </>
      )}
    </AboutChunkWrap>
  );
};

export default AboutChunk;
