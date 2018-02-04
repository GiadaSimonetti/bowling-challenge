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

  it('returns the number of standing pins after the first roll', function(){
    expect(bowling.firstRoll(2)).toEqual(8)
  });

  it('changes the namber of standing pins after the first roll', function(){
    bowling.firstRoll(2);
    expect(bowling.standingPins).toEqual(8);
  });

  it('returns the number of standing pins after the second roll', function(){
    bowling.firstRoll(2);
    expect(bowling.secondRoll(5)).toEqual(3);
  });

  it('changes the namber of standing pins after the second roll', function(){
    bowling.firstRoll(2);
    bowling.secondRoll(5);
    expect(bowling.standingPins).toEqual(3);
  });

  it('returns the bowling score', function(){
    bowling.firstRoll(2)
    bowling.secondRoll(5)
    expect(bowling.totalScore()).toEqual(7);
  });

  it('returns the initial number of standing pins', function(){
    bowling.firstRoll(2)
    bowling.secondRoll(5)
    bowling.resetPins()
    expect(bowling.standingPins).toEqual(10);
  });

  it('returns the frames array', function(){
    expect(bowling.frames()).toEqual([])
  });

  // it('adds frame to the frames array', function(frameScore){
  //   spyOn(frame, 'totalScore').and.returnValue(8);
  //   frameScore = frame.totalScore();
  //   expect(scoreCounting.frames()).toContain(frameScore);
  // });

});
