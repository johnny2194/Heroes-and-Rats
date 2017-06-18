var assert = require("assert");
var Food = require("../food.js");

describe("Food Tests", function() {

  var food;


  beforeEach("Setup", function() {
    food = new Food("Stew", 10);
  });

  it("Food has name", function() {
    assert.strictEqual("Stew", food.name);
  });

  it("Food has hpBoostValue", function() {
    assert.strictEqual(10, food.hpBoostValue);
  });

  it("Has status of poison", function() {
    assert.strictEqual(false, food.poisonStatus);
  });

})