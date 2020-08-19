import React, { useEffect } from "react";

const Projects = ({ vp }) => {
  //this is stupid and so am I
  useEffect(() => {
    if (vp.current.scrollTop !== 0) {
      vp.current.scrollTop = 0;
    }
  }, [vp]);
  return <div>PROJECTS</div>;
};

export default Projects;
