import React, { useState } from "react";
import DescriptionWrap from "./ProjectPrevDescription.style";
const Description = ({ text, selectedPrev }) => {
  let [selected, setSelected] = useState("");

  let content = null;
  if (selected === "description") {
    content = <div className="content">{text.text}</div>;
  }
  if (selected === "stack") {
    content = (
      <div className=" content">
        {text.stack.map((e) => (
          <div>{e}</div>
        ))}
      </div>
    );
  }
  if (selected === "links") {
    content = (
      <div className="links content">
        <a rel="noopener noreferrer" target="_blank" href={text.github}>
          GitHub
        </a>
        <a rel="noopener noreferrer" target="_blank" href={text.deployed}>
          Site
        </a>
      </div>
    );
  }
  if (selected === "materia") {
    content = (
      <ul>
        {text.tech.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    );
  }
  return (
    <DescriptionWrap>
      <span>{selectedPrev.description}</span>
      <div className="description">
        <div className="selector">
          <button
            className={selected === "materia" ? "selected" : ""}
            onClick={() => setSelected("materia")}
          >
            Materia
          </button>
          <button
            className={selected === "description" ? "selected" : ""}
            onClick={() => setSelected("description")}
          >
            Description
          </button>
          <button
            className={selected === "stack" ? "selected" : ""}
            onClick={() => setSelected("stack")}
          >
            Stack
          </button>
          <button
            className={selected === "links" ? "selected" : ""}
            onClick={() => setSelected("links")}
          >
            Links
          </button>
        </div>
        {content}
      </div>
    </DescriptionWrap>
  );
};

export default Description;
