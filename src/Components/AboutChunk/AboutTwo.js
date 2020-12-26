import React from "react";

const AboutTwo = (props) => {
  return (
    <>
      <h3>Full Stack Web Developer. </h3>
      <p>
        My name is Brandon Campbell and I am a Web Developer with a focus in
        React, and front-end technologies. I have a passion for creating
        beautiful, interactive software.
      </p>
      <p>
        Data in its purest form possesses unmatchable eloquence and power. Yet
        data alone cannot hold a user’s attention long enough to achieve its
        true purpose.
      </p>
      <p>
        I'm more of a visual person myself, so opposed to telling you that this
        is an L-system to simulate tree growth:{" "}
      </p>
      <code>
        {
          "Axiom X; F → FX[FX[+XF]] and X → FF[+XZ++X-F[+ZX]][-X++F-X] and Z → [+F-X-F][++ZX]"
        }
      </code>
      <p>Allow me to show you visually.</p>
    </>
  );
};

export default AboutTwo;
