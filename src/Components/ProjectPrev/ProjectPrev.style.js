import styled from "styled-components";

const ProjectPrevWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .img-wrap {
    box-sizing: border-border-box;
    width: 100%;
    height: 100%;
    transition: all 4s linear;
  }
  .image-.img-wrap.selected {
    width: 100%;
    height: 50%;
  }

  section.hidden {
    opacity: 0;
    height: 0px;
    font-size: 1px;
  }

  section {
    display: flex;
    flex-direction: column;
    opacity: 1;
    transition: all 1s ease;
    height: 50%;
    p {
      text-shadow: none;
      font-size: 2rem;
      line-height: 3rem;
      letter-spacing: 5px;
      text-align: center;
    }
  }
`;

export default ProjectPrevWrap;
