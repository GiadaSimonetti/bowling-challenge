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

function scoreCounting() {
  frames = [];
};
