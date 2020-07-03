var Stack = function () {
  this.storage = {};
  this.num = 0;
};

  Stack.prototype.push = function (value) {
    this.storage[this.num] = value;
    this.num++;
  };

  Stack.prototype.pop = function () {
    if (this.num > 0) {
      var pop = this.storage[this.num - 1];
      delete this.storage[this.num];
      this.num--
      return pop;
    }
  };

  Stack.prototype.size = function () {
    return this.num;
  };