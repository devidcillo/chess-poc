import {handleSpecialMove} from "./HandleSpecialMove";

describe('Special Move Handler', () => {
  test('should handle white castle king side', () => {
    expect(handleSpecialMove('0-0')).toBe(true)
  })
});