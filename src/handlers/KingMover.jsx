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

const fileToTheLeftOf = positionArray => {
  const adjacentFiles = {
    'b': 'a',
    'c': 'b',
    'd': 'c',
    'e': 'd',
    'f': 'e',
    'h': 'g'
  }
  return adjacentFiles[positionArray]
}

const fileToTheRightOf = positionArray => {
  const adjacentFiles = {
    'a': 'b',
    'b': 'c',
    'c': 'd',
    'd': 'e',
    'e': 'f',
    'g': 'h'
  }
  return adjacentFiles[positionArray]
}

const oneSquareToTheLeft = (startingPosition, endingPosition) => {
  let positionArray = startingPosition.split('')
  return `${fileToTheLeftOf(positionArray[0])}${positionArray[1]}` === endingPosition
}

const oneSquareToTheRight = (startingPosition, endingPosition) => {
  let positionArray = startingPosition.split('')
  return `${fileToTheRightOf(positionArray[0])}${positionArray[1]}` === endingPosition
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