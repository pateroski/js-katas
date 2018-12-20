import assert from 'assert'
import { kata3 } from '../src/kata-3'

describe.only('kata-3', function() {
  it('n=1 m=250 should return valid values', () => {
    assert.deepEqual(kata3(1, 250),[ [1, 1], [42, 2500], [246, 84100] ])
  })

  it('n=41 m=250 should return valid values', () => {
    assert.deepEqual(kata3(41, 250), [ [42, 2500], [246, 84100] ])
  })

  it('n=10 m=42 should return valid values', () => {
    assert.deepEqual(kata3(10, 42), [ [42, 2500] ])
  })

})