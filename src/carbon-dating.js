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
  const ln2 = 0.693;
  const s = Number(sampleActivity);
  
  if (typeof sampleActivity !== 'string' || sampleActivity.trim() === '' ||
      s <= 0 || s > MODERN_ACTIVITY) return false;

  return Number.isNaN(s) ? false : Math.ceil((Math.log(MODERN_ACTIVITY / s) * HALF_LIFE_PERIOD) / ln2);
}

module.exports = {
  dateSample
};
