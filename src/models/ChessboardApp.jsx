import Chessboard from "chessboardjsx";
import React from "react";
import {handleMove} from "../handlers/HandleMove";

const chessboardApp = () => {
  return (
    <div data-testid='board'>
      <Chessboard
        position={{e2: 'wP', e6: 'bP', f3: 'wR', g7: 'bR'}}
        // position='start'
        onDrop={(move) => handleMove({from: move.sourceSquare, to: move.targetSquare, piece: move.piece})}/>
    </div>
  )
}

export default chessboardApp