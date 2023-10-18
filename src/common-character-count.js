const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  let set1 = s1.split('').reduce((acc, el) => {
    if (!(el in acc)) { acc[el] = 1; }
    else { acc[el] += 1; }
    return acc;
  }, {})
  let set2 = s2.split('').reduce((acc, el) => {
    if (!(el in acc)) { acc[el] = 1; }
    else { acc[el] += 1; }
    return acc;
  }, {})


  let count = 0;
  for (key in set1) {
    if (key in set2) { count += Math.min(set1[key], set2[key]) };
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
