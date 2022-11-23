import {Chessboard} from "react-chessboard";
import React, { useState } from 'react';
import {handleMove} from "../handlers/HandleMove";
import {castlingPossible, startPosition} from "../initialState";
import {handleSpecialMove} from "../handlers/HandleSpecialMove";

const ChessboardApp = () => {
  const [record, setRecord] = useState(startPosition)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [move, setMove] = useState('')

  const handleMoveAndUpdate = (from, to, piece) => {
    if (handleMove(from, to, piece)) {
      const stateCopy = {...record}
      stateCopy[from] = ''
      stateCopy[to] = piece
      setRecord({...stateCopy})
      setMove('')
      setIsSuccess(true)
      setIsError(false)
    } else {
      setIsError(true)
    }
  }

  const handleChange = event => {
    setMove(event.target.value)
  }

  const processInputEvent = event => {
    if ('Enter' === event.code) {
      const moveString = event.target.value

      if ('castle' === moveString) {
        setRecord(castlingPossible)
        setIsError(false)
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
        <input id="moveInput" data-testid="moves-input" placeholder="Example: a2a3" type={"text"} onChange={handleChange} onKeyDown={processInputEvent} maxLength={10} value={move} />
      </div>
      
      {isError && (<div data-testid="error-message">
        <h5>Invalid move! Try a different move</h5>
      </div>)}

      {isSuccess && (<div data-testid="success-message">
        <h5>Great move!</h5>
      </div>)}
    </div>
  )
}

export default ChessboardApp