const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    if (type === undefined) { this.type = true; }
    else { this.type = false; }
  }
  encrypt(message, key) {
    if (arguments.length < 2) {
      throw new Error('Incorrect arguments!')
    }
    message = message.toLowerCase();
    key = key.toLowerCase();
    let res = '';
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) > 96 && message.charCodeAt(i) < 123) {
        let m = message.charCodeAt(i) - 97;
        let k = key.charCodeAt(j % key.length) - 97;
        res += String.fromCharCode((m + k) % 26 + 97);
        j++;
      } else {
        res += message[i];
      }
    }
    if (!this.type) { return res.toUpperCase().split("").reverse().join(""); }
    return res.toUpperCase();
  }
  decrypt(message, key) {
    console.log('decrypt' + message, key);
    if (arguments.length < 2) {
      throw new Error('Incorrect arguments!')
    }

    message = message.toLowerCase();

    key = key.toLowerCase();
    let res = '';
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) > 96 && message.charCodeAt(i) < 123) {
        let m = message.charCodeAt(i) - 97;
        let k = key.charCodeAt(j % key.length) - 97;
        res += String.fromCharCode((m + 26 - k) % 26 + 97);

        j++;
      } else {
        res += message[i];
      }
    }
    if (!this.type) { return res.toUpperCase().split("").reverse().join(""); }
    return res.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
