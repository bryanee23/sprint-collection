var BinarySearchTree = function(value) {

  var binaryTree = Object.create(binaryTreeMethods);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
  };

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(val) {
  if (val < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else {
    // do nothing: The tree already contains this value
  }
};

binaryTreeMethods.contains = function(val) {
  if (val === this.value) {
    return true;
  } else if (val < this.value) {
    return !!(this.left && this.left.contains(val));
  } else if (val > this.value) {
    return !!(this.right && this.right.contains(val));
  }
};

binaryTreeMethods.depthFirstLog = function(callBack) {
  callBack(this.value);
  if (this.left) {
    this.left.depthFirstLog(callBack);
  }
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var tree = BinarySearchTree()
tree.insert(23)
tree.insert(2)
tree.insert(12)
debugger;
tree.insert(23)
