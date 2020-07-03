var Stack = function() {
  var stackMe = {}

  //similar to whats inside of queue function in functional queue
  stackMe.storage = {};
  stackMe.num = 0;
  //fallout to reach into queueMe and qMethods

  _.extend(stackMe,stackMethods);
  // extend(stackMe,stackMethods); //use to debug

  return stackMe;``
};

var stackMethods = {

  push: function(value){
    this.storage[this.num] = value;
  this.num++
  },
  pop: function(){
    if (this.num > 0) {
      var pop = this.storage[this.num-1];
      delete this.storage[this.num];
      this.num--
      return pop;
    }
  },
  size: function(){
    return this.num;
  },
};


