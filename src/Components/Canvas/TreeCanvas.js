import React, { useRef, useEffect } from "react";
import p5 from "p5";
import s from "../../P5Callbacks/treeCanvas";
import LargeCard from "../UI/LargeCard";
const TreeCanvas = (props) => {
  const treeParentRef = useRef();
  const treeCanvasRef = useRef();
  useEffect(() => {
    treeCanvasRef.current = new p5(s, treeParentRef.current);
  }, []);
  return (
    <LargeCard margin="none" style={{ width: "125%" }}>
      <p style={{ textAlign: "center", marginLeft: "10%" }}>
        Click around to plant some trees.
      </p>
      <div style={{ overflow: "none" }} ref={treeParentRef}></div>
    </LargeCard>
  );
};

export default TreeCanvas;
