import './App.css';
import React from "react";
import Chessboard from "chessboardjsx";

function App() {
  const handleMove = (from, to) => {
    console.log('handling move', from, to)
  }

  return (
    <div className="App">
      <Chessboard position={{e2: 'bP'}} onDrop={(move) => handleMove({from: move.sourceSquare, to: move.targetSquare})} />
    </div>
  );
}

export default App;
