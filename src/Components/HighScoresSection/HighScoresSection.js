import React, { useState, useEffect } from "react";
import SectionWrap, { ThreeDScene } from "./HighScoresSection.style";
import HighScoreCard from "../HighscoreCard/HighScoreCard";
const randomASCII = () => {
  return Math.floor(Math.random() * 26) + 65;
};

const randomScore = () => {
  return (
    Math.floor(Math.random() * 900000) +
    (Math.floor(Math.random() * 9) + 1) * 1000000
  );
};
const scoreArrMaker = () => {
  let scores = [];
  for (let i = 0; i < 5; i++) {
    scores.push(randomScore());
  }
  scores.sort((a, b) => b - a);
  return scores;
};
const nameArrMaker = () => {
  let names = [];
  for (let i = 0; i < 5; i++) {
    names.push(makeName());
  }

  return names;
};
const makeName = () => {
  return String.fromCharCode(randomASCII(), randomASCII(), randomASCII());
};

const HighScroesSection = ({ skills }) => {
  let [cardInfo, setCardInfo] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    let scores = [];
    skills.forEach((skill) =>
      scores.push({
        skill: skill,
        names: nameArrMaker(),
        scores: scoreArrMaker(),
      })
    );

    setCardInfo(() => scores);
    setLoading(() => false);
  }, []);

  let content;

  loading
    ? (content = <div>loading...</div>)
    : (content = (
        <SectionWrap>
          {cardInfo.map((val) => (
            <ThreeDScene className="scene-card" key={val.skill}>
              <div className="card">
                <div className="card-face card-face-front">
                  <HighScoreCard info={val} />
                </div>
                <div className="card-face card-face-back">
                  <HighScoreCard info={val} />
                </div>
              </div>
            </ThreeDScene>
          ))}
        </SectionWrap>
      ));

  return content;
};

export default HighScroesSection;
