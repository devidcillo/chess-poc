import {Chessboard} from "react-chessboard";
import React, { useState } from 'react';
import {handleMove} from "../handlers/HandleMove";
import {startPosition} from "../initialState";

const chessboardApp = () => {
  const [state, setState] = useState(startPosition)
  
  const handleMoveAndUpdate = (from, to, piece) => {
    const stateCopy = {...state}
    if (handleMove(from, to, piece)) {
      stateCopy[from] = ''
      stateCopy[to] = piece
      setState({...stateCopy})
    }
  }

  const processInputEvent = event => {
    if ('Enter' === event.code) {
      const moveString = event.target.value
      const from = moveString.slice(0, 2);
      const to = moveString.slice(2, 4);
      const piece = state[from]
      console.log(`moving ${piece} from ${from} to ${to}`)
      handleMoveAndUpdate(from, to, piece)
    }
  }

  return (
    <div data-testid='board'>
      <Chessboard position={state} arePiecesDraggable={false} />
      <input data-testid="moves-input" type={"text"} onKeyDown={processInputEvent} maxLength={4} />
    </div>
  )
}

export default chessboardApp