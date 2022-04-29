const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  let winter = ['Jan', 'Feb', 'Dec'];
  let spring = ['Mar', 'Apr', 'May'];
  let summer = ['Jun', 'Jul', 'Aug'];
  let autumn = ['Sep', 'Oct', 'Nov'];
  let srt = null;
  let arr = null;

  if (arguments[0] === undefined) {
    return 'Unable to determine the time of year!';
  } else {
    arr = date.toString().split(' ');
  }

  if (Object.prototype.toString.call(date) === '[object Date]') {
    winter.forEach((el) => (el == arr[1] ? (srt = 'winter') : false));
    spring.forEach((el) => (el == arr[1] ? (srt = 'spring') : false));
    summer.forEach((el) => (el == arr[1] ? (srt = 'summer') : false));
    autumn.forEach((el) => (el == arr[1] ? (srt = 'autumn') : false));
  } else {
    throw new Error('Invalid date!');
  }

  return srt;
}

module.exports = {
  getSeason,
};
