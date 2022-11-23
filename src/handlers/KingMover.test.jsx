import {
  oneFileToTheLeftOf,
  oneFileToTheRightOf,
  randomPosition, randomPositionAtFile,
  randomPositionAtRank
} from "../utils/PositionRandomizer";
import {moveKing} from "./KingMover";

describe('Kings', () => {
  test('should move one square forward', () => {
    const startingPosition = randomPositionAtRank('1')
    let positionArray = startingPosition.split("")
    const endingPosition = `${positionArray[0]}${Number(positionArray[1]) + 1}`
    expect(moveKing({from: startingPosition, to: endingPosition})).toBe(true);
  })

  test('should not move two squares forward', () => {
    const startingPosition = randomPositionAtRank('1')
    let positionArray = startingPosition.split("")
    const endingPosition = `${positionArray[0]}${Number(positionArray[1]) + 2}`
    expect(moveKing({from: startingPosition, to: endingPosition})).toBe(false);
  })

  test('should move one square back', () => {
    const startingPosition = randomPositionAtRank('8')
    let positionArray = startingPosition.split("")
    const endingPosition = `${positionArray[0]}${Number(positionArray[1]) - 1}`
    expect(moveKing({from: startingPosition, to: endingPosition})).toBe(true);
  })

  test('should not move two squares back', () => {
    const startingPosition = randomPositionAtRank('8')
    let positionArray = startingPosition.split("")
    const endingPosition = `${positionArray[0]}${Number(positionArray[1]) - 2}`
    expect(moveKing({from: startingPosition, to: endingPosition})).toBe(false);
  })

  test('should move one square to the left', () => {
    const startingPosition = randomPositionAtFile('h')
    let positionArray = startingPosition.split("")
    const endingPosition = `${oneFileToTheLeftOf(positionArray[0])}${positionArray[1]}`
    expect(moveKing({from: startingPosition, to: endingPosition})).toBe(true);
  })

  test('should not move two squares to the left', () => {
    const startingPosition = randomPositionAtFile('h')
    let positionArray = startingPosition.split("")
    const twoFilesToTheLeftOfStartingFile = oneFileToTheLeftOf(oneFileToTheLeftOf(positionArray[0]))
    const endingPosition = `${twoFilesToTheLeftOfStartingFile}${positionArray[1]}`
    expect(moveKing({from: startingPosition, to: endingPosition})).toBe(false);
  })

  test('should move one square to the right', () => {
    const startingPosition = randomPositionAtFile('a')
    let positionArray = startingPosition.split("")
    const endingPosition = `${oneFileToTheRightOf(positionArray[0])}${positionArray[1]}`
    expect(moveKing({from: startingPosition, to: endingPosition})).toBe(true);
  })

  test('should not move two squares to the right', () => {
    const startingPosition = randomPositionAtFile('a')
    let positionArray = startingPosition.split("")
    const twoFilesToTheRightOfStartingFile = oneFileToTheRightOf(oneFileToTheRightOf(positionArray[0]))
    const endingPosition = `${twoFilesToTheRightOfStartingFile}${positionArray[1]}`
    expect(moveKing({from: startingPosition, to: endingPosition})).toBe(false);
  })

  test('should move one square diagonal up and left', () => {
    expect(moveKing({from: 'b1', to: 'a2'})).toBe(true);
  })

  test('should not move two squares diagonal up and left', () => {
    expect(moveKing({from: 'c1', to: 'a3'})).toBe(false);
  })
});