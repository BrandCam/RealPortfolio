import styled, { keyframes } from "styled-components";

//PAC VARS
const pacColor = "#ffff03";
const dotDim = 30;
const pacDim = 30;
const ghostColors = ["#FFB8FF", "#FFB852", "#FF0000"];

//KEYFRAMES
const waka = keyframes`
0%{}
50%{transform:rotate(0);}
100%{}
`;

const PacWrap = styled.div`
  width: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-self: center;

  /* PAC */
  .pacman {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: ${pacDim}px;
    width: ${pacDim}px;
    transition: transform 250ms linear;
  }

  .pacman:before,
  .pacman:after {
    content: "";
    position: absolute;
    height: ${pacDim / 2}px;
    width: ${pacDim}px;
    left: 0;
    background: ${pacColor};
    transition: inherit;
  }

  .pacman:before {
    top: 0;
    border-top-left-radius: ${pacDim}px;
    border-top-right-radius: ${pacDim}px;
    transform-origin: bottom center;
    transform: rotate(-45deg);
  }

  .pacman:after {
    bottom: 0;
    border-bottom-left-radius: ${pacDim}px;
    border-bottom-right-radius: ${pacDim}px;
    transform-origin: top center;
    transform: rotate(45deg);
  }

  /* GHOSTS */
  label {
    content: "0 0";
    margin: 0 10px;
    height: ${dotDim}px;
    width: ${dotDim}px;
    color: blue;
    cursor: pointer;
    svg {
      transition: all 250ms ease;
    }
    svg.ghost-0 {
      fill: #ffb8ff;
    }
    svg.ghost-1 {
      fill: #ffb852;
    }
    svg.ghost-2 {
      fill: #ff0000;
    }
    svg:hover {
      fill: #00ffff;
    }
  }
  label:first-child {
    margin-left: 0;
  }
  label:last-child {
    margin-right: 0;
  }
  input {
    display: none;
  }

  label:hover ~ .pacman:before,
  label:hover ~ .pacman:after {
    animation: ${waka} 500ms infinite;
  }
`;

export default PacWrap;
