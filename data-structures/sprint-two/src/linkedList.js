var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    //if its the first node
    var node = Node(value);
    //if list.head and list.tail is null
    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    }
    //set new node equal to new value
    list.tail.next = node;
    list.tail = node;
  };

  list.removeHead = function () {
    if (list.head) {
      var val = list.head.value;
      list.head = list.head.next;
    }
    return val;
  };

  list.contains = function (target) {
    // var result = false;
    // for (var key in list) {
    //   if (list[key].value === target) {
    //     result = true;
    //   }
    // }
    // return result;
    var nested = list.head;
    var result = false;
    while (nested !== null){
      if (nested.value === target){
        result = true;
      }
      nested = nested.next;
    }
    return result;
  };
  return list;

};

var Node = function (value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// {{head: {value: 5, next: {value: 6, next: { newTail: tail } } } }}

// debugger;
// var thing = LinkedList();
// //Node()
// thing.addToTail(2);
// thing.addToTail(3);
// thing.addToTail(4);
// thing.addToTail(5);
// thing.addToTail(6);
// thing.addToTail(6);
// thing.contains(4);
// console.log("6?", thing.head.next.next.next.next["value"])

// // console.log(thing.head.value);
// //thing.removeHead();
// console.log("tail = ", thing.tail);
// console.log("head", thing.head)
// thing
// console.log("full list", thing);