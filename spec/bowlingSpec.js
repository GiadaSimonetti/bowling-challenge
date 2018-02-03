'use strict';

describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('returns the score', function(){
    expect(frame.score).toEqual(0);
  });

  it('returns the pins', function(){
    expect(frame.standingPins).toEqual(10);
  });

  it('returns the number of standing pins after the first roll', function(){
    expect(frame.firstRoll(2)).toEqual(8)
  });

  it('changes the namber of standing pins after the first roll', function(){
    frame.firstRoll(2);
    expect(frame.standingPins).toEqual(8);
  });

  it('returns the number of standing pins after the second roll', function(){
    frame.firstRoll(2);
    expect(frame.secondRoll(5)).toEqual(3);
  });

  it('changes the namber of standing pins after the second roll', function(){
    frame.firstRoll(2);
    frame.secondRoll(5);
    expect(frame.standingPins).toEqual(3);
  });

  it('returns the frame score', function(){
    frame.firstRoll(2)
    frame.secondRoll(5)
    expect(frame.totalScore()).toEqual(7);
  });

});

describe('ScoreCounting', function(){

  var scoreCounting;

  beforeEach(function(){
    scoreCounting = new ScoreCounting();
  });

  it('returns the frames array', function(){
    expect(scoreCounting.frames()).toEqual([])
  });

  // it('adds frame to the frames array', function(frameScore){
  //   expect(scoreCounting.frames()).toContain(frameScore);
  // });

});
