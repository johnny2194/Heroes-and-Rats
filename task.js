var _ = require('lodash');

function TaskList(description, difficultyLevel, urgencyLevel, reward) {
  this.description = description;
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward; 
  this.completionStatus = false;
}


TaskList.prototype = {
  completed: function() {
    return this.completionStatus = true;
  }
}

module.exports = TaskList;