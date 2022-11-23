import {randomPosition} from "../utils/PositionRandomizer";
import {moveKing} from "./KingMover";

describe('Kings', () => {
  test('should move one square forward', () => {
    const startingPosition = randomPosition()
    let positionArray = startingPosition.split("")
    const endingPosition = `${positionArray[0]}${Number(positionArray[1]) + 1}`
    expect(moveKing({from: startingPosition, to: endingPosition})).toBe(true);
  })

  test('should not move two squares forward', () => {
    const startingPosition = randomPosition()
    let positionArray = startingPosition.split("")
    const endingPosition = `${positionArray[0]}${Number(positionArray[1]) + 2}`
    expect(moveKing({from: startingPosition, to: endingPosition})).toBe(false);
  })

  test('should move one square back', () => {
    const startingPosition = randomPosition()
    let positionArray = startingPosition.split("")
    const endingPosition = `${positionArray[0]}${Number(positionArray[1]) - 1}`
    expect(moveKing({from: startingPosition, to: endingPosition})).toBe(true);
  })

  test('should not move two squares back', () => {
    const startingPosition = randomPosition()
    let positionArray = startingPosition.split("")
    const endingPosition = `${positionArray[0]}${Number(positionArray[1]) - 2}`
    expect(moveKing({from: startingPosition, to: endingPosition})).toBe(false);
  })

  test('should move one square to the left', () => {
    expect(moveKing({from: 'h1', to: 'g1'})).toBe(true);
  })

  test('should not move two squares to the left', () => {
    expect(moveKing({from: 'h1', to: 'f1'})).toBe(false);
  })

  test('should move one square to the right', () => {
    expect(moveKing({from: 'a1', to: 'b1'})).toBe(true);
  })

  test('should not move two squares to the right', () => {
    expect(moveKing({from: 'a1', to: 'c1'})).toBe(false);
  })

  test('should move one square diagonal up and left', () => {
    expect(moveKing({from: 'b1', to: 'a2'})).toBe(true);
  })

  test('should not move two squares diagonal up and left', () => {
    expect(moveKing({from: 'c1', to: 'a3'})).toBe(false);
  })
});