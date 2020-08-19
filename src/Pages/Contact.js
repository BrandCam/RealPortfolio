import React from "react";
import NavBar from "../Components/NavBar";
import ContactWrap from "./Contact.style";

const Contact = () => {
  return (
    <ContactWrap>
      <NavBar />
      <div style={{ width: "100%", textAlign: "center" }}>Contact</div>
    </ContactWrap>
  );
};

export default Contact;
