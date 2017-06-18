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
  }


}

module.exports = Hero ;