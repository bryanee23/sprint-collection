var Stack = function () {
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.num = 0;
  return obj;
};

var stackMethods = {
  //create all the methods on this object
  push: function (value) {
    this.storage[this.num] = value;
    this.num++;
  },
  pop: function () {
    if (this.num > 0) {
      var pop = this.storage[this.num - 1];
      delete this.storage[this.num];
      this.num--
      return pop;
    }
  },
  size: function () {
    return this.num;
  },
};


