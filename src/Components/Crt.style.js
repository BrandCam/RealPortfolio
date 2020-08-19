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
`;

export default Crt;
