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
  width: 100%;
  border-right: solid 3px rgba(255, 255, 255, 0.75);
  font-size: 2rem;
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;
  overflow: hidden;
  animation: ${animatedText} 10s steps(34, end) 1s 1 normal both,
    ${animatedCursor} 600ms steps(34, end) infinite;
  @media (max-width: 1350px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1000px) {
    font-size: 1rem;
    max-width: 490px;
  }
  @media (max-width: 750px) {
    font-size: 0.8rem;
    max-width: 392px;
  }
  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

export default Headline;
