import {oneSquareBack, randomFile, randomPosition, randomRank} from "./PositionRandomizer";

describe('Position Randomizer', function () {
  test('should randomize within rank limits', () => {
    expect(randomRank()).toBeGreaterThanOrEqual(1)
    expect(randomRank()).toBeLessThanOrEqual(8)
  })

  test('should randomize within file limits', () => {
    expect(randomFile()).toMatch(/[a-h]/)
  })

  test('should return position one square back given starting position', () => {
    const startingPosition = 'e3'
    expect(oneSquareBack(startingPosition)).toBe('e2')
  })
});