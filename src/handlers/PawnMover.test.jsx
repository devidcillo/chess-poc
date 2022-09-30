import {movePawn} from "./PawnMover";

describe('Pawn Mover', function () {
  describe('White Pawn', () => {
    test('should not be able to move backward', () => {
      expect(movePawn({from: 'e2', to: 'e1', piece: 'wP'})).toBe(false)
    })

    test('should be able to move forward', () => {
      expect(movePawn({from: 'e2', to: 'e3', piece: 'wP'})).toBe(true);
    })

    test('should be able to move forward 2 spaces when on starting position', () => {
      expect(movePawn({from: 'e2', to: 'e4', piece: 'wP'})).toBe(true);
    })
  })

  describe('Black Pawn', () => {
    test('should not be able to move backward', () => {
      expect(movePawn({from: 'e7', to: 'e8', piece: 'bP'})).toBe(false);
    })

    test('should be able to move forward', () => {
      expect(movePawn({from: 'e7', to: 'e6', piece: 'bP'})).toBe(true);
    })

    test('should be able to move forward 2 spaces when on starting position', () => {
      expect(movePawn({from: 'e7', to: 'e5', piece: 'bP'})).toBe(true);
    })
  })
})