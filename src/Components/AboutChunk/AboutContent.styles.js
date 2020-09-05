import styled from "styled-components";

const AboutContentWrap = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
  }
  div {
    z-index: 10;
  }
  h3 {
    font-size: 2rem;
    @media (max-width: 700px) {
      text-align: center;
    }
  }
  p {
    font-size: 1.2rem;
    @media (max-width: 700px) {
      text-align: center;
    }
  }
  &.mirrored {
    h3 {
      text-align: right;
      @media (max-width: 700px) {
        text-align: center;
      }
    }
  }
`;

export default AboutContentWrap;
