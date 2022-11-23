import {oneFileToTheLeftOf, oneFileToTheRightOf} from "../utils/PositionRandomizer";

const oneSquareForward = (startingPosition, endingPosition) => {
  let positionArray = startingPosition.split('')
  const newRank = Number(positionArray[1]) + 1
  return `${positionArray[0]}${newRank}` === endingPosition
}

const oneSquareBackward = (startingPosition, endingPosition) => {
  let positionArray = startingPosition.split('')
  const newRank = Number(positionArray[1]) - 1
  return `${positionArray[0]}${newRank}` === endingPosition
}

const oneSquareToTheLeft = (startingPosition, endingPosition) => {
  let positionArray = startingPosition.split('')
  return `${oneFileToTheLeftOf(positionArray[0])}${positionArray[1]}` === endingPosition
}

const oneSquareToTheRight = (startingPosition, endingPosition) => {
  let positionArray = startingPosition.split('')
  return `${oneFileToTheRightOf(positionArray[0])}${positionArray[1]}` === endingPosition
}

const oneSquareDiagonalUpLeft = (from, to) => {
  return 'a2' === to
}

const validateMove = (from, to) => {
  return oneSquareForward(from, to) || oneSquareBackward(from, to) || oneSquareToTheLeft(from, to) || oneSquareToTheRight(from, to) || oneSquareDiagonalUpLeft(from, to)
}

export const moveKing = ({from, to}) => {
  return validateMove(from, to)
}