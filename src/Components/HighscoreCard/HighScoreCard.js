import React, { useState, useRef, useEffect } from "react";
import LargeCard from "../UI/LargeCard";
import HighScoreInner, { Trophy } from "./HighScoreCard.style";
import img from "../../img/trophy.png";

const randomColor = () => {
  const colors = {
    1: "#ff2a6d",
    2: "#d1f7ff",
    3: "#05d9e8",
    4: "#F500FF",
  };
  return colors[Math.floor(Math.random() * 4) + 1];
};

const HighScoreCard = (props) => {
  return (
    <LargeCard size="small">
      <Trophy>
        <img src={img} />
      </Trophy>

      <HighScoreInner>
        <h1>
          {props.info.skill.split("").map((char) =>
            char === " " ? (
              <pre key={Math.random()}> </pre>
            ) : (
              <span key={Math.random()} style={{ color: randomColor() }}>
                {char}
              </span>
            )
          )}
        </h1>

        <table>
          <tbody>
            <tr>
              <td>1ST</td>
              <td>{props.info.scores[0]}</td>
              <td>{props.info.names[0]}</td>
            </tr>
            <tr>
              <td>2ND</td>
              <td>{props.info.scores[1]}</td>
              <td>{props.info.names[1]}</td>
            </tr>
            <tr>
              <td>3RD</td>
              <td>{props.info.scores[2]}</td>
              <td>{props.info.names[2]}</td>
            </tr>
            <tr>
              <td>4TH</td>
              <td>{props.info.scores[3]}</td>
              <td>{props.info.names[3]}</td>
            </tr>
            <tr>
              <td>5TH</td>
              <td>{props.info.scores[4]}</td>
              <td>{props.info.names[4]}</td>
            </tr>
          </tbody>
        </table>
      </HighScoreInner>
    </LargeCard>
  );
};

export default HighScoreCard;
