const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {}
  for (key in domains) {
    let k = ''
    domains[key].split('.').reverse().forEach(el => {
      k = k + '.' + el;
      if (k in result) { result[k] += 1; }
      else { result[k] = 1; }
    });
  }
  return result;
}

module.exports = {
  getDNSStats
};
