import React, { useState } from "react";
import ProjectBoxScene from "./ProjectBox.style";
import LargeCard from "../UI/LargeCard";
import ProjectPrev from "../ProjectPrev/ProjectPrev";
const ProjectBox = ({ prevs }) => {
  let [isSelected, setIsSelected] = useState(false);
  return (
    <ProjectBoxScene
      onClick={() => setIsSelected(true)}
      className={isSelected ? "selected" : ""}
    >
      <div className="box">
        <div className="box-face box-face-front">
          <ProjectPrev selected={isSelected} prevs={prevs} />
        </div>
        <div className="box-face box-face-back">
          <ProjectPrev selected={isSelected} prevs={prevs} />
        </div>
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
