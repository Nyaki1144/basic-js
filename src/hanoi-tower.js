const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let sum = 3;
  let result = {
    turns: 3,
    seconds: 0,
  };
  function count() {
    if (sum <= disksNumber) {
      ++sum;
      result.turns = result.turns * 2 + 1;
      count();
    } else {
      return;
    }
  }
  count();

  result.seconds = Math.floor(result.turns / (turnsSpeed / 3600));
  return result;
}

module.exports = {
  calculateHanoi
};
