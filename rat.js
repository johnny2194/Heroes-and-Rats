var Rat = function(){

}

Rat.prototype = {
  touchFood: function(food){
    food.poisonStatus = true
  }
}

module.exports = Rat