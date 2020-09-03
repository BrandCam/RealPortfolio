import React, { useState } from "react";
import ProjectPrevWrap from "./ProjectPrev.style";
import Description from "./ProjectPrevDescription";
import PacBar from "../PacBar/PacBar";
import LargeCard from "../UI/LargeCard";
// import img from "../../img/previews/lodgel/lodgel1.gif";
// import img from "../../img/previews/lodgel/lodgel2.gif";
// import img from "../../img/previews/lodgel/lodgel3.gif";
// import img from "../../img/previews/lodgel/lodgel4.gif";
// import img from "../../img/previews/lodgel/lodgel5.gif";
// import img from "../../img/previews/lodgel/lodgel6.gif";
// const images = require.context("../../img/previews/lodgel", true);
// let img = images(`./lodgel6}.gif`);

const ProjectPrev = ({ prevs, selected, selectHandle, text }) => {
  let [selectedPrev, setSelectedPrev] = useState(prevs[0]);
  const handelPrevSelect = (id) => {
    setSelectedPrev(prevs[id]);
  };
  return (
    <ProjectPrevWrap>
      <div
        onClick={(e) => {
          selectHandle(e);
        }}
        className={`img-wrap ${selected ? "" : "selected"}`}
      >
        <img
          style={{ width: "100%", height: "100%", maxHeight: "700px" }}
          src={selectedPrev.image}
        />
      </div>
      <section className={selected ? "" : "hidden"}>
        <PacBar select={handelPrevSelect} dots={prevs}></PacBar>
        <LargeCard style={{ marginTop: "0" }}>
          <Description text={text} selectedPrev={selectedPrev} />
        </LargeCard>
      </section>
    </ProjectPrevWrap>
  );
};

export default ProjectPrev;
