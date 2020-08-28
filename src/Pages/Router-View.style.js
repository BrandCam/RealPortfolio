import styled from "styled-components";

const RouterView = styled.main`
  box-sizing: border-box;
  height: 90vh;
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  display: flex;
  justify-content: center;
  overflow-y: auto;

  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 100px;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default RouterView;
