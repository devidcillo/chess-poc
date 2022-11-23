export const randomRank = () => {
  const minRank = 1
  const maxRank = 8
  return Math.floor(Math.random() * (maxRank - minRank + 1)) + minRank
}

export const randomFile = () => {
  const validFiles = 'abcdefgh'
  return validFiles.charAt(Math.floor(Math.random() * validFiles.length))
}

export const randomPosition = () => {
  return `${randomFile()}${randomRank()}`
}

export const randomPositionAtFile = file => {
  return `${file}${randomRank()}`
}

export const randomPositionAtRank = rank => {
  return `${randomFile()}${rank}`
}

export const oneSquareBack = (startingPosition, color) => {
  let positionArray = startingPosition.split("")
  const positionModifier = color === 'w' ? -1 : 1
  const newRank = Number(positionArray[1]) + positionModifier
  return `${positionArray[0]}${newRank}`
}

export const oneFileToTheLeftOf = givenFile => {
  const adjacentFiles = {
    'b': 'a',
    'c': 'b',
    'd': 'c',
    'e': 'd',
    'f': 'e',
    'h': 'g'
  }
  return adjacentFiles[givenFile]
}


export const oneFileToTheRightOf = givenFile => {
  const adjacentFiles = {
    'a': 'b',
    'b': 'c',
    'c': 'd',
    'd': 'e',
    'e': 'f',
    'g': 'h'
  }
  return adjacentFiles[givenFile]
}
