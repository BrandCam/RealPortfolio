import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 30px;
  font-weight: 400;
`;
export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;
export const MenuHover = styled.div`
  position: absolute;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0,
    #fff 50%,
    #fff 50%,
    #fff 50%,
    rgba(255, 255, 255, 0) 100%
  );
  content: "";
  width: 100%;
  height: 40px;
  opacity: 0.25;
  margin-top: -5px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  z-index: -1;
  transition-duration: 0.1s;
  &.hide {
    display: none;
  }
`;
