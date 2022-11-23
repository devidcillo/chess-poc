const handleCastle = moveString => {
  return '0-0' === moveString;
}

export const handleSpecialMove = moveString => {
  return handleCastle(moveString);

}
