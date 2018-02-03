'use strict';

function Frame(){
  this.score = 0;
  this.pins = 10
};

Frame.prototype.firstRoll = function (knockedDownPins) {
  return this.pins -= knockedDownPins;
};

Frame.prototype.secondRoll = function (knockedDownPins) {
  return this.pins -= knockedDownPins;
};

Frame.prototype.score = function () {
  return this.firstRoll(knockedDownPins) + this.secondRoll(knockedDownPins);
};
