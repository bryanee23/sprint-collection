var ForagerBee = function() {
  HoneyMakerBee.call(this);
  this.age = 10;
  this.job = 'find pollen'
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);
ForagerBee.prototype.constructor = ForagerBee;


ForagerBee.prototype.forage = function (value){
  return this.treasureChest.push(value)

}

//////////// test ////////
var foragerBee = new ForagerBee();
var foragerBeeAge = foragerBee.age;
// debugger;
foragerBeeAge; // returns 0
var foragerBeeColor = foragerBee.color;
// debugger;
foragerBeeColor
var foragerBeeFood = foragerBee.food;
// debugger;
foragerBeeFood; // returns 0
var foragerBeeEatMethod = foragerBee.eat("stuff");
// debugger;
foragerBeeEatMethod
var foragerBeePot = foragerBee.honeyPot;
// debugger;
// foragerBeePot;
var chestContent = foragerBee.treasureChest
debugger;
foragerBee.forage('pollen');
foragerBee.forage('flowers');
foragerBee.forage('gold');
chestContent