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

const ProjectBoxScene = styled.section`
  width: 300px;
  height: 200px;
  margin: 80px;
  perspective: 1500px;
  .box {
    width: 300px;
    height: 200px;
    position: relative;
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
    width: 300px;
    height: 200px;
    line-height: 200px;
  }

  .box-face-back {
    width: 300px;
    height: 200px;
    line-height: 200px;
  }

  .box-face-right {
    width: 100px;
    height: 200px;
    left: 100px;
    line-height: 200px;
  }

  .box-face-left {
    width: 100px;
    height: 200px;
    left: 100px;
    line-height: 200px;
  }

  .box-face-top {
    width: 300px;
    height: 100px;
    top: 50px;
    line-height: 100px;
  }

  .box-face-bottom {
    width: 300px;
    height: 100px;
    top: 50px;
    line-height: 100px;
  }
  .box-face-front {
    background: hsla(0, 100%, 50%, 0.7);
  }

  .box-face-back {
    background: hsla(120, 100%, 50%, 0.7);
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
