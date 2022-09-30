import {movePawn} from "./PawnMover";

const validateMove = (from, to, piece) => {
  const split = piece.slice(1, 2)
  switch (split) {
    case 'P':
      return movePawn({from, to, piece})
    case 'R':
      if (piece === 'wR') {
        return true
      }
      break
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