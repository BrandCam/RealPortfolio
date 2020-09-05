import React, { useState, useEffect } from "react";
import ProjectBoxScene from "./ProjectBox.style";
import LargeCard from "../UI/LargeCard";
import ProjectPrev from "../ProjectPrev/ProjectPrev";
const ProjectBox = ({ window, prevs, text }) => {
  let [isSelected, setIsSelected] = useState(false);
  const selectHandler = (e) => {
    e.preventDefault();
    setIsSelected(!isSelected);
  };
  useEffect(() => {
    if (window <= 700) {
      setIsSelected(true);
    }
  }, [window]);
  return (
    <ProjectBoxScene
      selected={isSelected}
      className={isSelected ? "selected" : ""}
    >
      <div className="box">
        <div className="box-face box-face-front">
          <ProjectPrev
            selectHandle={selectHandler}
            selected={isSelected}
            prevs={prevs}
            text={text}
          />
        </div>
        <div className="box-face box-face-back">
          <ProjectPrev
            selectHandle={selectHandler}
            selected={isSelected}
            prevs={prevs}
            text={text}
          />
        </div>
        <div className="box-face box-face-right" onClick={selectHandler}>
          <LargeCard size="small" style={{ height: "100%" }} />
        </div>
        <div className="box-face box-face-left" onClick={selectHandler}>
          <LargeCard size="small" style={{ height: "100%" }} />
        </div>
        <div className="box-face box-face-top" onClick={selectHandler}>
          <LargeCard size="small" style={{ height: "100%" }} />
        </div>
        <div className="box-face box-face-bottom" onClick={selectHandler}>
          <LargeCard size="small" style={{ height: "100%" }} />
        </div>
      </div>
    </ProjectBoxScene>
  );
};

export default ProjectBox;
