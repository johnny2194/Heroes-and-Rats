var assert = require("assert");
var Hero = require("../Hero.js");
var Food = require("../food.js");
var Task = require("../task.js");
var Rat = require("../rat.js");

describe("Hero Tests", function() {

  var hero;


  beforeEach("Setup", function() {
    hero = new Hero("Ash Ketchum", "Slowpoke Tail");
    food = new Food("Stew", 10);
    food2 = new Food("Slowpoke Tail", 10);
    task = new Task("Defeat Team Rocket in Saffron City", 3, 5, "Lapras");
    task2 = new Task("Take a picture of a Charizard in a volcano", 5, 1, "Street Cred");
    rat = new Rat();
  });

  it("Hero has a name", function() {
    assert.strictEqual("Ash Ketchum", hero.name);
  });

  it("Hero has a favourite food", function() {
    assert.strictEqual("Slowpoke Tail", hero.favouriteFood);
  });

  it("Hero should begin with full health points", function() {
    assert.strictEqual(100, hero.healthPoints);
  });

  it("Hero should start with empty task list", function() {
    assert.deepEqual(0, hero.taskList.length);
  });

  it("Hero can speak", function() {
    assert.strictEqual("My name is Ash Ketchum.", hero.speak());
  });

  it("Hero can lose HP when health is greater than zero", function() {
    assert.strictEqual(80, hero.hurt(20));
  });

  it("Hero blacks out when HP is zero", function() {
    assert.strictEqual("Hero blacked out!", hero.hurt(100));
  });

  it("Hero can eat food and recieve HP boost", function() {
    hero.hurt(20);
    assert.strictEqual(90, hero.eatFood(food));
  });

  it("Hero can only have max 100 HP", function() {
    assert.strictEqual(100, hero.eatFood(food));
  });

  it("Hero can get 1.5x HP if favourite food", function() {
    hero.hurt(20);
    assert.strictEqual(95, hero.eatFood(food2));
  });

  it("Hero can lose 20 HP if eats poisoned food", function() {
    rat.touchFood(food)
    assert.strictEqual(80, hero.eatFood(food));
  });

  it("Hero blacks out after eating poisoned food at 20 HP or less", function() {
    food.poisonStatus = true;
    hero.hurt(90);
    assert.strictEqual("Hero blacked out!", hero.eatFood(food));
  });

  it("Task can be added to taskList", function() {
    hero.addTask(task);
    assert.deepEqual(1, hero.taskList.length); 
  });

  it("Tasks can be sorted in order of difficulty low to high", function() {
    hero.addTask(task2);
    hero.addTask(task);
    hero.sortByDifficulty();
    assert.deepEqual([task, task2], hero.taskList)
  });

  it("Tasks can be sorted in order of urgency high to low", function() {
    hero.addTask(task2);
    hero.addTask(task);
    hero.sortByUrgency();
    assert.deepEqual([task, task2], hero.taskList)
  });


})