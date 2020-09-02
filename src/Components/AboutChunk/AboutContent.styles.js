import styled from "styled-components";

const AboutContentWrap = styled.div`
  width: 50%;

  div {
    z-index: 10;
  }
  h3 {
    font-size: 2rem;
  }
  &.mirrored {
    h3 {
      text-align: right;
    }
  }
`;

export default AboutContentWrap;
