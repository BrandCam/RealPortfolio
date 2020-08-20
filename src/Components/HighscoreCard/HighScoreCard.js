import React, { useState, useRef, useEffect } from "react";
import LargeCard from "../UI/LargeCard";
import HighScoreInner, { Trophy } from "./HighScoreCard.style";
import img from "../../img/trophy.png";
const randomASCII = () => {
  return Math.floor(Math.random() * 26) + 65;
};
const randomScore = () => {
  return (
    Math.floor(Math.random() * 900000) +
    (Math.floor(Math.random() * 9) + 1) * 1000000
  );
};

const makeName = () => {
  return String.fromCharCode(randomASCII(), randomASCII(), randomASCII());
};

const randomColor = () => {
  const colors = {
    1: "#ff2a6d",
    2: "#d1f7ff",
    3: "#05d9e8",
    4: "#F500FF",
  };
  return colors[Math.floor(Math.random() * 4) + 1];
};

const HighScoreCard = ({ skill }) => {
  let [scoreArr, setScoreArr] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      setScoreArr((scoreArr) => [...scoreArr, randomScore()]);
    }
    setScoreArr((scoreArr) => scoreArr.sort((a, b) => b - a));
  }, []);
  return (
    <LargeCard size="small">
      <Trophy>
        <img src={img} />
      </Trophy>

      <HighScoreInner>
        <h1>
          {skill
            .split("")
            .map((char) =>
              char === " " ? (
                <pre> </pre>
              ) : (
                <span style={{ color: randomColor() }}>{char}</span>
              )
            )}
        </h1>

        <table>
          <tbody>
            <tr>
              <td>1ST</td>
              <td>{scoreArr[0]}</td>
              <td>{makeName()}</td>
            </tr>
            <tr>
              <td>2ND</td>
              <td>{scoreArr[1]}</td>
              <td>{makeName()}</td>
            </tr>
            <tr>
              <td>3RD</td>
              <td>{scoreArr[2]}</td>
              <td>{makeName()}</td>
            </tr>
            <tr>
              <td>4TH</td>
              <td>{scoreArr[3]}</td>
              <td>{makeName()}</td>
            </tr>
            <tr>
              <td>5TH</td>
              <td>{scoreArr[4]}</td>
              <td>{makeName()}</td>
            </tr>
          </tbody>
        </table>
      </HighScoreInner>
    </LargeCard>
  );
};

export default HighScoreCard;
