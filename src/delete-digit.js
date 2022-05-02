const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  const arr = n.toString().split('');
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num1 = +(arr.slice(0, i) + arr.slice(i + 1)).split(',').join('');
    if (num1 > sum) {
      sum = num1;
    }
  }

  return sum;
}

module.exports = {
  deleteDigit
};
