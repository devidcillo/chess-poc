import {handleSpecialMove} from "./HandleSpecialMove";

describe('Special Move Handler', () => {
  test('should handle white castle king side', () => {
    const mockRecord = {e1: 'wK', f1: '', g1: '', h1: 'wR'}
    expect(handleSpecialMove('0-0', mockRecord)).toEqual({e1: '', f1: 'wR', g1: 'wK', h1: ''})
  })
});