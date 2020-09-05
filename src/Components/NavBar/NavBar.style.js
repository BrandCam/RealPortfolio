import styled from "styled-components";
import LogoWrap from "../UI/LogoImg.style";

const NavBarWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;

  .content {
    display: flex;
    height: 52px;
    flex-grow: 2;
    justify-content: flex-end;
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: flex-end;
    }
  }
  ${LogoWrap} {
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

export default NavBarWrap;
