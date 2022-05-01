const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  const { separator, addition, additionSeparator } = options;

  // let newStr = String(str) || str;
  console.log(String(str));
  console.log(String(addition));
  let arr1 = [],
    arr2 = [];

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if (addition !== undefined) {
      arr2.push(String(addition));
    } else {
      break;
    }
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    arr1.push(String(str) + arr2.join(additionSeparator || '|'));
  }

  return arr1.join(separator || '+');
}

module.exports = {
  repeater,
};
