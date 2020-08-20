import styled from "styled-components";

const scale = (props) => {
  if (props.size) {
    return props.size === "large"
      ? "7.5px"
      : props.size === "small"
      ? "3px"
      : "7.5px";
  }
  return "7.5px";
};

const width = ({ size }) => (size === "small" ? "" : "100%");

const CardWrap = styled.div`
  width: ${(props) => (props.size === "small" ? "" : "100%")};
  line-height: 3;
  margin: 50px 15px;
  position: relative;

  .children {
    font-family: "Russo One", sans-serif;
    color: white;
    z-index: 5;
    width: ${(props) => (props.size === "small" ? "" : "90%")};
    margin: ${(props) => (props.size === "small" ? "" : "1rem auto")};
    font-size: 1.5rem;
  }
  &:after {
    content: "";
    display: block;
    width: -webkit-calc(100% - ${(props) => scale(props)} * 2);
    width: -moz-calc(100% - ${(props) => scale(props)}* 2);
    width: calc(100% - ${(props) => scale(props)} * 2);
    height: ${(props) => scale(props)};
    position: absolute;
    background-color: #fff;
    left: ${(props) => scale(props)};
    bottom: ${(props) => scale(props)};
    z-index: 2;
  }
  &:before {
    content: "";
    position: absolute;
    display: block;
    width: -webkit-calc(100% - ${(props) => scale(props)} * 2);
    width: -moz-calc(100% - ${(props) => scale(props)} * 2);
    width: calc(100% - ${(props) => scale(props)} * 2);
    background-color: #fff;
    height: ${(props) => scale(props)};
    left: ${(props) => scale(props)};
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
      width: ${(props) => scale(props)};
      height: -moz-calc(100% - ${(props) => scale(props)} * 3);
      height: -webkit-calc(100% - ${(props) => scale(props)} * 3);
      height: calc(100% - ${(props) => scale(props)} * 3);
      position: absolute;
      background-color: #fff;
      left: -webkit-calc(100% -${(props) => scale(props)} * 2);
      left: -moz-calc(100% - ${(props) => scale(props)} * 2);
      left: calc(100% - ${(props) => scale(props)});
      top: ${(props) => scale(props)};
      z-index: 2;
    }
    :before {
      content: "";
      position: absolute;
      display: block;
      width: ${(props) => scale(props)};
      background-color: #fff;
      height: -webkit-calc(100% - ${(props) => scale(props)} * 3);
      height: -moz-calc(100% - ${(props) => scale(props)} * 3);
      height: calc(100% - ${(props) => scale(props)} * 3);
      right: calc(100% - ${(props) => scale(props)});
      right: -webkit-calc(100% - ${(props) => scale(props)});
      right: -moz-calc(100% - ${(props) => scale(props)});
      top: ${(props) => scale(props)};
      z-index: 2;
    }
  }
  .background {
    position: absolute;
    right: ${(props) => scale(props)};
    background-color: rgba(0, 0, 0, 0.5);
    height: -webkit-calc(100% - ${(props) => scale(props)});
    height: -moz-calc(100% - ${(props) => scale(props)});
    height: calc(100% - ${(props) => scale(props)});
    width: -webkit-calc(100% - ${(props) => scale(props)} * 2);
    width: -moz-calc(100% - ${(props) => scale(props)} * 2);
    width: calc(100% - ${(props) => scale(props)} * 2);
    z-index: -1;
    .top-left {
      position: absolute;
      content: "";
      background-color: #fff;
      width: ${(props) => scale(props)};
      height: ${(props) => scale(props)};
      top: ${(props) => scale(props)};
    }
    .bottom-left {
      position: absolute;
      content: "";
      background-color: #fff;
      width: ${(props) => scale(props)};
      height: ${(props) => scale(props)};
      bottom: ${(props) => scale(props)};
    }
    .top-right {
      position: absolute;
      content: "";
      background-color: #fff;
      width: ${(props) => scale(props)};
      height: ${(props) => scale(props)};
      top: ${(props) => scale(props)};
      right: 0px;
    }
    .bottom-right {
      position: absolute;
      content: "";
      background-color: #fff;
      width: ${(props) => scale(props)};
      height: ${(props) => scale(props)};
      bottom: ${(props) => scale(props)};
      right: 0;
    }
  }
`;

export default CardWrap;
