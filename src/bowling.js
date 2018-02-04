'use strict';

function Frame(){
  this.INITIAL_PINS = 10;
  this.score = 0;
  this.standingPins = this.INITIAL_PINS;
};

Frame.prototype.firstRoll = function (knockedDownPins) {
  return this.standingPins -= knockedDownPins;
};

Frame.prototype.secondRoll = function (knockedDownPins) {
  return this.standingPins -= knockedDownPins;
};

Frame.prototype.totalScore = function () {
  return this.INITIAL_PINS - this.standingPins;
};

Frame.prototype.resetPins = function () {
  return this.standingPins - this.INITIAL_PINS;
};

function ScoreCounting() {
  frames = [];
  // this.game = this.frames.slice(0, 9);
};

ScoreCounting.prototype.frames = function(){
    return frames;
  }

// ScoreCounting.prototype.addFrameScore = function (frameScore) {
//   frameScore = Frame.totalScore;
//   frames.push(frameScore);
// };
