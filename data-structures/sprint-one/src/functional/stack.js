var Stack = function() {
  var someInstance = {};
  var storage = {};
  var num = 0;
  // Implement the methods below
}
  someInstance.push = function(value) {
    //[value1, value2, value3]
    //lenghth 3
    storage[num] = value;
    num++
    //value = a
    //storage { 1: "a" }
    // console.log(storage)
  };

  someInstance.pop = function() {
    if (num > 0) {
      var pop = storage[num-1];
      delete storage[num];
      num--
      return pop;
    }

  };

  someInstance.size = function() {

    var result = 0;
    if (Object.keys(storage) === 0 ) {
      result = 0
    } else { result = num}

    return result;

  };


  someInstance.push("b")
  debugger;
  // someInstance.pop()
  // someInstance.pop()
  // someInstance.push("c")
  // someInstance.push("d")
  // someInstance.size()
  // console.log(storage)
  // console.log(someInstance.size())


// Stack();
// console.log(Stack.push("firstd"))


// push(string) - Add a string to the top of the stack
// pop() - Remove and return the string on the top of the stack
// size() - Return the number of items on the stack