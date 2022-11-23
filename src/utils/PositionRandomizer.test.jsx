import {
  oneFileToTheLeftOf, oneFileToTheRightOf,
  oneSquareBack,
  randomFile,
  randomPositionAtFile,
  randomPositionAtRank,
  randomRank
} from "./PositionRandomizer";

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

  test('should return a random position given file', () => {
    const expectedFile = randomFile()
    const rankRegex = '[1-8]'
    const regexToMatch = new RegExp(expectedFile + rankRegex)
    expect(randomPositionAtFile(expectedFile)).toMatch(regexToMatch)
  })

  test('should return a random position given rank', () => {
    const expectedRank = randomRank()
    const fileRegex = '[a-h]'
    const regexToMatch = new RegExp(fileRegex + expectedRank)
    expect(randomPositionAtRank(expectedRank)).toMatch(regexToMatch)
  })

  test('should return what file is to the left of given file', () => {
    expect(oneFileToTheLeftOf('b')).toBe('a')
    expect(oneFileToTheLeftOf('c')).toBe('b')
    expect(oneFileToTheLeftOf('d')).toBe('c')
    expect(oneFileToTheLeftOf('e')).toBe('d')
    expect(oneFileToTheLeftOf('f')).toBe('e')
    expect(oneFileToTheLeftOf('g')).toBe('f')
    expect(oneFileToTheLeftOf('h')).toBe('g')
  })

  test('should return what file is to the right of given file', () => {
    expect(oneFileToTheRightOf('a')).toBe('b')
    expect(oneFileToTheRightOf('b')).toBe('c')
    expect(oneFileToTheRightOf('c')).toBe('d')
    expect(oneFileToTheRightOf('d')).toBe('e')
    expect(oneFileToTheRightOf('e')).toBe('f')
    expect(oneFileToTheRightOf('f')).toBe('g')
    expect(oneFileToTheRightOf('g')).toBe('h')
  })
})