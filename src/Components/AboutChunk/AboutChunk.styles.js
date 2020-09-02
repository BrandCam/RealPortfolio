import styled from "styled-components";
import Video from "../Video/Video.style";
const AboutChunkWrap = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  &.mirrored {
    align-self: flex-start;
    justify-content: flex-start;
    ${Video} {
      margin-left: -25px;
    }
  }
  ${Video} {
    z-index: -2;
    width: 200px;
  }
`;

export default AboutChunkWrap;
