var assert = require("assert");
var Hero = require("../Hero.js");

describe("Record Collector Tests", function() {

  var hero;


  beforeEach("Setup", function() {
    hero = new Hero("Ash Ketchum", "Slowpoke Tail");
  });

  it("Hero has a name", function() {
    assert.equal("Ash Ketchum", hero.name);
  });

})