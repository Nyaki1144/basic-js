const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  arr: [],

  getLength() {
    this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position ^ (0 === position) && typeof position === 'number') {
      if (
        this.arr[position] === undefined ||
        position > this.getLength() ||
        position < 1
      ) {
        this.arr = [];
        throw new Error("You can't remove incorrect link!");
      }

      this.arr.splice(position - 1, 1);
      return this;
    }

    this.arr = [];
    throw new Error("'arr' parameter must be an instance of the Array!");
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let newArr = this.arr.join('~~');
    this.arr = [];
    return newArr;
  },
};

module.exports = {
  chainMaker,
};
