const validateMove = (from, to, piece) => {
  if (piece === 'wP') {
    const forwardMove = to === 'e3'
    const startingCharge = from === 'e2' && to === 'e4'
    return forwardMove || startingCharge
  }
  if (piece === 'bP') {
    const forwardMove = to === 'e6'
    const startingCharge = from === 'e7' && to === 'e5'
    return forwardMove || startingCharge
  }
  if (piece === 'wR') {
    return true
  }
}

export const handleMove = ({from, to, piece}) => {
  console.log('handling move', from, to, piece)
  const validMove = validateMove(from, to, piece)
  if (!validMove)
    throw new Error('invalid move')
}