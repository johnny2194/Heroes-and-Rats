var assert = require("assert");
var Hero = require("../Hero.js");
var Food = require("../food.js");

describe("Hero Tests", function() {

  var hero;


  beforeEach("Setup", function() {
    hero = new Hero("Ash Ketchum", "Slowpoke Tail");
    food = new Food("Stew", 10);
    food2 = new Food("Slowpoke Tail", 10);
  });

  it("Hero has a name", function() {
    assert.equal("Ash Ketchum", hero.name);
  });

  it("Hero has a favourite food", function() {
    assert.equal("Slowpoke Tail", hero.favouriteFood);
  });

  it("Hero should begin with full health points", function() {
    assert.equal(100, hero.healthPoints);
  });

  it("Hero should start with empty task list", function() {
    assert.equal(0, hero.taskList.length);
  });

  it("Hero can speak", function() {
    assert.equal("My name is Ash Ketchum.", hero.speak());
  });

  it("Hero can lose HP when health is greater than zero", function() {
    assert.equal(80, hero.hurt(20));
  });

  it("Hero blacks out when HP is zero", function() {
    assert.equal("Hero blacked out!", hero.hurt(100));
  });

  it("Hero can eat food and recieve HP boost", function() {
    hero.hurt(20);
    assert.equal(90, hero.eatFood(food));
  });

  it("Hero can only have max 100 HP", function() {
    assert.equal(100, hero.eatFood(food));
  });

  it("Hero can get 1.5x HP if favourite food", function() {
    hero.hurt(20);
    assert.equal(95, hero.eatFood(food2));
  });

  it("Hero can lose 20 HP if eats poisoned food", function() {
    food.poisonStatus = true;
    assert.equal(80, hero.eatFood(food));
  });

  it("Hero blacks out after eating poisoned food at 20 HP or less", function() {
    food.poisonStatus = true;
    hero.hurt(90);
    assert.equal("Hero blacked out!", hero.eatFood(food));
  });



})