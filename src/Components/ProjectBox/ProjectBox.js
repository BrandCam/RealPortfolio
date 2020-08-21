import React from "react";
import ProjectBoxScene from "./ProjectBox.style";
import LargeCard from "../UI/LargeCard";
const ProjectBox = () => {
  return (
    <ProjectBoxScene>
      <div className="box">
        <div className="box-face box-face-front">GIF</div>
        <div className="box-face box-face-back">GIF</div>
        <div className="box-face box-face-right">
          <LargeCard size="small" style={{ height: "100%" }} />
        </div>
        <div className="box-face box-face-left">
          <LargeCard size="small" style={{ height: "100%" }} />
        </div>
        <div className="box-face box-face-top">
          <LargeCard size="small" style={{ height: "100%" }} />
        </div>
        <div className="box-face box-face-bottom">
          <LargeCard size="small" style={{ height: "100%" }} />
        </div>
      </div>
    </ProjectBoxScene>
  );
};

export default ProjectBox;
