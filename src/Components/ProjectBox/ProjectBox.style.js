import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
      transform:rotateY(0deg)  rotateX(0deg);
    }
    50% {
      transform:rotateY(180deg) rotateX(100deg);
    }
    100% {
      transform:rotateY(360deg) rotateX(360deg);
    }
`;

const clicked = keyframes`
  0%{
    width: 300px;
  height: 200px;
  }
  50%{
    transform:rotateY(0deg)  rotateX(0deg);
    width: 75%;
    height: 75%;
  }
  100%{
    width: 100%;
    height: 100%;
  }
`;

const ProjectBoxScene = styled.section`
  width: 300px;
  height: 200px;
  margin: 80px;
  transition: all 3s linear;
  perspective: 1500px;

  &.selected {
    width: 100%;
    height: 100%;

    .box {
      width: 100%;
      height: 100%;

      animation: ${rotate} 4s linear;
    }
    .box-face-right {
      left: 783px;
    }
    .box-face-left {
      left: 10%;
    }
    .box-face-bottom {
      top: 310px;
    }
  }
  .box {
    width: 300px;
    height: 200px;
    position: relative;
    transition: width 1s, height 1s, transform 1s;
    transform-style: preserve-3d;
    transform: translateZ(-50px);
    transition: transform 1s;
    animation: ${rotate} 4s linear infinite;
  }

  /* SHOWS FRONT */
  /* .show-front {
    transform: translateZ(-50px) rotateY(0deg);
  }
   */
  .box-face {
    position: absolute;
    font-size: 40px;
    font-weight: bold;
    color: white;
  }
  .box-face-front {
    width: 100%;
    height: 100%;
  }

  .box-face-back {
    width: 100%;
    height: 100%;
  }

  .box-face-right {
    width: 100px;
    height: 100%;
    left: 33%;
    line-height: 200px;
    transition: all 1s linear;
  }

  .box-face-left {
    width: 100px;
    height: 100%;
    left: 33%;
    line-height: 200px;
    transition: all 1s linear;
  }

  .box-face-top {
    width: 100%;
    height: 100px;
    top: 50px;
    line-height: 100px;
    transition: all 1s linear;
  }

  .box-face-bottom {
    width: 100%;
    height: 100px;
    top: 50px;
    line-height: 100px;
    transition: all 1s linear;
  }

  .box-face-front {
    transform: rotateY(0deg) translateZ(50px);
  }
  .box-face-back {
    transform: rotateY(180deg) translateZ(50px);
  }

  .box-face-right {
    transform: rotateY(90deg) translateZ(150px);
  }
  .box-face-left {
    transform: rotateY(-90deg) translateZ(150px);
  }

  .box-face-top {
    transform: rotateX(90deg) translateZ(100px);
  }
  .box-face-bottom {
    transform: rotateX(-90deg) translateZ(100px);
  }
`;

export default ProjectBoxScene;
