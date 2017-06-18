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
    var currentHealth = this.healthPoints;
    var foodGain = food.hpBoostValue;

    if(food.name === this.favouriteFood) {
     foodGain = (foodGain * 1.5);
    }

    if(food.poisonStatus === true) {
     foodGain = -20
    }

    var potentialHealth = currentHealth += foodGain;

    if (potentialHealth <=0) {
      return "Hero blacked out!"
    }
    else if(potentialHealth <= 100) {
      return this.healthPoints = potentialHealth;
    } else {
      return this.healthPoints = 100;
    } 
  },

  addTask: function(task) {
    this.taskList.push(task);
  }


}

module.exports = Hero ;