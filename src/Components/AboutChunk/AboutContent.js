import React from "react";
import AboutContentWrap from "./AboutContent.styles";
const AboutContent = (props) => {
  return (
    <AboutContentWrap className={props.mirrored ? "mirrored" : ""}>
      {props.children}
    </AboutContentWrap>
  );
};

export default AboutContent;
