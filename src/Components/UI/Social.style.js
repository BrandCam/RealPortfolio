import styled from "styled-components";

const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  left: 100%;
  bottom: 40%;
  @media (max-width: 600px) {
    /* right: 32%;
    bottom: 50px;
    flex-direction: row; */
    position: relative;
    flex-direction: row;
    right: -10px;
    bottom: 0px;
    left: 0;
  }
  a {
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    margin-bottom: 25px;
    border-radius: 50%;
    @media (max-width: 600px) {
      margin-right: 25px;
    }

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
  a {
    @media (max-width: 600px) {
      background-color: white;
    }
  }
`;

export default SocialWrap;
