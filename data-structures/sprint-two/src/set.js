var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  return !!this._storage[item]
};

setPrototype.remove = function(item) {
  if(this.contains(item)){
    delete this._storage[item]
  }
};

// var words = Set();
// words.add('Susan Sarandon');
// words.add('Danny Glover');
// var contains = words.contains('Danny Glover')
// var contains2 = words.contains('Danny')
// debugger;
// words.remove('Danny Glover')
/*
 * Complexity: What is the time complexity of the above functions?
 */
