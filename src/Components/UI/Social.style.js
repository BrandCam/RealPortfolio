import styled from "styled-components";

const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  right: 15px;
  bottom: 40%;
  a {
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    margin-bottom: 25px;
    border-radius: 50%;

    img {
      box-sizing: border-box;
      width: 110%;
      height: 110%;
      position: relative;
      right: 2px;
      top: -2px;
    }
  }
  a:last-of-type {
    margin-bottom: 0;
  }
  a:hover {
    background-color: white;
  }
`;

export default SocialWrap;
