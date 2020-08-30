import styled, { keyframes } from "styled-components";

let fade = keyframes`
0%{
    background: rgba(0, 0, 0, 0);
}
50%{
    background: rgba(0, 0, 0, .3);
}
100%{
    background: rgba(0, 0, 0, .7);
}
`;

const Static = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0);
  pointer-events: none;
  z-index: 15;
  display: none;
  transition: all 0.5s;
  img {
    width: 120%;
    height: 120%;
    position: relative;
    top: -10%;
  }
  &.show {
    display: block;
    background: rgba(0, 0, 0, 0.5);
    animation: ${fade} 2.5s linear;
  }
`;

export default Static;
