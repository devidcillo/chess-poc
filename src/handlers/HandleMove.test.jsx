import {handleMove} from "./HandleMove";

describe('Handle Move', function () {
  describe('White Pawn', () => {
    test('should not be able to move backward', () => {
      expect(() => handleMove({from: 'e2', to: 'e1', piece: 'wP'})).toThrow();
    })

    test('should be able to move forward', () => {
      expect(() => handleMove({from: 'e2', to: 'e3', piece: 'wP'})).not.toThrow();
    })

    test('should be able to move forward 2 spaces when on starting position', () => {
      expect(() => handleMove({from: 'e2', to: 'e4', piece: 'wP'})).not.toThrow();
    })
  })

  describe('Black Pawn', () => {
    test('should not be able to move backward', () => {
      expect(() => handleMove({from: 'e7', to: 'e8', piece: 'bP'})).toThrow();
    })

    test('should be able to move forward', () => {
      expect(() => handleMove({from: 'e7', to: 'e6', piece: 'bP'})).not.toThrow();
    })

    test('should be able to move forward 2 spaces when on starting position', () => {
      expect(() => handleMove({from: 'e7', to: 'e5', piece: 'bP'})).not.toThrow();
    })
  })
  describe('White Rook', () => {
    test('should move forward', () => {
      expect(() => handleMove({from: 'e1', to: 'e8', piece: 'wR'})).not.toThrow();
    })
  })
})