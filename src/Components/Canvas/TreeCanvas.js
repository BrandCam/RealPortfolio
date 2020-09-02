import React, { useRef, useEffect } from "react";
import p5 from "p5";
import s from "../../P5Callbacks/treeCanvas";
const TreeCanvas = (props) => {
  const treeParentRef = useRef();
  const treeCanvasRef = useRef();
  useEffect(() => {
    treeCanvasRef.current = new p5(s, treeParentRef.current);
  }, []);
  return <div ref={treeParentRef}></div>;
};

export default TreeCanvas;
