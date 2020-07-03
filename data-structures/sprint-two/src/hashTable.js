var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


//////////// not helper functions /////////////
///////////////////////////////////////////////
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.obj = {}; //by defining the obj up here, all other instances are able to use it.
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var oldValue = tuple[1];
      tuple[1] = v;
      return oldValue;
    }
  }

  bucket.push([k, v]);
  this._storage.set(index, bucket);
  this._size++;

  if (this._size > this._limit * 0.75) {
    this._resize(this._limit * 2);
  }

  return undefined;
  };

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log(this) // !!!!!!!!!!!!!!!!!!!

  //what do I want to get? {get:"out"}
    //how do I access it? ._storage.get(2) straights just get's it

  //  console.log(this._storage.get(index)) // this is giving me the object {get:"out"}
  //  console.log(this._storage.get(index)[k]) // this line gets me the value
  if (index === undefined) {
    return undefined;
  }
   return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log(this) // !!!!!!!!!!!!!!!!!!!
  this.insert(k, undefined) //k is "dude"
};

var hashbrowns = new HashTable();
//the line below accesess the 4th index on _storage.set's properties and insert's "hi"
// hashbrowns._storage.set(3, 'hi') //arguments: index, value
// hashbrowns._storage.set(2, 'hi')
// hashbrowns._storage.set(2, 'bye')
hashbrowns.insert("get", "dude-output");
hashbrowns.insert("dude", "where's my car-output");

hashbrowns.insert("run", "time-output");
debugger;
// var checkme = hashbrowns.retrieve('get')
// checkme
// var me = hashbrowns.retrieve('get')
// var you = hashbrowns.retrieve('dude')
// // console.log(me, you)
// hashbrowns.remove("dude");
// // debugger


