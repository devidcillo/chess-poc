import {Chessboard} from "react-chessboard";
import React, { useState } from 'react';
import {handleMove} from "../handlers/HandleMove";
import {castlingPossible, startPosition} from "../initialState";
import {handleSpecialMove} from "../handlers/HandleSpecialMove";

const ChessboardApp = () => {
  const [record, setRecord] = useState(startPosition)
  const [error, setError] = useState(false)

  const handleMoveAndUpdate = (from, to, piece) => {
    const stateCopy = {...record}
    if (handleMove(from, to, piece)) {
      stateCopy[from] = ''
      stateCopy[to] = piece
      setRecord({...stateCopy})
      setError(false)
    } else {
      setError(true)
    }
  }

  const processInputEvent = event => {
    const moveString = event.target.value
    if ('Enter' === event.code) {
      if ('castle' === moveString) {
        setRecord(castlingPossible)
        setError(false)
      }
      else {
        const from = moveString.slice(0, 2);
        const to = moveString.slice(2, 4);
        const piece = record[from]
        handleMoveAndUpdate(from, to, piece)
      }
    }
  }

  return (
    <div data-testid='board'>
      <Chessboard position={record} arePiecesDraggable={false}/>
      <div>
        <label htmlFor={'moveInput'}>Move:</label>
        <input id="moveInput" data-testid="moves-input" placeholder="Example: a2a3" type={"text"} onKeyDown={processInputEvent} maxLength={10}/>
      </div>
      
      {error && (<div data-testid="error-message">
        <h5>Invalid move! Try a different move</h5>
      </div>)}

      {!error && (<div data-testid="success-message">
        <h5>Great move!</h5>
      </div>)}
    </div>
  )
}

export default ChessboardApp