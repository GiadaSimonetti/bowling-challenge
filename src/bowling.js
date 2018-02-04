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

Bowling.prototype.totalFrameScore = function () {
  return this.score +=  this.INITIAL_PINS - this.standingPins;
};

Bowling.prototype.resetPins = function () {
  return this.standingPins = this.INITIAL_PINS;
};

Bowling.prototype.frames = function(){
    return frames;
  }

Bowling.prototype.addTotalFrameScore = function (score) {

  frames.push(score);
};
