import {Chessboard} from "react-chessboard";
import React, { useState } from 'react';
import {handleMove} from "../handlers/HandleMove";
import {castlingPossible, startPosition} from "../initialState";
import {handleSpecialMove} from "../handlers/HandleSpecialMove";

const ChessboardApp = () => {
  const [record, setRecord] = useState(startPosition)
  const [isError, setIsError] = useState(false)
  const [isInProgress, setIsInProgress] = useState(false)
  const [move, setMove] = useState('')

  const resetMove = () => {
    setMove('')
    setIsError(false)
    setIsInProgress(true)
  }

  const handleMoveAndUpdate = (from, to, piece) => {
    if (handleMove(from, to, piece)) {
      const stateCopy = {...record}
      stateCopy[from] = ''
      stateCopy[to] = piece
      setRecord({...stateCopy})
      resetMove()
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
      
      setIsInProgress(true)

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

  const shouldShowError = isError
  const shouldShowSucess = !isError && isInProgress

  return (
    <div data-testid='board'>
      <Chessboard position={record} arePiecesDraggable={false}/>
      <div>
        <label htmlFor={'moveInput'}>Move:</label>
        <input id="moveInput" data-testid="moves-input" placeholder="Example: a2a3" type={"text"} onChange={handleChange} onKeyDown={processInputEvent} maxLength={10} value={move} />
      </div>
      
      {shouldShowError && (<div data-testid="error-message">
        <h5>Invalid move! Try a different move</h5>
      </div>)}

      {shouldShowSucess && (<div data-testid="success-message">
        <h5>Great move!</h5>
      </div>)}
    </div>
  )
}

export default ChessboardApp