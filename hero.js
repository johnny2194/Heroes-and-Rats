var _ = require('lodash');

function Hero(name, favouriteFood) {
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.healthPoints = 100;
  this.taskList = [];
}


Hero.prototype = {
  
}


module.exports = Hero ;