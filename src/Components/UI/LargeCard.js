import React from "react";
import CardWrap from "./Card.style";

const LargeCard = ({ children }) => {
  return (
    <CardWrap className="border-top-bottom">
      <div className="border-left-right"></div>
      <div className="background">
        <span className="top-left"></span>
        <span className="top-right"></span>
        <span className="bottom-left"></span>
        <span className="bottom-right"></span>
      </div>
      <div className="children">{children}</div>
    </CardWrap>
  );
};

export default LargeCard;
