import React, { useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Video from "../Components/Video/Video";
import PageWrap from "./Page.style";
import LargeCard from "../Components/UI/LargeCard";
import styled from "styled-components";
import { Formik, Field, Form } from "formik";
import emailjs from "emailjs-com";

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
        onSubmit={(values) => {
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
              },
              (err) => {
                console.log("FAILED", err);
              }
            );
        }}
      >
        <Form>
          <Field name="name" type="name" />
          <Field name="email" type="email" />
          <Field name="subject" type="text" />
          <Field name="message" type="text" />
          <button type="submit">SEND</button>
        </Form>
      </Formik>
    </PageWrap>
  );
};

export default Contact;
