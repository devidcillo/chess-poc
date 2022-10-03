import {movePawn} from "./PawnMover";
import {oneSquareBack, randomPosition, randomPositionAtRank} from "../utils/PositionRandomizer";

describe('Pawn Mover', function () {
  describe('White Pawn', () => {
    test('should not be able to move backward', () => {
      const startingPosition = randomPosition();
      const endingPosition = oneSquareBack(startingPosition, 'w')
      expect(movePawn({from: startingPosition, to: endingPosition, color: 'w'})).toBe(false)
    })

    test('should be able to move forward', () => {
      const startingPosition = randomPosition()
      let positionArray = startingPosition.split("")
      const endingPosition = `${positionArray[0]}${Number(positionArray[1]) + 1}`
      expect(movePawn({from: startingPosition, to: endingPosition, color: 'w'})).toBe(true);
    })

    test('should be able to move forward 2 spaces when on starting position', () => {
      const startingPosition = randomPositionAtRank(2)
      const positionArray = startingPosition.split("");
      const endingPosition = `${positionArray[0]}${Number(positionArray[1]) + 2}`
      expect(movePawn({from: startingPosition, to: endingPosition, color: 'w'})).toBe(true);
    })
  })

  describe('Black Pawn', () => {
    test('should not be able to move backward', () => {
      const startingPosition = randomPosition()
      const endingPosition = oneSquareBack(startingPosition, 'b');
      expect(movePawn({from: startingPosition, to: endingPosition, color: 'b'})).toBe(false);
    })

    test('should be able to move forward', () => {
      const startingPosition = randomPosition()
      let positionArray = startingPosition.split("")
      const endingPosition = `${positionArray[0]}${Number(positionArray[1]) - 1}`
      expect(movePawn({from: startingPosition, to: endingPosition, color: 'b'})).toBe(true);    })

    test('should be able to move forward 2 spaces when on starting position', () => {
      const startingPosition = randomPositionAtRank(7)
      const positionArray = startingPosition.split("");
      const endingPosition = `${positionArray[0]}${Number(positionArray[1]) - 2}`
      expect(movePawn({from: startingPosition, to: endingPosition, color: 'b'})).toBe(true);    })
  })
})