'use strict';

function Bowling(){
  this.INITIAL_PINS = 10;
  this.INITIAL_SCORE = 0;
  this.score = this.INITIAL_SCORE;
  this.standingPins = this.INITIAL_PINS;
  this.frames = [];
};

Bowling.prototype.firstRoll = function (knockedDownPins) {
  this.standingPins -= knockedDownPins;
};

Bowling.prototype.secondRoll = function (knockedDownPins) {
  this.standingPins -= knockedDownPins;
};

Bowling.prototype.totalFrameScore = function () {
  this.score = this.INITIAL_PINS - this.standingPins;
};

Bowling.prototype.addTotalFrameScore = function () {
  this.frames.push(this.score);
};

Bowling.prototype.resetPinsAndScore = function () {
  this.standingPins = this.INITIAL_PINS;
  this.score = this.INITIAL_SCORE;
};
