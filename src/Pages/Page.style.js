import styled from "styled-components";
import { motion } from "framer-motion";
const PageWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  .page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 800px) {
      margin-top: 75px;
    }
  }
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
