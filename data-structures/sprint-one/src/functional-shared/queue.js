
var Queue = function() {
  var queueMe = {}

  //similar to whats inside of queue function in functional queue
  queueMe.storage = {};
  queueMe.adder = 0;
  queueMe.remover = 0;
  //fallout to reach into queueMe and qMethods

  _.extend(queueMe,queueMethods);
  // extend(queueMe,queueMethods); //use to debug

  return queueMe;``
  //reference
};

var queueMethods = {
  enqueue : function (value) {
    this.adder++;
    this.storage[this.adder] = value;
  },
  dequeue : function () {
    this.remover++
    if (this.remover > 0) {
      var pop = this.storage[this.remover]; //storage[0]
      var check =  this.storage[this.remover];
      // check; //check delete
      delete this.storage[this.remover];
      if (pop === undefined) {return this.storage[this.remover+1]}
      // pop //check pop value
      return pop;
    }
  },
  size: function () {
    if (this.remover > this.adder ) {return 0}
    if (this.remover === 0 ) {return this.adder}
    return (this.adder - this.remover)
  }

};

// var extend = function (obj) {
//   var args = Array.from(arguments);
//   return args.reduce( function (target, source) { return Object.assign(target, source) })
// }

// debugger;
// var firstValue = Queue()
// firstValue.storage;
// firstValue.enqueue("G"); // adder = 1, size = 1
// firstValue.size();
// firstValue.enqueue("a"); // adder = 2, size = 2
// firstValue.dequeue(); // remover =1 , size = adder(2) - remover (1) =
// firstValue.storage;


