class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.num = 0;
    this.adder = 0;
    this.remover = 0;
  }

  push(value) {
    this.storage[this.num] = value;
    this.num++;
  }
  pop() {
    if (this.num > 0) {
      var pop = this.storage[this.num - 1];
      delete this.storage[this.num];
      this.num--
      return pop;
    }
  }
  size() {return this.num;}

}