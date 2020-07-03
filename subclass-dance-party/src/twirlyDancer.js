var TwirlyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="https://media2.giphy.com/media/BKyQAFQD4zofS/giphy.gif?cid=790b7611a2d8210e98e953153114eb4d225262b48027c438&rid=giphy.gif"></img>');
};

TwirlyDancer.prototype = Object.create(Dancer.prototype);
TwirlyDancer.prototype.constructor = TwirlyDancer;

TwirlyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this - referring to TwirlyDancer
  this.$node.toggle();
};
