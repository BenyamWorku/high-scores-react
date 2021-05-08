/* eslint-disable indent*/
import React, { useState } from "react";
import Scores from "./Scores";
import "./App.css";
import Scorecard from "./Scorecard";
import Sortbutton from "./Sortbutton";
function sortArray(arr) {
  arr.sort((a, b) => (a.name > b.name && 1) || -1);
}

sortArray(Scores);
function App() {
  const [sortingOrder, setSortingOrder] = useState(1);
  function sortScores() {
    setSortingOrder(sortingOrder === 1 ? -1 : 1);
  }

  let worldArrayObject = [
    { scores: Scores.flatMap((elem) => [...elem.scores]) },
  ];

  return (
    <div className="App">
      <Sortbutton
        sortingOrder={sortingOrder}
        sortScores={sortScores}
      ></Sortbutton>
      <Scorecard
        heading="Worldwide Scores"
        data={worldArrayObject}
        sortingOrder={sortingOrder}
      ></Scorecard>
      <Scorecard
        heading="High Scores per country"
        data={Scores}
        sortingOrder={sortingOrder}
      ></Scorecard>
    </div>
  );
}

export default App;
