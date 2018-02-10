'use strict';

function Bowling(){
  this.INITIAL_PINS = 10;
  this.INITIAL_SCORE = 0;
  this.INITIAL_FRAME = 1;
  this.frameScore = this.INITIAL_SCORE;
  this.totalScore = this.INITIAL_SCORE;
  this.frame = this.INITIAL_FRAME;
  this.standingPins = this.INITIAL_PINS;
  this.frames = [];
};

Bowling.prototype.firstRoll = function (knockedDownPins) {
  this.standingPins -= knockedDownPins;
  this.totalFrameScore();
};

Bowling.prototype.secondRoll = function (knockedDownPins) {
  this.standingPins -= knockedDownPins;
  this.totalFrameScore();
};

Bowling.prototype.totalFrameScore = function () {
  this.frameScore = this.INITIAL_PINS - this.standingPins;
};

Bowling.prototype.addTotalFrameScore = function () {
  this.frames.push(this.frameScore);
  this.resetPinsAndScore();
};

Bowling.prototype.resetPinsAndScore = function () {
  this.standingPins = this.INITIAL_PINS;
  this.frameScore = this.INITIAL_SCORE;
};

Bowling.prototype.gameScore = function () {
  this.totalScore = this.frames.reduce(function (a, b) { return a + b;}, 0);
};

Bowling.prototype.incrementFrame = function () {
  this.frame += 1
};
