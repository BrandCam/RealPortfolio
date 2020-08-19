import styled from "styled-components";

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
  }
`;

export default NavBarWrap;
