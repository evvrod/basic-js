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
  let arr = [];
  for (let i = 0; i < String(n).length; i++) {
    arr.push(Math.trunc(n / Math.pow(10, i + 1)) * Math.pow(10, i) + n % Math.pow(10, i));
  }
  return Math.max(...arr);
}


module.exports = {
  deleteDigit
};
