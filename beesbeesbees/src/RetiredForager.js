////////////////////////////////
////////    RetiredForagerBee
////////////////////////////////
var RetiredForagerBee = function () {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

// creates a prototype of ForagerBee's functionality and methods
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function (value) {
  this.treasureChest.push(value);
  return "I am too old, let me play cards instead"
}

RetiredForagerBee.prototype.gamble = function () {
  return this.treasureChest.push('treasure');
}


////////////////////////////////
////////    test cases
////////////////////////////////
// var retiredForager = new RetiredForagerBee();
// var retiredForagerAge = retiredForager.age;
// debugger;
// retiredForagerAge; // returns 0
// var retiredForagerColor = retiredForager.color;
// // debugger;
// retiredForagerColor
// var retiredForagerFood = retiredForager.food;
// // debugger;
// retiredForagerFood; // returns 0
// var retiredForagerEatMethod = retiredForager.eat("stuff");
// // debugger;
// retiredForagerEatMethod
// var retiredForagerPot = retiredForager.honeyPot;
// // debugger;
// // retiredForagerPot;
// var chestContent = retiredForager.treasureChest
// debugger;
// retiredForager.forage('pollen');
// retiredForager.forage('flowers');
// retiredForager.forage('gold');
// chestContent

////////////////////////////////
////////    Grub
////////////////////////////////
var Grub = function () {
  this.age = 0;
  this.color = "pink";
  this.food = "jelly";
};

Grub.prototype.eat = function (food) {
  return "get summm" + food;
}

////////////////////////////////
////////    Bee
////////////////////////////////
var Bee = function () {
  Grub.call(this);
  this.age = 5;
  this.color = "yellow";
  this.job = 'keep on growing';
};
// creates a prototype of Grub's functionality and methods
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

////////////////////////////////
////////    HoneyMakerBee
////////////////////////////////
var HoneyMakerBee = function (age, color, food, honeyPot) {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};
// creates a prototype of Bee's functionality and methods
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function () {
  return this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function () {
  return this.honeyPot--;
}


////////////////////////////////
////////    ForagerBee
////////////////////////////////
var ForagerBee = function () {
  HoneyMakerBee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};
// creates a prototype of HoneyMakerBee's functionality and methods
ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function (value) {
  return this.treasureChest.push(value);
}


