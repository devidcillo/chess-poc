import {handleMove} from "./HandleMove";

describe('Handle Move', function () {
  describe('White Pawn', () => {
    test('should not be able to move backward', () => {
      expect(handleMove('e2', 'e1', 'wP')).toBe(false);
    })

    test('should be able to move forward', () => {
      expect(handleMove('e2','e3','wP')).toBe(true)
    })

    test('should be able to move forward 2 spaces when on starting position', () => {
      expect(handleMove('e2','e4','wP')).toBe(true)
    })
  })

  describe('Black Pawn', () => {
    test('should not be able to move backward', () => {
      expect(handleMove('e7','e8','bP')).toBe(false);
    })

    test('should be able to move forward', () => {
      expect(handleMove('e7','e6','bP')).toBe(true)
    })

    test('should be able to move forward 2 spaces when on starting position', () => {
      expect(handleMove('e7','e5','bP')).toBe(true)
    })
  })

  describe('Rooks', () => {
    test('should move forward', () => {
      expect(handleMove('a1','a8','wR')).toBe(true)
      expect(handleMove('a1','a8','bR')).toBe(true)
    })

    test('should move backward', () => {
      expect(handleMove('a8','a1','wR')).toBe(true)
      expect(handleMove('a8','a1','bR')).toBe(true)
    })

    test('should move left', () => {
      expect(handleMove('a1','h1','wR')).toBe(true)
      expect(handleMove('a1','h1','bR')).toBe(true)
    })

    test('should move right', () => {
      expect(handleMove('h8','h1','wR')).toBe(true)
      expect(handleMove('h8','h1','bR')).toBe(true)
    })
  })

  describe('Kings', () => {
    test('should move forward one space', () => {
      expect(handleMove('a1','a2','wK')).toBe(true)
      expect(handleMove('a8','a7','bR')).toBe(true)
    })
    //
    // test('should move backward', () => {
    //   expect(handleMove('a8','a1','wR')).toBe(true)
    //   expect(handleMove('a8','a1','bR')).toBe(true)
    // })
    //
    // test('should move left', () => {
    //   expect(handleMove('a1','h1','wR')).toBe(true)
    //   expect(handleMove('a1','h1','bR')).toBe(true)
    // })
    //
    // test('should move right', () => {
    //   expect(handleMove('h8','h1','wR')).toBe(true)
    //   expect(handleMove('h8','h1','bR')).toBe(true)
    // })
  })
})