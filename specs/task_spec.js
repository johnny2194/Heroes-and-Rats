var assert = require("assert");
var Hero = require("../Hero.js");
var TaskList = require("../Task.js");

describe("TaskList Tests", function() {

  var taskList;


  beforeEach("Setup", function() {
    taskList = new TaskList("Defeat Team Rocket in Saffron City", 3, 5, "Lapras");
  });

  it("Task has a description", function() {
    assert.strictEqual("Defeat Team Rocket in Saffron City", taskList.description);
  });

  it("Task has a difficulty level", function() {
    assert.strictEqual(3, taskList.difficultyLevel);
  });

  it("Task has an urgency level", function() {
    assert.strictEqual(5 , taskList.urgencyLevel);
  });

  it("Task has a reward", function() {
    assert.strictEqual("Lapras", taskList.reward);
  });

  it("Task is no complete on creation", function() {
    assert.strictEqual(false, taskList.completionStatus);
  });

  it("Task can be marked complete", function() {
    assert.strictEqual(true, taskList.completed());
  });

})