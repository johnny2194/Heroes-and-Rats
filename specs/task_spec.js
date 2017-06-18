var assert = require("assert");
var Hero = require("../Hero.js");
var TaskList = require("../Task.js");

describe("TaskList Tests", function() {

  var taskList;


  beforeEach("Setup", function() {
    taskList = new TaskList("Defeat Team Rocket in Saffron City", 3, 5, "Lapras");
  });

  it("Task has a description", function() {
    assert.equal("Defeat Team Rocket in Saffron City", taskList.description);
  });

})