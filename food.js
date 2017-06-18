var _ = require('lodash');

function Food(name, hpBoostValue) {
  this.name = name;
  this.hpBoostValue = hpBoostValue;
  this.poisonStatus = false;
}


Food.prototype = {
  
}

module.exports = Food;