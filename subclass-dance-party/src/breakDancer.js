var BreakDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="https://media0.giphy.com/media/11EcsZWIcV4q2I/giphy.gif?cid=790b76112e4c34fce1b02edbd3471f8548be46f0d313731a&rid=giphy.gif"></img>');
};

BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;

BreakDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this - referring to BreakDancer
  // this.$node.toggle();
};