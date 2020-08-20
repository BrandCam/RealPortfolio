import React from "react";
import ProjectBoxScene from "./ProjectBox.style";
const ProjectBox = () => {
  return (
    <ProjectBoxScene>
      <div className="box">
        <div className="box-face box-face-front">GIF</div>
        <div className="box-face box-face-back">GIF</div>
        <div className="box-face box-face-right">PIC</div>
        <div className="box-face box-face-left">PIC</div>
        <div className="box-face box-face-top">PIC</div>
        <div className="box-face box-face-bottom">PIC</div>
      </div>
    </ProjectBoxScene>
  );
};

export default ProjectBox;
