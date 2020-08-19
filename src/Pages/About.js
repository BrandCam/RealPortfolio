import React, { useEffect } from "react";

const About = ({ vp }) => {
  //this is stupid and so am I
  useEffect(() => {
    if (vp.current.scrollTop !== 0) {
      vp.current.scrollTop = 0;
    }
  }, [vp]);
  return <div>ABOUT</div>;
};
export default About;
