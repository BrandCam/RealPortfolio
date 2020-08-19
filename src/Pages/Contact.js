import React, { useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import ContactWrap from "./Contact.style";
import Video from "../Components/Video/Video";
import LargeCard from "../Components/UI/LargeCard";
const Contact = ({ vp }) => {
  //this is stupid and so am I
  useEffect(() => {
    if (vp.current.scrollTop !== 0) {
      vp.current.scrollTop = 0;
    }
  }, [vp]);
  return (
    <ContactWrap>
      <NavBar />
      <Video />
      <LargeCard></LargeCard>
    </ContactWrap>
  );
};

export default Contact;
