import {Chessboard} from "react-chessboard";
import React from "react";
import {handleMove} from "../handlers/HandleMove";
import {startPosition} from "../initialState";

const chessboardApp = () => {
  const [state, setState] = React.useState(startPosition)
  const handleMoveAndUpdate = (from, to, piece) => {
    const stateCopy = {...state}
    if (handleMove(from, to, piece)) {
      stateCopy[from] = ''
      stateCopy[to] = piece
      setState({...stateCopy})
    }
  }

  return (
    <div data-testid='board'>
      <Chessboard onPieceDrop={handleMoveAndUpdate} position={state} />
    </div>
  )
}

export default chessboardApp