import React, { useState } from "react";
import "./card.css";
import Grid from "../Grid/Grid";
const Card = ({ currentTurn, setCurrentTurn }) => {
  const [marked, setMarked] = useState(Array(9).fill("*"));
  console.log("marked",marked)
  return (
    <div className="card">
      {marked.map((item, index) => (
        <span
          onClick={(e) => {
            let oldMarkedArray = [...marked];
            if(oldMarkedArray[index]==="X"||oldMarkedArray[index]==="O") return
            oldMarkedArray[index] = currentTurn?"X":"O";
            setMarked(oldMarkedArray);
           
            setCurrentTurn(!currentTurn);
          }}
        >
          <Grid currentState={item}/>
        </span>
      ))}
    </div>
  );
};

export default Card;
