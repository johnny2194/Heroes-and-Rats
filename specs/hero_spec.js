var assert = require("assert");
var Hero = require("../Hero.js");

describe("Hero Tests", function() {

  var hero;


  beforeEach("Setup", function() {
    hero = new Hero("Ash Ketchum", "Slowpoke Tail");
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




})