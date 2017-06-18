var assert = require("assert");
var Hero = require("../Hero.js");
var Task = require("../Task.js");

describe("Task Tests", function() {

  var task;


  beforeEach("Setup", function() {
    task = new Task("Defeat Team Rocket in Saffron City", 3, 5, "Lapras");
  });

  it("Task has a description", function() {
    assert.strictEqual("Defeat Team Rocket in Saffron City", task.description);
  });

  it("Task has a difficulty level", function() {
    assert.strictEqual(3, task.difficultyLevel);
  });

  it("Task has an urgency level", function() {
    assert.strictEqual(5 , task.urgencyLevel);
  });

  it("Task has a reward", function() {
    assert.strictEqual("Lapras", task.reward);
  });

  it("Task is no complete on creation", function() {
    assert.strictEqual(false, task.completionStatus);
  });

  it("Task can be marked complete", function() {
    assert.strictEqual(true, task.completed());
  });

})