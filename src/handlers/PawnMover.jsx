function validateMove(piece, to, from) {
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
}

export const movePawn = ({piece, to, from}) => {
  return validateMove(piece, to, from);
}