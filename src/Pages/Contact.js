import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import ContactWrap from "./Contact.style";
import Video from "../Components/Video/Video";
import LargeCard from "../Components/UI/LargeCard";
const Contact = () => {
  return (
    <ContactWrap>
      <NavBar />
      <Video />
      <LargeCard></LargeCard>
    </ContactWrap>
  );
};

export default Contact;
