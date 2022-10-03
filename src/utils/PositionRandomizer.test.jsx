import {oneSquareBack, randomFile, randomPosition, randomRank} from "./PositionRandomizer";

describe('Position Randomizer', function () {
  test('should randomize within rank limits', () => {
    expect(randomRank()).toBeGreaterThanOrEqual(1)
    expect(randomRank()).toBeLessThanOrEqual(8)
  })

  test('should randomize within file limits', () => {
    expect(randomFile()).toMatch(/[a-h]/)
  })

  test('should return position one square back given starting position for white piece', () => {
    const startingPosition = 'e3'
    expect(oneSquareBack(startingPosition, 'w')).toBe('e2')
  })

  test('should return position one square back given starting position for black piece', () => {
    const startingPosition = 'e3'
    expect(oneSquareBack(startingPosition, 'b')).toBe('e4')
  })
});