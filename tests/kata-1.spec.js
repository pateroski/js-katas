import assert from 'assert'

import { kata1 } from '../src/kata-1'

describe('kata-1', function() {
    it('should return 76642 with 46672', function() {
      assert.equal(kata1(46672), 76642)
    })

    it('should return 6111111 with 1111116', function() {
      assert.equal(kata1(1111116), 6111111)
    })

    it('should return 654321 when 143256 is provided', function() {
      assert.equal(kata1(143256), 654321)
    })

    it('should return 333333 when 333333 is provided', function() {
      assert.equal(kata1(333333), 333333)
    })

    it('should return 654321 when 923902932 is provided', function() {
      assert.equal(kata1(923902932), 999332220)
    })
})
