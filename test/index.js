assert = require('assert');
findRoot = require('../index');

describe('findRoot', function() {
  it('should approximate the root of the supplied function', function() {
    function f(x) {
      return x * x - 2;
    }
    function fprime(x) {
      return 2 * x;
    }
    var result = findRoot(f, fprime, 1);
    assert(result === 1.4142135623730951);
  });
});