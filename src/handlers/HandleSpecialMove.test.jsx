import {handleSpecialMove} from "./HandleSpecialMove";

describe('Special Move Handler', () => {
  test('should handle white castle king side', () => {
    const mockRecord = {e1: 'wK', f1: '', g1: '', h1: 'wR'}
    expect(handleSpecialMove('0-0', mockRecord)).toEqual({e1: '', f1: 'wR', g1: 'wK', h1: ''})
  })

  test('should not update when white castle king side fails due to occupied spaces', () => {
    const mockRecord = {e1: 'wK', f1: 'wB', g1: 'wN', h1: 'wR'}
    expect(handleSpecialMove('0-0', mockRecord)).toEqual(mockRecord)
  })
});