import {oneSquareForward} from "../utils/PositionRandomizer";

const checkValidMoveForward = (from, to) => {
  return to === oneSquareForward(from, 'w');
}

const validateMove = (piece, to, from) => {
  if (piece === 'wP') {
    const forwardMove = checkValidMoveForward(from, to)
    const startingCharge = from === 'e2' && to === 'e4'
    return forwardMove || startingCharge
  }
  if (piece === 'bP') {
    const forwardMove = to === 'e6'
    const startingCharge = from === 'e7' && to === 'e5'
    return forwardMove || startingCharge
  }
}

export const movePawn = ({piece, to, from}) => {
  return validateMove(piece, to, from);
}