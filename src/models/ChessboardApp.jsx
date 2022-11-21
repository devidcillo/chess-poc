import {Chessboard} from "react-chessboard";
import React, { useState } from 'react';
import {handleMove} from "../handlers/HandleMove";
import {castlingPossible, startPosition} from "../initialState";

const ChessboardApp = () => {
  const [state, setState] = React.useState(startPosition)

  const handleMoveAndUpdate = (from, to, piece) => {
    const stateCopy = {...state}
    if (handleMove(from, to, piece)) {
      stateCopy[from] = ''
      stateCopy[to] = piece
      setState({...stateCopy})
    }
  }

  const processInputEvent = event => {
    const moveString = event.target.value
    if ('Enter' === event.code) {
      if ('castle' === moveString)
        setState(castlingPossible)
      else {
        const from = moveString.slice(0, 2);
        const to = moveString.slice(2, 4);
        const piece = state[from]
        console.log(`moving ${piece} from ${from} to ${to}`)
        handleMoveAndUpdate(from, to, piece)
      }
    }
  }

  return (
    <div data-testid='board'>
      <Chessboard position={state} arePiecesDraggable={false}/>
      <input data-testid="moves-input" type={"text"} onKeyDown={processInputEvent} maxLength={10}/>
    </div>
  )
}

export default ChessboardApp