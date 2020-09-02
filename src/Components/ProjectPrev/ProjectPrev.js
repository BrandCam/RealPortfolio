import React, { useState } from "react";
import ProjectPrevWrap from "./ProjectPrev.style";
import PacBar from "../PacBar/PacBar";
// import img from "../../img/previews/lodgel/lodgel1.gif";
// import img from "../../img/previews/lodgel/lodgel2.gif";
// import img from "../../img/previews/lodgel/lodgel3.gif";
// import img from "../../img/previews/lodgel/lodgel4.gif";
// import img from "../../img/previews/lodgel/lodgel5.gif";
// import img from "../../img/previews/lodgel/lodgel6.gif";
// const images = require.context("../../img/previews/lodgel", true);
// let img = images(`./lodgel6}.gif`);

const ProjectPrev = ({ prevs, selected, selectHandle }) => {
  let [selectedPrev, setSelectedPrev] = useState(prevs[0].image);
  const handelPrevSelect = (id) => {
    setSelectedPrev(prevs[id].image);
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
          src={selectedPrev}
        />
      </div>
      <section className={selected ? "" : "hidden"}>
        <PacBar select={handelPrevSelect} dots={prevs}></PacBar>
        <p>
          Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail
          180 berm. Half-cab camel back ollie transition ledge Wes Humpston
          1080. Carve casper switch kickturn late downhill. Hardware nosebone
          Rick McCrank bluntslide bigspin steps egg plant. Slap maxwell roll-in
          airwalk fast plant fastplant pivot.
        </p>
      </section>
    </ProjectPrevWrap>
  );
};

export default ProjectPrev;
