import styled from "styled-components";

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;

  /* gives access to the canvas listeners */
  &.game {
    pointer-events: none;
  }

  /* Add cursor to all children recursively */

  &.game > * {
    pointer-events: auto;
  }
`;

export default PageWrap;
