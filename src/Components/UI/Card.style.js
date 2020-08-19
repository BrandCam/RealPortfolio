import styled from "styled-components";

const CardWrap = styled.div`
  width: 100%;
  line-height: 3;
  margin-bottom: 100px;
  position: relative;
  .children {
    color: white;
    z-index: 5;
    width: 90%;
    margin: 1rem auto;
    font-size: 1.5rem;
  }
  &:after {
    content: "";
    display: block;
    width: -webkit-calc(100% - 7.5px * 2);
    width: -moz-calc(100% - 7.5px * 2);
    width: calc(100% - 7.5px * 2);
    height: 7.5px;
    position: absolute;
    background-color: #fff;
    left: 7.5px;
    bottom: 7.5px;
    z-index: 2;
  }
  &:before {
    content: "";
    position: absolute;
    display: block;
    width: -webkit-calc(100% - 7.5px * 2);
    width: -moz-calc(100% - 7.5px * 2);
    width: calc(100% - 7.5px * 2);
    background-color: #fff;
    height: 7.5px;
    left: 7.5px;
    /* top: calc(100% - 7.5px);
    top: -webkit-calc(100% - 7.5px);
    top: -moz-calc(100% - 7.5px); */
    z-index: 2;
  }
  .border-left-right {
    width: 100%;

    :after {
      content: "";
      display: block;
      width: 7.5px;
      height: -moz-calc(100% - 7.5px * 3);
      height: -webkit-calc(100% - 7.5px * 3);
      height: calc(100% - 7.5px * 3);
      position: absolute;
      background-color: #fff;
      left: -webkit-calc(100% - 7.5px * 2);
      left: -moz-calc(100% - 7.5px * 2);
      left: calc(100% - 7.5px);
      top: 7.5px;
      z-index: 2;
    }
    :before {
      content: "";
      position: absolute;
      display: block;
      width: 7.5px;
      background-color: #fff;
      height: -webkit-calc(100% - 7.5px * 3);
      height: -moz-calc(100% - 7.5px * 3);
      height: calc(100% - 7.5px * 3);
      right: calc(100% - 7.5px);
      right: -webkit-calc(100% - 7.5px);
      right: -moz-calc(100% - 7.5px);
      top: 7.5px;
      z-index: 2;
    }
  }
  .background {
    position: absolute;
    right: 7.5px;
    background-color: rgba(0, 0, 0, 0.5);
    height: -webkit-calc(100% - 7.5px);
    height: -moz-calc(100% - 7.5px);
    height: calc(100% - 7.5px);
    width: -webkit-calc(100% - 7.5px * 2);
    width: -moz-calc(100% - 7.5px * 2);
    width: calc(100% - 7.5px * 2);
    z-index: -1;
    .top-left {
      position: absolute;
      content: "";
      background-color: #fff;
      width: 7.5px;
      height: 7.5px;
      top: 7.5px;
    }
    .bottom-left {
      position: absolute;
      content: "";
      background-color: #fff;
      width: 7.5px;
      height: 7.5px;
      bottom: 7.5px;
    }
    .top-right {
      position: absolute;
      content: "";
      background-color: #fff;
      width: 7.5px;
      height: 7.5px;
      top: 7.5px;
      right: 0px;
    }
    .bottom-right {
      position: absolute;
      content: "";
      background-color: #fff;
      width: 7.5px;
      height: 7.5px;
      bottom: 7.5px;
      right: 0;
    }
  }
`;

export default CardWrap;
