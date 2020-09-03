import React, { useRef, useContext, useLayoutEffect, useEffect } from "react";
import CanvasContext from "../../Context/CanvasContext";
const Canvas = () => {
  const style = {
    position: "absolute",
    borderRadius: "100px",
    zIndex: -100,
  };
  // TODO Reright in a more OOP way to make edditing easier
  //grab canvas
  let ref = useRef();
  let zModFunc = useRef(null);
  // canvas vars from context
  let { canvasVars, setCanvasVars } = useContext(CanvasContext);
  let { Z, center, warpZ } = canvasVars;

  // constants and storage for objects that represent star positions
  let units = 500,
    stars = [],
    cycle = 0;
  //VAR TO CHECK IF V-DOM RE-RAN THE LOOP
  let firstRun = true;

  //Grabbing function to change speed
  useEffect(() => {
    setCanvasVars((prevState) => ({
      ...prevState,
      zModFunc: zModFunc.current,
    }));
  }, [zModFunc.current]);

  //Starting canvas animation loop
  useLayoutEffect(() => {
    if (firstRun) {
      zModFunc.current = null;
    }
    // requestAnimFrame shim
    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback);
        }
      );
    })();

    // remove frame margin and scrollbars when maxing out size of canvas
    document.body.style.margin = "0px";
    document.body.style.overflow = "hidden";

    // get dimensions of window and resize the canvas to fit
    var width = window.innerWidth,
      height = window.innerHeight,
      canvas = ref.current,
      mousex = width / 2,
      mousey = height / 2;
    canvas.width = width;
    canvas.height = height;

    // get 2d graphics context and set global alpha
    var G = canvas.getContext("2d");
    G.globalAlpha = 0.75;

    // setup aliases
    var Rnd = Math.random,
      Sin = Math.sin,
      Floor = Math.floor;

    // mouse events
    function addCanvasEventListener(name, fn) {
      canvas.addEventListener(name, fn, false);
    }
    addCanvasEventListener("mousemove", function (e) {
      mousex = e.clientX;
      mousey = e.clientY;
    });

    function wheel(e) {
      var delta = 0;
      if (e.detail) {
        delta = -e.detail / 3;
      } else {
        delta = e.wheelDelta / 120;
      }
      var doff = delta / 25;
      if ((delta > 0 && Z + doff <= 0.5) || (delta < 0 && Z + doff >= 0.01)) {
        Z += delta / 25;
      }
    }
    addCanvasEventListener("DOMMouseScroll", wheel);
    addCanvasEventListener("mousewheel", wheel);

    //Grabbing a ref to change speed outside of function
    function warp(Zmod) {
      Z += Zmod;
    }
    function deWarp(Zmod) {
      Z -= Zmod;
    }
    function fastChange(newZ) {
      Z = newZ;
    }
    if (firstRun) {
      zModFunc.current = { warp: warp, deWarp: deWarp, fastChange: fastChange };
    }

    // function to reset a star object
    function resetstar(a) {
      a.x = (Rnd() * width - width * 0.5) * warpZ;
      a.y = (Rnd() * height - height * 0.5) * warpZ;
      a.z = warpZ;
      a.px = 0;
      a.py = 0;
    }

    // initial star setup
    for (var i = 0, n; i < units; i++) {
      n = {};
      resetstar(n);
      stars.push(n);
    }

    // star rendering anim function
    var rf = function () {
      // clear background
      G.clearRect(0, 0, canvas.width, canvas.height);
      G.fillStyle = "rgb(29,29,51)";
      G.fillRect(0, 0, width, height);

      // mouse position to head towards
      var cx = mousex - width / 2 + width / 2,
        cy = mousey - height / 2 + height / 2;

      // update all stars
      var sat = Floor(Z * 500); // Z range 0.01 -> 0.5
      if (sat > 100) sat = 100;
      for (var i = 0; i < units; i++) {
        var n = stars[i], // the star
          xx = n.x / n.z, // star position
          yy = n.y / n.z,
          e = (1.0 / n.z + 1) * 2; // size i.e. z

        if (n.px !== 0) {
          // hsl colour from a sine wave
          G.strokeStyle = `hsl(${(cycle * i) % 360},${sat}%,80%)`;
          G.lineWidth = e;
          G.beginPath();
          G.moveTo(xx + cx, yy + cy);
          G.lineTo(n.px + cx, n.py + cy);
          G.stroke();
        }

        // update star position values with new settings
        n.px = xx;
        n.py = yy;
        n.z -= Z;

        // reset when star is out of the view field
        if (n.z < Z || n.px > width || n.py > height) {
          // reset star
          resetstar(n);
        }
      }

      // colour cycle sinewave rotation
      cycle += 0.01;
      firstRun = false;
      window.requestAnimFrame(rf);
    };

    window.requestAnimFrame(rf);
  }, [center]);

  return (
    <div
      style={{
        left: "5%",
        top: "5%",
        width: "90%",
        height: "90%",

        ...style,
      }}
      className="canvas-bg"
    >
      <canvas
        ref={ref}
        style={{
          width: "100%",
          height: "100%",
          ...style,
        }}
        className="canvas"
      ></canvas>
    </div>
  );
};

export default Canvas;
