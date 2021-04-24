/* eslint-disable indent*/
import React from "react";

function Scoretable(props) {
  return (
    <table className=" table-body-wrapper ">
      <tbody>
        {props.arrObj.map((elem) => (
          <tr>
            <th>{elem.n}</th>
            <th className="player-score">{elem.s}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Scoretable;
