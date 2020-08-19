import React from "react";
import NavBar from "../Components/NavBar";
import ContactWrap from "./Contact.style";
import Video from "../Components/Video";
import LargeCard from "../Components/LargeCard";
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
