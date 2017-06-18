var assert = require ('assert');
var Rat = require('../rat.js');
var Food = require('../food.js');

describe('rat tests', function(){

  var rat = new Rat();
  var food = new Food("Stew", 10);
  
  it('can touch food and contaminate', function(){
    rat.touchFood(food)
    assert.strictEqual(true, food.poisonStatus)
  });

})