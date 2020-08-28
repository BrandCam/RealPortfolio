import React, { useEffect, useState, useRef } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Video from "../Components/Video/Video";
import PageWrap from "./Page.style";
import LargeCard from "../Components/UI/LargeCard";
import styled from "styled-components";
import MyForm from "../Components/UI/Form.style";
import { Formik, Field, Form } from "formik";
import emailjs from "emailjs-com";
import bg from "../img/send.png";

const InfoWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
    margin: 0 1rem;
    font-size: 1.4rem;
  }
`;
const Contact = ({ vp, page }) => {
  const [focused, setFocused] = useState(null);

  const focusSetHandler = (e) => {
    let target = e.target.name;
    console.log(e.target.name);
    setFocused(() => target);
  };
  //brain broke caveman time
  const checkFocus = (ref, type) => {
    if (focused === type || ref !== "") {
      return "focused";
    }
    return "";
  };

  //this is stupid and so am I
  useEffect(() => {
    if (vp.current.scrollTop !== 0) {
      vp.current.scrollTop = 0;
    }
  }, [vp]);

  return (
    <PageWrap>
      <NavBar page={page} />
      <LargeCard size="small">
        <InfoWrap>
          <p>Feel free to shoot me an email. </p>
          <p>
            For a more concise reply please include a brief message detailing
            what I can help you with.
          </p>
        </InfoWrap>
      </LargeCard>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        onSubmit={(values, { resetForm }) => {
          emailjs
            .send(
              "gmail",
              "portfolio_reply",
              values,
              "user_OiYECJTwy5GRU6wqSW2LR"
            )
            .then(
              (res) => {
                console.log("SUCCESS", res.status, res.text);
                resetForm();
              },
              (err) => {
                console.log("FAILED", err);
              }
            );
        }}
      >
        {(props) => (
          <MyForm>
            <div className="name-wrap">
              <span className={checkFocus(props.values.name, "name")}>
                NAME
              </span>
              <Field
                onBlur={() => setFocused((cur) => "")}
                onClick={(e) => focusSetHandler(e)}
                tabIndex="-1"
                name="name"
                type="name"
              />
            </div>
            <div className="email-wrap">
              <span className={checkFocus(props.values.email, "email")}>
                EMAIL
              </span>
              <Field
                onBlur={() => setFocused((cur) => "")}
                onClick={(e) => focusSetHandler(e)}
                tabIndex="-1"
                name="email"
                type="email"
                value={props.values.email}
              />
            </div>
            <div className="subject-wrap">
              <span className={checkFocus(props.values.subject, "subject")}>
                SUBJECT
              </span>
              <Field
                onBlur={() => setFocused((cur) => "")}
                onClick={(e) => focusSetHandler(e)}
                tabIndex="-1"
                name="subject"
                type="text"
              />
            </div>
            <div className="message-wrap">
              <span style={{ color: "rgb(253, 196, 15)" }}>MESSAGE</span>
              <Field
                onClick={(e) => focusSetHandler(e)}
                rows={4}
                cols={40}
                name="message"
                as="textarea"
              />
            </div>
            <div className="button-wrap">
              <button style={{ backgroundImage: `url(${bg})` }} type="submit">
                <span>Punch It!</span>
              </button>
            </div>
          </MyForm>
        )}
      </Formik>
    </PageWrap>
  );
};

export default Contact;
