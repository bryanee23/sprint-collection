// Instantiate a new graph
var Graph = function() {
  this.allNodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //nodes as the key and edgess as the value in the allNodes  obj
  this.allNodes[node] = this.allNodes[node] || { edges: {} }
  //{allNodes:object}
      //{value of node: edges: {}}
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  return !!this.allNodes[node];
  // double bang equates to a boolean and is equalent to the following lines of code
  // if(this.allNodes[node]) {
  //   return true;
  // } else {
  //   return false}
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  if (this.contains(node)) {
    for (var target in this.allNodes[node]['edges']) {
      this.removeEdge(node, target)
    }
    delete this.allNodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //if contains is false
  if(!this.contains(fromNode)){
    return false;
  }
  return !!this.allNodes[fromNode]['edges'][toNode];

  // if (this.allNodes[fromNode]["edges"] === toNode && this.allNodes[toNode]["edges"] === fromNode) {
  //   return true;
  // } else {
  //   return false;
  // }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
    this.allNodes[fromNode]["edges"] = toNode;
    this.allNodes[toNode]["edges"] = fromNode;

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if(!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
  delete this.allNodes[fromNode]["edges"][toNode];
  delete this.allNodes[toNode]["edges"][fromNode];

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.allNodes){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */