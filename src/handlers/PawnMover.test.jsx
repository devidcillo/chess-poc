import {movePawn} from "./PawnMover";
import {oneSquareBack, randomPosition} from "../utils/PositionRandomizer";

describe('Pawn Mover', function () {
  describe('White Pawn', () => {
    test('should not be able to move backward', () => {
      const startingPosition = randomPosition();
      const endingPosition = oneSquareBack(startingPosition, 'w')
      expect(movePawn({from: startingPosition, to: endingPosition, piece: 'wP'})).toBe(false)
    })

    test('should be able to move forward', () => {
      const startingPosition = randomPosition()
      let positionArray = startingPosition.split("")
      const endingPosition = `${positionArray[0]}${Number(positionArray[1]) + 1}`
      expect(movePawn({from: startingPosition, to: endingPosition, piece: 'wP'})).toBe(true);
    })

    test('should be able to move forward 2 spaces when on starting position', () => {
      const startingPosition = randomPawnStartingPosition('w')

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