import React, { useState } from "react";
import ProjectPrevWrap from "./ProjectPrev.style";
// import img from "../../img/previews/lodgel/lodgel1.gif";
// import img from "../../img/previews/lodgel/lodgel2.gif";
// import img from "../../img/previews/lodgel/lodgel3.gif";
// import img from "../../img/previews/lodgel/lodgel4.gif";
// import img from "../../img/previews/lodgel/lodgel5.gif";
// import img from "../../img/previews/lodgel/lodgel6.gif";
// const images = require.context("../../img/previews/lodgel", true);
// let img = images(`./lodgel6}.gif`);

const ProjectPrev = ({ prevs }) => {
  let [selectedPrev, setSelectedPrev] = useState(prevs[0].image);

  return (
    <ProjectPrevWrap
      onClick={() => {
        setSelectedPrev(prevs[1].image);
      }}
    >
      <div className="img-wrap">
        <img style={{ width: "100%", height: "100%" }} src={selectedPrev} />
      </div>
      <section>Discription here</section>
    </ProjectPrevWrap>
  );
};

export default ProjectPrev;
