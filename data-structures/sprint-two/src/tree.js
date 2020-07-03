var Tree = function (value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var child = new Tree(value);
  this.children.push(child);
  return child;
};

treeMethods.contains = function (target) {
  var result = false;
  var inner = function (globalObj) {
    var val = globalObj.value;
    if (globalObj.value === target) {
      result = true;
    }
    //iterate through the array to access the next element in the children array
    for (var i = 0; i < globalObj.children.length; i++) {
      inner(globalObj.children[i])
    }
    // recurse through using the global object
    inner(this);
    return result;
};


// var groot = new Tree();
// var grootaddChild5 = groot.addChild(5);
// var grootaddChild6 = groot.addChild(6);
// var grootaddChild07 = groot.children[0].addChild(7);
// var grootaddChild18 = groot.children[1].addChild(8);
// var grootcontains1 = groot.contains(7);
// debugger;
// var grootcontains2 = groot.contains(8);


/*
 * Complexity: What is the time complexity of the above functions?
 */
