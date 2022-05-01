const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr) {
    let sum = 1;
    if (arr.filter((el) => Array.isArray(el)).length != 0) {
      sum =
        this.calculateDepth(
          [].concat(...arr.filter((el) => Array.isArray(el)))
        ) + 1;
    }
    return sum;
  }
}

module.exports = {
  DepthCalculator,
};
