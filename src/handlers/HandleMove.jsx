import {movePawn} from "./PawnMover";
import {moveRook} from "./RookMover";
import {moveKing} from "./KingMover";

const validateMove = (from, to, piece) => {
  const splitPiece = piece.split('')
  switch (splitPiece[1]) {
    case 'P':
      return movePawn({from, to, color: splitPiece[0]})
    case 'R':
      return moveRook({from, to})
    case 'K':
      return moveKing({from, to})
    default:
      return false
  }
}

export const handleMove = (from, to, piece) => {
  return validateMove(from, to, piece);
}