import React, { useEffect, useContext } from "react";
import NavBar from "../Components/NavBar/NavBar";
import PageWrap from "./Page.style";
import styled from "styled-components";

const Sf = ({ vp, page }) => {
  //this is stupid and so am I
  useEffect(() => {
    if (vp.current.scrollTop !== 0) {
      vp.current.scrollTop = 0;
    }
  }, [vp]);
  return (
    <>
      <PageWrap className="game">
        <NavBar page={page} />
      </PageWrap>
    </>
  );
};

export default Sf;
