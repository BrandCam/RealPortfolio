import styled from "styled-components";

export const HighScoreInner = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
  width: 350px;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  tbody {
    tr:nth-child(1n) {
      color: #ff2a6d;
    }
    tr:nth-child(2n) {
      color: #05d9e8;
    }
    tr:nth-child(3n) {
      color: #f500ff;
    }
  }
`;

export const Trophy = styled.div`
  max-width: 75px;
  max-height: 75px;
  position: absolute;
  left: -10%;
  top: -5%;
  z-index: 5;
  img {
    width: 100%;
    height: 100%;
  }
`;
export default HighScoreInner;
