'use strict';

describe('Bowling', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('returns the score', function(){
    expect(bowling.score).toEqual(0);
  });

  it('returns the pins', function(){
    expect(bowling.standingPins).toEqual(10);
  });

  it('changes the namber of standing pins after the first roll', function(){
    bowling.firstRoll(2);
    expect(bowling.standingPins).toEqual(8);
  });

  it('changes the number of standing pins after the second roll', function(){
    bowling.firstRoll(2);
    bowling.secondRoll(5);
    expect(bowling.standingPins).toEqual(3);
  });

  it('updates the frame score', function(){
    bowling.firstRoll(2);
    bowling.secondRoll(5);
    bowling.totalFrameScore();
    expect(bowling.score).toEqual(7);
  });

  it('adds frame score to the frames array', function(){
    bowling.firstRoll(2);
    bowling.secondRoll(6);
    bowling.totalFrameScore();
    bowling.addTotalFrameScore();
    expect(bowling.frames).toContain(8);
  });

  it('resets standing pins and frame score', function(){
    bowling.firstRoll(2);
    bowling.secondRoll(5);
    bowling.totalFrameScore();
    bowling.addTotalFrameScore();
    bowling.resetPinsAndScore();
    expect(bowling.standingPins).toEqual(10);
    expect(bowling.score).toEqual(0);
  });

});
