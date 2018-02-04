'use strict';

function Bowling(){
  this.INITIAL_PINS = 10;
  this.score = 0;
  this.standingPins = this.INITIAL_PINS;
  frames = [];
};

Bowling.prototype.firstRoll = function (knockedDownPins) {
  return this.standingPins -= knockedDownPins;
};

Bowling.prototype.secondRoll = function (knockedDownPins) {
  return this.standingPins -= knockedDownPins;
};

Bowling.prototype.totalScore = function () {
  return this.INITIAL_PINS - this.standingPins;
};

Bowling.prototype.resetPins = function () {
  return this.standingPins = this.INITIAL_PINS;
};

Bowling.prototype.frames = function(){
    return frames;
  }

// ScoreCounting.prototype.addBowlingScore = function (callback) {
//   frames.push(callback);
// };
