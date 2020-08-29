import React, { useEffect, useContext } from "react";
import NavBar from "../Components/NavBar/NavBar";
import PageWrap from "./Page.style";
import styled from "styled-components";
import { pageTransition } from "../Animation/AnimationConsts";

const Sf = ({ vp, page }) => {
  //this is stupid and so am I
  useEffect(() => {
    if (vp.current.scrollTop !== 0) {
      vp.current.scrollTop = 0;
    }
  }, [vp]);
  return (
    <>
      <PageWrap
        className="game"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 1 }}
      >
        <NavBar page={page} />
      </PageWrap>
    </>
  );
};

export default Sf;
