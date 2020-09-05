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
    transform:rotateY(0deg)  rotateX(0deg);
  }
  50%{
    transform:rotateY(180deg) rotateX(100deg);
  }
  90%{
    transform:rotateY(360deg) rotateX(360deg);
  }
`;

const ProjectBoxScene = styled.section`
  width: 300px;
  height: 200px;
  margin: 80px;
  transition: all 3s linear;
  perspective: 1500px;
  @media (max-width: 700px) {
    transition: none;
  }

  &.selected {
    width: 100%;
    min-height: 1100px;
    @media (max-width: 700px) {
      min-height: 1000px;
    }
    .box {
      width: 100%;
      height: 100%;
      animation: ${clicked} 4s linear;
      @media (max-width: 700px) {
        animation: none;
      }
    }
    .box-face-front {
      height: auto;
    }
    .box-face-right {
      left: 125%;
      opacity: 0;
    }
    .box-face-left {
      left: -160%;
      opacity: 0;
    }
    .box-face-bottom {
      top: 150%;
      opacity: 0;
    }
    .box-face-top {
      top: -310px;
      opacity: 0;
    }
    .box-face-back {
      height: auto;
      opacity: 0;
    }
  }
  .box {
    width: 300px;
    height: 200px;
    position: relative;

    transform-style: preserve-3d;
    transform: translateZ(-50px);
    transition: transform 1s;
    animation: ${rotate} 4s linear infinite;
    animation-duration: infinite;
    @media (max-width: 700px) {
      animation: none;
    }
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
    transition: all 2s linear;
    @media (max-width: 700px) {
      pointer-events: none;
    }
  }

  .box-face-right {
    width: 100px;
    height: 200px;
    left: 33%;
    line-height: 200px;
    transition: all 2s linear;
    @media (max-width: 700px) {
      pointer-events: none;
    }
  }

  .box-face-left {
    width: 100px;
    height: 200px;
    left: 33%;
    line-height: 200px;
    transition: all 2s linear;
    @media (max-width: 700px) {
      pointer-events: none;
    }
  }

  .box-face-top {
    width: 100%;
    height: 100px;
    top: 50px;
    line-height: 100px;
    transition: all 2s linear;
    @media (max-width: 700px) {
      pointer-events: none;
    }
  }

  .box-face-bottom {
    width: 100%;
    height: 100px;
    top: 50px;
    line-height: 100px;
    transition: all 2s linear;
    @media (max-width: 700px) {
      pointer-events: none;
    }
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
