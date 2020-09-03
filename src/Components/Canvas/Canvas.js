import React, { useRef, useEffect } from "react";

const Canvas = () => {
  const style = {
    position: "absolute",
    borderRadius: "100px",
    zIndex: -100,
  };

  // const getPixelRatio = (context) => {
  //   let backingStore =
  //     context.backingStorePixelRatio ||
  //     context.webkitBackingStorePixelRatio ||
  //     context.mozBackingStorePixelRatio ||
  //     context.msBackingStorePixelRatio ||
  //     context.oBackingStorePixelRatio ||
  //     context.backingStorePixelRatio ||
  //     1;

  //   return (window.devicePixelRatio || 1) / backingStore;
  // };

  //grab canvas
  let ref = useRef();
  //grab window
  let w = useRef(window);

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");

    //fixes blurr, may just drop it
    // let ratio = getPixelRatio(context);
    // let width = window.innerWidth;
    // let height = window.innerHeight;
    // canvas.width = width;
    // canvas.height = height;
    // canvas.style.width = `${width * ratio}`;
    // canvas.style.height = `${height * ratio}`;

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
      lightSpeed ? (speed = 2) : (speed = 1);
      this.x +=
        xMod + ((this.x - canvas.width / 2) / (canvas.width / 2)) * speed;
      this.y +=
        yMod + ((this.y - canvas.height / 2) / (canvas.height / 2)) * speed;
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
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
      if (lightSpeed) {
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
  }, [w.current]);

  return (
    <div
      style={{
        left: "5%",
        top: "5%",
        width: "90%",
        height: "90%",
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
