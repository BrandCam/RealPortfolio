import React, { useEffect } from "react";

const Skills = ({ vp }) => {
  //this is stupid and so am I
  useEffect(() => {
    if (vp.current.scrollTop !== 0) {
      vp.current.scrollTop = 0;
    }
  }, [vp]);
  return <div>Skills</div>;
};

export default Skills;
