const oneSquareForward = (startingPosition, endingPosition, color) => {
  let positionArray = startingPosition.split('')
  const positionModifier = color === 'w' ? 1 : -1
  const newRank = Number(positionArray[1]) + positionModifier
  return `${positionArray[0]}${newRank}` === endingPosition
}

function isStartingFromHomePosition(startingPosition, color) {
  const rankModifier = color === 'w' ? 2 : 7
  const regex = new RegExp('[a-h]' + rankModifier)
  return regex.test(startingPosition);
}

function twoSquaresFromHomePosition(startingPosition, endingPosition, color) {
  let positionArray = startingPosition.split('')
  const positionModifier = color === 'w' ? 2 : -2
  const newRank = Number(positionArray[1]) + positionModifier
  const moveIsTwoSquaresForwardOnSameFile = `${positionArray[0]}${newRank}` === endingPosition;
  return isStartingFromHomePosition(startingPosition, color) && moveIsTwoSquaresForwardOnSameFile
}

const validateMove = (from, to, color) => {
  const forwardMove = oneSquareForward(from, to, color);
  const startingCharge = twoSquaresFromHomePosition(from, to, color)
  return forwardMove || startingCharge
}

export const movePawn = ({from, to, color}) => {
  return validateMove(from, to, color);
}