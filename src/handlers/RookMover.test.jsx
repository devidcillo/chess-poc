import {randomFile, randomPositionAtFile, randomPositionAtRank, randomRank} from "../utils/PositionRandomizer";
import {moveRook} from "./RookMover";

describe('Rook Mover', () => {
  test('should be able to move forward', () => {
    const expectedFile = randomFile()
    const endingPosition = randomPositionAtFile(expectedFile)
    expect(moveRook({from: `${expectedFile}1`, to: endingPosition})).toBe(true)
  })

  test('should be able to move backward', () => {
    const expectedFile = randomFile()
    const endingPosition = randomPositionAtFile(expectedFile)
    expect(moveRook({from: `${expectedFile}8`, to: endingPosition})).toBe(true)
  })

  test('should be able to move left', () => {
    const expectedRank = randomRank()
    const endingPosition = randomPositionAtRank(expectedRank)
    expect(moveRook({from: `a${expectedRank}`, to: endingPosition})).toBe(true)
  })

  test('should be able to move right', () => {
    const expectedRank = randomRank()
    const endingPosition = randomPositionAtRank(expectedRank)
    expect(moveRook({from: `h${expectedRank}`, to: endingPosition})).toBe(true)
  })
})