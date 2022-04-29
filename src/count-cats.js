const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  throw new NotImplementedError('Not implemented');
  let count;
  let newArr;

  if (matrix.length != 0) {
    newArr = matrix.reduce((el1, el2) => {
      return el2.concat(el1);
    });
  } else {
    return 0;
  }

  newArr.sort().lastIndexOf('^^') != -1
    ? (count =
        newArr.sort().lastIndexOf('^^') - newArr.sort().indexOf('^^') + 1)
    : (count = 0);

  return count;
}

module.exports = {
  countCats,
};
