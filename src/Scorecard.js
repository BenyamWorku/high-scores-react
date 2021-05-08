/* eslint-disable indent*/
import React from "react";
import Scoretable from "./Scoretable";

function Scorecard(props) {
  function sortArray(arr) {
    arr.sort(
      (a, b) => (a.s > b.s && props.sortingOrder) || -props.sortingOrder
    );
  }

  return (
    <div className="big-box">
      <h1 className="text">{props.heading} </h1>
      {props.data.map((elem) => {
        sortArray(elem.scores);
        return (
          <div className="score-box">
            <h2 className="text">High Scores:{elem.name}</h2>
            <Scoretable arrObj={elem.scores} />
          </div>
        );
      })}
    </div>
  );
}

export default Scorecard;
