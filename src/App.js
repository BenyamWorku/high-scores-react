/* eslint-disable indent*/
import React from "react";
import Scores from "./Scores";
import "./App.css";
import Scorecard from "./Scorecard";
function App() {
  return (
    <div className="App">
      <Scorecard data={Scores}></Scorecard>
    </div>
  );
}

export default App;
