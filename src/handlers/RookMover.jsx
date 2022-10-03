const isMoveVertical = (from, to) => {
  let startingFile = from.split('')[0]
  let endingFile = to.split('')[0]
  return startingFile === endingFile
}

const isMoveHorizontal = (from, to) => {
  let startingRank = from.split('')[1]
  let endingRank = to.split('')[1]
  return startingRank === endingRank
}

export const moveRook = ({from, to}) => {
  return isMoveVertical(from, to) || isMoveHorizontal(from, to)
}