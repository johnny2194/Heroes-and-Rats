var _ = require('lodash');


function Hero(name, favouriteFood) {
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.healthPoints = 100;
  this.taskList = [];
}


Hero.prototype = {
  
  speak: function(){
    return "My name is " + this.name + ".";
  },

  hurt: function(damage) {
    if (this.healthPoints - damage > 0) {  
      return this.healthPoints -= damage;
    }
    return "Hero blacked out!";
  },

  eatFood: function(food) {
    if (this.healthPoints + food.hpBoostValue > 100) { 
      return this.healthPoints = 100;
    } 
    return this.healthPoints += food.hpBoostValue;
  }


}

module.exports = Hero ;