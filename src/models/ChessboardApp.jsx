import {Chessboard} from "react-chessboard";
import React from "react";
import {handleMove} from "../handlers/HandleMove";

const chessboardApp = () => {
  const [state, setState] = React.useState({b7: 'bP'})
  const handleMoveAndUpdate = (from, to, piece) => {
    const stateCopy = {...state}
    console.log('stateCopy', stateCopy)
    if (handleMove(from, to, piece)) {
      const varib = {h5: 'wP'}
      setState(varib)
      console.log('state', state)
    }
  }
  const printPos = position => {
    console.log('here is my position', position)
    // setState(position)
  }
  return (
    <div data-testid='board'>
      <Chessboard onPieceDrop={handleMoveAndUpdate} position={state} getPositionObject={printPos}/>
    </div>
  )
}

export default chessboardApp