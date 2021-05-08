/* eslint-disable indent*/
import React from "react";

function Sortbutton(props) {
  return (
    <button onClick={props.sortScores}>
      {props.sortingOrder === 1 ? "Sort Descending" : "Sort Ascending-Default"}
    </button>
  );
}

export default Sortbutton;
