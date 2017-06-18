var assert = require("assert");
var Food = require("../food.js");

describe("Food Tests", function() {

  var food;


  beforeEach("Setup", function() {
    food = new Food("Stew", 10);
  });

  it("Food has name", function() {
    assert.equal("Stew", food.name);
  });

})