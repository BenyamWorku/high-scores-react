/* eslint-disable indent*/
import React from "react";
import Scoretable from "./Scoretable";
function Scorecard(props) {
  return (
    <div className="big-box">
      <h1 className="text">High Scores per Country </h1>
      {props.data.map((elem) => (
        <div className="score-box">
          <h2 className="text">High Scores:{elem.name}</h2>
          <Scoretable arrObj={elem.scores} />
        </div>
      ))}
    </div>
  );
}

export default Scorecard;
