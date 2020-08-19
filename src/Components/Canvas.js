import React, { useRef, useEffect } from "react";

const Canvas = () => {
  const style = {
    position: "absolute",
    borderRadius: "100px",
    zIndex: -100,
  };

  const getPixelRatio = (context) => {
    let backingStore =
      context.backingStorePixelRatio ||
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio ||
      1;

    return (window.devicePixelRatio || 1) / backingStore;
  };

  //grab canvas
  let ref = useRef();

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");

    // //fixes blurr, may just drop it
    // let ratio = getPixelRatio(context);
    // let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    // let height = getComputedStyle(canvas)
    //   .getPropertyValue("height")
    //   .slice(0, -2);
    // canvas.width = width * ratio;
    // canvas.height = height * ratio;
    // canvas.style.width = `${width}px`;
    // canvas.style.height = `${height}px`;

    //Star Object
    let Star = function () {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.color = 0;
    };
    let xMod = 0;
    let yMod = 0;
    let lightSpeed = 0;

    Star.prototype.updatePosition = function () {
      let speed;
      lightSpeed ? (speed = 0.04) : (speed = 0.005);
      this.x += xMod + (this.x - canvas.width / 2) * speed;
      this.y += yMod + (this.y - canvas.height / 2) * speed;
      this.updateColor();

      if (this.x > canvas.width || this.x < 0) {
        this.x = Math.random() * canvas.width;
        this.color = 100;
      }

      if (this.y > canvas.height || this.y < 0) {
        this.y = Math.random() * canvas.height;
        this.color = 0;
      }
    };

    Star.prototype.updateColor = function () {
      if (this.color < 255) {
        this.color += 5;
      }
      this.color = 255;
    };

    let starField = [];
    let starCount = 0;

    while (starCount < 60) {
      let newStar = new Star();
      starField.push(newStar);
      starCount++;
    }

    const init = () => {
      canvas.focus();
      requestAnimationFrame(draw);
    };
    const draw = () => {
      if (!lightSpeed) {
        context.fillStyle = "rgba(29,29,51,0.5)";
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
      for (let i = 0; i < starField.length; i++) {
        context.fillStyle = `rgba(${starField[i].color},${starField[i].color},${starField[i].color})`;

        context.fillRect(starField[i].x, starField[i].y, 0.5, 0.5);

        starField[i].updatePosition();
      }
      requestAnimationFrame(draw);
    };
    init();
  });

  return (
    <div
      style={{
        left: "5%",
        top: "10%",
        width: "90%",
        height: "80%",
        backgroundColor: "rgb(29,29,51)",
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
