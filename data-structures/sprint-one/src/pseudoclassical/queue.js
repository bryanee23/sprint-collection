var Queue = function() {
  this.storage = {};
  this.num = 0;
  this.adder = 0;
  this.remover = 0;
};

Queue.prototype.enqueue = function (value) {
  this.adder++;
  this.storage[this.adder] = value;
};

Queue.prototype.dequeue = function () {
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
};

Queue.prototype.size= function () {
  if (this.remover > this.adder ) {return 0}
  if (this.remover === 0 ) {return this.adder}
  return (this.adder - this.remover)
};