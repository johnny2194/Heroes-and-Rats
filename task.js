var _ = require('lodash');

function Task(description, difficultyLevel, urgencyLevel, reward) {
  this.description = description;
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward; 
  this.completionStatus = false;
}

Task.prototype = {
  completed: function() {
    return this.completionStatus = true;
  }
}

module.exports = Task;