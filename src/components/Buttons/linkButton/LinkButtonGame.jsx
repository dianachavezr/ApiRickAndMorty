import React from "react";
import linkButton from "./linkButton.css";

function LinkButtonGame({ background, text, color, url }) {
  console.log(url);
  return (
    <button style={{ background: background }} className="btn">
      <a href={url} style={{ color: color }} target="_blank" rel="noreferrer">
        {text}
      </a>
    </button>
  );
}

export default LinkButtonGame;
