'use strict';

function Bowling(){
  this.INITIAL_PINS = 10;
  this.INITIAL_SCORE = 0;
  this.INITIAL_FRAME = 1;
  // this.MAX_FRAME_KNOCKED_DOWN_PINS = this.INITIAL_PINS;
  // this.MAX_1_ROLL_KNOCKED_DOWN_PINS = this.INITIAL_PINS;
  this.frameScore = this.INITIAL_SCORE;
  this.totalScore = this.INITIAL_SCORE;
  this.currentFrame = this.INITIAL_FRAME;
  this.standingPins = this.INITIAL_PINS;
  this.frames = [];
  this.isSpare = false;
  this.isStrike = false;
};

Bowling.prototype.firstRoll = function (knockedDownPins) {
  this.standingPins -= knockedDownPins;
  this.totalFrameScore();
  if (this.standingPins == 0) {
    this.isStrike = true
  }
};

Bowling.prototype.secondRoll = function (knockedDownPins) {
  this.standingPins -= knockedDownPins;
  this.totalFrameScore();
  if (this.standingPins == 0) {
    this.isSpare = true
  }
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
  this.currentFrame += 1
};


// Bowling.prototype.frameStatus = function () {
//   if (this.totalFrameScore() = 10) {
//     return status = 'Spare'
//   } else if () {
//
//   } else {
//     return status = 'Normal'
//   }
//
// };

// var exception =
// Bowling.prototype.genericExceptionCalculation = function (knockedDownPins, callback) {
//   this.frames.push(knockedDownPins)
//   this.callback(knockedDownPins);
// };
//
// Bowling.prototype.spareScore = function () {
//   if (this.totalFrameScore() === 10) {
//
//    this.genericExceptionCalculation(this.firstRoll(knockedDownPins);)
//   }
// };
