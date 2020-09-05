import styled from "styled-components";

const Crt = styled.div`
  z-index: 100;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0) 1px,
    transparent 1px,
    transparent 2px
  );
  border-radius: 100px;
  width: 90%;
  height: 90%;
  left: 5%;
  top: 5%;
  pointer-events: none;
  @media (max-width: 600px) {
    border-radius: 0;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
  }
`;

export default Crt;
