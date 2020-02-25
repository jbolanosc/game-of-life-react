import React from "react";
import Game from "./Components/game/Game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <Game />
    </div>
  );
}

export default App;
