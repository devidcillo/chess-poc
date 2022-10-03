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

export const oneSquareBack = (startingPosition, color) => {
  let positionArray = startingPosition.split("")
  const positionModifier = color === 'w' ? -1 : 1
  const newRank = Number(positionArray[1]) + positionModifier
  return `${positionArray[0]}${newRank}`
}