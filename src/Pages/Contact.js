import React from "react";
import NavBar from "../Components/NavBar";
import ContactWrap from "./Contact.style";
import Video from "../Components/Video";
const Contact = () => {
  return (
    <ContactWrap>
      <NavBar />
      <Video />
      <div style={{ width: "100%", textAlign: "center" }}>Contact</div>
    </ContactWrap>
  );
};

export default Contact;
