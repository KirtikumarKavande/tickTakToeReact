import React, { useState } from "react";
import Card from "./components/Card/Card";

const App = () => {
  const [currentTurn,setCurrentTurn]=useState(false)
  return (
    <div>
      <h1>Turn is :{currentTurn?"X":"O"}</h1>
      <Card currentTurn={currentTurn} setCurrentTurn={setCurrentTurn}/>
    </div>
  );
};

export default App;
