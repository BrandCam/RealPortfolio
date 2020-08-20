import React from "react";
import SectionWrap from "./HighScoresSection.style";
import HighScoreCard from "../HighscoreCard/HighScoreCard";
const HighScroesSection = ({ skills }) => {
  return (
    <SectionWrap>
      {skills.map((skill) => (
        <HighScoreCard skill={skill} />
      ))}
    </SectionWrap>
  );
};

export default HighScroesSection;
