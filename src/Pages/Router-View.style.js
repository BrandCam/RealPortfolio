import styled from "styled-components";

const RouterView = styled.main`
  box-sizing: border-box;
  height: 80vh;
  position: absolute;
  top: 10%;
  left: 9.75%;
  width: 80%;
  display: flex;
  justify-content: center;
  overflow-y: auto;

  border: 3px solid rgba(0, 0, 0, 0);
  border-radius: 9px 11px 5px 10px;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default RouterView;
