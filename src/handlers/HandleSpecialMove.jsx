const handleCastle = (moveString, record) => {
  const isKingInStartingPosition = record['e1'] === 'wK'
  const isKingSideRookInStartingPosition = record['h1'] === 'wR'
  const areTargetSquaresEmpty = !record['f1'] && !record['g1']
  if (isKingSideRookInStartingPosition && isKingInStartingPosition && areTargetSquaresEmpty)
    return {...record, e1: '', f1: 'wR', g1: 'wK', h1: ''}
  return record
}

export const handleSpecialMove = (moveString, record) => {
  return handleCastle(moveString, record);
}
