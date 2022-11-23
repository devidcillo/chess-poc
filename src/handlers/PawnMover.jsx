const oneSquareForward = (startingPosition, endingPosition, color) => {
  let positionArray = startingPosition.split('')
  const positionModifier = color === 'w' ? 1 : -1
  const newRank = Number(positionArray[1]) + positionModifier
  return `${positionArray[0]}${newRank}` === endingPosition
}

const twoSquaresForward = (startingPosition, endingPosition, color) => {
  let positionArray = startingPosition.split('')
  const positionModifier = color === 'w' ? 2 : -2
  const newRank = Number(positionArray[1]) + positionModifier
  return `${positionArray[0]}${newRank}` === endingPosition
}

const validateMove = (from, to, color) => {
  return oneSquareForward(from, to, color) || twoSquaresForward(from, to, color)
}

export const movePawn = ({from, to, color}) => {
  return validateMove(from, to, color);
}