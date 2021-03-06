import styled from "styled-components";
import Video from "../Video/Video.style";
const AboutChunkWrap = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  &.mirrored {
    align-self: flex-start;
    justify-content: flex-start;
    margin: 50px 0 100px 0;
    ${Video} {
      margin-left: -25px;
    }
  }
  ${Video} {
    z-index: -2;
    width: 200px;
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export default AboutChunkWrap;
