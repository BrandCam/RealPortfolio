import styled, { keyframes } from "styled-components";
const rotate = keyframes`
    0% {
      transform:rotateY(0deg);
    }
    50% {
      transform:rotateY(180deg);
    }
    100% {
      transform:rotateY(360deg);
    }
`;
export const SectionWrap = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ThreeDScene = styled.div`
  margin: 40px 0;
  perspective: 2000px;
  width: 396px;
  height: 528px;
  .card {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
    animation: ${rotate} 4s linear infinite;
  }
  .card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 260px;
    color: white;
    font-weight: bold;
    font-size: 40px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
`;

export default SectionWrap;
