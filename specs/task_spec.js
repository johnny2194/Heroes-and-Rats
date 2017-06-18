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

  it("Task has a difficulty level", function() {
    assert.equal(3, taskList.difficultyLevel);
  });

  it("Task has an urgency level", function() {
    assert.equal(5 , taskList.urgencyLevel);
  });

  it("Task has a reward", function() {
    assert.equal("Lapras", taskList.reward);
  });

  it("Task is no complete on creation", function() {
    assert.equal(false, taskList.completionStatus);
  });

})