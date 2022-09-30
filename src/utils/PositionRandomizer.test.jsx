import { randomFile, randomPosition, randomRank} from "./PositionRandomizer";

describe('Position Randomizer', function () {
  test('should randomize within rank limits', () => {
    expect(randomRank()).toBeGreaterThanOrEqual(1)
    expect(randomRank()).toBeLessThanOrEqual(8)
  })

  test('should randomize within file limits', () => {
    expect(randomFile()).toMatch(/[a-h]/)
  })
});