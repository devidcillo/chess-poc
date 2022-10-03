const oneSquareForward = (startingPosition, endingPosition, color) => {
  let positionArray = startingPosition.split("")
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
  const startingFromHomePosition = isStartingFromHomePosition(startingPosition, color)
  const moveIsTwoSquaresForwardOnSameFile = `${positionArray[0]}${newRank}` === endingPosition;
  return startingFromHomePosition && moveIsTwoSquaresForwardOnSameFile
}

const validateMove = (piece, to, from) => {
  if (piece === 'wP') {
    const forwardMove = oneSquareForward(from, to, 'w');
    const startingCharge = twoSquaresFromHomePosition(from, to, 'w')
    return forwardMove || startingCharge
  }
  if (piece === 'bP') {
    const forwardMove = oneSquareForward(from, to, 'b')
    const startingCharge = twoSquaresFromHomePosition(from, to, 'b')
    return forwardMove || startingCharge
  }
}

export const movePawn = ({piece, to, from}) => {
  return validateMove(piece, to, from);
}