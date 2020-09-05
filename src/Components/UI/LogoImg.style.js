import styled from "styled-components";

const LogoWrap = styled.div`
  width: 600px;
  height: 300px;
  margin-top: 100px;
  margin-bottom: 25px;
  img {
    width: 100%;
    height: 100%;
  }
  &.nav {
    width: 126px;
    height: 75px;
    margin-top: 0;
  }
  @media only screen and (max-width: 600px) {
    width: 400px;
    height: 200px;
  }
  @media (max-width: 500px) {
    width: 300px;
    height: 150px;
  }
`;

export default LogoWrap;
