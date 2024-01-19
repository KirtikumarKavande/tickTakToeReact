import React, { useState } from "react";
import "./card.css";
import Grid from "../Grid/Grid";

const Card = ({ currentTurn, setCurrentTurn }) => {
  const [marked, setMarked] = useState(Array(9).fill("*"));
  console.log("marked", marked);

  function winnerPredictor(filledArray) {
    if (
      filledArray[0] === filledArray[1] &&
      filledArray[0] === filledArray[2] &&
      filledArray[1] === filledArray[2]
    ) {
      return filledArray[0];
    } else if (
      filledArray[3] === filledArray[4] &&
      filledArray[4] === filledArray[5] &&
      filledArray[3] === filledArray[5]
    ) {
      return filledArray[3];
    } else if (
      filledArray[6] === filledArray[7] &&
      filledArray[7] === filledArray[8] &&
      filledArray[6] === filledArray[8]
    ) {
      return filledArray[6];
    } else if (
      filledArray[0] === filledArray[3] &&
      filledArray[3] === filledArray[6] &&
      filledArray[0] === filledArray[6]
    ) {
      return filledArray[0];
    } else if (
      filledArray[1] === filledArray[4] &&
      filledArray[4] === filledArray[7] &&
      filledArray[1] === filledArray[7]
    ) {
      return filledArray[1];
    } else if (
      filledArray[2] === filledArray[5] &&
      filledArray[5] === filledArray[8] &&
      filledArray[2] === filledArray[8]
    ) {
      return filledArray[2];
    } else if (
      filledArray[0] === filledArray[4] &&
      filledArray[4] === filledArray[8] &&
      filledArray[0] === filledArray[8]
    ) {
      return filledArray[6];
    } else if (
      filledArray[2] === filledArray[4] &&
      filledArray[4] === filledArray[6] &&
      filledArray[2] === filledArray[6]
    ) {
      return filledArray[2];
    }
  }
  return (
    <>
      <h1>
        Winner is{" "}
        {winnerPredictor(marked) === "*" ? "" : winnerPredictor(marked)}
      </h1>
      <button
        onClick={() => {
          setMarked(Array(9).fill("*"));
        }}
      >
        Reset
      </button>
      <div className="card">
        {marked.map((item, index) => (
          <span
            onClick={(e) => {
              let oldMarkedArray = [...marked];
              if (
                oldMarkedArray[index] === "X" ||
                oldMarkedArray[index] === "O"
              )
                return;
              oldMarkedArray[index] = currentTurn ? "X" : "O";
              setMarked(oldMarkedArray);

              setCurrentTurn(!currentTurn);
            }}
          >
            <Grid currentState={item} />
          </span>
        ))}
      </div>
    </>
  );
};

export default Card;
