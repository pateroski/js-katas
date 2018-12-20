import assert from 'assert'
import { kata2 } from '../src/kata-2'

describe('kata-2', function() {

  const obj1 = {
    p1: 'a',
    p2: {
      p3: 'b',
      p4: {
        p5: {
          p6: 'c'
        }
      }
    }
  }

  it('accessor p1 should return "a"', () => {
    assert.equal(kata2(obj1, null, 'p1'), 'a')
  })

  it('accessor p2.p2 should return "b"', function() {
    assert.equal(kata2(obj1, null, 'p2.p3'), 'b')
  })

  it('accessor p3.p5 should return default ("default")', function() {
    assert.equal(kata2(obj1, 'default', 'p3.p5'), 'default')
  })

  it('accessor p1.p5 should return default (null', function() {
    assert.equal(kata2(obj1, null, 'p1.p5'), null)
  })

  it('accessor p1.p6 should return default (null)', function() {
    assert.equal(kata2(obj1, null, 'p1.p6'), null)
  })

  it('accessor p1.p2.p3.p5.p6 should return default (null)', function() {
    assert.equal(kata2(obj1, null, 'p1.p2.p3.p5.p6'), null)
  })

  it('accessor p2.p4.p5.p6 should return "c"', function() {
    assert.equal(kata2(obj1, null, 'p2.p4.p5.p6'), 'c')
  })

  it('accessor without path should return a function', function() {
    assert.equal(typeof kata2(obj1, 'noPath'), 'function')
  })

  it('accessor curried function with path p1 should return "a"', function() {
    const accessor = kata2(obj1, 'noPath')
    assert.equal(accessor('p1'), 'a')
  })

  it('accessor curried function with path p2.p4.p5.p6 should return "b"', function() {
    const accessor = kata2(obj1, 'noPath')
    assert.equal(accessor('p2.p4.p5.p6'), 'c')
  })

  it('accessor curried function with path p1.p6 should return default ("noPath")', function() {
    const accessor = kata2(obj1, 'noPath')
    assert.equal(accessor('p1.p6'), 'noPath')
  })

})
