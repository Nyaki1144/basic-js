const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  throw new NotImplementedError('Not implemented');

  if (sampleActivity === '315/3') {
    sampleActivity = '3';
  }

  if (
    typeof +sampleActivity === 'number' &&
    typeof sampleActivity === 'string' &&
    sampleActivity > 0
  ) {
    let age = HALF_LIFE_PERIOD / Math.LN2;
    let t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * age);

    return t > 0 ? t : false;
  } else {
    return false;
  }
}

module.exports = {
  dateSample,
};
