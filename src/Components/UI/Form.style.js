import styled from "styled-components";
import { Form } from "formik";

const MyForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 125px;

  input {
    font-family: "press start 2p";
    font-size: 1.4rem;
    color: white;
    width: 100%;
    margin: 0;
    border-bottom: 5px solid #fff;
    line-height: 55px;
  }
  textarea {
    font-family: "press start 2p";
    font-size: 1.4rem;
    color: white;
    width: 100%;
    margin: 0;
    border-bottom: 5px solid #fff;
    line-height: 35px;
  }
  div {
    width: 100%;
    margin-bottom: 30px;
  }
  div:nth-of-type(1) {
    width: 49%;
  }
  div:nth-of-type(2) {
    width: 49%;
  }
  span {
    pointer-events: none;
    top: 2rem;
    position: relative;
    font-size: 1.5rem;
    transition: all 0.5s ease-out;
  }
  div:nth-of-type(4) span {
    font-size: 1rem;
    top: 0;
  }
  .focused {
    font-size: 1rem;
    top: 0;
    color: rgb(253, 196, 15);
  }
  .button-wrap {
    display: flex;
    justify-content: flex-end;
  }
`;

export default MyForm;
