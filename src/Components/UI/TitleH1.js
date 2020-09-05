import styled from "styled-components";

const H1 = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
  height: 50%;
  align-self: center;
  padding: 5px 15px 5px 30px;
  position: relative;
  @media (max-width: 800px) {
    height: 90%;
    padding: 15px 15px 15px 30px;
    font-size: 1.3rem;
    letter-spacing: 5px;
    width: 50%;
    justify-content: center;
    order: 2;
    margin-bottom: 25px;
    top: 150%;
  }
  &:before {
    content: "";
    background-color: black;
    transform: skewX(162.5deg) translate(-50%, -50%);
    opacity: 0.3;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: -1;
  }
`;

export default H1;
