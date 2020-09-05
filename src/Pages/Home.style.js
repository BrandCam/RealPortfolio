import styled from "styled-components";
import { motion } from "framer-motion";
const HomeWrap = styled(motion.div)`
  position: relative;
  display: flex;
  color: white;
  font-family: "Press Start 2P", cursive;
  font-size: 2rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  ul {
    text-align: center;
    line-height: 2;
    list-style: none;
  }
`;

export default HomeWrap;
