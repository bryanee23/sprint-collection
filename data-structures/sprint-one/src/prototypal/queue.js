var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.adder = 0;
  obj.remover = 0;
  return obj;
};

var queueMethods = {
  enqueue : function (value) {
  this.adder++;
  this.storage[this.adder] = value;
},

dequeue :function () {
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
},
}
// debugger;
//var run = Queue();
//run.dequeue("d");