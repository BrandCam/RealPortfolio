import styled from "styled-components";

const NavBarWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: 0 5%;
  .content {
    display: flex;
    height: 52px;
    flex-grow: 2;
    justify-content: flex-end;
  }
`;

export default NavBarWrap;
