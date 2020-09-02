import styled, { keyframes } from "styled-components";

const animatedText = keyframes`
    0%{width: 0;}
    30%{width: 0;}
    100%{width: 100%;}
  
`;
const animatedCursor = keyframes`
    from{border-right-color: rgba(255,255,255,.75);}
    to{border-right-color: transparent;}
  `;

const Headline = styled.h1`
  border-right: solid 3px rgba(255, 255, 255, 0.75);
  font-size: 2rem;
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;
  overflow: hidden;
  animation: ${animatedText} 15s steps(34, end) 1s 1 normal both,
    ${animatedCursor} 600ms steps(34, end) infinite;
`;

export default Headline;
