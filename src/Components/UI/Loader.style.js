import styled, { keyframes } from "styled-components";

const blink = keyframes`
0%{
font-size:4px;
opacity:0.25;
}50%{
font-size:5px;
opacity:1;
}
100%{
    font-size:4px;
opacity:0.25; 
}
`;
const HeartWrap = styled.div`
  margin-top: -2em;
  font-size: 5px;
  animation: ${blink} linear 2s infinite;
  .heart {
    display: inline-block;
    width: 1em;
    height: 1em;
    margin: 0 7em;
    background: #a52a21;
    /* TODO learn how the fuck boxshadow works.... */
    box-shadow:
      /* white shine */ 0 -2em 0 white, -3em 0 0 white,
      -2em -1em 0 white, /* top shades */ 0 -1em 0 0 #c52317,
      -1em -2em 0 0 #c52317, -2em -2em 0 0 #c52317, -3em -2em 0 0 #c52317,
      1em -2em 0 0 #c52317, 2em -2em 0 0 #c52317, 3em -2em 0 0 #c52317,
      -4em -1em 0 0 #c52317, 4em -1em 0 0 #c52317,
      /* fills my heart */ 0 0 0 2em #a52a21, -1em 0 0 2em #a52a21,
      1em 0 0 2em #a52a21, -3em 0 0 1em #a52a21, 3em 0 0 1em #a52a21,
      0 1em 0 2em #a52a21, 0 3em 0 1em #a52a21, 0 5em 0 0 #a52a21,
      /* white borders */ -2em -2em 0 1em white, 2em -2em 0 1em white,
      -3em -1em 0 1em white, 3em -1em 0 1em white, -4em 0 0 1em white,
      4em 0 0 1em white, -3em 1em 0 1em white, 3em 1em 0 1em white,
      1em 1em 0 2em white, -1em 1em 0 2em white, 0 2em 0 2em white,
      0 4em 0 1em white, 0 6em 0 0 white;
  }
`;

export default HeartWrap;
