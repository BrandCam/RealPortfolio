import React from "react";
import SectionWrap, { ThreeDScene } from "./HighScoresSection.style";
import HighScoreCard from "../HighscoreCard/HighScoreCard";

const HighScroesSection = ({ skills }) => {
  return (
    <SectionWrap>
      {skills.map((skill) => (
        <ThreeDScene className="scene-card" key={skill}>
          <div className="card">
            <div className="card-face card-face-front">
              <HighScoreCard skill={skill} />
            </div>
            <div className="card-face card-face-back">
              <HighScoreCard skill={skill} />
            </div>
          </div>
        </ThreeDScene>
      ))}
    </SectionWrap>
  );
};

export default HighScroesSection;
