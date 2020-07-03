var Queue = function() {
  var someInstance = {};
  var storage = {};
  var num = 0;
  var remover = 0;

  someInstance.enqueue = function(value) {
    num++;
    storage[num] = value
  };

  someInstance.dequeue = function() {
    remover++
    if (remover > 0) {
      var pop = storage[remover]; //storage[0]
      delete storage[remover];
      if (pop === undefined) {return storage[remover+1]}
      return pop;
    }
  };

  someInstance.size = function() {
    if (remover > num ) {return 0}
    if (remover === 0 ) {return num}
    return (num - remover)// returning
  };
  return someInstance;
};

var queue = new Queue()
var first = queue.enqueue('d')
debugger;