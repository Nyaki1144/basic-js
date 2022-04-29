const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let newArr = arr.flatMap((el, i, array) => {
    if (array[i - 1] === '--discard-next') return [];
    if (array[i + 1] === '--discard-prev') return [];
    if (array[i + 1] === '--double-prev' && array[i - 1] === '--double-next') {
      return [el, el, el];
    }
    if (array[i - 1] === '--double-next') return [el, el];
    if (array[i + 1] === '--double-prev') return [el, el];


    if (el.toString().startsWith('--d')) return [];

    return el;
  });

  return newArr;
}

module.exports = {
  transform,
};
