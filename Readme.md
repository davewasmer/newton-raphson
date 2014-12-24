## newton-raphson

JavaScript implementation of the Newton-Raphson method for approximating roots of a real-valued function. See [Wikipedia](http://en.wikipedia.org/wiki/Newton's_method) for details on the theory.

### Usage

```
var findRoot = require('newton-raphson');

function f(x) {
  return x * x - 2;
}
function fprime(x) {
  return 2 * x;
}
var initialGuess = 1;

findRoot(f, fprime, 1);
// 1.4142135623730951
```