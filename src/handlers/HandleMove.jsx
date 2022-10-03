import {movePawn} from "./PawnMover";
import {moveRook} from "./RookMover";

const validateMove = (from, to, piece) => {
  const splitPiece = piece.split('')
  switch (splitPiece[1]) {
    case 'P':
      return movePawn({from, to, color: splitPiece[0]})
    case 'R':
      return moveRook({from, to})
    default:
      return false
  }
}

export const handleMove = ({from, to, piece}) => {
  console.log('handling move', from, to, piece)
  const validMove = validateMove(from, to, piece)
  if (!validMove)
    throw new Error('invalid move')
}