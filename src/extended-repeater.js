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
  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';

  let addition = Array.from(Array(options.additionRepeatTimes), () => (options.addition === null)?'null':options.addition).join(options.additionSeparator);
  let result =  Array.from(Array(options.repeatTimes), () => str + addition ).join(options.separator);
  return result;
}

module.exports = {
  repeater
};
