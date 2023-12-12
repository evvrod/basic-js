const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push(' ');
      return this;
    }
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' ||  position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain = [...this.chain.slice(0, position - 1), ...this.chain.slice(position)];
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.reduce((acc, el) => {
      return acc + '( ' + el + ' )~~';
    }, '').slice(0, -2);
    this.chain = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
