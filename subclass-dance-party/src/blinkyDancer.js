var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="https://media1.giphy.com/media/3ohc0YpD0LR5wRyz1S/giphy.webp?cid=790b761122d08904c83a1ae5fcf0243c4ee6c57f09d89069&rid=giphy.webp"></img>');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this - referring to blinkydancer
  this.$node.toggle();
};


// class makeBlinkyDancer extends makeDancer {
//   constructor(top, left, timeBetweenSteps) {
//     super(top, left, timeBetweenSteps);
//     this.top = top;
//     this.left = left;
//     this.timeBetweenSteps = timeBetweenSteps;
//   }
//   step() {
//     super.step()

//     this.$node.toggle();
//   }
// }
