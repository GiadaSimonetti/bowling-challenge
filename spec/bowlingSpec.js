'use strict';

describe('Bowling', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('returns the score', function(){
    expect(bowling.frameScore).toEqual(0);
  });

  it('returns the pins', function(){
    expect(bowling.standingPins).toEqual(10);
  });

  it('returns the frame', function(){
    expect(bowling.currentFrame).toEqual(1);
  });

  it('returns the empty frames array', function(){
    expect(bowling.frames).toEqual([]);
  });

  it('returns the game status', function(){
    expect(bowling.spareStatus).toEqual(false);
  });

  it('returns the game status', function(){
    expect(bowling.strikeStatus).toEqual(false);
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
    expect(bowling.frameScore).toEqual(7);
  });

  it('adds frame score to the frames array', function(){
    bowling.firstRoll(2);
    bowling.secondRoll(6);
    bowling.addTotalFrameScore();
    expect(bowling.frames).toContain(8);
  });

  it('resets standing pins and frame score', function(){
    bowling.firstRoll(2);
    bowling.secondRoll(5);
    bowling.addTotalFrameScore();
    expect(bowling.standingPins).toEqual(10);
    expect(bowling.frameScore).toEqual(0);
  });

  it('returns the sum all the frames', function(){
    bowling.firstRoll(2);
    bowling.secondRoll(5);
    bowling.addTotalFrameScore();
    bowling.incrementFrame();
    bowling.firstRoll(4);
    bowling.secondRoll(3);
    bowling.addTotalFrameScore();
    bowling.incrementFrame();
    bowling.gameScore();
    expect(bowling.totalScore).toEqual(14);
  });

  it('increments the frame', function(){
    bowling.incrementFrame();
    expect(bowling.currentFrame).toEqual(2);
  });

  it('checks the spare score', function(){
    bowling.firstRoll(5);
    bowling.secondRoll(5);
    bowling.addTotalFrameScore();
    bowling.incrementFrame();
    bowling.firstRoll(4);
    bowling.secondRoll(3);
    bowling.addTotalFrameScore();
    bowling.incrementFrame();
    bowling.spareScore();
    bowling.gameScore();
    expect(bowling.totalScore).toEqual(21);
  });

});
