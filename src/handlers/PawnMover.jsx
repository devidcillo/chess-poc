const oneSquareForward = (startingPosition, endingPosition, color) => {
  let positionArray = startingPosition.split("")
  const positionModifier = color === 'w' ? 1 : -1
  const newRank = Number(positionArray[1]) + positionModifier
  return `${positionArray[0]}${newRank}` === endingPosition
}

function twoSquaresFromHomePosition(startingPosition, endingPosition, color) {
  let positionArray = startingPosition.split('')
  const newRank = Number(positionArray[1]) + 2
  const startingFromHomePosition = /[a-h]2/.test(startingPosition)
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
    const startingCharge = from === 'e7' && to === 'e5'
    return forwardMove || startingCharge
  }
}

export const movePawn = ({piece, to, from}) => {
  return validateMove(piece, to, from);
}